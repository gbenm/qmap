import { compile, QueryType } from "."
import { AccessQueryNode, QueryNode, SelectQueryNode } from "./query.types"

function mustNotHaveName(node: QueryNode) {
  expect(node["name"]).toBeFalsy()
}

function mustNotHaveAlias(node: QueryNode) {
  expect(node["alias"]).toBeFalsy()
}

function getDefinitions (node: QueryNode, consumer: (definitions: QueryNode[]) => void) {
  expect(node["definitions"]).toBeTruthy()
  consumer(node["definitions"])
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

    expect(descriptor.index).toMatchObject({ product: {} })
  })

  it("multiple", () => {
    const { definitions, descriptor } = compile("{ first_name, last_name, age, image }")

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
      first_name: {},
      last_name: {},
      age: {},
      image: {}
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
                name: {}
              }
            }
          }
        }
      })
    })

    it("with query", () => {
      const { definitions, descriptor } = compile("{ transaction.product { name } }")

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
        id,
        transaction.product { id, name },
        transaction {
          id
        },
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

  // it("Explicit root", () => {
  //   const { root, queries } = compile(`{
  //     target { name },
  //     pub {
  //       target {
  //         person
  //       },
  //       person {
  //         ...&target
  //       }
  //     }
  //   }`)

  //   expect(getQmapCtx(root)).toMatchObject({
  //     index: ["target", "pub"],
  //   })
  //   expect(getQmapCtx(root.target)).toMatchObject({
  //     index: ["name"],
  //     type: QueryType.SELECT,
  //   })
  //   expect(getQmapCtx(root.pub)).toMatchObject({
  //     index: ["target", "person"],
  //     type: QueryType.SELECT,
  //   })
  //   expect(getQmapCtx(root.pub.target)).toMatchObject({
  //     index: ["person"],
  //     type: QueryType.SELECT,
  //   })
  //   expect(getQmapCtx(root.pub.person)).toMatchObject({
  //     index: ["name"],
  //     type: QueryType.SELECT,
  //   })
  //   expect(root.pub.person.name).toMatchObject({})
  //   expect(Object.keys(root.pub.person.name).length).toBe(0)
  //   expect(queries).toMatchObject({
  //     target: {
  //       name: {}
  //     },
  //     pub: {
  //       target: {
  //         person: {}
  //       },
  //       person: {
  //         name: {}
  //       }
  //     }
  //   })
  //   expect(Object.keys(queries).length).toBe(2)
  //   expect(Object.keys(queries.target).length).toBe(1)
  //   expect(Object.keys(queries.pub).length).toBe(2)
  //   expect(Object.keys(queries.pub.target).length).toBe(1)
  //   expect(Object.keys(queries.pub.person).length).toBe(1)
  // })

  // it("Scope", () => {
  //   const { root, queries } = compile(`{
  //     target { name },
  //     pub {
  //       target {
  //         age
  //       },
  //       person {
  //         ...target
  //       }
  //     }
  //   }`)

  //   expect(getQmapCtx(root)).toMatchObject({
  //     index: ["target", "pub"],
  //   })
  //   expect(getQmapCtx(root.target)).toMatchObject({
  //     index: ["name"],
  //     type: QueryType.SELECT,
  //   })
  //   expect(getQmapCtx(root.pub)).toMatchObject({
  //     index: ["target", "person"],
  //     type: QueryType.SELECT,
  //   })
  //   expect(getQmapCtx(root.pub.target)).toMatchObject({
  //     index: ["age"],
  //     type: QueryType.SELECT,
  //   })
  //   expect(getQmapCtx(root.pub.person)).toMatchObject({
  //     index: ["age"],
  //     type: QueryType.SELECT,
  //   })

  //   expect(root.pub.person.age).toMatchObject({})
  //   expect(queries).toMatchObject({
  //     target: {
  //       name: {}
  //     },
  //     pub: {
  //       target: {
  //         age: {}
  //       },
  //       person: {
  //         age: {}
  //       }
  //     }
  //   })
  //   expect(Object.keys(queries).length).toBe(2)
  //   expect(Object.keys(queries.target).length).toBe(1)
  //   expect(Object.keys(queries.pub).length).toBe(2)
  //   expect(Object.keys(queries.pub.target).length).toBe(1)
  //   expect(Object.keys(queries.pub.person).length).toBe(1)
  // })
})
