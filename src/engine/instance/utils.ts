import { Nullable } from "../../utils/types"
import { QMapContext, QMapQuery } from "../creator/types"

export function findQuery(context: Nullable<QMapContext>, query: Nullable<string>): Nullable<QMapQuery> {
  if (!context || !query) {
    return null
  }

  if (context.queries[query]) {
    return context.queries[query]
  }

  return findQuery(context.extends, query)
}

export function findSchema(context: Nullable<QMapContext>, schema: Nullable<string>): Nullable<QMapQuery> {
  if (!context || !schema) {
    return null
  }

  if (context.schemas[schema]) {
    return context.schemas[schema]
  }

  return findSchema(context.extends, schema)
}
