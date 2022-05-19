import { qmapCreator } from "./creator"

describe("includes", () => {
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
})
