import { ASTNode, QueryType, HideQueryNode } from ".."
import { CompilerConfig } from "../config"
import { QueryNode } from "../query.types"
import { SymbolTable } from "../SymbolTable"
import { buildDefinitionsFromASTNodes } from "../utils"

export class Hide implements ASTNode {
  constructor (public name: string, public nodes?: ASTNode[]) { }

  generate(config: CompilerConfig, parentTable: SymbolTable): QueryNode {
    const table = parentTable.createScope()

    const definitions: QueryNode[] = buildDefinitionsFromASTNodes({
      config,
      table,
      nodes: this.nodes
    })

    const hideNode: HideQueryNode = {
      type: QueryType.HIDE,
      name: this.name,
      definitions,
    }

    parentTable.add(this.name, hideNode)

    return hideNode
  }
}
