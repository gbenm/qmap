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

      expect(Object.keys(root.descriptor.index).length).toBe(0)
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

      expect(Object.keys(root.descriptor.index).length).toBe(0)
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

      expect(Object.keys(root.descriptor.index).length).toBe(0)
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

      expect(Object.keys(descriptor.index).length).toBe(1)
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

      expect(Object.keys(descriptor.index).length).toBe(1)
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

    expect(Object.keys(descriptor.index).length).toBe(0)
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

    expect(Object.keys(descriptor.index).length).toBe(0)
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

    expect(Object.keys(descriptor.index).length).toBe(1)
    expect(Object.keys(descriptor.index.transaction.index).length).toBe(0)
  })
})

// describe("spread", () => {
//   it("Include all", () => {
//     const { root, queries } = compile("{ ... }")

//     expect(getQmapCtx(root)).toMatchObject({
//       all: true,
//       index: []
//     })
//     expect(getQmapCtx(queries)).toMatchObject({
//       all: true
//     })
//   })

//   it("Implicit root", () => {
//     // eslint-disable-next-line @typescript-eslint/no-explicit-any
//     const checkName = (name: any, withExtras: boolean) => {
//       const { first: pfirst } = name

//       expect(pfirst).toMatchObject({})
//       const expected = {
//         exclude: ["last"],
//         all: true,
//       }

//       if (withExtras) {
//         expected["index"] = ["first"]
//         expected["type"] = QueryType.SELECT
//       }

//       expect(getQmapCtx(name)).toMatchObject(expected)
//     }
//     // eslint-disable-next-line @typescript-eslint/no-explicit-any
//     const checkPublic = (pub: any, withExtras: boolean) => {
//       checkName(pub.name, withExtras)
//     }

//     // eslint-disable-next-line @typescript-eslint/no-explicit-any
//     const checkUser = (user: any, withExtras: boolean) => {
//       checkPublic(user, withExtras)
//       const { age } = user
//       expect(age).toMatchObject({})

//       const expected = {
//         all: true,
//       }

//       if (withExtras) {
//         expected["type"] = QueryType.SELECT
//       }

//       expect(getQmapCtx(user)).toMatchObject(expected)
//     }

//     // eslint-disable-next-line @typescript-eslint/no-explicit-any
//     const checkAdmin = (admin: any, withExtras: boolean) => {
//       checkUser(admin, withExtras)
//       const { phone, contact } = admin

//       if (withExtras) {
//         expect(getQmapCtx(admin)).toMatchObject({
//           type: QueryType.SELECT,
//         })

//         expect(getQmapCtx(phone)).toMatchObject({
//           type: QueryType.SELECT,
//         })

//         expect(getQmapCtx(contact)).toMatchObject({
//           type: QueryType.SELECT,
//         })

//         expect(getQmapCtx(contact.user)).toMatchObject({
//           type: QueryType.SELECT,
//         })

//         expect(getQmapCtx(contact.email)).toMatchObject({
//           type: QueryType.SELECT,
//         })
//       }

//       expect(phone).toMatchObject({})
//       const { user, email } = contact
//       expect(user).toMatchObject({})
//       expect(email).toMatchObject({})
//     }

//     // eslint-disable-next-line @typescript-eslint/no-explicit-any
//     const checkPerson = (person: any, withExtras: boolean) => {
//       checkName(person, withExtras)
//     }

//     const { root, queries } = compile(`{
//       public { name { ..., first, !last } },
//       user {
//         ...,
//         ...public,
//         age
//       },
//       admin {
//         ...user,
//         phone,
//         contact {
//           user,
//           email
//         }
//       },
//       person {
//         ...public.name
//       }
//     }`)

//     checkPublic(root.public, true)
//     checkUser(root.user, true)
//     checkAdmin(root.admin, true)
//     checkPerson(root.person, true)
//     expect(Object.keys(root)).toMatchObject(["public", "user", "admin", "person"])
//     expect(getQmapCtx(root)).toMatchObject({
//       index: ["public", "user", "admin", "person"],
//     })
//     expect(getQmapCtx(root.public)).toMatchObject({
//       index: ["name"],
//     })
//     expect(getQmapCtx(root.user)).toMatchObject({
//       index: ["name", "age"],
//     })
//     expect(getQmapCtx(root.admin)).toMatchObject({
//       index: ["name", "age", "phone", "contact"],
//     })
//     expect(getQmapCtx(root.admin.contact)).toMatchObject({
//       index: ["user", "email"],
//     })
//     expect(getQmapCtx(root.person)).toMatchObject({
//       index: ["first"],
//     })

//     checkPublic(queries.public, false,)
//     checkUser(queries.user, false)
//     checkAdmin(queries.admin, false)
//     checkPerson(queries.person, false)
//     expect(Object.keys(queries)).toMatchObject(["public", "user", "admin", "person"])
//   })

//   it("Explicit root", () => {
//     const { root, queries } = compile(`{
//       target { name },
//       pub {
//         target {
//           person
//         },
//         person {
//           ...&target
//         }
//       }
//     }`)

//     expect(getQmapCtx(root)).toMatchObject({
//       index: ["target", "pub"],
//     })
//     expect(getQmapCtx(root.target)).toMatchObject({
//       index: ["name"],
//       type: QueryType.SELECT,
//     })
//     expect(getQmapCtx(root.pub)).toMatchObject({
//       index: ["target", "person"],
//       type: QueryType.SELECT,
//     })
//     expect(getQmapCtx(root.pub.target)).toMatchObject({
//       index: ["person"],
//       type: QueryType.SELECT,
//     })
//     expect(getQmapCtx(root.pub.person)).toMatchObject({
//       index: ["name"],
//       type: QueryType.SELECT,
//     })
//     expect(root.pub.person.name).toMatchObject({})
//     expect(Object.keys(root.pub.person.name).length).toBe(0)
//     expect(queries).toMatchObject({
//       target: {
//         name: {}
//       },
//       pub: {
//         target: {
//           person: {}
//         },
//         person: {
//           name: {}
//         }
//       }
//     })
//     expect(Object.keys(queries).length).toBe(2)
//     expect(Object.keys(queries.target).length).toBe(1)
//     expect(Object.keys(queries.pub).length).toBe(2)
//     expect(Object.keys(queries.pub.target).length).toBe(1)
//     expect(Object.keys(queries.pub.person).length).toBe(1)
//   })

//   it("Scope", () => {
//     const { root, queries } = compile(`{
//       target { name },
//       pub {
//         target {
//           age
//         },
//         person {
//           ...target
//         }
//       }
//     }`)

//     expect(getQmapCtx(root)).toMatchObject({
//       index: ["target", "pub"],
//     })
//     expect(getQmapCtx(root.target)).toMatchObject({
//       index: ["name"],
//       type: QueryType.SELECT,
//     })
//     expect(getQmapCtx(root.pub)).toMatchObject({
//       index: ["target", "person"],
//       type: QueryType.SELECT,
//     })
//     expect(getQmapCtx(root.pub.target)).toMatchObject({
//       index: ["age"],
//       type: QueryType.SELECT,
//     })
//     expect(getQmapCtx(root.pub.person)).toMatchObject({
//       index: ["age"],
//       type: QueryType.SELECT,
//     })

//     expect(root.pub.person.age).toMatchObject({})
//     expect(queries).toMatchObject({
//       target: {
//         name: {}
//       },
//       pub: {
//         target: {
//           age: {}
//         },
//         person: {
//           age: {}
//         }
//       }
//     })
//     expect(Object.keys(queries).length).toBe(2)
//     expect(Object.keys(queries.target).length).toBe(1)
//     expect(Object.keys(queries.pub).length).toBe(2)
//     expect(Object.keys(queries.pub.target).length).toBe(1)
//     expect(Object.keys(queries.pub.person).length).toBe(1)
//   })
// })
