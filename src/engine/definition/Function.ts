import { FunctionQueryNode } from "@qmap/compiler"
import { apply, applyWithNew } from "../instance/features/apply/common"
import { ApplyDefinitionContext, DefinitionNode, DefinitionNodeWithChildren, DefintionNodeWithArgs } from "./types"

export default class FunctionDefinition implements DefintionNodeWithArgs, DefinitionNodeWithChildren {
  constructor(private def: FunctionQueryNode, public args: DefinitionNode[], public definitions: DefinitionNode[]) {}

  apply({ result, context, target }: ApplyDefinitionContext): void {
    const def = this.def
    const fn = context.getFn(def.name)
    let resultItem: any
    const arrayPosition = def.arrayPosition as number

    if (!Array.isArray(result)) {
      context.functionScopedResult = result
    }

    if (Number.isInteger(arrayPosition)) {
      resultItem = apply(context, this.args, [], target)

      const firstArgs = resultItem.slice(0, arrayPosition)
      const lastArgs = resultItem.slice(arrayPosition + 1)

      resultItem = resultItem[arrayPosition]
        .map((item: unknown) => fn(...firstArgs, item, ...lastArgs))
    } else [
      resultItem = fn(...apply(context, this.args, [], target))
    ]

    resultItem = applyWithNew(context, this.definitions, resultItem)
    if (Array.isArray(result)) {
      result.push(resultItem)
    } else {
      result[(def as FunctionQueryNode).alias] = resultItem
    }
  }
}
