import { compile, QueryNode, QueryType, SelectQueryNode } from "../../compiler"
import { qmap as qmapFn, QMap } from "../instance"
import { QMapContext, QMapDescriptor, QMapQueries } from "./types"

function fromDefinitionsToJson(definitions: QueryNode[]) {
  return definitions.reduce<QMapQueries>((definitions, definition) => {
    if (definition.type === QueryType.SELECT) {
      definitions[definition.name] = definition as SelectQueryNode
      return definitions
    } else {
      throw new Error("invalid definition")
    }
  }, {})
}

export function qmapCreator(descriptor: QMapDescriptor): QMap {
  const { definitions: schemaDefinitions } = compile(descriptor.schemas)
  const { definitions: queryDefinitions } = compile(descriptor.queries)

  const context: QMapContext = {
    extends: descriptor.extends,
    functions: descriptor.functions ?? {},
    queries: fromDefinitionsToJson(schemaDefinitions),
    schemas: fromDefinitionsToJson(queryDefinitions)
  }

  const qmap: QMap = qmapFn.bind(context) as QMap

  Object.keys(context).forEach(key => qmap[key] = context[key])

  return qmap
}
