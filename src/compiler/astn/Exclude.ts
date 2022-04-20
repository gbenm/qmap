import { ASTNode, Json } from ".."
import { wrapQmapJsonCtx } from "../utils"

export class Exclude implements ASTNode {
  constructor (public node: ASTNode) { }

  generate (): Json {
    return wrapQmapJsonCtx(this.node.generate(), {
      $qmap_exclude: true,
    })
  }
}
