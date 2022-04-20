import { ASTNode, Json, SymbolTable } from ".."
import { mergeQmapJsonWithCtx } from "../utils"

export class QueryList implements ASTNode {
  constructor (public nodes: ASTNode[]) { }

  generate(parentTable: SymbolTable): Json {
    const jsons = this.nodes.map(node => node.generate(parentTable))
    return mergeQmapJsonWithCtx(...jsons)
  }
}
