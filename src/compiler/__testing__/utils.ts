import { FnQueryNode, QueryNode } from "../query.types"

export function getDefinitions (node: QueryNode, consumer: (definitions: QueryNode[]) => void) {
  expect(node["definitions"]).toBeTruthy()
  consumer(node["definitions"])
}

export function overIndexDefinitions (node: QueryNode, consumer: (definitions: QueryNode[]) => void) {
  expect(node["indexDefinitions"]).toBeTruthy()
  consumer(node["indexDefinitions"])
}

export function getArgs (node: FnQueryNode, consumer: (args: QueryNode[]) => void) {
  expect(node.args).toBeTruthy()
  consumer(node.args)
}

export function forEachDefinition(node: QueryNode, visitor: (node: QueryNode, index: number, nodes: QueryNode[]) => void) {
  getDefinitions(node, definitions => definitions.forEach(visitor))
}

export function numberOfKeysMustBe(obj: object, quantity: number) {
  expect(Object.keys(obj).length).toBe(quantity)
}
