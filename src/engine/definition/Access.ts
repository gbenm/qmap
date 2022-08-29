import { AccessQueryNode } from "@qmap/compiler"
import { isNullable } from "@qmap/utils"
import { apply } from "../instance/features/apply/common"
import { ExecutionContext, ApplyDefinitionContext as GeneralApplyDefinitionContext } from "../instance/features/types"
import GlobalAccessDefinition from "./GlobalAccess"
import { ApplyDefinitionContext, DefinitionNode, DefinitionNodeWithChildren } from "./types"

export default class AccessDefinition implements DefinitionNodeWithChildren {
  constructor(public def: AccessQueryNode, public definitions: DefinitionNode[]) {}

  get keys () {
    return this.def.keys
  }

  get alias () {
    return this.def.alias
  }

  apply(context: ApplyDefinitionContext) {
    applyAccessDefinition({ ...context, def: this })
  }
}

export function applyAccessDefinition({ context, def, result, target }: GeneralApplyDefinitionContext<GlobalAccessDefinition | AccessDefinition>) {
  const resultItem = getResultItemFromAccessNode({
    context,
    definitions: def.definitions,
    keys: def.keys,
    target
  })

  if (Array.isArray(result)) {
    result.push(resultItem)
  } else {
    result[def.alias] = resultItem
  }
}

function getResultItemFromAccessNode({context, definitions, keys, target}: {
  context: ExecutionContext, keys: string[], definitions: DefinitionNode[], target: any
}) {
  if (keys.length === 0) {
    return apply(context, definitions, {}, target)
  }

  if (isNullable(target)) {
    return null
  }

  const [currentKey, ...restOfKeys] = keys

  if (Array.isArray(target[currentKey])) {
    return target[currentKey].map((item) => getResultItemFromAccessNode({context, definitions, keys: restOfKeys, target: item}))
  } else {
    return getResultItemFromAccessNode({context, definitions, keys: restOfKeys, target: target[currentKey]})
  }
}
