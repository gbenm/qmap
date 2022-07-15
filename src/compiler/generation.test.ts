import { compile, QueryType } from "."
import { AccessQueryNode, FnQueryNode, QueryNode, SelectQueryNode } from "./query.types"

function mustNotHaveName(node: QueryNode) {
  expect(node["name"]).toBeFalsy()
}

function mustNotHaveAlias(node: QueryNode) {
  expect(node["alias"]).toBeFalsy()
}

function checkPrimitiveNode(node: QueryNode, val: unknown) {
  expect(node).toEqual({
    type: QueryType.PRIMITIVE,
    val,
    name: typeof val
  })
}

function checkOnResultNode(node: QueryNode, {
  alias, checkNode
}: { alias: string, checkNode: (node: QueryNode) => void, }) {
  expect(node.type).toBe(QueryType.ON_RESULT)
  expect(node["alias"]).toBe(alias)
  checkNode(node["node"])
}

function checkFunctionQueryNode(node: QueryNode, {
  name,
  alias,
  consumer,
  checkReturn,
  clientFn = false,
  arrayPosition
}: {
  name: string,
  alias: string,
  clientFn?: boolean,
  arrayPosition?: number,
  consumer: (args: QueryNode[]) => void,
  checkReturn?: (definitions: QueryNode[]) => void
}) {
  const expected = {
    type: clientFn ? QueryType.CLIENT_FUNCTION : QueryType.FUNCTION,
    name,
    alias,
    arrayPosition
  }

  expect(node).toMatchObject(expected)
  getArgs(node as FnQueryNode, consumer)

  const defaultReturnChecker = (defs: QueryNode[]) => expect(defs).toEqual([])
  getDefinitions(node, checkReturn ?? defaultReturnChecker)
}

function checkSelectQueryNode(node: QueryNode, {
  name,
  alias,
  consumer
}: { name: string, alias?: string, consumer?: (definitions: QueryNode[]) => void }) {
  const expected = {
    type: QueryType.SELECT,
    name,
  }

  if (!alias) {
    mustNotHaveAlias(node)
  } else {
    expected["alias"] = alias
  }

  if (!consumer) {
    expected["definitions"] = []
  }

  expect(node).toMatchObject(expected)

  if (consumer) {
    getDefinitions(node, consumer)
  }
}

function checkNewObjectQueryNode(node: QueryNode, {
  alias,
  consumer
}: { alias: string, consumer?: (definitions: QueryNode[]) => void }) {
  expect(node.type).toBe(QueryType.NEW_OBJECT)
  expect(node["alias"]).toBe(alias)

  if (!consumer) {
    expect(node["definitions"]).toEqual([])
  } else {
    getDefinitions(node, consumer)
  }

  mustNotHaveName(node)
}

function checkAccessQueryNode(node: QueryNode, {
  keys,
  alias,
  isGlobal = false,
  consumer
}: { keys: string[], alias?: string, isGlobal?: boolean, consumer?: (definitions: QueryNode[]) => void }) {
  const expected = {
    type: isGlobal? QueryType.GLOBAL_ACCESS : QueryType.ACCESS,
    alias: alias || keys.join("_"),
    keys,
  }

  if (!consumer) {
    expected["definitions"] = []
  }

  expect(node).toMatchObject(expected)

  if (consumer) {
    getDefinitions(node, consumer)
  }

  mustNotHaveName(node)
}

function getDefinitions (node: QueryNode, consumer: (definitions: QueryNode[]) => void) {
  expect(node["definitions"]).toBeTruthy()
  consumer(node["definitions"])
}

function getArgs (node: FnQueryNode, consumer: (args: QueryNode[]) => void) {
  expect(node.args).toBeTruthy()
  consumer(node.args)
}

function forEachDefinition(node: QueryNode, visitor: (node: QueryNode, index: number, nodes: QueryNode[]) => void) {
  getDefinitions(node, definitions => definitions.forEach(visitor))
}

function numberOfKeysMustBe(obj: object, quantity: number) {
  expect(Object.keys(obj).length).toBe(quantity)
}

describe("root query", () => {
  it("empty query", () => {
    const queries = [null, undefined, "", " ", "\t", "\n", "\n\r\n"]

    queries.forEach((query: string | undefined | null) => {
      const root = compile(query)

      expect(root).toMatchObject({
        type: QueryType.ROOT,
        descriptor: {},
        errors: [],
        definitions: [],
      })

      numberOfKeysMustBe(root.descriptor.index, 0)
      expect(root.query).toBeFalsy()
    })
  })

  it("without root name", () => {
    const queries = ["{}", "\n{\n}\n"]

    queries.forEach((query) => {
      const root = compile(query)

      expect(root).toMatchObject({
        type: QueryType.ROOT,
        errors: [],
        definitions: [],
      })

      numberOfKeysMustBe(root.descriptor.index, 0)
      expect(root.query).toBeFalsy()
    })
  })

  it("with root name", () => {
    const cases = [
      {name: "admin_select", query: "admin_select"},
      {name: "admin_select", query: "\t\nadmin_select "},
      {name: "admin_select", query: "admin_select {}"},
      {name: "admin_select", query: "admin_select {\n}"},
      {name: "admin select", query: "'admin select' {}"},
      {name: "admin select", query: "\"admin select\" {}"},
    ]

    cases.forEach(({query, name}) => {
      const root = compile(query)

      expect(root).toMatchObject({
        query: name,
      })

      numberOfKeysMustBe(root.descriptor.index, 0)
    })
  })
})

describe("fields", () => {
  it("simple", () => {
    const { definitions, descriptor } = compile("{ product }")

    const productField: SelectQueryNode = {
      type: QueryType.SELECT,
      name: "product",
      definitions: []
    }

    expect(definitions.length).toBe(1)
    expect(definitions[0]).toMatchObject(productField)

    expect(descriptor.index).toMatchObject({ product: {
      index: {},
      all: true
    } })
  })

  it("multiple", () => {
    const { definitions, descriptor } = compile("{ first_name; last_name; age; image }")

    const queryNodes: QueryNode[] = [
      {
        type: QueryType.SELECT,
        name: "first_name",
        definitions: []
      },
      {
        type: QueryType.SELECT,
        name: "last_name",
        definitions: []
      },
      {
        type: QueryType.SELECT,
        name: "age",
        definitions: []
      },
      {
        type: QueryType.SELECT,
        name: "image",
        definitions: []
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
    it("simple", () => {
      const { definitions, descriptor } = compile("{ transaction.product.name }")

      expect(definitions.length).toBe(1)

      const expeted: AccessQueryNode = {
        type: QueryType.ACCESS,
        keys: ["transaction", "product", "name"],
        alias: "transaction_product_name",
        definitions: []
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

    it("with query", () => {
      const { definitions, descriptor, errors } = compile("{ transaction.product { name } }")

      expect(errors).toEqual([])
      expect(definitions.length).toBe(1)

      const selectQueryNode: SelectQueryNode = {
        type: QueryType.SELECT,
        name: "name",
        definitions: []
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

    it("multiple", () => {
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

    it("global", () => {
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

  it("nested", () => {
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
})

describe("exclude", () => {
  it("simple", () => {
    const { definitions, descriptor } = compile("{ !name }")

    expect(definitions.length).toBe(1)
    expect(definitions[0]).toMatchObject({
      type: QueryType.EXCLUDE,
      name: "name"
    })

    expect(descriptor).toMatchObject({
      index: { },
      exclude: { name: true }
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
      index: {},
      exclude: {
        name: true,
        id: true
      }
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
          index: {},
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

describe("spread", () => {
  describe("Include all", () => {
    it("simple", () => {
      const { definitions, descriptor } = compile("{ ... }")

      expect(definitions.length).toBe(1)

      expect(definitions[0]).toMatchObject({
        type: QueryType.ALL,
      })

      expect(descriptor).toMatchObject({
        index: {},
        all: true
      })

      numberOfKeysMustBe(descriptor.index, 0)
    })

    it("after select", () => {
      const { definitions, descriptor } = compile("{ product, ... }")

      expect(definitions.length).toBe(2)

      const [ allQuery, productQuery ] = definitions

      expect(allQuery).toMatchObject({
        type: QueryType.ALL,
      })

      expect(productQuery).toMatchObject({
        type: QueryType.SELECT,
      })

      expect(descriptor).toMatchObject({
        index: {
          product: { index: {} }
        },
        all: true
      })

      numberOfKeysMustBe(descriptor.index, 1)
    })
  })

  it("Implicit root", () => {
    function checkNameContent(nodes: QueryNode[]) {
      expect(nodes.length).toBe(3)
      const [ allQuery, firstQuery, lastExcludeQuery ] = nodes

      expect(allQuery).toMatchObject({
        type: QueryType.ALL,
      })

      expect(firstQuery).toMatchObject({
        type: QueryType.SELECT,
        name: "first",
        definitions: []
      })

      mustNotHaveAlias(firstQuery)

      expect(lastExcludeQuery).toMatchObject({
        type: QueryType.EXCLUDE,
        name: "last"
      })
    }

    function checkPublicContent(nodes: QueryNode[]) {
      expect(nodes.length).toBe(1)
      expect(nodes[0]).toMatchObject({
        type: QueryType.SELECT,
        name: "name",
      })
      getDefinitions(nodes[0], checkNameContent)
      mustNotHaveAlias(nodes[0])
    }

    function checkUserContent(nodes: QueryNode[]) {
      expect(nodes.length).toBe(3)
      const [ allQuery, nameQuery, ageQuery ] = nodes

      expect(allQuery).toMatchObject({
        type: QueryType.ALL,
      })

      checkPublicContent([ nameQuery ])

      expect(ageQuery).toMatchObject({
        type: QueryType.SELECT,
        name: "age",
        definitions: []
      })
      mustNotHaveAlias(ageQuery)
    }

    const { definitions, descriptor } = compile(`{
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
    }`)

    expect(definitions.length).toBe(4)

    const [ publicNode, userNode, adminNode, personNode ] = definitions

    expect(publicNode).toMatchObject({
      type: QueryType.SELECT,
      name: "public",
    })
    getDefinitions(publicNode, checkPublicContent)
    mustNotHaveAlias(publicNode)

    expect(userNode).toMatchObject({
      type: QueryType.SELECT,
      name: "user",
    })
    getDefinitions(userNode, checkUserContent)
    mustNotHaveAlias(userNode)

    expect(adminNode).toMatchObject({
      type: QueryType.SELECT,
      name: "admin"
    })

    getDefinitions(adminNode, (definitions) => {
      expect(definitions.length).toBe(5)

      const userContent = definitions.slice(0, 3)
      checkUserContent(userContent)

      const [ phone, contact ] = definitions.slice(3)

      expect(phone).toMatchObject({
        type: QueryType.SELECT,
        name: "phone",
        definitions: []
      })
      mustNotHaveAlias(phone)

      expect(contact).toMatchObject({
        type: QueryType.SELECT,
        name: "contact",
      })
      getDefinitions(contact, (definitions) => {
        expect(definitions.length).toBe(2)

        const names = ["user", "email"]

        definitions.forEach((node, i) => {
          expect(node).toMatchObject({
            type: QueryType.SELECT,
            name: names[i],
            definitions: []
          })
          mustNotHaveAlias(node)
        })
      })
      mustNotHaveAlias(contact)
    })

    mustNotHaveAlias(adminNode)

    expect(personNode).toMatchObject({
      type: QueryType.SELECT,
      name: "person",
    })

    getDefinitions(personNode, checkNameContent)

    mustNotHaveAlias(personNode)

    expect(descriptor).toMatchObject({
      index: {
        public: {
          index: {
            name: {
              index: {
                first: { index: {} },
              },
              all: true,
              exclude: {
                last: true
              }
            }
          }
        },
        user: {
          index: {
            name: {
              index: {
                first: { index: {} },
              },
              all: true,
              exclude: {
                last: true
              }
            },
            age: { index: {} }
          },
          all: true
        },
        admin: {
          index: {
            name: {
              index: {
                first: { index: {} },
              },
              all: true,
              exclude: {
                last: true
              }
            },
            age: { index: {} },
            phone: { index: {} },
            contact: {
              index: {
                user: { index: {} },
                email: { index: {} }
              }
            }
          }
        },
        person: {
          index: {
            first: { index: {} },
          },
          all: true,
          exclude: {
            last: true
          }
        }
      }
    })
  })

  it("Explicit root", () => {
    const { definitions, descriptor } = compile(`{
      target { name },
      pub {
        target {
          person
        },
        person {
          ...&target
        }
      }
    }`)

    expect(definitions.length).toBe(2)

    const [ targetNode, pubNode ] = definitions

    checkSelectQueryNode(targetNode, {
      name: "target",
      consumer(definitions) {
        expect(definitions.length).toBe(1)
        checkSelectQueryNode(definitions[0], { name: "name" })
      }
    })

    checkSelectQueryNode(pubNode, {
      name: "pub",
      consumer(definitions) {
        expect(definitions.length).toBe(2)

        const [ target, person ] = definitions
        checkSelectQueryNode(target, {
          name: "target",
          consumer(definitions) {
            expect(definitions.length).toBe(1)
            checkSelectQueryNode(definitions[0], { name: "person" })
          }
        })

        checkSelectQueryNode(person, {
          name: "person",
          consumer(definitions) {
            expect(definitions.length).toBe(1)
            checkSelectQueryNode(definitions[0], { name: "name" })
          }
        })
      }
    })

    expect(descriptor).toMatchObject({
      index: {
        target: {
          index: {
            name: { index: {} }
          }
        },
        pub: {
          index: {
            target: {
              index: {
                person: { index: {} }
              }
            },
            person: {
              index: {
                name: { index: {} }
              }
            }
          }
        }
      }
    })
  })

  it("Scope", () => {
    const { definitions, descriptor } = compile(`{
      target { name },
      pub {
        target {
          age
        },
        person {
          ...target
        }
      }
    }`)

    expect(definitions.length).toBe(2)

    const [ targetNode, pubNode ] = definitions

    checkSelectQueryNode(targetNode, {
      name: "target",
      consumer(definitions) {
        expect(definitions.length).toBe(1)
        checkSelectQueryNode(definitions[0], { name: "name" })
      }
    })

    checkSelectQueryNode(pubNode, {
      name: "pub",
      consumer(definitions) {
        expect(definitions.length).toBe(2)

        const [ target, person ] = definitions
        checkSelectQueryNode(target, {
          name: "target",
          consumer(definitions) {
            expect(definitions.length).toBe(1)
            checkSelectQueryNode(definitions[0], { name: "age" })
          }
        })

        checkSelectQueryNode(person, {
          name: "person",
          consumer(definitions) {
            expect(definitions.length).toBe(1)
            checkSelectQueryNode(definitions[0], { name: "age" })
          }
        })
      }
    })

    expect(descriptor).toMatchObject({
      index: {
        target: {
          index: {
            name: { index: {} }
          }
        },
        pub: {
          index: {
            target: {
              index: {
                age: { index: {} }
              }
            },
            person: {
              index: {
                age: { index: {} }
              }
            }
          }
        }
      }
    })
  })

  it ("extended", () => {
    const query = `{
      another {
        target {
          name
        }
      },
      dst {
        ...another.target
      }
    }`

    const { definitions, descriptor } = compile(query, { mode: "extended" })

    expect(definitions.length).toBe(2)

    const [ targetNode, dstNode ] = definitions

    checkSelectQueryNode(targetNode, {
      name: "another",
      consumer(definitions) {
        expect(definitions.length).toBe(1)
        checkSelectQueryNode(definitions[0], {
          name: "target",
          consumer(definitions) {
            expect(definitions.length).toBe(1)
            checkSelectQueryNode(definitions[0], { name: "name" })
          }
        })
      }
    })

    checkSelectQueryNode(dstNode, {
      name: "dst",
      consumer(definitions) {
        expect(definitions.length).toBe(1)
        expect(definitions[0]).toMatchObject({
          type: QueryType.SPREAD,
          keys: ["another", "target"],
        })
        checkSelectQueryNode(definitions[0]["node"], {
          name: "target",
          consumer(definitions) {
            expect(definitions.length).toBe(1)
            checkSelectQueryNode(definitions[0], { name: "name" })
          }
        })
      }
    })

    expect(descriptor).toEqual({
      index: {
        another: {
          index: {
            target: {
              index: {
                name: { index: {}, all: true }
              }
            }
          }
        },
        dst: {
          index: {
            name: {
              index: {},
              all: true
            }
          }
        }
      }
    })
  })
})

describe("functions", () => {
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

    it ("without index", () => {
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

    it ("with implicit index", () => {
      const query = `/*qmap*/{
        take(products, @{3}) #{
          ...,
          toUpperCase(name)
        }
      }`

      const { definitions, descriptor, errors } = compile(query)

      checkGen(definitions, errors)

      expect(descriptor).toEqual({
        index: {
          products: {
            index: {
              name: {
                index: {},
                all: true
              }
            },
            all: true
          }
        }
      })
    })

    describe ("with explicit index", () => {
      it ("single", () => {
        const query = `/*qmap*/{
          take(products, @{3}) #single {
            ...,
            toUpperCase(name)
          }
        }`

        const { definitions, descriptor, errors } = compile(query)

        checkGen(definitions, errors)

        expect(descriptor).toEqual({
          index: {
            single: {
              index: {
                name: {
                  index: {},
                  all: true
                }
              },
              all: true
            },
            products: {
              index: {},
              all: true
            }
          }
        })
      })

      it ("multiple", () => {
        const query = `/*qmap*/{
          take(products, @{3}) #multiple.keys {
            ...,
            toUpperCase(name)
          }
        }`

        const { definitions, descriptor, errors } = compile(query)

        checkGen(definitions, errors)

        expect(descriptor).toEqual({
          index: {
            multiple: {
              index: {
                keys: {
                  index: {
                    name: {
                      index: {},
                      all: true
                    }
                  },
                  all: true
                }
              },
            },
            products: {
              index: {},
              all: true
            }
          }
        })
      })
    })
  })

  describe("normal", () => {
    it("simple", () => {
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

    it("access", () => {
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

    it("select", () => {
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

    it("compose", () => {
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

    it ("byItem", () => {
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

    it ("enhancement by item", () => {
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

    it("variables", () => {
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
    it("simple", () => {
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

    it("access", () => {
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

    it("select", () => {
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

    it("compose", () => {
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

    it ("byItem", () => {
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

    it ("enhancement by item", () => {
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

    it("variables", () => {
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

    it("primitive variables", () => {
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
})

describe("rename", () => {
  it("simple", () => {
    const query = "{ name: NAME }"

    const { definitions, descriptor } = compile(query)

    expect(definitions.length).toBe(1)

    checkSelectQueryNode(definitions[0], {
      name: "NAME",
      alias: "name"
    })

    expect(descriptor.index).toMatchObject({
      NAME: { index: {} },
    })
  })

  it("query", () => {
    const query = "{ agent: person { id, name } }"

    const { definitions, descriptor } = compile(query)

    expect(definitions.length).toBe(1)

    checkSelectQueryNode(definitions[0], {
      name: "person",
      alias: "agent",
      consumer(definitions) {
        expect(definitions.length).toBe(2)
        const [id, name] = definitions
        checkSelectQueryNode(id, { name: "id" })
        checkSelectQueryNode(name, { name: "name" })
      }
    })

    expect(descriptor.index).toMatchObject({
      person: {
        index: {
          id: { index: {} },
          name: { index: {} }
        }
      }
    })
  })

  it("access", () => {
    const query = "{ id: transaction.id }"

    const { definitions, descriptor } = compile(query)

    expect(definitions.length).toBe(1)

    checkAccessQueryNode(definitions[0], {
      keys: ["transaction", "id"],
      alias: "id"
    })

    expect(descriptor.index).toMatchObject({
      transaction: {
        index: {
          id: { index: {} }
        }
      }
    })
  })

  it("function", () => {
    const query = "{ full_name: concat(fist_name, last_name) }"

    const { definitions, descriptor } = compile(query)

    expect(definitions.length).toBe(1)

    checkFunctionQueryNode(definitions[0], {
      name: "concat",
      alias: "full_name",
      consumer(args) {
        expect(args.length).toBe(2)
        const [first_name, last_name] = args
        checkSelectQueryNode(first_name, { name: "fist_name" })
        checkSelectQueryNode(last_name, { name: "last_name" })
      }
    })

    expect(descriptor.index).toMatchObject({
      fist_name: { index: {} },
      last_name: { index: {} }
    })
  })

  it("client function", () => {
    const query = "{ full_name: concat!(fist_name, last_name) }"

    const { definitions, descriptor } = compile(query)

    expect(definitions.length).toBe(1)

    checkFunctionQueryNode(definitions[0], {
      name: "concat",
      alias: "full_name",
      clientFn: true,
      consumer(args) {
        expect(args.length).toBe(2)
        const [first_name, last_name] = args
        checkSelectQueryNode(first_name, { name: "fist_name" })
        checkSelectQueryNode(last_name, { name: "last_name" })
      }
    })

    expect(descriptor.index).toMatchObject({
      fist_name: { index: {} },
      last_name: { index: {} }
    })
  })

  it("extended", () => {
    const query = "{ id: access_number }"

    const { definitions, descriptor } = compile(query, {
      mode: "extended"
    })

    expect(definitions.length).toBe(1)
    expect(definitions[0]).toMatchObject({
      type: QueryType.RENAME,
      alias: "id",
    })

    checkSelectQueryNode(definitions[0]["node"], { name: "access_number" })

    expect(descriptor.index).toMatchObject({
      access_number: { index: {} },
    })
  })
})

describe("new object", () => {
  it ("simple", () => {
    const { errors, descriptor, definitions } = compile(`/*qmap*/{
      product: {
        product_id,
        product_name
      }
    }`)

    expect(errors).toEqual([])

    expect(definitions.length).toBe(1)

    checkNewObjectQueryNode(definitions[0], {
      alias: "product",
      consumer(definitions) {
        expect(definitions.length).toBe(2)
        checkSelectQueryNode(definitions[0], { name: "product_id" })
        checkSelectQueryNode(definitions[1], { name: "product_name" })
      },
    })

    expect(descriptor).toEqual({
      index: {
        product_id: { index: {}, all: true },
        product_name: { index: {}, all: true },
      }
    })
  })

  it ("with global access", () => {
    const { errors, descriptor, definitions } = compile(`/*qmap*/{
      transaction {
        product: {
          &.provider,
          product_id,
          product_name
        }
      }
    }`)

    expect(errors).toEqual([])

    expect(definitions.length).toBe(1)

    checkSelectQueryNode(definitions[0], {
      name: "transaction",
      consumer(definitions) {
        expect(definitions.length).toBe(1)
        checkNewObjectQueryNode(definitions[0], {
          alias: "product",
          consumer(definitions) {
            expect(definitions.length).toBe(3)
            checkAccessQueryNode(definitions[0], {
              isGlobal: true,
              keys: ["provider"],
            })
            checkSelectQueryNode(definitions[1], { name: "product_id" })
            checkSelectQueryNode(definitions[2], { name: "product_name" })
          },
        })
      },
    })

    expect(descriptor).toEqual({
      index: {
        provider: { index: {}, all: true },
        transaction: {
          index: {
            product_id: { index: {}, all: true },
            product_name: { index: {}, all: true },
          }
        }
      }
    })
  })
})

test("On Result", () => {
  const { errors, definitions, descriptor } = compile(`/*qmap*/{
    products: take(products, @{5}),
    %{products.name},
    compact_product: %{
      products { id, name }
    },
    labels: createLabels(%{products})
  }`)

  expect(errors).toEqual([])
  expect(definitions.length).toBe(4)

  const [
    takeFn,
    onresultAccess,
    onresultWithRename,
    createLabelsWithProductsFromResult
  ] = definitions

  checkFunctionQueryNode(takeFn, {
    name: "take",
    alias: "products",
    consumer(args) {
      expect(args.length).toBe(2)
      checkSelectQueryNode(args[0], { name: "products" })
      checkPrimitiveNode(args[1], 5)
    },
  })

  checkOnResultNode(onresultAccess, {
    alias: "products_name",
    checkNode(node) {
      checkAccessQueryNode(node, {
        keys: ["products", "name"]
      })
    },
  })

  checkOnResultNode(onresultWithRename, {
    alias: "compact_product",
    checkNode(node) {
      checkSelectQueryNode(node, {
        name: "products",
        consumer(definitions) {
          expect(definitions.length).toBe(2)
          checkSelectQueryNode(definitions[0], { name: "id" })
          checkSelectQueryNode(definitions[1], { name: "name" })
        },
      })
    },
  })

  checkFunctionQueryNode(createLabelsWithProductsFromResult, {
    alias: "labels",
    name: "createLabels",
    consumer(args) {
      expect(args.length).toBe(1)
      checkOnResultNode(args[0], {
        alias: "products",
        checkNode(node) {
          checkSelectQueryNode(node, { name: "products" })
        },
      })
    },
  })

  expect(descriptor).toEqual({
    index: {
      products: {
        index: {},
        all: true
      }
    }
  })
})

describe("ignore index", () => {
  it("complex", () => {
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

    expect(descriptor.index).toEqual({})
  })
})
