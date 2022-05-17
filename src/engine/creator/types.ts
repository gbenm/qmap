import { SelectQueryNode } from "../../compiler"

export interface QMapFunctions {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: (...args: any[]) => any
}

export interface QMapDescriptor {
  extends?: QMapContext
  functions?: QMapFunctions
  schemas: string
  queries: string
}

export interface QMapQueries {
  [key: string]: SelectQueryNode
}

export interface QMapContext {
  extends?: QMapContext
  functions: QMapFunctions
  schemas: QMapQueries
  queries: QMapQueries
}
