import { ASTNode, ASTNodeEntry, Json, SymbolTable } from ".."
import { mergeQmapJsonWithCtx } from "../utils"

export class Field implements ASTNode {
  constructor (public entry: ASTNodeEntry, public body: ASTNode) { }

  generate(parentTable: SymbolTable): Json {
    const table = parentTable.createScope()
    const body = mergeQmapJsonWithCtx(
      this.entry.body(table).generate(table),
      this.body?.generate(table)
    )

    parentTable.add(this.entry.id, body)

    return {
      [this.entry.id]: body
    }
  }
}
