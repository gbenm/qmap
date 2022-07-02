import { QueryNode, RootQueryNode } from "../../../compiler"
import { Nullable } from "../../../utils/types"
import { QMapContext, QMapFunction, QMapQuery } from "../../creator/types"
import { QMapVars } from "../types"

export interface ApplyContext {
  root: RootQueryNode
  context: QMapContext
  query: Nullable<QMapQuery>
  schema: Nullable<QMapQuery>
  variables: Nullable<QMapVars>
}

export interface ExecutionContext {
  getVar: (name: string) => unknown
  getFn: (name: string) => QMapFunction
  globalTarget: any
}

export interface ApplyDefinitionContext<T extends QueryNode> {
  context: ExecutionContext
  result: any
  def: T
  target: any
}
