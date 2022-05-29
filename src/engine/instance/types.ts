import { Nullable } from "../../utils/types"
import { QMapContext } from "../creator/types"

export type QMap = ((query: Nullable<string>, options?: Nullable<QMapOptions>) => QMapExecutors) & QMapContext

export interface QMapExecutors {
  errors: unknown[] | undefined
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  apply: (target: any) => any
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

export interface QMapOptions {
  schema?: Nullable<string>
  variables?: {
    [key: string | number]: unknown
  }
}
