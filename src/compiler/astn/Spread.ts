import { ASTNode, Json, SymbolTable, rootScope } from ".."
import { allQuery } from "../SymbolTable"
import { wrapQmapCtx, getValue } from "../utils"
export class Spread implements ASTNode {
  constructor (public ids: (string | symbol)[]) {}

  generate (parentTable: SymbolTable): Json {
    if(!this.ids || this.ids.length === 0) {
      parentTable.addQuery(allQuery)
      return wrapQmapCtx({
        all: true
      })
    }

    const [key, ...keys] = this.ids

    if (key === rootScope) {
      const [key, ...rest] = keys
      const [value, path] = parentTable.lookup(key as string, rootScope)
      parentTable.copyQueryFrom(...(path || []), key as string, ...rest as string[])
      if (value) {
        return getValue(value, rest as string[])
      }
    } else {
      const [value, path] = parentTable.lookup(key as string)
      parentTable.copyQueryFrom(...(path || []), key as string, ...keys as string[])
      if (value) {
        return getValue(value, keys as string[])
      }
    }

    return {}
  }
}
