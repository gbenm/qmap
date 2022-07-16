import { ASTNode } from "../ASTNode"
import { CompilerConfig } from "../config"
import { QueryNode, QueryType } from "../query.types"
import { SymbolTable } from "../SymbolTable"

export class OnResult implements ASTNode {
  constructor (private node: ASTNode) { }

  generate(config: CompilerConfig, parentTable: SymbolTable): QueryNode {
    const table = parentTable.createScope()

    const node = this.node.generate(config, table) as (QueryNode & { alias?: string, name?: string })

    const alias = node.alias ?? node.name

    if (!alias) {
      throw new Error("OnResultQuery: The child node must have an alias or a name")
    }

    return {
      type: QueryType.ON_RESULT,
      node,
      alias
    }
  }
}
