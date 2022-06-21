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

  registerAliasInParentTable(parentTable: SymbolTable, node: QueryNode) {
    const isSelectQuery = this.node instanceof Field && node.type === QueryType.SELECT

    if (isSelectQuery) {
      parentTable.add(this.alias, node)
    }
  }

  generate(config: CompilerConfig, parentTable: SymbolTable): QueryNode {
    const disposableTable = parentTable.createScope()

    const generated = this.node.generate(config, disposableTable)
    const queryNode = this.setAlias(config, generated)

    this.registerAliasInParentTable(parentTable, generated)

    return queryNode
  }
}
