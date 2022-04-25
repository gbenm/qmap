import { ASTNode, Json, SymbolTable, rootScope } from ".."
import { wrapQmapCtx, getValue } from "../utils"
export class Spread implements ASTNode {
  constructor (public ids: (string | symbol)[]) {}

  generate (parentTable: SymbolTable): Json {
    if(!this.ids || this.ids.length === 0) {
      return wrapQmapCtx({
        all: true
      })
    }

    const [key, ...keys] = this.ids

    if (key === rootScope) {
      const [key, ...rest] = keys
      const value = parentTable.lookup(key as string, rootScope)
      if (value) {
        return getValue(value, rest as string[])
      }
    } else {
      const value = parentTable.lookup(key as string)
      if (value) {
        return getValue(value, keys as string[])
      }
    }

    return {}
  }
}
