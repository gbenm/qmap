import { ApplyDefinitionContext, DefinitionNode } from "./types"

export default class AllDefinition implements DefinitionNode {
  apply({ result, target }: ApplyDefinitionContext): void {
    Object.assign(result, target)
  }
}
