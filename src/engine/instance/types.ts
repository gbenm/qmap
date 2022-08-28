import { Nullable } from "@qmap/utils/types"
import { OperateMode, QMapContext, QMapFunctions } from "../creator/types"
import { ApplyOptions } from "./features/types"

export interface QMap<Pctx extends QMapContext<any, any> | undefined, Fns extends QMapFunctions> extends QMapContext<Pctx, Fns> {
  (query: Nullable<string>, options?: Nullable<QMapOptions>): QMapExecutors
}

export interface QMapExecutors {
  errors: unknown[] | undefined
  apply<T>(target: any, overrideOptions?: Nullable<ApplyOptions>): T
  includes: (path: string[], overrideOptions?: Nullable<QMapIncludesOptions>) => boolean
}

export interface QMapVars {
  [key: string]: unknown
}

export interface QMapOptions {
  schema?: Nullable<string>
  variables?: QMapVars
  ignoreIndex?: boolean
  mode?: OperateMode
}

export interface QMapIncludesOptions {
  schema?: Nullable<string>
}
