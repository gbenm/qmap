import { getValue, mergeObjects } from "@qmap/utils"
import { Nullable } from "@qmap/utils/types"
import { findFunction, findSchema } from "@qmap/engine/instance/utils"
import { ApplyContext, ApplyOptions, ExecutionContext } from "../types"
import { apply as _apply } from "./common"
import { DefinitionNode, DefinitionNodeWithChildren } from "@qmap/engine/definition"

export function apply<R = any>(this: ApplyContext, initialTarget: any, options?: Nullable<ApplyOptions>): R {
  overrideOptions(this, options)

  const { target, hasParent, parentWithResult } = getTargetContext(initialTarget, options)

  const executionContext = createExecutionContext(this, target)

  const buildApplyFn = (query: Nullable<Pick<DefinitionNodeWithChildren, "definitions">>) => query
    ? setupApply.bind(null, executionContext, query.definitions)
    : (_: unknown, target: unknown) => target

  const overSchema = executeApply(target, buildApplyFn(this.schema))
  const overQuery = executeApply(overSchema, buildApplyFn(this.query))
  const result = executeApply(overQuery, buildApplyFn(this.root))

  if (hasParent)
    return parentWithResult(result)

  return result
}

function overrideOptions(applyContext: ApplyContext, options: Nullable<ApplyOptions>) {
  if (options) {
    if (options.schema) {
      applyContext.schema = findSchema(applyContext.context, options.schema)
    }
    if (options.variables) {
      applyContext.variables = mergeObjects(options.variables, applyContext.variables)
    }
  }
}

function createExecutionContext(applyContext: ApplyContext, globalTarget: unknown): ExecutionContext {
  return {
    getVar: (name: string) => {
      return applyContext.variables?.[name]
    },
    getFn: (name: string) => {
      const fn = findFunction(applyContext.context, name)

      if (!fn) {
        throw new Error(`Function ${name} not found`)
      }

      return fn
    },
    globalTarget,
    currentResult: {}
  }
}

function executeApply(target: any, apply: any) {
  return Array.isArray(target)
    ? target.map(item => apply({}, item))
    : apply({}, target)
}

function getTargetContext(target: any, options: Nullable<ApplyOptions>) {
  let targetInnerContext = {
    parentTarget: <any> null,
    key: <any> null
  }

  if (options && options.over && options.over.length > 0) {
    const keys = options.over.slice(0, -1)
    const [key] = options.over.slice(-1)
    const parentTarget = getValue(target, keys)

    targetInnerContext = {
      parentTarget, key
    }

    target = parentTarget[key]
  }

  const hasParent = Boolean(targetInnerContext.parentTarget)
  return {
    target,
    hasParent,
    parentWithResult(result: unknown) {
      if (hasParent) {
        targetInnerContext.parentTarget[targetInnerContext.key] = result
        return targetInnerContext.parentTarget
      } else {
        throw new Error("This target doesn't have parent")
      }
    }
  }
}

function setupApply(context: ExecutionContext, definitions: DefinitionNode[], result: any, target: any): any {
  context.globalTarget = target
  context.currentResult = result
  return _apply(context, definitions, result, target)
}
