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
  public definitionsIndexRef?: string[]

  constructor(
    private name: string,
    private args: ASTNode[],
    private queryList: ASTNode[],
    private clientFn: boolean,
    private arrayPosition?: number
  ) { }

  generate(config: CompilerConfig, parentTable: SymbolTable): QueryNode {
    const table = parentTable.createScope()
    const args = this.args.map(arg => arg.generate(config, table))
    const definitionsTable = this.createDefinitionsTable(parentTable)
    const definitions = this.queryList.map(def => def.generate(config, definitionsTable))

    return {
      type: this.clientFn ? QueryType.CLIENT_FUNCTION : QueryType.FUNCTION,
      name: this.name,
      alias: generateNameFromNodes(args),
      args,
      definitions,
      arrayPosition: this.arrayPosition
    }
  }

  createDefinitionsTable(parentTable: SymbolTable): SymbolTable {
    return parentTable.createScope()
  }

  setQueryList(nodes: ASTNode[]) {
    this.queryList = nodes
  }
}
