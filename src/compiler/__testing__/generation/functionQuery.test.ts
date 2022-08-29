import { compile } from "@qmap/compiler"
import { QueryNode, QueryType } from "@qmap/compiler/query.types"
import { checkAccessQueryNode, checkFunctionQueryNode, checkPrimitiveNode, checkSelectQueryNode } from "../asserts"

describe("query", () => {
  function checkGen(definitions: QueryNode[], errors: unknown[]) {
    expect(errors).toEqual([])

    expect(definitions.length).toBe(1)

    checkFunctionQueryNode(definitions[0], {
      name: "take",
      alias: "products_number",
      consumer(args) {
        expect(args.length).toBe(2)
        checkSelectQueryNode(args[0], {
          name: "products",
        })
        checkPrimitiveNode(args[1], 3)
      },
      checkReturn(defs) {
        expect(defs.length).toBe(2)
        expect(defs[0]).toEqual({
          type: QueryType.ALL
        })
        checkFunctionQueryNode(defs[1], {
          name: "toUpperCase",
          alias: "name",
          consumer(args) {
            expect(args.length).toBe(1)
            checkSelectQueryNode(args[0], {
              name: "name",
            })
          },
        })
      }
    })
  }

  test ("without index", () => {
    const query = `/*qmap*/{
      take(products, @{3}) {
        ...,
        toUpperCase(name)
      }
    }`

    const { definitions, descriptor, errors } = compile(query)

    checkGen(definitions, errors)

    expect(descriptor).toEqual({
      index: {
        products: {
          index: {},
          all: true
        }
      }
    })
  })
})

describe("normal", () => {
  test("simple", () => {
    const query = "{ upperCase(name) }"
    const { definitions, descriptor, errors } = compile(query)

    expect(errors).toEqual([])

    expect(definitions.length).toBe(1)
    checkFunctionQueryNode(definitions[0], {
      name: "upperCase",
      alias: "name",
      consumer(args) {
        expect(args.length).toBe(1)
        checkSelectQueryNode(args[0], { name: "name" })
      }
    })

    expect(descriptor.index).toMatchObject({
      name: { index: {} },
    })
  })

  test("access", () => {
    const query = "{ upperCase(person.name) }"

    const { definitions, descriptor } = compile(query)

    expect(definitions.length).toBe(1)

    checkFunctionQueryNode(definitions[0], {
      name: "upperCase",
      alias: "person_name",
      consumer(args) {
        expect(args.length).toBe(1)
        checkAccessQueryNode(args[0], {
          keys: ["person", "name"],
        })
      }
    })

    expect(descriptor.index).toMatchObject({
      person: {
        index: {
          name: { index: {} }
        }
      }
    })
  })

  test("select", () => {
    const query = "{ upperCase(person { name }) }"

    const { definitions, descriptor } = compile(query)

    expect(definitions.length).toBe(1)
    checkFunctionQueryNode(definitions[0], {
      name: "upperCase",
      alias: "person",
      consumer(args) {
        expect(args.length).toBe(1)
        checkSelectQueryNode(args[0], {
          name: "person",
          consumer(definitions) {
            expect(definitions.length).toBe(1)
            checkSelectQueryNode(definitions[0], { name: "name" })
          }
        })
      }
    })

    expect(descriptor.index).toMatchObject({
      person: {
        index: {
          name: { index: {} }
        }
      }
    })
  })

  test("compose", () => {
    const query = "{ upperCase(getName(person)) }"

    const { definitions, descriptor } = compile(query)

    expect(definitions.length).toBe(1)
    checkFunctionQueryNode(definitions[0], {
      name: "upperCase",
      alias: "person",
      consumer(args) {
        expect(args.length).toBe(1)
        checkFunctionQueryNode(args[0], {
          name: "getName",
          alias: "person",
          consumer(args) {
            expect(args.length).toBe(1)
            checkSelectQueryNode(args[0], { name: "person" })
          }
        })
      }
    })

    expect(descriptor.index).toMatchObject({
      person: {
        index: {}
      }
    })
  })

  test ("byItem", () => {
    const query = "{ [upperCase(students)] }"
    const { definitions } = compile(query)
    expect(definitions.length).toBe(1)

    checkFunctionQueryNode(definitions[0], {
      name: "upperCase",
      alias: "students",
      arrayPosition: 0,
      consumer(args) {
        expect(args.length).toBe(1)
        checkSelectQueryNode(args[0], { name: "students" })
      }
    })
  })

  test ("enhancement by item", () => {
    const query = `{
      upperCase(@[students]),
      concat(@[students], salt),
      concat(salt, @[students]),
      concat(salt, @[students], salt)
    }`

    const { definitions, errors } = compile(query)
    expect(errors).toEqual([])

    expect(definitions.length).toBe(4)

    checkFunctionQueryNode(definitions[0], {
      name: "upperCase",
      alias: "students",
      arrayPosition: 0,
      consumer(args) {
        expect(args.length).toBe(1)
        checkSelectQueryNode(args[0], {
          name: "students"
        })
      },
    })

    checkFunctionQueryNode(definitions[1], {
      name: "concat",
      alias: "students_salt",
      arrayPosition: 0,
      consumer(args) {
        expect(args.length).toBe(2)
        checkSelectQueryNode(args[0], {
          name: "students"
        })
        checkSelectQueryNode(args[1], {
          name: "salt"
        })
      }
    })

    checkFunctionQueryNode(definitions[2], {
      name: "concat",
      alias: "salt_students",
      arrayPosition: 1,
      consumer(args) {
        expect(args.length).toBe(2)
        checkSelectQueryNode(args[0], {
          name: "salt"
        })
        checkSelectQueryNode(args[1], {
          name: "students"
        })
      }
    })

    checkFunctionQueryNode(definitions[3], {
      name: "concat",
      alias: "salt_students_salt",
      arrayPosition: 1,
      consumer(args) {
        expect(args.length).toBe(3)
        checkSelectQueryNode(args[0], {
          name: "salt"
        })
        checkSelectQueryNode(args[1], {
          name: "students"
        })
        checkSelectQueryNode(args[2], {
          name: "salt"
        })
      }
    })
  })

  test("variables", () => {
    const query = "{ take(students, @count) }"
    const { definitions } = compile(query)

    expect(definitions.length).toBe(1)
    checkFunctionQueryNode(definitions[0], {
      name: "take",
      alias: "students_count",
      consumer(args) {
        expect(args.length).toBe(2)
        checkSelectQueryNode(args[0], { name: "students" })
        expect(args[1]).toMatchObject({
          type: QueryType.VAR,
          name: "count"
        })
      }
    })
  })
})

describe("client", () => {
  test("simple", () => {
    const query = "{ upperCase!(name) }"

    const { definitions, descriptor } = compile(query)

    expect(definitions.length).toBe(1)
    checkFunctionQueryNode(definitions[0], {
      name: "upperCase",
      alias: "name",
      clientFn: true,
      consumer(args) {
        expect(args.length).toBe(1)
        checkSelectQueryNode(args[0], { name: "name" })
      }
    })

    expect(descriptor.index).toMatchObject({
      name: { index: {} },
    })
  })

  test("access", () => {
    const query = "{ upperCase!(person.name) }"

    const { definitions, descriptor } = compile(query)

    expect(definitions.length).toBe(1)

    checkFunctionQueryNode(definitions[0], {
      name: "upperCase",
      alias: "person_name",
      clientFn: true,
      consumer(args) {
        expect(args.length).toBe(1)
        checkAccessQueryNode(args[0], {
          keys: ["person", "name"],
        })
      }
    })

    expect(descriptor.index).toMatchObject({
      person: {
        index: {
          name: { index: {} }
        }
      }
    })
  })

  test("select", () => {
    const query = "{ upperCase!(person { name }) }"

    const { definitions, descriptor } = compile(query)

    expect(definitions.length).toBe(1)
    checkFunctionQueryNode(definitions[0], {
      name: "upperCase",
      alias: "person",
      clientFn: true,
      consumer(args) {
        expect(args.length).toBe(1)
        checkSelectQueryNode(args[0], {
          name: "person",
          consumer(definitions) {
            expect(definitions.length).toBe(1)
            checkSelectQueryNode(definitions[0], { name: "name" })
          }
        })
      }
    })

    expect(descriptor.index).toMatchObject({
      person: {
        index: {
          name: { index: {} }
        }
      }
    })
  })

  test("compose", () => {
    const query = "{ upperCase!(getName!(person)) }"

    const { definitions, descriptor } = compile(query)

    expect(definitions.length).toBe(1)
    checkFunctionQueryNode(definitions[0], {
      name: "upperCase",
      alias: "person",
      clientFn: true,
      consumer(args) {
        expect(args.length).toBe(1)
        checkFunctionQueryNode(args[0], {
          name: "getName",
          alias: "person",
          clientFn: true,
          consumer(args) {
            expect(args.length).toBe(1)
            checkSelectQueryNode(args[0], { name: "person" })
          }
        })
      }
    })

    expect(descriptor.index).toMatchObject({
      person: {
        index: {}
      }
    })
  })

  test ("byItem", () => {
    const query = "{ [upperCase!(students)] }"
    const { definitions } = compile(query)
    expect(definitions.length).toBe(1)

    checkFunctionQueryNode(definitions[0], {
      name: "upperCase",
      alias: "students",
      arrayPosition: 0,
      clientFn: true,
      consumer(args) {
        expect(args.length).toBe(1)
        checkSelectQueryNode(args[0], { name: "students" })
      }
    })
  })

  test ("enhancement by item", () => {
    const query = `{
      upperCase!(@[students]),
      concat!(@[students], salt),
      concat!(salt, @[students]),
      concat!(salt, @[students], salt)
    }`

    const { definitions, errors } = compile(query)
    expect(errors).toEqual([])

    expect(definitions.length).toBe(4)

    checkFunctionQueryNode(definitions[0], {
      name: "upperCase",
      alias: "students",
      clientFn: true,
      arrayPosition: 0,
      consumer(args) {
        expect(args.length).toBe(1)
        checkSelectQueryNode(args[0], {
          name: "students"
        })
      },
    })

    checkFunctionQueryNode(definitions[1], {
      name: "concat",
      alias: "students_salt",
      clientFn: true,
      arrayPosition: 0,
      consumer(args) {
        expect(args.length).toBe(2)
        checkSelectQueryNode(args[0], {
          name: "students"
        })
        checkSelectQueryNode(args[1], {
          name: "salt"
        })
      }
    })

    checkFunctionQueryNode(definitions[2], {
      name: "concat",
      alias: "salt_students",
      clientFn: true,
      arrayPosition: 1,
      consumer(args) {
        expect(args.length).toBe(2)
        checkSelectQueryNode(args[0], {
          name: "salt"
        })
        checkSelectQueryNode(args[1], {
          name: "students"
        })
      }
    })

    checkFunctionQueryNode(definitions[3], {
      name: "concat",
      alias: "salt_students_salt",
      clientFn: true,
      arrayPosition: 1,
      consumer(args) {
        expect(args.length).toBe(3)
        checkSelectQueryNode(args[0], {
          name: "salt"
        })
        checkSelectQueryNode(args[1], {
          name: "students"
        })
        checkSelectQueryNode(args[2], {
          name: "salt"
        })
      }
    })
  })

  test("variables", () => {
    const query = "{ take!(students, @count) }"
    const { definitions } = compile(query)

    expect(definitions.length).toBe(1)
    checkFunctionQueryNode(definitions[0], {
      name: "take",
      alias: "students_count",
      clientFn: true,
      consumer(args) {
        expect(args.length).toBe(2)
        checkSelectQueryNode(args[0], { name: "students" })
        expect(args[1]).toMatchObject({
          type: QueryType.VAR,
          name: "count"
        })
      }
    })
  })

  test("primitive variables", () => {
    const query = `{
      foo(@{"text"}, @{20}, @{3.5}, @{true}, @{false})
    }`

    const { definitions, errors, descriptor } = compile(query)

    expect(errors).toEqual([])
    expect(definitions.length).toBe(1)

    checkFunctionQueryNode(definitions[0], {
      name: "foo",
      alias: "string_number_number_boolean_boolean",
      consumer(args) {
        expect(args.length).toBe(5)
        checkPrimitiveNode(args[0], "text")
        checkPrimitiveNode(args[1], 20)
        checkPrimitiveNode(args[2], 3.5)
        checkPrimitiveNode(args[3], true)
        checkPrimitiveNode(args[4], false)
      }
    })

    expect(descriptor).toEqual({
      index: {}
    })
  })
})

