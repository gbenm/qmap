import { compile } from "@qmap/compiler"
import { checkHideNode, checkSelectQueryNode } from "../asserts"

test("hide node", () => {
  const { descriptor, definitions, errors } = compile("/*qmap*/{ ~common { id, name } }")

  expect(errors).toEqual([])
  expect(definitions.length).toBe(1)

  checkHideNode(definitions[0], {
    name: "common",
    consumer(defs) {
      expect(defs.length).toBe(2)
      checkSelectQueryNode(defs[0], { name: "id" })
      checkSelectQueryNode(defs[1], { name: "name" })
    }
  })

  expect(descriptor).toEqual({
    index: {}
  })
})
