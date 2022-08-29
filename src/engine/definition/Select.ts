import { SelectQueryNode } from "@qmap/compiler"
import { DefinitionNodeWithChildren } from "."
import { applyWithNew } from "../instance/features/apply/common"
import { ApplyDefinitionContext, DefinitionNode } from "./types"

export default class SelectDefinition implements DefinitionNodeWithChildren {
  constructor (public def: SelectQueryNode, public definitions: DefinitionNode[]) {}

  apply({ result, target, context }: ApplyDefinitionContext): void {
    const value = target[this.def.name]

    const resultItem = applyWithNew(context, this.definitions, value)

    if (Array.isArray(result)) {
      result.push(resultItem)
    } else {
      result[this.def.alias ?? this.def.name] = resultItem
    }
  }
}
