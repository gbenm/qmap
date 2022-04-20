import { ASTNode, SymbolTableImpl } from ".."

export class Root implements ASTNode {
  constructor (public id: string, public children: ASTNode) { }

  generate (): { [key: string]: unknown } {
    const rootTable = SymbolTableImpl.create()
    const json = this.children ? this.children.generate(rootTable) : {}

    if (this.id) {
      return {
        [this.id]: json,
        named: true
      }
    }

    return {
      "root": json,
      named: false
    }
  }
}
