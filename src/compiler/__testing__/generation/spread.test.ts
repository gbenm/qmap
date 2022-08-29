import { compile, QueryType, QueryNode } from "@qmap/compiler"
import { checkHideNode, checkSelectQueryNode, mustNotHaveAlias } from "../asserts"
import { getDefinitions, numberOfKeysMustBe } from "../utils"

describe("Include all", () => {
  test("simple", () => {
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

  test("after select", () => {
    const { definitions, descriptor } = compile("{ product, ... }")

    expect(definitions.length).toBe(2)

    const [ productQuery, allQuery ] = definitions

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

  test("exclude before all", () => {
    const { descriptor } = compile("{ !name, ... }")

    expect(descriptor).toEqual({
      index: {},
      all: true,
    })
  })
})

test("Implicit root", () => {
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

test("Explicit root", () => {
  const { definitions, descriptor } = compile(`{
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

  expect(definitions.length).toBe(2)

  const [ targetNode, pubNode ] = definitions

  checkSelectQueryNode(targetNode, {
    name: "target",
    consumer(definitions) {
      expect(definitions.length).toBe(1)
      checkSelectQueryNode(definitions[0], { name: "name" })
    }
  })

  checkSelectQueryNode(pubNode, {
    name: "pub",
    consumer(definitions) {
      expect(definitions.length).toBe(2)

      const [ target, person ] = definitions
      checkSelectQueryNode(target, {
        name: "target",
        consumer(definitions) {
          expect(definitions.length).toBe(1)
          checkSelectQueryNode(definitions[0], { name: "person" })
        }
      })

      checkSelectQueryNode(person, {
        name: "person",
        consumer(definitions) {
          expect(definitions.length).toBe(1)
          checkSelectQueryNode(definitions[0], { name: "name" })
        }
      })
    }
  })

  expect(descriptor).toMatchObject({
    index: {
      target: {
        index: {
          name: { index: {} }
        }
      },
      pub: {
        index: {
          target: {
            index: {
              person: { index: {} }
            }
          },
          person: {
            index: {
              name: { index: {} }
            }
          }
        }
      }
    }
  })
})

test("Scope", () => {
  const { definitions, descriptor } = compile(`{
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

  expect(definitions.length).toBe(2)

  const [ targetNode, pubNode ] = definitions

  checkSelectQueryNode(targetNode, {
    name: "target",
    consumer(definitions) {
      expect(definitions.length).toBe(1)
      checkSelectQueryNode(definitions[0], { name: "name" })
    }
  })

  checkSelectQueryNode(pubNode, {
    name: "pub",
    consumer(definitions) {
      expect(definitions.length).toBe(2)

      const [ target, person ] = definitions
      checkSelectQueryNode(target, {
        name: "target",
        consumer(definitions) {
          expect(definitions.length).toBe(1)
          checkSelectQueryNode(definitions[0], { name: "age" })
        }
      })

      checkSelectQueryNode(person, {
        name: "person",
        consumer(definitions) {
          expect(definitions.length).toBe(1)
          checkSelectQueryNode(definitions[0], { name: "age" })
        }
      })
    }
  })

  expect(descriptor).toMatchObject({
    index: {
      target: {
        index: {
          name: { index: {} }
        }
      },
      pub: {
        index: {
          target: {
            index: {
              age: { index: {} }
            }
          },
          person: {
            index: {
              age: { index: {} }
            }
          }
        }
      }
    }
  })
})

test ("extended mode", () => {
  const query = `{
    another {
      target {
        name
      }
    },
    dst {
      ...another.target
    }
  }`

  const { definitions, descriptor } = compile(query, { mode: "extended" })

  expect(definitions.length).toBe(2)

  const [ targetNode, dstNode ] = definitions

  checkSelectQueryNode(targetNode, {
    name: "another",
    consumer(definitions) {
      expect(definitions.length).toBe(1)
      checkSelectQueryNode(definitions[0], {
        name: "target",
        consumer(definitions) {
          expect(definitions.length).toBe(1)
          checkSelectQueryNode(definitions[0], { name: "name" })
        }
      })
    }
  })

  checkSelectQueryNode(dstNode, {
    name: "dst",
    consumer(definitions) {
      expect(definitions.length).toBe(1)
      expect(definitions[0]).toMatchObject({
        type: QueryType.SPREAD,
        keys: ["another", "target"],
      })
      checkSelectQueryNode(definitions[0]["node"], {
        name: "target",
        consumer(definitions) {
          expect(definitions.length).toBe(1)
          checkSelectQueryNode(definitions[0], { name: "name" })
        }
      })
    }
  })

  expect(descriptor).toEqual({
    index: {
      another: {
        index: {
          target: {
            index: {
              name: { index: {}, all: true }
            }
          }
        }
      },
      dst: {
        index: {
          name: {
            index: {},
            all: true
          }
        }
      }
    }
  })
})

test("hide nodes", () => {
  const { errors, descriptor, definitions } = compile(`/*qmap*/{
    ~common {
      id, name
    },
    user {
      ...common
    }
  }`)

  expect(errors).toEqual([])

  expect(definitions.length).toBe(2)
  checkHideNode(definitions[0], {
    name: "common",
    consumer(defs) {
      expect(defs.length).toBe(2)
      checkSelectQueryNode(defs[0], { name: "id" })
      checkSelectQueryNode(defs[1], { name: "name" })
    }
  })

  checkSelectQueryNode(definitions[1], {
    name: "user",
    consumer(defs) {
      expect(defs.length).toBe(2)
      checkSelectQueryNode(defs[0], { name: "id" })
      checkSelectQueryNode(defs[1], { name: "name" })
    }
  })

  expect(descriptor).toEqual({
    index: {
      user: {
        index: {
          id: { index: {}, all: true },
          name: { index: {}, all: true }
        }
      }
    }
  })
})

