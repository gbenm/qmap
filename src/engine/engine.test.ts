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
    expect(includes(["name"])).toBe(false)
  })

  it("new object", () => {
    const qmap = qmapCreator()

    const { includes } = qmap(`/*qmap*/{
      transaction {
        product: {
          &.provider,
          product_id,
          product_name
        }
      }
    }`)

    expect(includes(["transaction"])).toBe(true)
    expect(includes(["transaction", "product"])).toBe(false)
    expect(includes(["transaction", "product_id"])).toBe(true)
    expect(includes(["transaction", "product_name"])).toBe(true)
    expect(includes(["provider"])).toBe(true)
    expect(includes(["provider", "any"])).toBe(true)
  })

  it("access", () => {
    const qmap = qmapCreator()

    const { includes } = qmap("{ product.id }")

    expect(includes(["product"])).toBe(true)
    expect(includes(["product", "id"])).toBe(true)
    expect(includes(["product", "id", "any"])).toBe(true)
  })

  it("global access", () => {
    const qmap = qmapCreator()

    const { includes } = qmap(`{
      product {
        &.provider.name,
        id: &.product_id,
        name: &.product_name
      }
    }`)

    expect(includes(["product"])).toBe(true)
    expect(includes(["product", "any"])).toBe(false)
    expect(includes(["product_id"])).toBe(true)
    expect(includes(["product_id", "any"])).toBe(true)
    expect(includes(["product_name"])).toBe(true)
    expect(includes(["product_name", "any"])).toBe(true)
    expect(includes(["provider"])).toBe(true)
    expect(includes(["provider", "name"])).toBe(true)
    expect(includes(["provider", "another"])).toBe(false)
  })

  it("function", () => {
    const qmap = qmapCreator()

    const { includes } = qmap("{ foo(name, id) }")
    expect(includes(["name"])).toBe(true)
    expect(includes(["id"])).toBe(true)
  })

  it("function with select", () => {
    const qmap = qmapCreator()

    const { includes } = qmap("{ foo(product {id, name}) }")
    expect(includes(["product"])).toBe(true)
    expect(includes(["product", "id"])).toBe(true)
    expect(includes(["product", "name"])).toBe(true)
    expect(includes(["product", "other"])).toBe(false)
  })

  it("function with access", () => {
    const qmap = qmapCreator()

    const { includes } = qmap("{ foo(product.id) }")
    expect(includes(["product"])).toBe(true)
    expect(includes(["product", "id"])).toBe(true)
    expect(includes(["product", "id", "any"])).toBe(true)
    expect(includes(["product", "any"])).toBe(false)
  })

  it ("function's return doesn't affect index", () => {
    const qmap = qmapCreator()

    const { includes, errors } = qmap(`{
      loadProduct(products.id, @{3}) {
        id,
        name,
        provider {
          id,
          upperCase(name)
        }
      }
    }`)

    expect(errors).toBeFalsy()

    expect(includes(["products"])).toBe(true)
    expect(includes(["products", "id"])).toBe(true)
    expect(includes(["products", "name"])).toBe(false)
    expect(includes(["products", "provider"])).toBe(false)
    expect(includes(["products", "provider", "id"])).toBe(false)
    expect(includes(["products", "provider", "name"])).toBe(false)
  })

  it("exclude", () => {
    const qmap = qmapCreator()

    const { includes } = qmap("{ ..., !name }")

    expect(includes(["name"])).toBe(false)
    expect(includes(["other"])).toBe(true)
  })

  it("spread", () => {
    const qmap = qmapCreator()

    const query = `{
      user {
        id, name
      },
      family {
        ...user,
        role
      }
    }`

    const { includes, errors } = qmap(query)

    expect(errors).toBeFalsy()

    expect(includes(["user", "id"])).toBe(true)
    expect(includes(["user", "name"])).toBe(true)
    expect(includes(["family", "id"])).toBe(true)
    expect(includes(["family", "name"])).toBe(true)
    expect(includes(["family", "role"])).toBe(true)
    expect(includes(["family", "any"])).toBe(false)
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
      expect(includes(["product", "name"])).toBe(true)
      expect(includes(["product", "other"])).toBe(false)
    })

    it ("with query", () => {
      const schema = "user"
      const { includes } = qmap("{ product { id } }", { schema })
      expect(includes(["product"])).toBe(true)
      expect(includes(["product", "id"])).toBe(false)
    })

    it("Can transform data schemas", () => {
      const qmap = qmapCreator({
        schemas: `{
          client {
            product.name,
            product.price
          }
        }`
      })

      const schema = "client"
      const { includes } = qmap("", { schema })
      expect(includes(["product"])).toBe(true)
      expect(includes(["product", "name"])).toBe(true)
      expect(includes(["product", "price"])).toBe(true)
      expect(includes(["product", "other"])).toBe(false)
      expect(includes(["other"])).toBe(false)
      expect(includes(["product_name"])).toBe(false)
      expect(includes(["product_price"])).toBe(false)
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
      expect(includes(["other"])).toBe(false)
    })

    it ("with query", () => {
      const { includes } = qmap("product_compact { id, other }")
      expect(includes(["id"])).toBe(true)
      expect(includes(["name"])).toBe(false)
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
            id, name, provider
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
      concat(...strs: string[]) {
        return strs.join("")
      },
      take(list: unknown[], n: number) {
        return list.slice(0, n)
      },
      currency(value: number) {
        return `$${value.toFixed(2)}`
      },
      add(a: number, b: number) {
        return a + b
      },
      label(s: unknown) {
        return `: ${s}`
      },
      addSalt(o: object) {
        return {
          ...o,
          salt: "salt"
        }
      }
    }
  })

  it ("function", () => {
    const { apply, errors } = qmap(`{
      upperCase(name),
      upperCase(concat(id, name)),
      take(ids, @quantity),
      take( [currency( [add(ids, @offset)] )], @quantity)
    }`)

    expect(errors).toBeFalsy()

    const result = apply({
      id: 1,
      name: "John",
      ids: [1, 2, 3, 4, 5],
    }, { variables: {
      quantity: 3,
      offset: 100,
    } })

    expect(result).toEqual({
      name: "JOHN",
      id_name: "1JOHN",
      ids_quantity: [1, 2, 3],
      ids_offset_quantity: ["$101.00", "$102.00", "$103.00"],
    })
  })

  it ("function's return", () => {
    const { apply, errors} = qmap(`{
      products: take(products, @{3}) {
        id,
        upperCase(name)
      },
      provider: addSalt(provider) {
        name,
        upperCase(salt)
      }
    }`)

    expect(errors).toBeFalsy()

    const result = apply({
      products: (new Array(5).fill(0)).map((_, i) => ({
        id: i,
        name: `product ${i}`,
        price: 10
      })),
      provider: {
        id: 1,
        name: "Test INC",
      }
    })

    expect(result).toEqual({
      products: (new Array(3).fill(0)).map((_, i) => ({
        id: i,
        name: `PRODUCT ${i}`,
      })),
      provider: {
        name: "Test INC",
        salt: "SALT"
      }
    })
  })

  it ("function with primitive variables", () => {
    const { apply, errors } = qmap(`{
      labels: concat(name, @{": "}, @[ids]),
      values: currency(@[add(@[ids], @{10})])
    }`)

    expect(errors).toBeFalsy()

    const result = apply({
      name: "john",
      ids: [1, 2, 3],
    })

    expect(result).toEqual({
      labels: ["john: 1", "john: 2", "john: 3"],
      values: ["$11.00", "$12.00", "$13.00"]
    })
  })

  it ("function with global access", () => {
    const input = {
      globalID: 100,
      product: {
        name: "qmap"
      }
    }

    const { apply, errors } = qmap(`{
      product {
        label: concat(name, &.globalID)
      }
    }`)

    expect(errors).toBeFalsy()

    const result = apply(input)

    expect(result).toEqual({
      product: {
        label: "qmap100"
      }
    })
  })

  it ("nested select", () => {
    const { apply, errors } = qmap(`{
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

    expect(errors).toBeFalsy()

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

  it ("select with all and exclude", () => {
    const { apply, errors } = qmap(`{
      ...,
      transaction {
        ...,
        !old_id,
        id: old_id
      },
      product {
        ...,
        label: concat(id, @sep, currency(price))
      }
    }`)

    expect(errors).toBeFalsy()

    const result = apply({
      id: 1,
      balance: 23,
      transaction: {
        id: 2,
        old_id: 3,
        description: "test",
      },
      product: {
        id: 4,
        price: 3.0,
      }
    }, {
      variables: {
        sep: " - "
      }
    })

    expect(result).toEqual({
      id: 1,
      balance: 23,
      transaction: {
        description: "test",
        id: 3,
      },
      product: {
        id: 4,
        price: 3.0,
        label: "4 - $3.00",
      }
    })
  })

  it ("access", () => {
    const { apply, errors } = qmap(`{
      id: primary.transaction.id,
      providers: primary.transaction.providers.id,
      related_ids: related_transactions.id,
      related_providers: related_transactions.providers { id },
      related_transactions.providers.id
    }`)

    expect(errors).toBeFalsy()

    const result = apply({
      primary: {
        transaction: {
          id: 1,
          providers: [{ id: 22 }, { id: 33 }],
          description: "transaction 1",
        }
      },
      related_transactions: [
        { id: 1, providers: [{ id: 1 }, { id: 2 }] },
        { id: 2, providers: [{ id: 3 }, { id: 4 }] },
      ]
    })

    expect(result).toEqual({
      id: 1,
      providers: [22, 33],
      related_ids: [1, 2],
      related_providers: [[{ id: 1 }, { id: 2 }], [{ id: 3 }, { id: 4 }]],
      related_transactions_providers_id: [[1, 2], [3, 4]]
    })
  })

  it ("global access", () => {
    const input = {
      provider: {
        id: 1,
        name: "qmap"
      },
      product: {},
      product_id: 2,
      product_name: "package"
    }

    const input_array = [
      input,
      {
        ...input,
        product_name: "package2",
        product_id: 3
      }
    ]

    const { apply, errors } = qmap(`{
      product {
        id: &.product_id,
        name: &.product_name,
        provider: &.provider.name
      }
    }`)

    expect(errors).toBeFalsy()

    const result = apply(input)

    expect(result).toEqual({
      product: {
        id: 2,
        name: "package",
        provider: "qmap"
      }
    })

    const result2 = apply(input_array)

    expect(result2).toEqual([
      {
        product: {
          id: 2,
          name: "package",
          provider: "qmap"
        }
      },
      {
        product: {
          id: 3,
          name: "package2",
          provider: "qmap"
        }
      },
    ])
  })

  it ("for each - function", () => {
    const { apply, errors } = qmap("{ names: [upperCase([concat(names, salt)])] }")

    expect(errors).toBeFalsy()

    const result = apply({
      names: ["a", "b", "c"],
      salt: "!"
    })

    expect(result).toEqual({
      names: ["A!", "B!", "C!"]
    })
  })

  it ("enhancement map function", () => {
    const { apply, errors } = qmap(`{
      labels: concat(name, @[label(@[ids])])
    }`)

    expect(errors).toBeFalsy()

    const result = apply({
      name: "pedro",
      ids: [1,2,3,4]
    })

    expect(result).toEqual({
      labels: [
        "pedro: 1",
        "pedro: 2",
        "pedro: 3",
        "pedro: 4"
      ]
    })
  })

  it ("spread", () => {
    const qmap = qmapCreator()

    const query = `{
      user {
        id, name
      },
      family {
        ...user,
        role
      }
    }`

    const { apply, errors } = qmap(query)

    expect(errors).toBeFalsy()

    const input = {
      user: {
        id: 2,
        name: "John",
        age: 22
      },
      family: [
        {
          id: 3,
          name: "John",
          role: "father",
          age: 49
        },
        {
          id: 4,
          name: "Julia",
          role: "mother",
          age: 48
        }
      ]
    }

    const expected = {
      user: {
        id: 2,
        name: "John",
      },
      family: [
        {
          id: 3,
          name: "John",
          role: "father",
        },
        {
          id: 4,
          name: "Julia",
          role: "mother",
        }
      ]
    }

    expect(apply(input)).toEqual(expected)
  })

  it("complex", () => {
    const { apply, errors } = qmap(`{
      product {
        id, upperCase(name)
      },
      transaction {
        id, desc: description
      },
      take(ids, @n)
    }`)

    expect(errors).toBeFalsy()

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

  it("schema can transform data", () => {
    const qmapFn = qmapCreator({
      extends: qmap,
      schemas: `{
        client {
          ...,
          !product,
          product.id,
          product.name,
          product.price,
        }
      }`
    })

    const schema = "client"
    const { apply,  errors } = qmapFn("", { schema })
    expect(errors).toBeFalsy()

    const transaction = {
      id: 1,
      description: "test",
      product: {
        id: 1,
        name: "shirt",
        price: 10.5,
        description: "color: blue"
      }
    }

    expect(apply(transaction)).toEqual({
      id: 1,
      description: "test",
      product_name: "shirt",
      product_price: 10.5,
      product_id: 1
    })
  })
})
