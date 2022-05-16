import { ASTNode, SymbolTable, rootScope, QueryNode, CommonNamedQueryNode, QueryType, CompilerConfig } from ".."
import { allQuery } from "../SymbolTable"

function searchQueryNode(node: CommonNamedQueryNode, path: string[]): QueryNode | undefined {
  if (path.length === 0) {
    return node
  }

  const [key, ...rest] = path
  const children = node.definitions
    .map(node => node as CommonNamedQueryNode)
    .filter(d => d.name === key)

  for (const child of children) {
    const result = searchQueryNode(child, rest)

    if (result) {
      return result
    }
  }
}

export class Spread implements ASTNode {
  constructor (public ids: (string | symbol)[]) {}

  generate ({ mode }: CompilerConfig, parentTable: SymbolTable): QueryNode {
    if(!this.ids || this.ids.length === 0) {
      parentTable.addToIndex(allQuery)
      return {
        type: QueryType.ALL,
      }
    }

    const [primaryId, ...othersIds] = this.ids

    if (primaryId === rootScope) {
      const [key, ...rest] = othersIds
      const [value, path] = parentTable.lookup(key as string, rootScope)

      if (!value) {
        throw new Error(`Cannot find ${key as string} in root scope`)
      }

      const queryNode = searchQueryNode(value as CommonNamedQueryNode, rest as string[])

      if (!queryNode) {
        throw new Error(`Cannot find ${othersIds.join(".")} in root scope`)
      }

      parentTable.copyIndexFrom(...(path || []), key as string, ...rest as string[])

      if (mode === "extended") {
        return {
          type: QueryType.SPREAD,
          node: queryNode
        }
      }

      return queryNode
    } else {
      const [value, path] = parentTable.lookup(primaryId as string)

      if (!value) {
        throw new Error(`Cannot find ${primaryId as string} in scope`)
      }

      const queryNode = searchQueryNode(value as CommonNamedQueryNode, othersIds as string[])

      if (!queryNode) {
        throw new Error(`Cannot find ${this.ids.join(".")} in scope`)
      }

      parentTable.copyIndexFrom(...(path || []), primaryId as string, ...othersIds as string[])

      if (mode === "extended") {
        return {
          type: QueryType.SPREAD,
          node: queryNode
        }
      }

      return queryNode
    }
  }
}
