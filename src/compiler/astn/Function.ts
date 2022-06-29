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
    const definitionsTable = this.createDefinitionsTable(parentTable, args[0])
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

  createDefinitionsTable(parentTable: SymbolTable, firstArg?: QueryNode): SymbolTable {
    if (!this.definitionsIndexRef) {
      return parentTable.createScope(undefined, true)
    }

    let table = parentTable.createScope()

    if (this.definitionsIndexRef.length == 0) {
      if (!firstArg) {
        throw new Error("Must have arguments")
      }

      if (firstArg.type === QueryType.ACCESS) {
        const [primary, ...keys] = firstArg.keys
        table = parentTable.registerPathInIndex(primary, ...keys)
      } else if (firstArg.type === QueryType.SELECT) {
        table = parentTable.registerPathInIndex(firstArg.name)
      } else {
        throw new Error("Invalid argument (for index)")
      }
    } else {
      const [primary, ...keys] = this.definitionsIndexRef
      table = parentTable.registerPathInIndex(primary, ...keys)
    }

    return table
  }

  setQueryList(nodes: ASTNode[]) {
    this.queryList = nodes
  }
}
