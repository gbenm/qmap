import { compile, QueryType } from "@qmap/compiler"
import { numberOfKeysMustBe } from "../utils"

test("empty query", () => {
  const queries = [null, undefined, "", " ", "\t", "\n", "\n\r\n"]

  queries.forEach((query: string | undefined | null) => {
    const root = compile(query)

    expect(root).toMatchObject({
      type: QueryType.ROOT,
      descriptor: {},
      errors: [],
      definitions: [],
    })

    numberOfKeysMustBe(root.descriptor.index, 0)
    expect(root.query).toBeFalsy()
  })
})

test("without root name", () => {
  const queries = ["{}", "\n{\n}\n"]

  queries.forEach((query) => {
    const root = compile(query)

    expect(root).toMatchObject({
      type: QueryType.ROOT,
      errors: [],
      definitions: [],
    })

    numberOfKeysMustBe(root.descriptor.index, 0)
    expect(root.query).toBeFalsy()
  })
})

test("with root name", () => {
  const cases = [
    {name: "admin_select", query: "admin_select"},
    {name: "admin_select", query: "\t\nadmin_select "},
    {name: "admin_select", query: "admin_select {}"},
    {name: "admin_select", query: "admin_select {\n}"},
    {name: "admin select", query: "'admin select' {}"},
    {name: "admin select", query: "\"admin select\" {}"},
  ]

  cases.forEach(({query, name}) => {
    const root = compile(query)

    expect(root).toMatchObject({
      query: name,
    })

    numberOfKeysMustBe(root.descriptor.index, 0)
  })
})

