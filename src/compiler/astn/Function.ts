import { ASTNode } from ".."
import { CompilerConfig } from "../config"
import { QueryNode, QueryType } from "../query.types"
import { SymbolTable } from "../SymbolTable"

function generateNameFromNodes (nodes: QueryNode[]): string {
  return nodes.map((node) => {
    const name = node["alias"] || node["name"]

    if (!name) {
      throw new Error("invalid parameter")
    }
    return name
  }).join("_")
}

export class Function implements ASTNode {
  constructor(
    private name: string,
    private args: ASTNode[],
    private clientFn: boolean,
    private byItem: boolean = false
  ) { }

  generate(config: CompilerConfig, parentTable: SymbolTable): QueryNode {
    const table = parentTable.createScope()
    const definitions = this.args.map(arg => arg.generate(config, table))

    return {
      type: this.clientFn ? QueryType.CLIENT_FUNCTION : QueryType.FUNCTION,
      name: this.name,
      alias: generateNameFromNodes(definitions),
      definitions,
      byItem: this.byItem
    }
  }

}
