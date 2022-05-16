import { ASTNode, SymbolTable, QueryNode, QueryType, excludeQuery, CompilerConfig } from ".."

export class Exclude implements ASTNode {
  constructor (public name: string) { }

  generate (_config: CompilerConfig, parentTable: SymbolTable): QueryNode {
    parentTable.enterTo(this.name).addToIndex(excludeQuery)

    return {
      type: QueryType.EXCLUDE,
      name: this.name
    }
  }
}
