import { ASTNode, SymbolTable, QueryNode, CompilerConfig, QueryType } from ".."

export class Field implements ASTNode {
  constructor (public accessKeys: string[], public nodes: ASTNode[] | null) { }

  generate(config: CompilerConfig, parentTable: SymbolTable): QueryNode {
    const [primaryId, ...otherIds] = this.accessKeys

    const table = parentTable.enterTo(primaryId, ...otherIds)
    const definitions = this.nodes?.map(node => node.generate(config, table)) ?? []

    if (otherIds.length === 0) {
      const selectNode = {
        type: QueryType.SELECT,
        name: primaryId,
        definitions
      }

      parentTable.add(primaryId, selectNode)

      return selectNode
    }

    return {
      type: QueryType.ACCESS,
      alias: this.accessKeys.join("_"),
      keys: this.accessKeys,
      definitions
    }
  }
}
