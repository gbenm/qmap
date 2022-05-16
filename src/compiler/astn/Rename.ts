import { ASTNode } from "../ASTNode"
import { CompilerConfig } from "../config"
import { QueryNode, QueryType } from "../query.types"
import { SymbolTable } from "../SymbolTable"

export class Rename implements ASTNode {
  constructor (private alias: string, private node: ASTNode) { }

  setAlias({ mode }: CompilerConfig, query: QueryNode): QueryNode {
    if (mode === "extended") {
      return {
        type: QueryType.RENAME,
        node: query,
        alias: this.alias
      }
    }

    query["alias"] = this.alias
    return query
  }

  generate(config: CompilerConfig, parentTable: SymbolTable): QueryNode {
    const disposableTable = parentTable.createScope()
    return this.setAlias(config, this.node.generate(config, disposableTable))
  }
}
