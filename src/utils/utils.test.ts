import { mergeObjects, getValue, range } from "."

describe("utils", () => {
  it ("get values", () => {
    const obj = {
      primary: {
        transaction: {
          id: 1,
          providers: [
            { id: 1, name: "provider 1" },
            { id: 2, name: "provider 2" },
          ]
        }
      }
    }

    expect(getValue(obj, [])).toEqual(obj)
    expect(getValue(obj, ["primary"])).toEqual(obj.primary)
    expect(getValue(obj, ["primary", "transaction"])).toEqual(obj.primary.transaction)
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
    const arg1 = {
      flag: true,
      name: "John"
    }
    const arg2 = {
      flag: false,
      name: "Pete"
    }
    expect(mergeObjects(arg1, arg2)).toEqual(arg1)
  })

  test("range", () => {
    const expected = [0, 1, 2, 3, 4]
    expect(range(5)).toEqual(expected)
    expect(range(0, 4)).toEqual(expected)
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
