import { QueryNode } from "../../compiler"
import { QMapIndex } from "../instance/types"

export interface QMapFunctions {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: (...args: any[]) => any
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
