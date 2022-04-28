import { ASTNodeEntry, ASTNode, JsonNode } from ".."
import { QueryType } from "../ASTNode"
import { wrapQmapCtx, wrapQmapJsonCtx } from "../utils"

let idCounter = 0

export class ObjRef extends ASTNodeEntry {
  public id: string

  constructor (public ids: string[]) {
    super()
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    this.id = this.ids.shift()!
  }

  body(): ASTNode {

    if (this.ids.length == 0) {
      return new JsonNode(wrapQmapCtx({
        index: [],
        type: QueryType.FIELD,
      }))
    }

    const key = Symbol(`a_${idCounter++}`)

    const path = [this.id, ...this.ids]

    return new JsonNode(wrapQmapJsonCtx({
      [key]: wrapQmapCtx({
        keys: path,
        type: QueryType.ACCESS,
        name: path.join("_")
      })
    }, {
      index: [key]
    }))
  }
}
