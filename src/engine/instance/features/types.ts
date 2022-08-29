import { DefinitionNode } from "@qmap/engine/definition"
import RootDefinition from "@qmap/engine/definition/Root"
import { QMapQuery } from "@qmap/engine/types"
import { Nullable } from "@qmap/utils/types"
import { QMapContext, QMapFunction } from "../../creator/types"
import { QMapVars } from "../types"
import { QMapOptions } from "../types"

export interface ApplyContext {
  root: RootDefinition
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

export interface ApplyDefinitionContext<T extends DefinitionNode> {
  context: ExecutionContext
  result: any
  def: T
  target: any
}

export interface ApplyOptions extends QMapOptions {
  over?: string[]
}
