import { ExcludeQueryNode } from "@qmap/compiler"
import { ApplyDefinitionContext, DefinitionNode } from "./types"

export default class ExcludeDefinition implements DefinitionNode {
  constructor(private def: ExcludeQueryNode) {}

  apply({ result }: ApplyDefinitionContext): void {
    delete result[this.def.name]
  }
}
