import { PrimitiveNode } from "@qmap/compiler"
import { ApplyDefinitionContext, DefinitionNode } from "./types"

export default class PrimitiveDefinition implements DefinitionNode {
  constructor(private def: PrimitiveNode) {}

  apply({ result }: ApplyDefinitionContext): void {
    if (!Array.isArray(result)) {
      throw new Error("Cannot apply primitive to non-array result")
    }

    result.push(this.def.val)
  }
}
