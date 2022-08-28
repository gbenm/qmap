import { QueryNode, QMapIndex, RootQueryNode, CompilerConfig } from "@qmap/compiler"
import { CacheStore as _CacheStore } from "@qmap/cache"
import { ComputeFn } from "@qmap/cache/types"
import { Nullable } from "@qmap/utils/types"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type QMapFunction = (...args: any[]) => any

export type CacheStore = _CacheStore<any, ComputeFn<{ query: Nullable<string>, options?: CompilerConfig }, RootQueryNode>>

export interface QMapFunctions {
  [key: string]: QMapFunction
}

export type OperateMode = "only-cache" | "normal" | "compiler"

export interface QMapDescriptor<Pctx extends QMapContext<any, any> | undefined, Fns extends QMapFunctions> {
  extends?: Pctx
  functions?: Fns
  schemas?: string
  queries?: string
  defaultSchema?: string
  cache?: CacheStore
  mode?: OperateMode
}

export interface QMapQuery {
  definitions: QueryNode[]
  descriptor: QMapIndex
}

export interface QMapQueries {
  [key: string]: QMapQuery
}

export interface QMapContext<Pctx extends QMapContext<any, any> | undefined, Fns extends QMapFunctions> {
  extends: Pctx
  functions: Fns
  schemas: QMapQueries
  queries: QMapQueries
  defaultSchema: string | undefined
  cache?: CacheStore
  mode?: OperateMode
}
