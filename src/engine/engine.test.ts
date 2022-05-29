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
      const { includes } = qmap("", "admin")
      expect(includes(["product"])).toBe(true)
      expect(includes(["product", "id"])).toBe(true)
    })

    it ("with query", () => {
      const { includes } = qmap("{ product { id } }", "user")
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
      it ("without select", () => {
        const { includes } = qmap("product_compact", "admin")
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
        }`, "admin")

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
      it ("without select", () => {
        const { includes } = qmap("product_compact", "client")
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
        }`, "client")

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
      const { includes } = qmap(`product_compact {
        product {
          ...,
          provider {
            id, name
          }
        }
      }`, "admin")

      expect(includes(["product"])).toBe(true)
      expect(includes(["product", "id"])).toBe(true)
      expect(includes(["product", "name"])).toBe(true)
      expect(includes(["product", "provider"])).toBe(false)
      expect(includes(["product", "provider", "id"])).toBe(false)
      expect(includes(["product", "provider", "name"])).toBe(false)
      expect(includes(["transaction"])).toBe(false)
    })

    it ("client schema", () => {
      const { includes } = qmap(`product_compact {
        product {
          ...,
          provider {
            id, name
          }
        }
      }`, "client")

      expect(includes(["product"])).toBe(true)
      expect(includes(["product", "id"])).toBe(false)
      expect(includes(["product", "name"])).toBe(true)
      expect(includes(["product", "provider"])).toBe(false)
      expect(includes(["product", "provider", "id"])).toBe(false)
      expect(includes(["product", "provider", "name"])).toBe(false)
    })
  })
})
