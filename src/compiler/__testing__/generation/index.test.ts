import { compile } from "@qmap/compiler"
import { checkAccessQueryNode, checkSelectQueryNode } from "../asserts"

describe("index definitions", () => {
  test("select", () => {
    const query = `/*qmap*/{
      products #{
        name
      };
      take(%{products}, @{3})
    }`

    const { definitions, descriptor, errors } = compile(query)

    expect(errors).toEqual([])

    checkSelectQueryNode(definitions[0], {
      name: "products",
      indexDefinitions: true,
      consumer(defs) {
        expect(defs.length).toBe(1)
        checkSelectQueryNode(defs[0], { name: "name" })
      }
    })

    expect(descriptor).toEqual({
      index: {
        products: {
          index: {
            name: {
              index: {},
              all: true
            }
          },
        }
      }
    })
  })

  test("access", () => {
    const query = `/*qmap*/{
      products: transaction.products #{
        name
      };
      take(%{products}, @{3})
    }`

    const { definitions, descriptor, errors } = compile(query)

    expect(errors).toEqual([])

    checkAccessQueryNode(definitions[0], {
      keys: ["transaction", "products"],
      alias: "products",
      indexDefinitions: true,
      consumer(defs) {
        expect(defs.length).toBe(1)
        checkSelectQueryNode(defs[0], { name: "name" })
      }
    })

    expect(descriptor).toEqual({
      index: {
        transaction: {
          index: {
            products: {
              index: {
                name: {
                  index: {},
                  all: true
                }
              },
            }
          }
        }
      }
    })
  })

  test("global access", () => {
    const query = `/*qmap*/{
      info {
        products: &.transaction.products #{
          name
        };
        take(%{products}, @{3})
      }
    }`

    const { definitions, descriptor, errors } = compile(query)

    expect(errors).toEqual([])

    checkSelectQueryNode(definitions[0], {
      name: "info",
      consumer(defs) {
        expect(defs.length).toBe(2)
        checkAccessQueryNode(defs[0], {
          keys: ["transaction", "products"],
          alias: "products",
          indexDefinitions: true,
          isGlobal: true,
          consumer(defs) {
            expect(defs.length).toBe(1)
            checkSelectQueryNode(defs[0], { name: "name" })
          }
        })
      }
    })

    expect(descriptor).toEqual({
      index: {
        transaction: {
          index: {
            products: {
              index: {
                name: {
                  index: {},
                  all: true
                }
              },
            }
          }
        },
        info: {
          index: {},
        }
      }
    })
  })
})

describe("ignore index", () => {
  test("complex", () => {
    const query = `{
      public { name { ..., first, !last } },
      user {
        ...,
        ...public,
        age
      },
      admin {
        ...user,
        phone,
        contact {
          user,
          email
        }
      },
      person {
        ...public.name
      }
    }`
    const { descriptor } = compile(query, {
      ignoreIndex: true
    })

    expect(descriptor).toEqual(null)
  })
})
