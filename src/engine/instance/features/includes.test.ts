import { qmapCreator } from "@qmap/engine/creator"

test("empty", () => {
  const qmap = qmapCreator()

  const { includes } = qmap("")
  expect(includes(["any"])).toBe(true)
})

test("simple", () => {
  const qmap = qmapCreator()

  const { includes } = qmap("{id, name, age}")

  expect(includes(["id"])).toBe(true)
  expect(includes(["name"])).toBe(true)
  expect(includes(["age"])).toBe(true)
  expect(includes(["other"])).toBe(false)
})

test("select", () => {
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

test("rename", () => {
  const qmap = qmapCreator()

  const { includes } = qmap("{ name: Name }")

  expect(includes(["Name"])).toBe(true)
  expect(includes(["name"])).toBe(false)
})

test("new object", () => {
  const qmap = qmapCreator()

  const { includes } = qmap(`{
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

test("access", () => {
  const qmap = qmapCreator()

  const { includes } = qmap("{ product.id }")

  expect(includes(["product"])).toBe(true)
  expect(includes(["product", "id"])).toBe(true)
  expect(includes(["product", "id", "any"])).toBe(true)
})

test("global access", () => {
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

test("function", () => {
  const qmap = qmapCreator()

  const { includes } = qmap("{ foo(name, id) }")
  expect(includes(["name"])).toBe(true)
  expect(includes(["id"])).toBe(true)
})

test("function with select", () => {
  const qmap = qmapCreator()

  const { includes } = qmap("{ foo(product {id, name}) }")
  expect(includes(["product"])).toBe(true)
  expect(includes(["product", "id"])).toBe(true)
  expect(includes(["product", "name"])).toBe(true)
  expect(includes(["product", "other"])).toBe(false)
})

test("function with access", () => {
  const qmap = qmapCreator()

  const { includes } = qmap("{ foo(product.id) }")
  expect(includes(["product"])).toBe(true)
  expect(includes(["product", "id"])).toBe(true)
  expect(includes(["product", "id", "any"])).toBe(true)
  expect(includes(["product", "any"])).toBe(false)
})

test ("function's return doesn't affect index", () => {
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

test("exclude", () => {
  const qmap = qmapCreator()

  const { includes } = qmap("{ ..., !name }")

  expect(includes(["name"])).toBe(false)
  expect(includes(["other"])).toBe(true)
})

test("spread", () => {
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

  test ("without query", () => {
    const schema = "admin"
    const { includes } = qmap("", { schema })
    expect(includes(["product"])).toBe(true)
    expect(includes(["product", "id"])).toBe(true)
    expect(includes(["product", "name"])).toBe(true)
    expect(includes(["product", "other"])).toBe(false)
  })

  test ("with query", () => {
    const schema = "user"
    const { includes } = qmap("{ product { id } }", { schema })
    expect(includes(["product"])).toBe(true)
    expect(includes(["product", "id"])).toBe(false)
  })

  test("Can transform data schemas", () => {
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

  test ("without query", () => {
    const { includes } = qmap("product_compact")
    expect(includes(["id"])).toBe(true)
    expect(includes(["name"])).toBe(true)
    expect(includes(["other"])).toBe(false)
  })

  test ("with query", () => {
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
    test ("without select", () => {
      const { includes } = qmap("product_compact", { schema })
      expect(includes(["product"])).toBe(true)
      expect(includes(["product", "id"])).toBe(true)
      expect(includes(["transaction"])).toBe(false)
      expect(includes(["transaction", "name"])).toBe(false)
    })

    test ("with select", () => {
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
    test ("without select", () => {
      const { includes } = qmap("product_compact", { schema })
      expect(includes(["product"])).toBe(true)
      expect(includes(["product", "id"])).toBe(false)
      expect(includes(["transaction"])).toBe(false)
      expect(includes(["transaction", "name"])).toBe(false)
    })

    test ("with select", () => {
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

  test ("admin schema", () => {
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

  test ("client schema", () => {
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

describe ("multi includes and excludes", () => {
  test ("select", () => {
    const qmap = qmapCreator()

    const { includes, errors } = qmap(`{
      products_header: products {
        id, name
      },
      products_body: products {
        ...,
        !id,
        !name
      }
    }`)

    expect(errors).toBeFalsy()
    expect(includes(["products"])).toBe(true)
    expect(includes(["products", "id"])).toBe(true)
    expect(includes(["products", "name"])).toBe(true)
    expect(includes(["products", "any"])).toBe(true)
    expect(includes(["any"])).toBe(false)
  })

  test ("simple all", () => {
    const qmap = qmapCreator()

    const { includes, errors } = qmap(`{
      lawyer: person {
        ...,
        !height,
        !weight,
        !age
      },
      person {
        ...,
        !grade,
        !college_number,
        !age
      }
    }`)

    expect(errors).toBeFalsy()
    expect(includes(["person"])).toBe(true)
    expect(includes(["person", "any"])).toBe(true)
    expect(includes(["person", "height"])).toBe(true)
    expect(includes(["person", "weight"])).toBe(true)
    expect(includes(["person", "age"])).toBe(false)
    expect(includes(["person", "grade"])).toBe(true)
    expect(includes(["person", "college_number"])).toBe(true)
    expect(includes(["any"])).toBe(false)
  })

  test ("complex", () => {
    const qmap = qmapCreator()

    const { includes, errors } = qmap(`{
      lawyer: person {
        ...,
        !height,
        !weight,
        !age,
        parent {
          ...,
          !height,
          !weight,
          !age,
        }
      },
      doctor: person {
        ...,
        !height,
        !age,
        parent {
          ...,
          !height,
          !age,
        }
      },
      person {
        ...,
        !grade,
        !college_number,
        !age,
        parent {
          ...,
          !grade,
          !college_number,
          !age
        }
      }
    }`)

    expect(errors).toBeFalsy()
    expect(includes(["person"])).toBe(true)
    expect(includes(["person", "any"])).toBe(true)
    expect(includes(["person", "height"])).toBe(true)
    expect(includes(["person", "weight"])).toBe(true)
    expect(includes(["person", "age"])).toBe(false)
    expect(includes(["person", "grade"])).toBe(true)
    expect(includes(["person", "college_number"])).toBe(true)
    expect(includes(["any"])).toBe(false)


    expect(includes(["person", "parent"])).toBe(true)
    expect(includes(["person", "parent", "any"])).toBe(true)
    expect(includes(["person", "parent", "height"])).toBe(true)
    expect(includes(["person", "parent", "weight"])).toBe(true)
    expect(includes(["person", "parent", "age"])).toBe(false)
    expect(includes(["person", "parent", "grade"])).toBe(true)
    expect(includes(["person", "parent", "college_number"])).toBe(true)
  })
})

test("hide node", () => {
  const qmap = qmapCreator()

  const { includes, errors } = qmap(`{
    ~common {
      id, name
    },
    user {
      ...common
    }
  }`)

  expect(errors).toBeFalsy()
  expect(includes(["common"])).toBe(false)
  expect(includes(["any"])).toBe(false)
  expect(includes(["user"])).toBe(true)
  expect(includes(["user", "id"])).toBe(true)
  expect(includes(["user", "name"])).toBe(true)
  expect(includes(["user", "any"])).toBe(false)
})

test("ignore index", () => {
  const qmap = qmapCreator()
  const { includes, errors } = qmap("{ id, name }", { ignoreIndex: true })
  expect(errors).toBeFalsy()
  expect(includes(["id"])).toBe(false)
  expect(includes(["name"])).toBe(false)
})
