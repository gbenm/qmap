import { ASTNode, Json } from ".."
import { wrapQmapCtx } from "../utils"

export class Exclude implements ASTNode {
  constructor (public name: string) { }

  generate (): Json {
    const json = {
      [this.name]: wrapQmapCtx({
        $qmap_exclude: true,
      })
    }

    return json
  }
}
