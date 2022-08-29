import { GlobalAccessQueryNode } from "@qmap/compiler"
import { applyAccessDefinition } from "./Access"
import { ApplyDefinitionContext, DefinitionNode, DefinitionNodeWithChildren } from "./types"

export default class GlobalAccessDefinition implements DefinitionNodeWithChildren {
  constructor(public def: GlobalAccessQueryNode, public definitions: DefinitionNode[]) {}

  get keys () {
    return this.def.keys
  }

  get alias () {
    return this.def.alias
  }

  apply({ context, result }: ApplyDefinitionContext): void {
    applyAccessDefinition({
      context,
      def: this,
      result,
      target: context.globalTarget
    })
  }
}
