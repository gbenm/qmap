import { Nullable } from "../../utils/types"
import { QMapContext } from "../creator/types"

export type QMap = ((query: Nullable<string>) => void) & QMapContext
