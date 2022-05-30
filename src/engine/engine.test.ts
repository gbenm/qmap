import { qmapCreator } from "./creator"

describe("includes", () => {
  it("empty", () => {
    const qmap = qmapCreator()

    const { includes } = qmap("")
    expect(includes(["any"])).toBe(true)
  })

  it("simple", () => {
    const qmap = qmapCreator()

    const { includes } = qmap("{id, name, age}")

    expect(includes(["id"])).toBe(true)
    expect(includes(["name"])).toBe(true)
    expect(includes(["age"])).toBe(true)
    expect(includes(["other"])).toBe(false)
  })

  it("select", () => {
    const qmap = qmapCreator()

    const { includes } = qmap(`{
      product {
        id,
        name
      }
    }`)

    expect(includes(["product"])).toBe(true)
    expect(includes(["product", "id"])).toBe(true)
    expect(includes(["product", "name"])).toBe(true)
    expect(includes(["product", "other"])).toBe(false)
    expect(includes(["other"])).toBe(false)
  })

  it("rename", () => {
    const qmap = qmapCreator()

    const { includes } = qmap("{ name: Name }")

    expect(includes(["Name"])).toBe(true)
  })

  it("access", () => {
    const qmap = qmapCreator()

    const { includes } = qmap("{ product.id }")

    expect(includes(["product"])).toBe(true)
    expect(includes(["product", "id"])).toBe(true)
  })

  it("function", () => {
    const qmap = qmapCreator()

    const { includes } = qmap("{ foo(name, id) }")
    expect(includes(["name"])).toBe(true)
    expect(includes(["id"])).toBe(true)
  })

  it("exclude", () => {
    const qmap = qmapCreator()

    const { includes } = qmap("{ ..., !name }")

    expect(includes(["name"])).toBe(false)
    expect(includes(["other"])).toBe(true)
  })

  describe("schemas", () => {
    const qmap = qmapCreator({
      schemas: `{
        admin {
          product {
            id, name
          }
        },
        user {
          product { name }
        }
      }`
    })

    it ("without query", () => {
      const schema = "admin"
      const { includes } = qmap("", { schema })
      expect(includes(["product"])).toBe(true)
      expect(includes(["product", "id"])).toBe(true)
    })

    it ("with query", () => {
      const schema = "user"
      const { includes } = qmap("{ product { id } }", { schema })
      expect(includes(["product"])).toBe(true)
      expect(includes(["product", "id"])).toBe(false)
    })
  })

  describe("context query", () => {
    const qmap = qmapCreator({
      queries: `{
        product_compact {
          id, name
        },
        transaction_compact {
          id, description
        }
      }`
    })

    it ("without query", () => {
      const { includes } = qmap("product_compact")
      expect(includes(["id"])).toBe(true)
      expect(includes(["name"])).toBe(true)
    })

    it ("with query", () => {
      const { includes } = qmap("product_compact { id, other }")
      expect(includes(["id"])).toBe(true)
      expect(includes(["other"])).toBe(false)
    })
  })

  describe("context query with schema", () => {
    const qmap = qmapCreator({
      schemas: `{
        admin {
          product {
            id, name
          },
          transaction,
        },
        client {
          product {
            name
          }
        }
      }`,
      queries: `{
        product_compact {
          product {
            id, name
          }
        }
      }`
    })

    describe("as admin", () => {
      const schema = "admin"
      it ("without select", () => {
        const { includes } = qmap("product_compact", { schema })
        expect(includes(["product"])).toBe(true)
        expect(includes(["product", "id"])).toBe(true)
        expect(includes(["transaction"])).toBe(false)
        expect(includes(["transaction", "name"])).toBe(false)
      })

      it ("with select", () => {
        const { includes } = qmap(`product_compact {
          product {
            ...,
            provider {
              id, name
            }
          }
        }`, { schema })

        expect(includes(["product"])).toBe(true)
        expect(includes(["product", "id"])).toBe(true)
        expect(includes(["product", "name"])).toBe(true)
        expect(includes(["product", "provider"])).toBe(false)
        expect(includes(["product", "provider", "id"])).toBe(false)
        expect(includes(["product", "provider", "name"])).toBe(false)
        expect(includes(["transaction"])).toBe(false)
      })
    })

    describe("as client", () => {
      const schema = "client"
      it ("without select", () => {
        const { includes } = qmap("product_compact", { schema })
        expect(includes(["product"])).toBe(true)
        expect(includes(["product", "id"])).toBe(false)
        expect(includes(["transaction"])).toBe(false)
        expect(includes(["transaction", "name"])).toBe(false)
      })

      it ("with select", () => {
        const { includes } = qmap(`product_compact {
          product {
            ...,
            provider {
              id, name
            }
          }
        }`, { schema })

        expect(includes(["product"])).toBe(true)
        expect(includes(["product", "id"])).toBe(false)
        expect(includes(["product", "name"])).toBe(true)
        expect(includes(["product", "provider"])).toBe(false)
        expect(includes(["product", "provider", "id"])).toBe(false)
        expect(includes(["product", "provider", "name"])).toBe(false)
      })
    })
  })

  describe ("with extends", () => {
    const qmapParent = qmapCreator({
      schemas: `{
        admin {
          product {
            id, name
          },
          transaction,
        },
      }`,
      queries: `{
        product_compact {
          product {
            id, name
          }
        }
      }`
    })

    const qmap = qmapCreator({
      extends: qmapParent,
      schemas: `{
        client {
          product {
            name
          }
        }
      }`
    })

    it ("admin schema", () => {
      const schema = "admin"
      const { includes } = qmap(`product_compact {
        product {
          ...,
          provider {
            id, name
          }
        }
      }`, { schema })

      expect(includes(["product"])).toBe(true)
      expect(includes(["product", "id"])).toBe(true)
      expect(includes(["product", "name"])).toBe(true)
      expect(includes(["product", "provider"])).toBe(false)
      expect(includes(["product", "provider", "id"])).toBe(false)
      expect(includes(["product", "provider", "name"])).toBe(false)
      expect(includes(["transaction"])).toBe(false)
    })

    it ("client schema", () => {
      const schema = "client"

      const { includes } = qmap(`product_compact {
        product {
          ...,
          provider {
            id, name
          }
        }
      }`, { schema })

      expect(includes(["product"])).toBe(true)
      expect(includes(["product", "id"])).toBe(false)
      expect(includes(["product", "name"])).toBe(true)
      expect(includes(["product", "provider"])).toBe(false)
      expect(includes(["product", "provider", "id"])).toBe(false)
      expect(includes(["product", "provider", "name"])).toBe(false)
    })
  })
})

describe("apply", () => {
  const qmap = qmapCreator({
    functions: {
      upperCase(str: string) {
        return str.toUpperCase()
      },
      concat(str1: string, str2: string) {
        return str1 + str2
      },
      take(list: unknown[], n: number) {
        return list.slice(0, n)
      }
    }
  })

  it ("nested select", () => {
    const { apply } = qmap(`{
      balance,
      call_history {
        time,
        cost,
        user { name }
      },
      dials {
        user {
          id, name
        }
      }
    }`)

    const result = apply({
      balance: 3.0,
      call_history: [
        { id: 1, time: "01:00", cost: 2.0, user: { name: "john", id: 3 } },
        { id: 2, time: "02:00", cost: 3.0, user: { name: "john 2", id: 4 } },
      ],
      dials: [
        { id: 1, user: { id: 5, name: "john", alias: "j" } },
        { id: 2, user: { id: 3, name: "john 2", alias: "j2" } },
      ]
    })

    expect(result).toEqual({
      balance: 3.0,
      call_history: [
        { time: "01:00", cost: 2.0, user: { name: "john" } },
        { time: "02:00", cost: 3.0, user: { name: "john 2" } },
      ],
      dials: [
        { user: { id: 5, name: "john" } },
        { user: { id: 3, name: "john 2" } },
      ]
    })
  })

  it ("for each function", () => {
    const { apply } = qmap("{ names: [upperCase([concat(names, salt)])] }")
    const result = apply({
      names: ["a", "b", "c"],
      salt: "!"
    })

    expect(result).toEqual({
      names: ["A!", "B!", "C!"]
    })
  })

  it("complex", () => {
    const { apply } = qmap(`{
      product {
        id, upperCase(name)
      },
      transaction {
        id, desc: description
      },
      take(ids, @n)
    }`)

    const result = apply({
      product: {
        id: 5,
        name: "camisa",
        price: 50
      },
      transaction: {
        id: 10,
        description: "compra"
      },
      ids: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    }, {
      variables: {
        n: 2
      }
    })

    expect(result).toEqual({
      product: {
        id: 5,
        name: "CAMISA"
      },
      transaction: {
        id: 10,
        desc: "compra"
      },
      ids_n: [1, 2]
    })
  })
})
