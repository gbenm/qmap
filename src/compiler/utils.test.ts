import {
  getQmapCtx,
  mergeObjects,
  mergeQmapCtx,
  mergeQmapJsonWithCtx,
  qmapCTXKey,
  wrapQmapCtx,
  wrapQmapJsonCtx
} from "./utils"

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
    expect(json[qmapCTXKey]).toMatchObject(ctx)
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

    expect(result).toMatchObject(expected)
    expect(getQmapCtx(result)).toMatchObject(ctx)
  })

  it("get ctx", () => {
    const ctxFromJson = getQmapCtx(json)

    expect(ctxFromJson).toMatchObject(ctx)
  })

  it("merge ctx", () => {
    const expected = wrapQmapCtx({
      ...ctx,
      ...ctx2
    })

    const merged = mergeQmapCtx(json, json2)

    expect(getQmapCtx(expected)).toMatchObject(getQmapCtx(merged))
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

    expect(result).toMatchObject(expected)
    expect(getQmapCtx(result)).toMatchObject({
      ...ctx,
      ...ctx2
    })
  })

  it("merge objects", () => {
    const merged = mergeObjects(
      {
        person: {
          name: "John",
          father: {
            name: "Pete"
          }
        }
      },
      {
        person: {
          age: 20,
          father: {
            age: 40
          }
        }
      }
    )

    expect(merged).toMatchObject({
      person: {
        name: "John",
        age: 20,
        father: {
          name: "Pete",
          age: 40
        }
      }
    })

    expect(mergeObjects([1,2], [3,4])).toMatchObject([1,2,3,4])
    expect(mergeObjects({}, 3)).toMatchObject({})
    expect(mergeObjects(3, {})).toBe(3)
    expect(mergeObjects({ array: [1,2] }, { array: [3,4] })).toMatchObject({
      array: [1,2,3,4]
    })
  })
})

describe("Jest", () => {
  describe("objects", () => {
    it("simple", () => {
      expect({ name: "John", age: 40 }).toMatchObject({ name: "John", age: 40 })
    })

    it("order", () => {
      expect({ age: 40, name: "John" }).toMatchObject({ name: "John", age: 40 })
    })

    it("complex", () => {
      expect({
        name: { first: "John", last: "Doe" },
        friends: [
          { name: "Jane", age: 30 },
          { name: "Bob", age: 20 },
          { name: "Alice", age: 25 }
        ]
      }).toMatchObject({
        name: { first: "John", last: "Doe" },
        friends: [
          { name: "Jane", age: 30 },
          { name: "Bob", age: 20 },
          { name: "Alice", age: 25 }
        ]
      })
    })
  })
})
