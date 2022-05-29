import { RootQueryNode } from "../../../compiler"
import { Nullable } from "../../../utils/types"
import { QMapQuery } from "../../creator/types"
import { QMapIndex } from "../types"

type IncludesContext = {
  root: RootQueryNode
  query: Nullable<QMapQuery>
  schema: Nullable<QMapQuery>
}

function _includes(query: QMapQuery, target: string[]) {
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

  if (descriptor?.all) {
    return !descriptor?.exclude?.[key]
  }

  return !!descriptor?.index[key]
}

export function includes(this: IncludesContext, target: string[]): boolean {
  const root: QMapQuery = {
    definitions: this.root.definitions,
    descriptor: this.root.descriptor as QMapIndex,
  }

  const overDescriptor = _includes(root, target)
  const overQuery = this.query ? _includes(this.query, target) : true
  const overSchema = this.schema ? _includes(this.schema, target) : true

  return overDescriptor && overQuery && overSchema
}
