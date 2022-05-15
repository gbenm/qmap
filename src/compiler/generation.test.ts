import { compile, QueryType } from "."
import { QueryNode, SelectQueryNode } from "./query.types"


describe("root query", () => {
  it("empty query", () => {
    const queries = [null, undefined, "", " ", "\t", "\n", "\n\r\n"]

    queries.forEach((query: string | undefined | null) => {
      const root = compile(query)

      expect(root).toMatchObject({
        type: QueryType.ROOT,
        index: {},
        errors: [],
        definitions: [],
      })

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

      expect(Object.keys(root.index).length).toBe(0)
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

      const index = root.index
      expect(Object.keys(index).length).toBe(0)
    })
  })
})

describe("fields", () => {
  it("simple", () => {
    const { definitions, index } = compile("{ product }")

    const productField: SelectQueryNode = {
      type: QueryType.SELECT,
      name: "product",
      definitions: []
    }

    expect(definitions.length).toBe(1)
    expect(definitions[0]).toMatchObject(productField)

    expect(index).toMatchObject({ product: {} })
  })

  it("multiple", () => {
    const { definitions, index } = compile("{ first_name, last_name, age, image }")

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

    expect(index).toMatchObject(expected)
  })

  // describe("access", () => {
  //   it("simple", () => {
  //     const { root, queries } = compile("{ transaction.product.name }")
  //     const { index } = getQmapCtx(root)
  //     const [key] = index

  //     expect(key).not.toBeFalsy()
  //     expect(getQmapCtx(root[key])).toMatchObject({
  //       keys: ["transaction", "product", "name"],
  //       name: "transaction_product_name",
  //       type: QueryType.ACCESS
  //     })
  //     expect(queries).toMatchObject({
  //       transaction: {
  //         product: {
  //           name: {}
  //         }
  //       }
  //     })
  //   })

  //   it("with query", () => {
  //     const { root, queries } = compile("{ transaction.product { name } }")
  //     const { index } = getQmapCtx(root)
  //     const [key] = index

  //     expect(key).not.toBeFalsy()

  //     expect(getQmapCtx(root).index.length).toBe(1)
  //     expect(root[key]).toMatchObject({
  //       name: {}
  //     })
  //     expect(getQmapCtx(root[key])).toMatchObject({
  //       keys: ["transaction", "product"],
  //       name: "transaction_product",
  //       type: QueryType.ACCESS,
  //       index: ["name"]
  //     })
  //     expect(queries).toMatchObject({
  //       transaction: {
  //         product: {
  //           name: {}
  //         }
  //       }
  //     })
  //   })

  //   it("multiple", () => {
  //     const query = `cartitem {
  //       id,
  //       transaction.product { id, name },
  //       transaction {
  //         id
  //       },
  //       user.account { email }
  //     }`
  //     const { root, queries } = compile(query)

  //     const rootIndex = getQmapCtx(root).index
  //     const idField = root[rootIndex[0]]
  //     const transactionAccessField = root[rootIndex[1]]
  //     const transactionField = root[rootIndex[2]]
  //     const userAccessField = root[rootIndex[3]]

  //     expect(Object.keys(idField).length).toBe(0)
  //     expect(getQmapCtx(idField)).toMatchObject({
  //       index: [],
  //       type: QueryType.SELECT
  //     })
  //     expect(transactionAccessField).toMatchObject({
  //       id: {},
  //       name: {}
  //     })
  //     expect(getQmapCtx(transactionAccessField)).toMatchObject({
  //       index: ["id", "name"],
  //       keys: ["transaction", "product"],
  //       type: QueryType.ACCESS
  //     })
  //     expect(transactionField).toMatchObject({
  //       id: {}
  //     })
  //     expect(getQmapCtx(transactionField)).toMatchObject({
  //       index: ["id"],
  //       type: QueryType.SELECT
  //     })
  //     expect(userAccessField).toMatchObject({
  //       email: {}
  //     })
  //     expect(getQmapCtx(userAccessField)).toMatchObject({
  //       index: ["email"],
  //       keys: ["user", "account"],
  //       type: QueryType.ACCESS,
  //     })

  //     expect(queries).toMatchObject({
  //       id: {},
  //       transaction: {
  //         id: {},
  //         product: {
  //           id: {},
  //           name: {}
  //         }
  //       },
  //       user: {
  //         account: {
  //           email: {}
  //         }
  //       }
  //     })
  //   })
  // })

  // it("nested", () => {
  //   const { root, queries } = compile("{ transaction { product {id, name} } }")
  //   const transaction = root.transaction
  //   const expected = {
  //     product: {
  //       id: {},
  //       name: {}
  //     }
  //   }

  //   expect(getQmapCtx(root).index).toMatchObject(["transaction"])
  //   expect(transaction).toMatchObject(expected)
  //   expect(getQmapCtx(transaction)).toMatchObject({
  //     index: ["product"],
  //     type: QueryType.SELECT,
  //   })
  //   expect(transaction.product).toMatchObject(expected.product)
  //   expect(getQmapCtx(transaction.product)).toMatchObject({
  //     index: ["id", "name"],
  //     type: QueryType.SELECT,
  //   })
  //   expect(queries).toMatchObject({
  //     transaction: {
  //       product: {
  //         id: {},
  //         name: {}
  //       }
  //     }
  //   })
  // })
})

// describe("exclude", () => {
//   it("simple", () => {
//     const { root, queries } = compile("{ !name }")
//     const ctx = {
//       exclude: ["name"],
//       index: [],
//     }

//     expect(getQmapCtx(root)).toMatchObject(ctx)
//     expect(getQmapCtx(queries)).toMatchObject({
//       exclude: ["name"]
//     })
//     expect(queries.name).toBeFalsy()
//   })

//   it("multiple", () => {
//     const { root, queries } = compile("{ !name, !id }")
//     const ctx = {
//       index: [],
//       exclude: ["name", "id"],
//     }

//     expect(getQmapCtx(root)).toMatchObject(ctx)
//     expect(getQmapCtx(queries)).toMatchObject({
//       exclude: ["name", "id"]
//     })
//     expect(queries.name).toBeFalsy()
//     expect(queries.id).toBeFalsy()
//   })

//   it ("nested", () => {
//     const { root, queries } = compile("{ transaction { !product, !provider } }")
//     const transaction = root.transaction
//     const ctx = {
//       index: [],
//       type: QueryType.SELECT,
//       exclude: ["product", "provider"]
//     }

//     expect(getQmapCtx(root).index).toEqual(["transaction"])
//     expect(getQmapCtx(transaction)).toMatchObject(ctx)
//     expect(queries).toMatchObject({
//       transaction: {}
//     })
//     expect(queries.transaction.product).toBeFalsy()
//     expect(queries.transaction.provider).toBeFalsy()
//     expect(getQmapCtx(queries.transaction)).toMatchObject({
//       exclude: ctx.exclude
//     })
//   })
// })

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
