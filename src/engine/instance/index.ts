import { compile } from "../../compiler"
import { Nullable } from "../../utils/types"
import { QMapContext } from "../creator/types"

export { QMap } from "./types"

export function qmap(this: QMapContext, target: Nullable<string>) {
    const { query, definitions, descriptor, errors } = compile(target)
}
