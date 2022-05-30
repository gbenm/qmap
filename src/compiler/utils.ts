import { ASTNode } from "./ASTNode"
import { CompilerConfig } from "./config"
import { Json, QueryNode, QueryType } from "./query.types"
import { SymbolTable } from "./SymbolTable"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function getValue(obj: any, keys: string[], getter = (value: any, key: string) => value[key]): Json {
  let value = obj

  keys.forEach((key) => {
    value = getter(value, key)
  })

  return value
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const isNullable = (obj: any) => obj === null || obj === undefined

/**
 * 1. objects have precedence over primitives, i.e. mergeObject(3, {}) == {}
 * 2. the first object has precedence, .e.g. mergeObject({a: 1}, {a: 2}) == {a: 1}
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const mergeObjects = (obj: any, obj2: any) => {
  if (isNullable(obj)) {
    return obj2
  }

  if (typeof obj !== "object") {
    return obj
  }

  if (typeof obj2 !== "object") {
    return obj
  }

  if (Array.isArray(obj) && Array.isArray(obj2)) {
    return obj.concat(obj2)
  }

  if (Array.isArray(obj)) {
    return obj
  }

  if (Array.isArray(obj2)) {
    return obj
  }

  const keys = Array.from(new Set([...Object.keys(obj), ...Object.keys(obj2)]))

  const result = keys.map((key) => {
    if (isNullable(obj2[key])) {
      return [key, obj[key]]
    }

    return [key, mergeObjects(obj[key], obj2[key])]
  }).reduce((acc, [key, value]) => {
    acc[key] = value
    return acc
  }, {})

  return result
}

export function buildDefinitionsFromASTNodes ({
  config,
  nodes,
  table
}: {
  config: CompilerConfig, nodes: ASTNode[] | null, table: SymbolTable
}): QueryNode[] {
  const definitions: QueryNode[] = []

  nodes?.forEach((child) => {
    const queryNode = child.generate(config, table)

    if (queryNode.type == QueryType.ALL) {
      definitions.unshift(queryNode)
    } else if (queryNode.type === QueryType.SPREAD && config.mode === "compact") {
      definitions.push(...queryNode["node"].definitions)
    } else {
      definitions.push(queryNode)
    }
  })

  return definitions
}
