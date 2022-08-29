import { FnQueryNode, QueryNode, QueryType } from "../query.types"
import { getArgs, getDefinitions, overIndexDefinitions } from "./utils"

export function mustNotHaveName(node: QueryNode) {
  expect(node["name"]).toBeFalsy()
}

export function mustNotHaveAlias(node: QueryNode) {
  expect(node["alias"]).toBeFalsy()
}

export function checkPrimitiveNode(node: QueryNode, val: unknown) {
  expect(node).toEqual({
    type: QueryType.PRIMITIVE,
    val,
    name: typeof val
  })
}

export function checkOnResultNode(node: QueryNode, {
  alias, checkNode
}: { alias: string, checkNode: (node: QueryNode) => void, }) {
  expect(node.type).toBe(QueryType.ON_RESULT)
  expect(node["alias"]).toBe(alias)
  checkNode(node["node"])
}

export function checkFunctionQueryNode(node: QueryNode, {
  name,
  alias,
  consumer,
  checkReturn,
  clientFn = false,
  arrayPosition
}: {
  name: string,
  alias: string,
  clientFn?: boolean,
  arrayPosition?: number,
  consumer: (args: QueryNode[]) => void,
  checkReturn?: (definitions: QueryNode[]) => void
}) {
  const expected = {
    type: clientFn ? QueryType.CLIENT_FUNCTION : QueryType.FUNCTION,
    name,
    alias,
    arrayPosition
  }

  expect(node).toMatchObject(expected)
  getArgs(node as FnQueryNode, consumer)

  const defaultReturnChecker = (defs: QueryNode[]) => expect(defs).toEqual([])
  getDefinitions(node, checkReturn ?? defaultReturnChecker)
}


export function checkHideNode(node: QueryNode, {
  name,
  consumer,
}: { name: string, consumer?: (definitions: QueryNode[]) => void }) {
  const nodeWithoutDefs = { ...node }
  delete nodeWithoutDefs["definitions"]

  expect(nodeWithoutDefs).toEqual({
    type: QueryType.HIDE,
    name
  })

  if (consumer) {
    getDefinitions(node, consumer)
  } else {
    getDefinitions(node, (defs) => expect(defs.length).toBe(0))
  }
}

export function checkSelectQueryNode(node: QueryNode, {
  name,
  alias,
  consumer,
  indexDefinitions
}: { name: string, alias?: string, consumer?: (definitions: QueryNode[]) => void, indexDefinitions?: boolean }) {
  const expected = {
    type: QueryType.SELECT,
    name,
  }

  if (!alias) {
    mustNotHaveAlias(node)
  } else {
    expected["alias"] = alias
  }

  if (!consumer) {
    expected["definitions"] = []
  }

  expect(node).toMatchObject(expected)

  if (consumer) {
    if (indexDefinitions) {
      overIndexDefinitions(node, consumer)
    } else {
      getDefinitions(node, consumer)
    }
  }
}

export function checkNewObjectQueryNode(node: QueryNode, {
  alias,
  consumer
}: { alias: string, consumer?: (definitions: QueryNode[]) => void }) {
  expect(node.type).toBe(QueryType.NEW_OBJECT)
  expect(node["alias"]).toBe(alias)

  if (!consumer) {
    expect(node["definitions"]).toEqual([])
  } else {
    getDefinitions(node, consumer)
  }

  mustNotHaveName(node)
}

export function checkAccessQueryNode(node: QueryNode, {
  keys,
  alias,
  isGlobal = false,
  indexDefinitions,
  consumer
}: { keys: string[], alias?: string, isGlobal?: boolean, consumer?: (definitions: QueryNode[]) => void, indexDefinitions?: boolean}) {
  const expected = {
    type: isGlobal? QueryType.GLOBAL_ACCESS : QueryType.ACCESS,
    alias: alias || keys.join("_"),
    keys,
  }

  if (!consumer) {
    expected["definitions"] = []
  }

  expect(node).toMatchObject(expected)

  if (consumer) {
    if (indexDefinitions) {
      overIndexDefinitions(node, consumer)
    } else {
      getDefinitions(node, consumer)
    }
  }

  mustNotHaveName(node)
}
