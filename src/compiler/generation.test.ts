import { compile } from "."
import { getQmapCtx, wrapQmapCtx } from "./utils"

describe("JSON Gen", () => {
  describe("root query", () => {
    it("empty query", () => {
      const queries = ["", " ", "\t", "\n", "\n\r\n"]

      queries.forEach((query) => {
        const json = compile(query)

        expect(json).toMatchObject({
          root: {},
          queries: {}
        })

        expect(json.query).toBeFalsy()
      })
    })

    it("without root name", () => {
      const queries = ["{}", "\n{\n}\n"]

      queries.forEach((query) => {
        const json = compile(query)

        expect(json).toMatchObject({
          root: {},
          queries: {}
        })
        expect(json.query).toBeFalsy()
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
        const json = compile(query)

        expect(json).toMatchObject({
          root: {},
          query: name,
          queries: {}
        })
      })
    })
  })

  describe("fields", () => {
    it("simple", () => {
      const { root, queries } = compile("{ product }")
      expect(root).toMatchObject({
        product: {}
      })
      expect(queries).toMatchObject({ product: {} })
    })

    it("multiple", () => {
      const { root, queries } = compile("{ first_name, last_name, age, image }")
      const expected = {
        first_name: {},
        last_name: {},
        age: {},
        image: {}
      }
      expect(root).toMatchObject(expected)
      expect(queries).toMatchObject(expected)
    })

    it("access", () => {
      const { root, queries } = compile("{ transaction.product.name }")
      const { accessed } = getQmapCtx(root)
      const [key] = accessed

      expect(key).not.toBeFalsy()
      expect(getQmapCtx(root[key])).toMatchObject({
        keys: ["transaction", "product", "name"],
        name: "transaction_product_name"
      })
      expect(queries).toMatchObject({
        transaction: {
          product: {
            name: {}
          }
        }
      })
    })

    it("access with query", () => {
      const { root, queries } = compile("{ transaction.product { name } }")
      const { accessed } = getQmapCtx(root)
      const [key] = accessed

      expect(key).not.toBeFalsy()

      expect(root[key]).toMatchObject({})
      expect(getQmapCtx(root[key])).toMatchObject({
        keys: ["transaction", "product"],
        name: "transaction_product"
      })
      expect(queries).toMatchObject({
        transaction: {
          product: {
            name: {}
          }
        }
      })
    })

    it("nested", () => {
      const { root, queries } = compile("{ transaction { product {id, name} } }")
      const transaction = root.transaction
      const expected = {
        product: {
          id: {},
          name: {}
        }
      }

      expect(transaction).toMatchObject(expected)
      expect(transaction.product).toMatchObject(expected.product)
      expect(queries).toMatchObject({
        transaction: {
          product: {
            id: {},
            name: {}
          }
        }
      })
    })
  })

  describe("exclude", () => {
    it("simple", () => {
      const { root, queries } = compile("{ !name }")
      const ctx = wrapQmapCtx({
        exclude: ["name"]
      })

      expect(getQmapCtx(root)).toMatchObject(ctx)
      expect(getQmapCtx(queries)).toMatchObject({
        exclude: ["name"]
      })
      expect(queries.name).toBeFalsy()
    })

    it("multiple", () => {
      const { root, queries } = compile("{ !name, !id }")
      const ctx = wrapQmapCtx({
        exclude: ["name", "id"]
      })

      expect(getQmapCtx(root)).toMatchObject(ctx)
      expect(getQmapCtx(queries)).toMatchObject({
        exclude: ["name", "id"]
      })
      expect(queries.name).toBeFalsy()
      expect(queries.id).toBeFalsy()
    })

    it ("nested", () => {
      const { root, queries } = compile("{ transaction { !product, !provider } }")
      const transaction = root.transaction
      const ctx = {
        exclude: ["product", "provider"]
      }

      expect(getQmapCtx(transaction)).toMatchObject(ctx)
      expect(queries).toMatchObject({
        transaction: {}
      })
      expect(queries.transaction.product).toBeFalsy()
      expect(queries.transaction.provider).toBeFalsy()
      expect(getQmapCtx(queries.transaction)).toMatchObject(ctx)
    })
  })

  describe("spread", () => {
    it("Include all", () => {
      const { root, queries } = compile("{ ... }")

      expect(getQmapCtx(root)).toMatchObject({
        all: true
      })
      expect(getQmapCtx(queries)).toMatchObject({
        all: true
      })
    })

    it("Implicit root", () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const checkName = (name: any) => {
        const { first: pfirst } = name

        expect(pfirst).toMatchObject({})
        expect(getQmapCtx(name)).toMatchObject({
          exclude: ["last"]
        })
        expect(getQmapCtx(name)).toMatchObject({
          all: true
        })
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const checkPublic = (pub: any) => {
        checkName(pub.name)
      }

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const checkUser = (user: any) => {
        checkPublic(user)
        const { age } = user
        expect(age).toMatchObject({})
        expect(getQmapCtx(user)).toMatchObject({
          all: true,
        })
      }

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const checkAdmin = (admin: any) => {
        checkUser(admin)
        const { phone, contact } = admin
        expect(phone).toMatchObject({})
        const { user, email } = contact
        expect(user).toMatchObject({})
        expect(email).toMatchObject({})
      }

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const checkPerson = (person: any) => {
        checkName(person)
      }

      const { root, queries } = compile(`{
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

      checkPublic(root.public)
      checkUser(root.user)
      checkAdmin(root.admin)
      checkPerson(root.person)
      expect(Object.keys(root)).toMatchObject(["public", "user", "admin", "person"])

      checkPublic(queries.public)
      checkUser(queries.user)
      checkAdmin(queries.admin)
      checkPerson(queries.person)
      expect(Object.keys(queries)).toMatchObject(["public", "user", "admin", "person"])
    })

    it("Explicit root", () => {
      const { root, queries } = compile(`{
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

      expect(root.pub.person.name).toMatchObject({})
      expect(Object.keys(root.pub.person.name).length).toBe(0)
      expect(queries).toMatchObject({
        target: {
          name: {}
        },
        pub: {
          target: {
            person: {}
          },
          person: {
            name: {}
          }
        }
      })
      expect(Object.keys(queries).length).toBe(2)
      expect(Object.keys(queries.target).length).toBe(1)
      expect(Object.keys(queries.pub).length).toBe(2)
      expect(Object.keys(queries.pub.target).length).toBe(1)
      expect(Object.keys(queries.pub.person).length).toBe(1)
    })

    it("Scope", () => {
      const { root, queries } = compile(`{
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

      expect(root.pub.person.age).toMatchObject({})
      expect(queries).toMatchObject({
        target: {
          name: {}
        },
        pub: {
          target: {
            age: {}
          },
          person: {
            age: {}
          }
        }
      })
      expect(Object.keys(queries).length).toBe(2)
      expect(Object.keys(queries.target).length).toBe(1)
      expect(Object.keys(queries.pub).length).toBe(2)
      expect(Object.keys(queries.pub.target).length).toBe(1)
      expect(Object.keys(queries.pub.person).length).toBe(1)
    })
  })
})
