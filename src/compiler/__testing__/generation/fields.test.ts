import { compile, SelectQueryNode, AccessQueryNode, QueryType, QueryNode } from "@qmap/compiler"
import { checkAccessQueryNode, checkSelectQueryNode, mustNotHaveAlias, mustNotHaveName } from "../asserts"
import { forEachDefinition, getDefinitions, numberOfKeysMustBe } from "../utils"

test("simple", () => {
  const { definitions, descriptor, errors } = compile("{ product }")

  const productField: SelectQueryNode = {
    type: QueryType.SELECT,
    name: "product",
    definitions: [],
    indexDefinitions: []
  }

  expect(errors).toEqual([])

  expect(definitions.length).toBe(1)
  expect(definitions[0]).toMatchObject(productField)

  expect(descriptor.index).toMatchObject({ product: {
    index: {},
    all: true
  } })
})

test("multiple", () => {
  const { definitions, descriptor } = compile("{ first_name; last_name; age; image }")

  const queryNodes: QueryNode[] = [
    {
      type: QueryType.SELECT,
      name: "first_name",
      definitions: [],
      indexDefinitions: []
    },
    {
      type: QueryType.SELECT,
      name: "last_name",
      definitions: [],
      indexDefinitions: []
    },
    {
      type: QueryType.SELECT,
      name: "age",
      definitions: [],
      indexDefinitions: []
    },
    {
      type: QueryType.SELECT,
      name: "image",
      definitions: [],
      indexDefinitions: []
    }
  ]

  expect(definitions.length).toBe(4)
  definitions.forEach((node, i) => expect(node).toMatchObject(queryNodes[i]))

  const expected = {
    first_name: {
      index: {},
      all: true
    },
    last_name: {
      index: {},
      all: true
    },
    age: {
      index: {},
      all: true
    },
    image: {
      index: {},
      all: true
    }
  }

  expect(descriptor.index).toMatchObject(expected)
})

describe("access", () => {
  test("simple", () => {
    const { definitions, descriptor, errors } = compile("{ transaction.product.name }")

    expect(errors).toEqual([])
    expect(definitions.length).toBe(1)

    const expeted: AccessQueryNode = {
      type: QueryType.ACCESS,
      keys: ["transaction", "product", "name"],
      alias: "transaction_product_name",
      definitions: [],
      indexDefinitions: []
    }

    expect(definitions[0]).toMatchObject(expeted)

    numberOfKeysMustBe(descriptor.index, 1)
    expect(descriptor.index).toMatchObject({
      transaction: {
        index: {
          product: {
            index: {
              name: {
                index: {},
                all: true
              }
            }
          }
        }
      }
    })
  })

  test("with query", () => {
    const { definitions, descriptor, errors } = compile("{ transaction.product { name } }")

    expect(errors).toEqual([])
    expect(definitions.length).toBe(1)

    const selectQueryNode: SelectQueryNode = {
      type: QueryType.SELECT,
      name: "name",
      definitions: [],
      indexDefinitions: []
    }

    const result = definitions[0] as AccessQueryNode

    expect(result.type).toBe(QueryType.ACCESS)
    expect(result["name"]).toBeFalsy()
    expect(result.alias).toBe("transaction_product")
    expect(result.keys).toEqual(["transaction", "product"])
    expect(result.definitions.length).toBe(1)
    expect(result.definitions[0]).toMatchObject(selectQueryNode)
    mustNotHaveAlias(result.definitions[0])

    numberOfKeysMustBe(descriptor.index, 1)
    expect(descriptor.index).toMatchObject({
      transaction: {
        index: {
          product: {
            index: {
              name: {}
            }
          }
        }
      }
    })
  })

  test("multiple", () => {
    const query = `cartitem {
      id;
      transaction.product { id, name };
      transaction {
        id
      };
      user.account { email }
    }`

    const { definitions, descriptor } = compile(query)

    expect(definitions.length).toBe(4)

    const [idNode, transactionProductNode, transactionNode, userAccountNode] = definitions

    expect(idNode).toMatchObject({
      type: QueryType.SELECT,
      name: "id",
      definitions: []
    })

    mustNotHaveAlias(idNode)


    expect(transactionProductNode).toMatchObject({
      type: QueryType.ACCESS,
      keys: ["transaction", "product"],
      alias: "transaction_product",
    })

    getDefinitions(transactionProductNode, (definitions) => {
      expect(definitions.length).toBe(2)
      const [idNode, nameNode] = definitions

      expect(idNode).toMatchObject({
        type: QueryType.SELECT,
        name: "id",
        definitions: []
      })
      mustNotHaveAlias(idNode)

      expect(nameNode).toMatchObject({
        type: QueryType.SELECT,
        name: "name",
        definitions: []
      })
      mustNotHaveAlias(nameNode)
    })

    mustNotHaveName(transactionProductNode)


    expect(transactionNode).toMatchObject({
      type: QueryType.SELECT,
      name: "transaction"
    })

    forEachDefinition(transactionNode, (node, _i, nodes) => {
      expect(nodes.length).toBe(1)
      expect(node).toMatchObject({
        type: QueryType.SELECT,
        name: "id",
        definitions: []
      })
      mustNotHaveAlias(node)
    })

    mustNotHaveAlias(transactionNode)


    expect(userAccountNode).toMatchObject({
      type: QueryType.ACCESS,
      alias: "user_account",
      keys: ["user", "account"]
    })

    forEachDefinition(userAccountNode, (node, _i, nodes) => {
      expect(nodes.length).toBe(1)
      expect(node).toMatchObject({
        type: QueryType.SELECT,
        name: "email",
        definitions: []
      })
      mustNotHaveAlias(node)
    })

    mustNotHaveName(userAccountNode)


    expect(descriptor.index).toMatchObject({
      id: {
        index: {}
      },
      transaction: {
        index: {
          id: {
            index: {}
          },
          product: {
            index: {
              id: { index: {} },
              name: { index: {} }
            }
          }
        }
      },
      user: {
        index: {
          account: {
            index: {
              email: { index: {} }
            }
          }
        }
      }
    })
  })

  test("global", () => {
    const query = `/*qmap*/{
      product {
        id: &.product_id,
        name: &.product_name
      }
    }`

    const { descriptor, definitions, errors } = compile(query)

    expect(errors).toEqual([])

    expect(definitions.length).toBe(1)
    checkSelectQueryNode(definitions[0], {
      name: "product",
      consumer(definitions) {
        expect(definitions.length).toBe(2)

        checkAccessQueryNode(definitions[0], {
          keys: ["product_id"],
          alias: "id",
          isGlobal: true
        })

        checkAccessQueryNode(definitions[1], {
          keys: ["product_name"],
          alias: "name",
          isGlobal: true
        })
      }
    })

    expect(descriptor).toEqual({
      index: {
        product: {
          index: {},
        },
        product_id: {
          index: {},
          all: true
        },
        product_name: {
          index: {},
          all: true
        }
      }
    })
  })
})

test("nested", () => {
  const { definitions, descriptor } = compile("{ transaction { product {id, name} } }")

  expect(definitions.length).toBe(1)

  const [transactionNode] = definitions

  expect(transactionNode).toMatchObject({
    type: QueryType.SELECT,
    name: "transaction",
  })

  getDefinitions(transactionNode, (definitions) => {
    expect(definitions.length).toBe(1)
    const [productNode] = definitions

    expect(productNode).toMatchObject({
      type: QueryType.SELECT,
      name: "product",
    })

    const names = ["id", "name"]

    getDefinitions(productNode, definitions => expect(definitions.length).toBe(names.length))
    forEachDefinition(productNode, (node, i) => {
      expect(node).toMatchObject({
        type: QueryType.SELECT,
        name: names[i],
        definitions: []
      })

      mustNotHaveAlias(node)
    })

    mustNotHaveAlias(productNode)
  })

  mustNotHaveAlias(transactionNode)

  expect(descriptor.index).toMatchObject({
    transaction: {
      index: {
        product: {
          index: {
            id: { index: {} },
            name: { index: {} }
          }
        }
      }
    }
  })
})
