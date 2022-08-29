import { VarQueryNode } from "@qmap/compiler"
import { ApplyDefinitionContext, DefinitionNode } from "./types"

export default class VarDefinition implements DefinitionNode {
  constructor(private def: VarQueryNode) {}

  apply({ result, context }: ApplyDefinitionContext): void {
    if (!Array.isArray(result)) {
      throw new Error("Cannot apply variable to non-array result")
    }

    result.push(context.getVar(this.def.name))
  }
}
