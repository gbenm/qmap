import { QMapIndex, QueryNode, RootQueryNode } from "@qmap/compiler"
import { Nullable } from "@qmap/utils/types"
import { QMapContext, QMapFunction, QMapQuery } from "../../creator/types"
import { QMapVars } from "../types"
import { QMapOptions } from "../types"

export interface ApplyContext {
  root: RootQueryNode<QMapIndex | null>
  context: QMapContext<any, any>
  query: Nullable<QMapQuery>
  schema: Nullable<QMapQuery>
  variables: Nullable<QMapVars>
}

export interface ExecutionContext {
  getVar: (name: string) => unknown
  getFn: (name: string) => QMapFunction
  globalTarget: any
  currentResult: any
  functionScopedResult?: any
}

export interface ApplyDefinitionContext<T extends QueryNode> {
  context: ExecutionContext
  result: any
  def: T
  target: any
}

export interface ApplyOptions extends QMapOptions {
  over?: string[]
}
