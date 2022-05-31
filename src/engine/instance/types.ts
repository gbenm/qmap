import { Nullable } from "../../utils/types"
import { QMapContext } from "../creator/types"

export type QMap = ((query: Nullable<string>, options?: Nullable<QMapOptions>) => QMapExecutors) & QMapContext

export interface QMapExecutors {
  errors: unknown[] | undefined
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  apply: (target: any, overrideOptions?: Nullable<QMapOptions>) => any
  includes: (path: string[]) => boolean
}

export interface QMapIndex {
  index: {
    [key: string]: QMapIndex
  },
  all: boolean
  exclude?: {
    [key: string]: boolean
  }
}

export interface QMapVars {
  [key: string]: unknown
}

export interface QMapOptions {
  schema?: Nullable<string>
  variables?: QMapVars
}
