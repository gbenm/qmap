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
    private clientFn: boolean = false
  ) { }

  generate(config: CompilerConfig, parentTable: SymbolTable): QueryNode {
    const table = parentTable.createScope()
    const definitions = this.args.map(arg => arg.generate(config, table))

    if (this.clientFn) {
      return {
        type: QueryType.CLIENT_FUNCTION,
        name: this.name,
        definitions
      }
    }

    return {
      type: QueryType.FUNCTION,
      name: this.name,
      alias: generateNameFromNodes(definitions),
      definitions
    }
  }

}
