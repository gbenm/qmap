import { ASTNodeEntry, ASTNode, JsonNode } from ".."
import { wrapQmapCtx } from "../utils"

export class ObjRef extends ASTNodeEntry {
  public id: string

  constructor (public ids: string[]) {
    super()
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    this.id = this.ids.shift()!
  }

  get body(): ASTNode {
    return new JsonNode(wrapQmapCtx(this.ids.length > 0 ? {
      $qmap_keys: this.ids
    } : {}))
  }
}
