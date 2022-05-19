import { Nullable } from "../../utils/types"
import { QMapContext } from "../creator/types"

export type QMap = ((query: Nullable<string>) => void) & QMapContext

export interface QMapIndex {
  index: {
    [key: string]: QMapIndex
  },
  all: boolean
  exclude: {
    [key: string]: boolean
  }
}
