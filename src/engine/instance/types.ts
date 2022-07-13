import { Nullable } from "../../utils/types"
import { QMapContext, QMapFunctions } from "../creator/types"

export interface QMap<Pctx extends QMapContext<any, any> | undefined, Fns extends QMapFunctions> extends QMapContext<Pctx, Fns> {
  (query: Nullable<string>, options?: Nullable<QMapOptions>): QMapExecutors
}

export interface QMapExecutors {
  errors: unknown[] | undefined
  apply<T>(target: any, overrideOptions?: Nullable<QMapOptions>): T
  includes: (path: string[], overrideOptions?: Nullable<QMapIncludesOptions>) => boolean
}

export interface QMapVars {
  [key: string]: unknown
}

export interface QMapOptions {
  schema?: Nullable<string>
  variables?: QMapVars
}

export interface QMapIncludesOptions {
  schema?: Nullable<string>
}
