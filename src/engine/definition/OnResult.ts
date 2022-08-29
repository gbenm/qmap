import { OnResultQueryNode } from "@qmap/compiler"
import { isNullable } from "@qmap/utils"
import { ApplyDefinitionContext, DefinitionNode, DefinitionNodeWithChild } from "./types"

export default class OnResultDefinition implements DefinitionNodeWithChild {
 constructor(private def: OnResultQueryNode, public node: DefinitionNode) {}

  apply({ context, result }: ApplyDefinitionContext): void {
    const globalTarget = context.globalTarget
    context.globalTarget = context.currentResult
    this.def.node["alias"] = this.def.alias

    const scopedResult = Array.isArray(result) ? context.functionScopedResult : result

    if (isNullable(scopedResult)) {
      throw new Error("OnResultQueryDefinition: Result cannot be null")
    }

    this.node.apply({ context, result, target: scopedResult })

    context.globalTarget = globalTarget
  }
}
