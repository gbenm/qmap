import { AccessQueryNode, FunctionQueryNode, PrimitiveNode, QueryNode, QueryType, RenameQueryNode, VarQueryNode } from "../../../../compiler"
import { isNullable, mergeObjects } from "../../../../compiler/utils"
import { Nullable } from "../../../../utils/types"
import { QMapFunction } from "../../../creator/types"
import { QMapOptions } from "../../types"
import { findFunction, findSchema } from "../../utils"
import { ApplyContext, ExecutionContext } from "./types"

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
  let fn: QMapFunction
  let resultItem: any
  switch (def.type) {
    case QueryType.ACCESS:
      def = def as AccessQueryNode

      resultItem = getResultItemFromAccessNode({
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
      fn = context.getFn(def.name)
      if (Number.isInteger(def["arrayPosition"])) {
        resultItem = _apply(context, def.definitions, [], target)
        resultItem = resultItem[def["arrayPosition"]].map((item: unknown) => fn(...resultItem.slice(0, def["arrayPosition"]), item, ...resultItem.slice(def["arrayPosition"] + 1)))
      } else [
        resultItem = fn(..._apply(context, def.definitions, [], target))
      ]

      if (Array.isArray(result)) {
        result.push(resultItem)
      } else {
        result[(def as FunctionQueryNode).alias] = resultItem
      }
      break
    case QueryType.HIDE:
      break
    case QueryType.RENAME:
      result[(def as RenameQueryNode).alias] = applyDefinition(context, result, (def as RenameQueryNode).node, target)
      break
    case QueryType.SELECT:
      if(Array.isArray(target[def.name])) {
        resultItem = target[def.name].map((item) => _apply(context, def["definitions"], {}, item))
      } else {
        resultItem = _apply(context, def.definitions, {}, target[def.name])
      }

      if (Array.isArray(result)) {
        result.push(resultItem)
      } else {
        result[def.alias ?? def.name] = resultItem
      }
      break
    case QueryType.VAR:
      if (!Array.isArray(result)) {
        throw new Error("Cannot apply variable to non-array result")
      }

      result.push(context.getVar((def as VarQueryNode).name))
    break
    case QueryType.PRIMITIVE:
      if (!Array.isArray(result)) {
        throw new Error("Cannot apply primitive to non-array result")
      }

      result.push((def as PrimitiveNode).val)
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

export function apply(this: ApplyContext, target: any, overrideOptions?: Nullable<QMapOptions>): any {
  if (overrideOptions) {
    if (overrideOptions.schema) {
      this.schema = findSchema(this.context, overrideOptions.schema)
    }
    if (overrideOptions.variables) {
      this.variables = mergeObjects(overrideOptions.variables, this.variables)
    }
    return apply.call(this, target)
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
    }
  }

  const getApplyFn = (query: any) => query?  _apply.bind(null, executionContext, query.definitions) : (_, target) => target
  const getResult = (target: any, apply: any) => Array.isArray(target) ? target.map(item => apply({}, item)) : apply({}, target)

  const overSchema = getResult(target, getApplyFn(this.schema))
  const overQuery = getResult(overSchema, getApplyFn(this.query))
  return getResult(overQuery, getApplyFn(this.root))
}
