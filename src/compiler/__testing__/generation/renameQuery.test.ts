import { compile } from "@qmap/compiler"
import { QueryType } from "@qmap/compiler/query.types"
import { checkAccessQueryNode, checkFunctionQueryNode, checkSelectQueryNode } from "../asserts"

test("simple", () => {
  const query = "{ name: NAME }"

  const { definitions, descriptor } = compile(query)

  expect(definitions.length).toBe(1)

  checkSelectQueryNode(definitions[0], {
    name: "NAME",
    alias: "name"
  })

  expect(descriptor.index).toMatchObject({
    NAME: { index: {} },
  })
})

test("query", () => {
  const query = "{ agent: person { id, name } }"

  const { definitions, descriptor } = compile(query)

  expect(definitions.length).toBe(1)

  checkSelectQueryNode(definitions[0], {
    name: "person",
    alias: "agent",
    consumer(definitions) {
      expect(definitions.length).toBe(2)
      const [id, name] = definitions
      checkSelectQueryNode(id, { name: "id" })
      checkSelectQueryNode(name, { name: "name" })
    }
  })

  expect(descriptor.index).toMatchObject({
    person: {
      index: {
        id: { index: {} },
        name: { index: {} }
      }
    }
  })
})

test("access", () => {
  const query = "{ id: transaction.id }"

  const { definitions, descriptor } = compile(query)

  expect(definitions.length).toBe(1)

  checkAccessQueryNode(definitions[0], {
    keys: ["transaction", "id"],
    alias: "id"
  })

  expect(descriptor.index).toMatchObject({
    transaction: {
      index: {
        id: { index: {} }
      }
    }
  })
})

test("function", () => {
  const query = "{ full_name: concat(fist_name, last_name) }"

  const { definitions, descriptor } = compile(query)

  expect(definitions.length).toBe(1)

  checkFunctionQueryNode(definitions[0], {
    name: "concat",
    alias: "full_name",
    consumer(args) {
      expect(args.length).toBe(2)
      const [first_name, last_name] = args
      checkSelectQueryNode(first_name, { name: "fist_name" })
      checkSelectQueryNode(last_name, { name: "last_name" })
    }
  })

  expect(descriptor.index).toMatchObject({
    fist_name: { index: {} },
    last_name: { index: {} }
  })
})

test("client function", () => {
  const query = "{ full_name: concat!(fist_name, last_name) }"

  const { definitions, descriptor } = compile(query)

  expect(definitions.length).toBe(1)

  checkFunctionQueryNode(definitions[0], {
    name: "concat",
    alias: "full_name",
    clientFn: true,
    consumer(args) {
      expect(args.length).toBe(2)
      const [first_name, last_name] = args
      checkSelectQueryNode(first_name, { name: "fist_name" })
      checkSelectQueryNode(last_name, { name: "last_name" })
    }
  })

  expect(descriptor.index).toMatchObject({
    fist_name: { index: {} },
    last_name: { index: {} }
  })
})

test("extended mode", () => {
  const query = "{ id: access_number }"

  const { definitions, descriptor } = compile(query, {
    mode: "extended"
  })

  expect(definitions.length).toBe(1)
  expect(definitions[0]).toMatchObject({
    type: QueryType.RENAME,
    alias: "id",
  })

  checkSelectQueryNode(definitions[0]["node"], { name: "access_number" })

  expect(descriptor.index).toMatchObject({
    access_number: { index: {} },
  })
})

