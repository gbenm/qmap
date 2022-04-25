import { ASTNode, Json, SymbolTable } from ".."
import { excludeQuery } from "../SymbolTable"
import { wrapQmapCtx } from "../utils"

export class Exclude implements ASTNode {
  constructor (public name: string) { }

  generate (parentTable: SymbolTable): Json {
    parentTable.enterTo(this.name).addQuery(excludeQuery)

    const json = wrapQmapCtx({
      exclude: [this.name],
    })

    return json
  }
}
