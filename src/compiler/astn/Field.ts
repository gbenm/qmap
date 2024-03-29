import { ASTNode, SymbolTable, QueryNode, CompilerConfig, QueryType, SelectQueryNode } from ".."
import { buildDefinitionsFromASTNodes } from "../utils"

export class Field implements ASTNode {
  public globalAccess = false

  constructor (public accessKeys: string[], public nodes?: ASTNode[], public indexSelect = false) { }

  generate(config: CompilerConfig, parentTable: SymbolTable): QueryNode {
    const [primaryId, ...otherIds] = this.accessKeys

    const table = parentTable.createScope()

    const defs: QueryNode[] = buildDefinitionsFromASTNodes({
      config,
      table,
      nodes: this.nodes
    })

    const definitions = this.indexSelect? [] : defs
    const indexDefinitions = this.indexSelect? defs : []

    if (this.globalAccess) {
      return {
        type: QueryType.GLOBAL_ACCESS,
        alias: this.accessKeys.join("_"),
        keys: this.accessKeys,
        definitions,
        indexDefinitions
      }
    }

    if (otherIds.length === 0) {
      const selectNode: SelectQueryNode = {
        type: QueryType.SELECT,
        name: primaryId,
        definitions,
        indexDefinitions
      }

      parentTable.add(primaryId, selectNode)

      return selectNode
    }

    return {
      type: QueryType.ACCESS,
      alias: this.accessKeys.join("_"),
      keys: this.accessKeys,
      definitions,
      indexDefinitions
    }
  }
}
