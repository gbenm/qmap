import { RootQueryNode } from "@qmap/compiler"
import { DefinitionNode, DefinitionNodeWithChildren } from "."
import { ApplyDefinitionContext } from "./types"

export default class RootDefinition implements DefinitionNodeWithChildren {
  constructor(public def: RootQueryNode<any>, public definitions: DefinitionNode[]) { }

  apply(context: ApplyDefinitionContext): void {
    this.definitions.forEach((defNode) => defNode.apply(context))
  }

  toJSON() {
    return this.def
  }
}
