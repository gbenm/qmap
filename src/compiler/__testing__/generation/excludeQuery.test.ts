import { compile, QueryType } from "@qmap/compiler"
import { mustNotHaveAlias } from "../asserts"
import { getDefinitions, numberOfKeysMustBe } from "../utils"

describe("exclude", () => {
  it("simple", () => {
    const { definitions, descriptor } = compile("{ !name }")

    expect(definitions.length).toBe(1)
    expect(definitions[0]).toMatchObject({
      type: QueryType.EXCLUDE,
      name: "name"
    })

    expect(descriptor).toMatchObject({
      index: { }
    })

    numberOfKeysMustBe(descriptor.index, 0)
  })

  it("multiple", () => {
    const { definitions, descriptor } = compile("{ !name, !id }")

    const names = ["name", "id"]

    expect(definitions.length).toBe(2)
    definitions.forEach((node, i) => {
      expect(node).toMatchObject({
        type: QueryType.EXCLUDE,
        name: names[i]
      })
    })

    expect(descriptor).toMatchObject({
      index: {}
    })

    numberOfKeysMustBe(descriptor.index, 0)
  })

  it ("nested", () => {
    const { descriptor, definitions } = compile("{ transaction { !product, !provider } }")

    expect(definitions.length).toBe(1)


    expect(definitions[0]).toMatchObject({
      type: QueryType.SELECT,
      name: "transaction",
    })

    getDefinitions(definitions[0], (definitions) => {
      const names = ["product", "provider"]
      expect(definitions.length).toBe(2)
      definitions.forEach((node, i) => {
        expect(node).toMatchObject({
          type: QueryType.EXCLUDE,
          name: names[i]
        })
      })
    })

    mustNotHaveAlias(definitions[0])

    expect(descriptor).toMatchObject({
      index: {
        transaction: {
          index: {}
        }
      }
    })

    numberOfKeysMustBe(descriptor.index, 1)
    numberOfKeysMustBe(descriptor.index.transaction.index, 0)
  })
})

describe("all with exclude (index)", () => {
  it("multiple", () => {
    const { descriptor, errors } = compile("{ ..., !name, !id }")

    expect(errors).toEqual([])
    expect(descriptor).toEqual({
      index: {},
      all: true,
      exclude: {
        name: true,
        id: true
      }
    })

    numberOfKeysMustBe(descriptor.index, 0)
  })

  it ("nested", () => {
    const { descriptor, errors } = compile("{ transaction { ..., !product, !provider } }")

    expect(errors).toEqual([])
    expect(descriptor).toEqual({
      index: {
        transaction: {
          index: {},
          all: true,
          exclude: {
            product: true,
            provider: true
          }
        }
      }
    })

    numberOfKeysMustBe(descriptor.index, 1)
    numberOfKeysMustBe(descriptor.index.transaction.index, 0)
  })
})
