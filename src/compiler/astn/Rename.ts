import { ASTNode } from "../ASTNode"
import { CompilerConfig } from "../config"
import { QueryNode, QueryType } from "../query.types"
import { SymbolTable } from "../SymbolTable"
import { Field } from "./Field"

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

    const queryNode = this.setAlias(config, this.node.generate(config, disposableTable))

    if (this.node instanceof Field && queryNode.type === QueryType.SELECT) {
      parentTable.add(this.alias, queryNode)
    }

    return queryNode
  }
}
