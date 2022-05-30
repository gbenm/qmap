import { isArray } from "lodash"
import { AccessQueryNode, FunctionQueryNode, QueryNode, QueryType, RenameQueryNode, RootQueryNode, VarQueryNode } from "../../../compiler"
import { getValue, mergeObjects } from "../../../compiler/utils"
import { Nullable } from "../../../utils/types"
import { QMapContext, QMapFunction, QMapQuery } from "../../creator/types"
import { QMapOptions, QMapVars } from "../types"
import { findFunction, findSchema } from "../utils"

type ApplyContext = {
  root: RootQueryNode
  context: QMapContext
  query: Nullable<QMapQuery>
  schema: Nullable<QMapQuery>
  variables: Nullable<QMapVars>
}

type ExecutionContext = {
  getVar: (name: string) => unknown
  getFn: (name: string) => QMapFunction
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function applyDefinition(context: ExecutionContext, result: any, def: QueryNode, target: any): any {
  let fn: QMapFunction
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let resultItem: any
  switch (def.type) {
    case QueryType.ACCESS:
      def = def as AccessQueryNode

      // TODO: que hacer con los accesos si son arrays
      resultItem = _apply(context, def.definitions, {}, getValue(target, def.keys))

      if (isArray(result)) {
        result.push(resultItem)
      } else {
        result[def.alias] = resultItem
      }
      break
    case QueryType.ALL:
      result = target
      break
    case QueryType.CLIENT_FUNCTION:
      throw new Error("Client functions are not supported")
    case QueryType.EXCLUDE:
      delete result[def.name]
      break
    case QueryType.FUNCTION:
      fn = context.getFn(def.name)
      if ((def as FunctionQueryNode).byItem) {
        resultItem = _apply(context, def.definitions, [], target)
        resultItem = resultItem[0].map((item) => fn(item, ...resultItem.slice(1)))
      } else [
        resultItem = fn(..._apply(context, def.definitions, [], target))
      ]

      if (isArray(result)) {
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
      if(isArray(target[def.name])) {
        resultItem = target[def.name].map((item) => _apply(context, def["definitions"], {}, item))
      } else {
        resultItem = _apply(context, def.definitions, {}, target[def.name])
      }

      if (isArray(result)) {
        result.push(resultItem)
      } else {
        result[def.alias ?? def.name] = resultItem
      }
      break
    case QueryType.VAR:
      if (!isArray(result)) {
        throw new Error("Cannot apply variable to non-array result")
      }

      result.push(context.getVar((def as VarQueryNode).name))
    break
  }
  return result
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function _apply(context: ExecutionContext, definitions: QueryNode[], result: any, target: any): any {
  if (definitions.length === 0) {
    return target
  }

  definitions.forEach((def) => {
    result = applyDefinition(context, result, def, target)
  })

  return result
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
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

  const applyFn = _apply.bind(null, executionContext)
  const overSchema = this.schema ? applyFn(this.schema.definitions, {}, target) : target
  const overQuery = this.query ? applyFn(this.query.definitions, {}, overSchema) : overSchema

  return applyFn(this.root.definitions, {}, overQuery)
}
