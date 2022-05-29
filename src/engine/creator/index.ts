import { compile, QueryNode, QueryType } from "../../compiler"
import { qmap as qmapFn, QMap } from "../instance"
import { QMapIndex } from "../instance/types"
import { QMapContext, QMapDescriptor, QMapQueries } from "./types"

function fromDefinitionsToJson(definitions: QueryNode[], descriptor: QMapIndex) {
  return definitions.reduce<QMapQueries>((definitions, definition) => {
    if (definition.type === QueryType.SELECT) {
      definitions[definition.name] = {
        definitions: definition.definitions,
        descriptor: descriptor.index[definition.name]
      }
      return definitions
    } else {
      throw new Error("invalid definition")
    }
  }, {})
}

export function qmapCreator(descriptor?: QMapDescriptor): QMap {
  const { definitions: schemaDefinitions, descriptor: schemaDescriptor } = compile(descriptor?.schemas)
  const { definitions: queryDefinitions, descriptor: queryDescriptor } = compile(descriptor?.queries)

  const context: QMapContext = {
    extends: descriptor?.extends,
    functions: descriptor?.functions ?? {},
    schemas: fromDefinitionsToJson(schemaDefinitions, schemaDescriptor as QMapIndex),
    queries: fromDefinitionsToJson(queryDefinitions, queryDescriptor as QMapIndex)
  }

  const qmap: QMap = qmapFn.bind(context) as QMap

  Object.keys(context).forEach(key => qmap[key] = context[key])

  return qmap
}
