import { ASTNode } from "../ASTNode"
import { CompilerConfig } from "../config"
import { QueryNode, QueryType } from "../query.types"
import { SymbolTable } from "../SymbolTable"
import { buildDefinitionsFromASTNodes } from "../utils"

export class NewObject implements ASTNode {
  constructor (private name: string, private nodes: ASTNode[]) { }

  generate(config: CompilerConfig, parentTable: SymbolTable): QueryNode {
    const table = parentTable.createScope()
    const definitions = buildDefinitionsFromASTNodes({
      config,
      table,
      nodes: this.nodes
    })

    return {
      type: QueryType.NEW_OBJECT,
      alias: this.name,
      definitions
    }
  }
}
