import { ASTNode, ASTNodeEntry, Json, SymbolTable } from ".."
import { getQmapCtx, mergeObjectsWithCtx, mergeQmapJsonWithCtx, wrapQmapJsonCtx } from "../utils"
import { ObjRef } from "./ObjRef"

export class Field implements ASTNode {
  constructor (public entry: ASTNodeEntry, public body: ASTNode) { }

  generate(parentTable: SymbolTable): Json {
    let table = parentTable.createScope()
    const entryJson = this.entry.body(table).generate(table)

    let noKeyed = false

    if (this.entry instanceof ObjRef) {
      table = table.enterTo(this.entry.id, ...this.entry.ids)
      if (this.entry.ids.length > 0) {
        noKeyed = true
      }
    } else {
      table = table.enterTo(this.entry.id)
    }

    if (noKeyed) {
      const { index} = getQmapCtx(entryJson)
      const result = mergeObjectsWithCtx(
        entryJson[index[0]] as Json,
        this.body?.generate(table)
      )
      entryJson[index[0]] = result
      parentTable.add(null, entryJson)
      return entryJson
    }

    const body = mergeQmapJsonWithCtx(
      entryJson,
      this.body?.generate(table)
    )

    parentTable.add(this.entry.id, body)

    return wrapQmapJsonCtx({
      [this.entry.id]: body
    }, {
      index: [this.entry.id]
    })
  }
}
