import { CommonAccessQueryNode, FunctionQueryNode, GlobalAccessQueryNode, NewObjectQueryNode, QueryNode, QueryType, SelectQueryNode } from "../../../compiler"
import { isNullable, mergeObjects } from "../../../utils"
import { Nullable } from "../../../utils/types"
import { QMapOptions } from "../types"
import { findFunction, findSchema } from "../utils"
import { ApplyContext, ApplyDefinitionContext, ExecutionContext } from "./types"

export function apply<R = any>(this: ApplyContext, target: any, overrideOptions?: Nullable<QMapOptions>): R {
  if (overrideOptions) {
    if (overrideOptions.schema) {
      this.schema = findSchema(this.context, overrideOptions.schema)
    }
    if (overrideOptions.variables) {
      this.variables = mergeObjects(overrideOptions.variables, this.variables)
    }
    return apply.call(this, target) as R
  }

  const executionContext: ExecutionContext = {
    getVar: (name: string) => {
      return this.variables?.[name]
    },
    getFn: (name: string) => {
      const fn = findFunction(this.context, name)

      if (!fn) {
        throw new Error(`Function ${name} not found`)
      }

      return fn
    },
    globalTarget: target
  }

  const getApplyFn = (query: any) => query?  setupApply.bind(null, executionContext, query.definitions) : (_, target) => target
  const getResult = (target: any, apply: any) => Array.isArray(target) ? target.map(item => apply({}, item)) : apply({}, target)

  const overSchema = getResult(target, getApplyFn(this.schema))
  const overQuery = getResult(overSchema, getApplyFn(this.query))
  return getResult(overQuery, getApplyFn(this.root))
}

function setupApply(context: ExecutionContext, definitions: QueryNode[], result: any, target: any): any {
  context.globalTarget = target
  return _apply(context, definitions, result, target)
}

function getResultItemFromAccessNode({context, definitions, keys, target}: {
  context: ExecutionContext, keys: string[], definitions: QueryNode[], target: any
}) {
  if (keys.length === 0) {
    return _apply(context, definitions, {}, target)
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

function applyDefinition(context: ExecutionContext, result: any, def: QueryNode, target: any): any {
  switch (def.type) {
    case QueryType.ACCESS:
      applyAccessDefinition({ context, result, def, target })
      break
    case QueryType.GLOBAL_ACCESS:
      applyGlobalAccessDefinition({ context, result, def, target })
      break
    case QueryType.ALL:
      result = {...target}
      break
    case QueryType.CLIENT_FUNCTION:
      throw new Error("Client functions are not supported")
    case QueryType.EXCLUDE:
      delete result[def.name]
      break
    case QueryType.FUNCTION:
      applyFunctionDefinition({ context, result, def, target })
      break
    case QueryType.HIDE:
      break
    case QueryType.RENAME:
      result[def.alias] = applyDefinition(context, result, def.node, target)
      break
    case QueryType.NEW_OBJECT:
      applyNewObjectDefinition({ context, result, def, target })
      break
    case QueryType.SELECT:
      applySelectDefinition({ context, result, def, target })
      break
    case QueryType.VAR:
      if (!Array.isArray(result)) {
        throw new Error("Cannot apply variable to non-array result")
      }

      result.push(context.getVar(def.name))
    break
    case QueryType.PRIMITIVE:
      if (!Array.isArray(result)) {
        throw new Error("Cannot apply primitive to non-array result")
      }

      result.push(def.val)
      break
  }

  return result
}

function _apply(context: ExecutionContext, definitions: QueryNode[], result: any, target: any): any {
  if (definitions.length === 0) {
    return target ?? null
  }

  if (isNullable(target)) {
    return null
  }

  definitions.forEach((def) => {
    result = applyDefinition(context, result, def, target)
  })

  return result
}

function applyAccessDefinition({ context, def, result, target }: ApplyDefinitionContext<CommonAccessQueryNode & QueryNode>) {
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

function applyGlobalAccessDefinition({ context, def, result }: ApplyDefinitionContext<GlobalAccessQueryNode>) {
  applyAccessDefinition({
    context,
    def,
    result,
    target: context.globalTarget
  })
}

function applyFunctionDefinition({ context, def, result, target }: ApplyDefinitionContext<FunctionQueryNode>) {
  const fn = context.getFn(def.name)
  let resultItem: any
  const arrayPosition = def.arrayPosition as number

  if (Number.isInteger(arrayPosition)) {
    resultItem = _apply(context, def.args, [], target)

    const firstArgs = resultItem.slice(0, arrayPosition)
    const lastArgs = resultItem.slice(arrayPosition + 1)

    resultItem = resultItem[arrayPosition]
      .map((item: unknown) => fn(...firstArgs, item, ...lastArgs))
  } else [
    resultItem = fn(..._apply(context, def.args, [], target))
  ]

  resultItem = applyWithNew(context, def.definitions, resultItem)
  if (Array.isArray(result)) {
    result.push(resultItem)
  } else {
    result[(def as FunctionQueryNode).alias] = resultItem
  }
}

function applySelectDefinition({ context, def, result, target }: ApplyDefinitionContext<SelectQueryNode>) {
  const value = target[def.name]

  const resultItem = applyWithNew(context, def.definitions, value)

  if (Array.isArray(result)) {
    result.push(resultItem)
  } else {
    result[def.alias ?? def.name] = resultItem
  }
}

function applyNewObjectDefinition({ context, def, result, target }: ApplyDefinitionContext<NewObjectQueryNode>) {
  const resultItem = applyWithNew(context, def.definitions, target)

  result[def.alias] = resultItem
}

function applyWithNew(context: ExecutionContext, definitions: QueryNode[], target: any) {
  if (definitions.length === 0) {
    return target
  }

  return Array.isArray(target)
    ? target.map((item) => _apply(context, definitions, {}, item))
    : _apply(context, definitions, {}, target)
}
