import { ASTNode, SymbolTableImpl } from ".."

export class Root implements ASTNode {
  constructor (public id: string, public children: ASTNode) { }

  generate (): { [key: string]: unknown } {
    const rootTable = SymbolTableImpl.create()
    const json = this.children ? this.children.generate(rootTable) : {}

    return {
      root: json,
      query: this.id,
      queries: rootTable.generateQueries()
    }
  }
}
