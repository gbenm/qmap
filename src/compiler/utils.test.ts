
import { expect, use } from "chai"
import deepEqualInAnyOrder from "deep-equal-in-any-order"

import { getQmapCtx, mergeQmapCtx, mergeQmapJsonWithCtx, qmapCTXKey, wrapQmapCtx, wrapQmapJsonCtx } from "./utils"

use(deepEqualInAnyOrder)

describe("Utils", () => {
  const ctx = {
    $qmap_test: "test"
  }
  const json = wrapQmapCtx(ctx)

  const ctx2 = {
    $qmap_test2: "test2"
  }

  const json2 = wrapQmapCtx(ctx2)

  it("wrap ctx", () => {
    expect(json[qmapCTXKey]).to.deep.equal(ctx)
  })

  it("wrap json and ctx", () => {
    const json = {
      name: {},
      age: {},
    }
    const expected = {
      name: {},
      age: {},
      [qmapCTXKey]: {
        $qmap_test: "test"
      }
    }

    const result = wrapQmapJsonCtx(json, ctx)

    expect(result).to.deep.equal(expected)
    expect(getQmapCtx(result)).to.deep.equal(ctx)
  })

  it("get ctx", () => {
    const ctxFromJson = getQmapCtx(json)

    expect(ctxFromJson).to.deep.equal(ctx)
  })

  it("merge ctx", () => {
    const expected = wrapQmapCtx({
      ...ctx,
      ...ctx2
    })

    const merged = mergeQmapCtx(json, json2)

    expect(getQmapCtx(expected)).to.deep.equal(getQmapCtx(merged))
  })

  it("merge json with ctx", () => {
    const json_test = {
      ...json,
      name: {},
      age: {}
    }

    const json_test2 = {
      ...json2,
      fist_name: {},
      last_name: {}
    }

    const merged_ctx = wrapQmapCtx({
      ...ctx,
      ...ctx2
    })

    const result = mergeQmapJsonWithCtx(json_test, json_test2)

    const expected = {
      ...json_test,
      ...json_test2,
      ...merged_ctx
    }

    expect(result).to.deep.equalInAnyOrder(expected)
    expect(getQmapCtx(result)).to.deep.equalInAnyOrder({
      ...ctx,
      ...ctx2
    })
  })
})

