import { qmapCreator } from "@qmap/engine/creator"

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
    },
    createLabels({ id, name }) {
      return `id: ${id} name: ${name}`
    }
  }
})

describe ("over option", () => {
  test("empty", () => {
    const { apply, errors } = qmap("{ id, name }")
    expect(errors).toBeFalsy()

    const result = apply({
      id: 3,
      name: "Test"
    }, { over: [] })

    expect(result).toEqual({
      id: 3,
      name: "Test"
    })
  })

  test ("simple", () => {
    const { apply, errors } = qmap("{ id, name }")
    expect(errors).toBeFalsy()

    const result = apply({
      data: {
        id: 3,
        name: "Test"
      }
    }, { over: ["data"] })

    result

    expect(result).toEqual({
      data: {
        id: 3,
        name: "Test"
      }
    })
  })

  test("deep", () => {
    const { apply, errors } = qmap("{ id, name }")
    expect(errors).toBeFalsy()

    const result = apply({
      response: {
        data: {
          id: 3,
          name: "Test"
        }
      }
    }, { over: ["response", "data"] })

    expect(result).toEqual({
      data: {
        id: 3,
        name: "Test"
      }
    })
  })
})

test ("nested select", () => {
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

test ("rename", () => {
  const { apply, errors } = qmap(`{
    id: ID
  }`)

  expect(errors).toBeFalsy()

  const result = apply({
    ID: 10
  })

  expect(result).toEqual({
    id: 10
  })
})

test ("select with all and exclude", () => {
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

test ("access", () => {
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

test ("global access", () => {
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

test ("new object", () => {
  const { apply, errors } = qmap(`{
    transaction {
      product: {
        &.provider,
        id: product_id,
        name: product_name
      }
    }
  }`)

  expect(errors).toBeFalsy()

  const result = apply({
    provider: {
      id: 3,
      name: "qmap"
    },
    transaction: {
      id: 100,
      product_id: 1929,
      product_name: "lib"
    }
  })

  expect(result).toEqual({
    transaction: {
      product: {
        provider: {
          id: 3,
          name: "qmap"
        },
        id: 1929,
        name: "lib"
      }
    }
  })
})

describe("on result", () => {
  test ("simple", () => {
    const { apply, errors } = qmap(`{
      products: take(products, @{3}),
      compact_products: %{
        products { id, name }
      },
      %{products.name},
      createLabels(@[%{products}])
    }`)

    expect(errors).toBeFalsy()

    const input = {
      products: (new Array(5).fill(0)).map((_, i) => ({
        id: i,
        name: `product ${i}`,
        price: 10
      })),
    }
    const result = apply(input)

    const resultProducts = input.products.slice(0, 3).map(({ id, name }) => ({ id, name }))

    expect(result).toEqual({
      compact_products: resultProducts,
      products_name: resultProducts.map((product) => product.name),
      products: resultProducts.map(qmap.functions["createLabels"])
    })
  })

  test ("global access", () => {
    const input = {
      salt: "salt",
      transaction: {
        id: 3,
        description: "pretty test"
      }
    }

    const { apply, errors } = qmap(`{
      upperCase(salt),
      transaction {
        id: concat(%{&.salt}, id)
      }
    }`)

    expect(errors).toBeFalsy()

    const result = apply(input)

    expect(result).toEqual({
      salt: "SALT",
      transaction: {
        id: "SALT3"
      }
    })
  })

  test ("compose functions", () => {
    const input = {
      products: (new Array(5).fill(0)).map((_, i) => ({
        id: i,
        name: `product ${i}`,
        price: 10
      })),
    }

    const { apply, errors } = qmap(`{
      product_names: products.name,
      product_names: [ upperCase(take(%{product_names}, @{3})) ]
    }`)

    expect(errors).toBeFalsy()

    const result = apply(input)

    const productNames = input.products.slice(0, 3).map(({ name }) => name.toUpperCase())

    expect(result).toEqual({
      product_names: productNames
    })
  })
})

test ("function", () => {
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

test ("function's return", () => {
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

test ("function with primitive variables", () => {
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

test ("function with global access", () => {
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

test ("for each - function", () => {
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

test ("enhancement map function", () => {
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

test ("spread", () => {
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

test("complex", () => {
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

test("schema can transform data", () => {
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

test ("default schema", () => {
  const qmapWithDefaultSchema = qmapCreator({
    extends: qmap,
    schemas: `{
      user {
        name
      }
    }`,
    defaultSchema: "user"
  })

  const input = {
    id: 3,
    name: "test"
  }

  const { apply, errors } = qmapWithDefaultSchema(null)

  expect(errors).toBeFalsy()
  const result = apply(input)
  expect(result).toEqual({
    name: "test"
  })
})

describe("hide nodes", () => {
  const userInfo = {
    id: 2,
    name: "qmap test",
    age: 23
  }
  const input = {
    other: {
      other: {},
      ...userInfo
    },
    user: userInfo
  }
  test("simple", () => {
    const { apply, errors } = qmap(`{
      ~common {
        id, name
      },
      user {
        ...common
      }
    }`)

    expect(errors).toBeFalsy()

    const result = apply(input)

    expect(result).toEqual({
      user: {
        id: 2,
        name: "qmap test"
      }
    })
  })

  test("scoped", () => {
    const { apply, errors } = qmap(`{
      other {
        other {
          ~common {
            id, name
          }
        },
        ...other.common
      }
    }`)

    expect(errors).toBeFalsy()

    const result = apply(input)

    expect(result).toEqual({
      other: {
        other: {},
        id: 2,
        name: "qmap test"
      }
    })
  })

  test("global", () => {
    const { apply, errors } = qmap(`{
      other {
        ~common {
          id, name
        },
      },
      user {
        ...&.other.common
      }
    }`)

    expect(errors).toBeFalsy()

    const result = apply(input)

    expect(result).toEqual({
      other: input.other,
      user: {
        id: 2,
        name: "qmap test"
      }
    })
  })

  test("deep global", () => {
    const { apply, errors } = qmap(`{
      other {
        other {
          ~common {
            id, name
          },
        }
      },
      user {
        ...other.other.common
      }
    }`)

    expect(errors).toBeFalsy()

    const result = apply(input)

    expect(result).toEqual({
      other: {
        other: {}
      },
      user: {
        id: 2,
        name: "qmap test"
      }
    })
  })
})

