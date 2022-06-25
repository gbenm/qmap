import { RootQueryNode } from "../../../../compiler"
import { Nullable } from "../../../../utils/types"
import { QMapContext, QMapFunction, QMapQuery } from "../../../creator/types"
import { QMapVars } from "../../types"

export type ApplyContext = {
  root: RootQueryNode
  context: QMapContext
  query: Nullable<QMapQuery>
  schema: Nullable<QMapQuery>
  variables: Nullable<QMapVars>
}

export type ExecutionContext = {
  getVar: (name: string) => unknown
  getFn: (name: string) => QMapFunction
}
