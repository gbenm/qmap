import { NewObjectQueryNode } from "@qmap/compiler"
import { DefinitionNode, DefinitionNodeWithChildren } from "."
import { applyWithNew } from "../instance/features/apply/common"
import { ApplyDefinitionContext } from "./types"

export default class NewObjectDefinition implements DefinitionNodeWithChildren {
  constructor(private def: NewObjectQueryNode, public definitions: DefinitionNode[]) {}

  apply({ result, context, target }: ApplyDefinitionContext): void {
    const resultItem = applyWithNew(context, this.definitions, target)

    result[this.def.alias] = resultItem
  }
}
