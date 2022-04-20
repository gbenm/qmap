import { expect, use } from "chai"
import deepEqualInAnyOrder from "deep-equal-in-any-order"

import { compile } from "."
import { getQmapCtx, qmapCtxWrap } from "./utils"

use(deepEqualInAnyOrder)

const jsonWithRoot = (body: unknown, name?: string) => {
  if (name) {
    return {
      [name]: body,
      named: true
    }
  }
  return {
    "root": body,
    named: false
  }
}

describe("root query", () => {
  it("empty query", () => {
    const queries = ["", " ", "\t", "\n", "\n\r\n"]

    queries.forEach((query) => {
      const json = compile(query)

      expect(json).to.deep.equalInAnyOrder({
        root: {},
        named: false
      })
    })
  })

  it("without root name", () => {
    const queries = ["{}", "\n{\n}\n"]

    queries.forEach((query) => {
      const json = compile(query)

      expect(json).to.deep.equalInAnyOrder({
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

      expect(json).to.deep.equalInAnyOrder({
        [name]: {},
        named: true
      })
    })
  })
})

describe("fields", () => {
  it("access", () => {
    const json = compile("{ transaction.product.name }")

    expect(json).to.deep.equalInAnyOrder(jsonWithRoot({
      transaction: {
        ...qmapCtxWrap({
          $qmap_keys: ["product", "name"]
        })
      }
    }))
  })

  it("access with query", () => {
    const json = compile("{ transaction.product { name } }")

    expect(json).to.deep.equalInAnyOrder(jsonWithRoot({
      transaction: {
        ...qmapCtxWrap({
          $qmap_keys: ["product"]
        }),
        name: {}
      }
    }))
  })

  it("nested", () => {
    const json = compile("{ transaction { product {id, name} } }")

    expect(json).to.deep.equalInAnyOrder(jsonWithRoot({
      transaction: {
        product: {
          id: {},
          name: {}
        }
      }
    }))
  })
})
