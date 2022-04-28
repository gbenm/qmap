import { ASTNode, SymbolTableImpl } from ".."
import { getQmapCtx } from "../utils"

export class Root implements ASTNode {
  constructor (public id: string, public children: ASTNode) { }

  generate (): { [key: string]: unknown } {
    const rootTable = SymbolTableImpl.create()
    const json = this.children ? this.children.generate(rootTable) : {}

    const ctx = getQmapCtx(json)

    if (!ctx.index) {
      ctx.index = []
    }

    return {
      root: json,
      query: this.id,
      queries: rootTable.generateQueries()
    }
  }
}
