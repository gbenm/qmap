import { RootQueryNode, QMapIndex } from "@qmap/compiler"
import { QMapQuery } from "@qmap/engine/types"
import { Nullable } from "@qmap/utils/types"
import { QMapContext } from "../../creator/types"
import { QMapIncludesOptions } from "../types"
import { findSchema } from "../utils"

type IncludesContext = {
  root: RootQueryNode<QMapIndex | null>
  context: QMapContext<any, any>
  query: Nullable<QMapQuery>
  schema: Nullable<QMapQuery>
}

function _includes(query: Pick<QMapQuery, "descriptor">, target: string[]) {
  let key: string
  let descriptor: QMapIndex | undefined = query.descriptor
  const path = [...target]

  for (key = path.shift() as string; path.length > 0; key = path.shift() as string) {
    if (descriptor?.all && !descriptor?.index[key] && !descriptor?.exclude?.[key]) {
      return true
    }

    descriptor = descriptor?.index[key]
    if (!descriptor) {
      return false
    }
  }

  if (descriptor?.index[key]) {
    return true
  }

  if (descriptor?.all) {
    return !descriptor?.exclude?.[key]
  }

  return false
}

export function includes(this: IncludesContext, target: string[], overrideOptions?: Nullable<QMapIncludesOptions>): boolean {
  if (overrideOptions) {
    if (overrideOptions.schema) {
      this.schema = findSchema(this.context, overrideOptions.schema)
    }
  }

  const root: Pick<QMapQuery, "descriptor"> = {
    descriptor: this.root.descriptor as QMapIndex,
  }

  const overSchema = this.schema ? _includes(this.schema, target) : true

  if (overSchema) {
    const overQuery = this.query ? _includes(this.query, target) : true

    if (overQuery) {
      return _includes(root, target)
    }
  }

  return false
}
