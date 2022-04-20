import { SymbolTable } from "./SymbolTable"

export type Json = { [key: string | symbol]: unknown }

export interface ASTNode {
  generate (parentTable: SymbolTable): Json
}

export abstract class ASTNodeEntry implements ASTNode {
  abstract id: string

  abstract body(parentTable: SymbolTable): ASTNode

  public generate (parentTable: SymbolTable): Json {
    const table = parentTable.createScope()
    const body = this.body(table).generate(table)

    parentTable.add(this.id, body)

    return {
      [this.id]: body
    }
  }
}
