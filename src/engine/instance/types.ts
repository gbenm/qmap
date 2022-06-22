import { Nullable } from "../../utils/types"
import { QMapContext } from "../creator/types"

export interface QMap extends QMapContext {
  (query: Nullable<string>, options?: Nullable<QMapOptions>): QMapExecutors
}

export interface QMapExecutors {
  errors: unknown[] | undefined
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  apply: (target: any, overrideOptions?: Nullable<QMapOptions>) => any
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
