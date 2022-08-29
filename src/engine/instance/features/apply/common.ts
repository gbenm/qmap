import { DefinitionNode } from "@qmap/engine/definition"
import { isNullable } from "@qmap/utils"
import { ExecutionContext } from "../types"

export function applyWithNew(context: ExecutionContext, definitions: DefinitionNode[], target: any) {
  if (definitions.length === 0) {
    return target ?? null
  }

  return Array.isArray(target)
    ? target.map((item) => apply(context, definitions, {}, item))
    : apply(context, definitions, {}, target)
}

export function apply(context: ExecutionContext, definitions: DefinitionNode[], result: any, target: any): any {
  if (definitions.length === 0) {
    return target ?? null
  }

  if (isNullable(target)) {
    return null
  }

  definitions.forEach((def) => {
    def.apply({ context, result, target })
  })

  return result
}
