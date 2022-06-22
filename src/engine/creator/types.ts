import { QueryNode, QMapIndex } from "../../compiler"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type QMapFunction = (...args: any[]) => any

export interface QMapFunctions {
  [key: string]: QMapFunction
}

export interface QMapDescriptor {
  extends?: QMapContext
  functions?: QMapFunctions
  schemas?: string
  queries?: string
}

export interface QMapQuery {
  definitions: QueryNode[]
  descriptor: QMapIndex
}

export interface QMapQueries {
  [key: string]: QMapQuery
}

export interface QMapContext {
  extends?: QMapContext
  functions: QMapFunctions
  schemas: QMapQueries
  queries: QMapQueries
}
