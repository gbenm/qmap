import { expect, use } from "chai"
import deepEqualInAnyOrder from "deep-equal-in-any-order"

import { compile } from "."
import { getQmapCtx, qmapCtxWrap } from "./utils"

use(deepEqualInAnyOrder)

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
  it("simple", () => {
    const root = compile("{ product }").root
    expect(root).to.deep.equal({
      product: {}
    })
  })

  it("multiple", () => {
    const root = compile("{ first_name, last_name, age, image }").root
    expect(root).to.deep.equal({
      first_name: {},
      last_name: {},
      age: {},
      image: {}
    })
  })

  it("access", () => {
    const { transaction } = compile("{ transaction.product.name }").root

    const expected = {
      ...qmapCtxWrap({
        $qmap_keys: ["product", "name"]
      })
    }

    expect(transaction).to.deep.equalInAnyOrder(expected)
    expect(getQmapCtx(transaction)).to.deep.equalInAnyOrder({
      $qmap_keys: ["product", "name"]
    })
  })

  it("access with query", () => {
    const { transaction } = compile("{ transaction.product { name } }").root

    const expected = {
      ...qmapCtxWrap({
        $qmap_keys: ["product"]
      }),
      name: {}
    }

    expect(transaction).to.deep.equalInAnyOrder(expected)
    expect(getQmapCtx(transaction)).to.deep.equalInAnyOrder({
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

    expect(transaction).to.deep.equalInAnyOrder(expected)
    expect(transaction.product).to.deep.equalInAnyOrder(expected.product)
  })
})

describe("exclude", () => {
  it("simple", () => {
    const { name } = compile("{ !name }").root
    const ctx = qmapCtxWrap({
      $qmap_exclude: true
    })

    expect(name).to.deep.equalInAnyOrder(ctx)
  })
})
