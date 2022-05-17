import { compile } from "../../compiler"
import { Nullable } from "../../utils/types"
import { QMap } from "../instance"
import { QMapContext, QMapDescriptor } from "./types"

export function qmapCreator(descriptor: QMapDescriptor): QMap {
  const context: QMapContext = {
    extends: descriptor.extends,
    functions: descriptor.functions ?? {},
    queries: {},
    schemas: {}
  }

  const qmap: QMap = function (this: QMapContext, target: Nullable<string>) {
    const { query, definitions, descriptor, errors } = compile(target)
    //
    return query
  }.bind(context) as QMap

  Object.keys(context).forEach(key => qmap[key] = context[key])

  return qmap
}
