import { ASTNode, SymbolTable, QueryNode, CompilerConfig, QueryType } from ".."
import { buildDefinitionsFromASTNodes } from "../utils"

export class Field implements ASTNode {
  constructor (public accessKeys: string[], public nodes: ASTNode[] | null) { }

  generate(config: CompilerConfig, parentTable: SymbolTable): QueryNode {
    const [primaryId, ...otherIds] = this.accessKeys

    const table = parentTable.enterTo(primaryId, ...otherIds)
    const definitions: QueryNode[] = buildDefinitionsFromASTNodes({
      config,
      table,
      nodes: this.nodes
    })

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
