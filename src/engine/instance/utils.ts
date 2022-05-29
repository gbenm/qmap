import { Nullable } from "../../utils/types"
import { QMapContext, QMapFunction, QMapQuery } from "../creator/types"

export function findInContext<T>(context: Nullable<QMapContext>, type: string, target: Nullable<string>): Nullable<T> {
  if (!context || !target) {
    return null
  }

  if (context[type][target]) {
    return context[type][target]
  }

  return findInContext<T>(context.extends, type, target)
}

export function findQuery(context: Nullable<QMapContext>, query: Nullable<string>): Nullable<QMapQuery> {
  return findInContext<QMapQuery>(context, "queries", query)
}

export function findSchema(context: Nullable<QMapContext>, schema: Nullable<string>): Nullable<QMapQuery> {
  return findInContext<QMapQuery>(context, "schemas", schema)
}

export function findFunction(context: Nullable<QMapContext>, functionName: Nullable<string>): Nullable<QMapFunction> {
  return findInContext(context, "functions", functionName)
}
