import { Nullable } from "@qmap/utils/types"
import { QMapContext, QMapFunction } from "../creator/types"
import { QMapQuery } from "../types"

export function findInContext<T>(context: Nullable<QMapContext<any, any>>, type: string, target: Nullable<string>): Nullable<T> {
  if (!context || !target) {
    return null
  }

  return context[type][target] ?? findInContext<T>(context.extends, type, target)
}

export function findQuery(context: Nullable<QMapContext<any, any>>, query: Nullable<string>): Nullable<QMapQuery> {
  return findInContext<QMapQuery>(context, "queries", query)
}

export function findSchema(context: Nullable<QMapContext<any, any>>, schema: Nullable<string>): Nullable<QMapQuery> {
  return findInContext<QMapQuery>(context, "schemas", schema)
}

export function findFunction(context: Nullable<QMapContext<any, any>>, functionName: Nullable<string>): Nullable<QMapFunction> {
  return findInContext(context, "functions", functionName)
}
