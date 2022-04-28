import { SymbolTable } from "./SymbolTable"

export enum QueryType {
  FIELD = "field",
  FUNCTION = "function",
  CLIENT_FUNCTION = "client_function",
  ACCESS = "access",
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Json = { [key: string | symbol]: any }

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
