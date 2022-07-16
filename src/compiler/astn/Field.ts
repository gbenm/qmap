import { ASTNode, SymbolTable, QueryNode, CompilerConfig, QueryType, SelectQueryNode } from ".."
import { buildDefinitionsFromASTNodes } from "../utils"
import { Spread } from "./Spread"

export class Field implements ASTNode {
  public globalAccess = false

  constructor (public accessKeys: string[], public nodes?: ASTNode[]) { }

  generate(config: CompilerConfig, parentTable: SymbolTable): QueryNode {
    const [primaryId, ...otherIds] = this.accessKeys

    const table = parentTable.createScope()

    const definitions: QueryNode[] = buildDefinitionsFromASTNodes({
      config,
      table,
      nodes: this.nodes
    })

    if(definitions.length === 0) {
      // sets all flag to true
      new Spread([]).generate(config, table)
    }

    if (this.globalAccess) {
      return {
        type: QueryType.GLOBAL_ACCESS,
        alias: this.accessKeys.join("_"),
        keys: this.accessKeys,
        definitions
      }
    }

    if (otherIds.length === 0) {
      const selectNode: SelectQueryNode = {
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
