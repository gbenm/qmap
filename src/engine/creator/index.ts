import { compile, QMapIndex, QueryNode, QueryType } from "../../compiler"
import { qmap as qmapFn, QMap } from "../instance"
import { QMapContext, QMapDescriptor, QMapFunctions, QMapQueries } from "./types"

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

export function qmapCreator<Pctx extends QMapContext<any, any> | undefined, Fns extends QMapFunctions>(descriptor?: QMapDescriptor<Pctx, Fns>): QMap<Pctx, Fns> {
  const { definitions: schemaDefinitions, descriptor: schemaDescriptor } = compile(descriptor?.schemas)
  const { definitions: queryDefinitions, descriptor: queryDescriptor } = compile(descriptor?.queries)

  const context: QMapContext<Pctx, Fns> = {
    extends: descriptor?.extends as Pctx,
    functions: descriptor?.functions ?? {} as Fns,
    schemas: fromDefinitionsToJson(schemaDefinitions, schemaDescriptor as QMapIndex),
    queries: fromDefinitionsToJson(queryDefinitions, queryDescriptor as QMapIndex),
    defaultSchema: descriptor?.defaultSchema,
    mode: descriptor?.mode ?? descriptor?.extends?.mode ?? "normal",
    cache: descriptor?.cache ?? descriptor?.extends?.cache
  }

  context.cache?.setComputeFn(({ query, options }) => {
    return compile(query, options)
  })

  const qmap = qmapFn.bind(context) as QMap<Pctx, Fns>

  Object.keys(context).forEach(key => qmap[key] = context[key])

  return qmap
}
