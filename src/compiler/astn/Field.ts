import { ASTNode, SymbolTable, QueryNode } from ".."
import { QueryType } from "../query.types"

export class Field implements ASTNode {
  constructor (public accessKeys: string[], public nodes: ASTNode[] | null) { }

  generate(parentTable: SymbolTable): QueryNode {
    const [primaryId, ...otherIds] = this.accessKeys

    if (otherIds.length === 0) {
      const table = parentTable.enterTo(primaryId)
      const definitions = this.nodes?.map(node => node.generate(table)) ?? []

      const selectNode = {
        type: QueryType.SELECT,
        name: primaryId,
        definitions
      }

      parentTable.add(primaryId, selectNode)

      return selectNode
    }

    parentTable.addToIndex(primaryId, ...otherIds)
    const table = parentTable.createScope()
    const definitions = this.nodes?.map(node => node.generate(table)) ?? []

    return {
      type: QueryType.ACCESS,
      alias: this.accessKeys.join("_"),
      keys: this.accessKeys,
      definitions
    }
  }
}
