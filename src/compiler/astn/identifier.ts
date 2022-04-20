import { ASTNode, SymbolTable } from ".."

export class Identifier implements ASTNode {
  constructor (public id: string, public child: ASTNode) { }

  generate (parentTable: SymbolTable): { [key: string]: unknown } {
    const table = parentTable.createScope()
    const json = this.child ? this.child.generate(table) : {}

    parentTable.add(this.id, json)

    return {
      [this.id]: json,
    }
  }
}
