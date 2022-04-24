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
          named: false
        })
      })
    })

    it("without root name", () => {
      const queries = ["{}", "\n{\n}\n"]

      queries.forEach((query) => {
        const json = compile(query)

        expect(json).toMatchObject({
          root: {},
          named: false
        })
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
          [name]: {},
          named: true
        })
      })
    })
  })

  describe("fields", () => {
    it("simple", () => {
      const root = compile("{ product }").root
      expect(root).toMatchObject({
        product: {}
      })
    })

    it("multiple", () => {
      const root = compile("{ first_name, last_name, age, image }").root
      expect(root).toMatchObject({
        first_name: {},
        last_name: {},
        age: {},
        image: {}
      })
    })

    it("access", () => {
      const { transaction } = compile("{ transaction.product.name }").root

      const expected = {
        ...wrapQmapCtx({
          $qmap_keys: ["product", "name"]
        })
      }

      expect(transaction).toMatchObject(expected)
      expect(getQmapCtx(transaction)).toMatchObject({
        $qmap_keys: ["product", "name"]
      })
    })

    it("access with query", () => {
      const { transaction } = compile("{ transaction.product { name } }").root

      const expected = {
        ...wrapQmapCtx({
          $qmap_keys: ["product"]
        }),
        name: {}
      }

      expect(transaction).toMatchObject(expected)
      expect(getQmapCtx(transaction)).toMatchObject({
        $qmap_keys: ["product"]
      })
    })

    it("nested", () => {
      const { transaction } = compile("{ transaction { product {id, name} } }").root
      const expected = {
        product: {
          id: {},
          name: {}
        }
      }

      expect(transaction).toMatchObject(expected)
      expect(transaction.product).toMatchObject(expected.product)
    })
  })

  describe("exclude", () => {
    it("simple", () => {
      const { name } = compile("{ !name }").root
      const ctx = wrapQmapCtx({
        $qmap_exclude: true
      })

      expect(name).toMatchObject(ctx)
      expect(getQmapCtx(name).$qmap_exclude).toBe(true)
    })

    it("multiple", () => {
      const { name, id } = compile("{ !name, !id }").root
      const ctx = wrapQmapCtx({
        $qmap_exclude: true
      })

      expect(name).toMatchObject(ctx)
      expect(getQmapCtx(name).$qmap_exclude).toBe(true)
      expect(id).toMatchObject(ctx)
      expect(getQmapCtx(id).$qmap_exclude).toBe(true)
    })
  })

  describe("spread", () => {
    it("Include all", () => {
      const { root } = compile("{ ... }")

      expect(getQmapCtx(root)).toMatchObject({
        $qmap_all: true
      })
    })

    it("Implicit root", () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const checkName = (name: any) => {
        const { first: pfirst, last: plast } = name

        expect(pfirst).toMatchObject({})
        expect(plast).toMatchObject({})
        expect(getQmapCtx(plast)).toMatchObject({
          $qmap_exclude: true
        })
        expect(getQmapCtx(result.public.name)).toMatchObject({
          $qmap_all: true
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
          $qmap_all: true,
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

      const result = compile(`{
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
      }`).root

      checkPublic(result.public)

      const { user, admin, person } = result

      checkUser(user)
      checkAdmin(admin)
      checkPerson(person)
    })

    it("Explicit root", () => {
      const { person } = compile(`{
        target { name },
        pub {
          target {
            person
          },
          person {
            ...&target
          }
        }
      }`).root.pub

      expect(person.name).toMatchObject({})
    })

    it("Scope", () => {
      const { person } = compile(`{
        target { name },
        pub {
          target {
            age
          },
          person {
            ...target
          }
        }
      }`).root.pub

      expect(person.age).toMatchObject({})
    })
  })
})
