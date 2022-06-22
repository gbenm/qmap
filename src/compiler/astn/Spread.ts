import { ASTNode, SymbolTable, rootScope, QueryNode, CommonNamedQueryNode, QueryType, CompilerConfig, SpreadIds } from ".."
import { allQuery } from "../SymbolTable"
import { searchQueryNode } from "../utils"

export class Spread implements ASTNode {
  constructor (public ids: SpreadIds) {}

  generate (_config: CompilerConfig, parentTable: SymbolTable): QueryNode {
    const isAllQuery = !this.ids || this.ids.length === 0

    return isAllQuery
      ? this.generateAllNode(parentTable)
      : this.generateSpreadNode(parentTable)
  }

  generateAllNode(parentTable: SymbolTable): QueryNode {
    parentTable.addToIndex(allQuery)

    return {
      type: QueryType.ALL,
    }
  }

  generateSpreadNode(parentTable: SymbolTable): QueryNode {
    const [primaryId, ...otherIds] = this.ids

    let node: QueryNode

    if (primaryId === rootScope) {
      node = this.getNodeFromRoot(parentTable, otherIds)
    } else {
      node = this.getNodeFromScope(parentTable, primaryId as string, otherIds)
    }

    return {
      type: QueryType.SPREAD,
      keys: this.ids,
      node
    }
  }

  getNodeFromRoot(parentTable: SymbolTable, ids: string[]): QueryNode {
    const [primaryId, ...otherIds] = ids
    const [node, path] = parentTable.lookup(primaryId, rootScope)

    if (!node) {
      throw new Error(`Cannot find ${primaryId} in root scope`)
    }

    const queryNode = searchQueryNode(node as CommonNamedQueryNode, otherIds)

    if (!queryNode) {
      throw new Error(`Cannot find ${ids.join(".")} in root scope`)
    }

    parentTable.copyIndexFrom(...(path || []), primaryId, ...otherIds)

    return queryNode
  }

  getNodeFromScope(parentTable: SymbolTable, primaryId: string, otherIds: string[]): QueryNode {
    const [node, path] = parentTable.lookup(primaryId as string)

    if (!node) {
      throw new Error(`Cannot find ${primaryId} in scope`)
    }

    const queryNode = searchQueryNode(node as CommonNamedQueryNode, otherIds)

    if (!queryNode) {
      throw new Error(`Cannot find ${this.ids.join(".")} in scope`)
    }

    parentTable.copyIndexFrom(...(path || []), primaryId, ...otherIds)

    return queryNode
  }
}
