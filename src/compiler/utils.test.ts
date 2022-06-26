import { QueryNode, QueryType } from "./query.types"
import {
  searchQueryNode,
} from "./utils"

describe("Utils", () => {
  it("search node", () => {
    const nameQueryNode: QueryNode = {
      type: QueryType.SELECT,
      name: "name",
      definitions: []
    }

    const familyQueryNode: QueryNode = {
      type: QueryType.SELECT,
      name: "Family",
      alias: "family",
      definitions: []
    }

    const personNode: QueryNode = {
      type: QueryType.SELECT,
      name: "person",
      definitions: [
        nameQueryNode,
        familyQueryNode
      ]
    }

    const node: QueryNode = {
      type: QueryType.SELECT,
      name: "test",
      definitions: [ personNode ]
    }

    const result1 = searchQueryNode(node, ["person", "name"])
    expect(result1).toEqual(nameQueryNode)

    const result2 = searchQueryNode(node, ["person", "Name"])
    expect(result2).toBeFalsy()

    const result3 = searchQueryNode(node, ["person", "family"])
    expect(result3).toEqual(familyQueryNode)

    const result4 = searchQueryNode(node, ["person", "Family"])
    expect(result4).toEqual(familyQueryNode)
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
