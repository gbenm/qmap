export enum QueryType {
  ROOT = "root",
  SELECT = "select",
  FUNCTION = "function",
  CLIENT_FUNCTION = "client_function",
  ACCESS = "access",
  GLOBAL_ACCESS = "global_access",
  ALL = "all",
  EXCLUDE = "exclude",
  SPREAD = "spread",
  RENAME = "rename",
  VAR = "variable",
  HIDE = "hide",
  PRIMITIVE = "primitive"
}

export type QueryNode = PrimitiveNode | AllQueryNode | ExcludeQueryNode | SelectQueryNode | FunctionQueryNode | ClientFunctionQueryNode | AccessQueryNode | GlobalAccessQueryNode | RootQueryNode | SpreadQueryNode | RenameQueryNode | VarQueryNode | HideQueryNode

export type NamedQueryNode = CommonNamedQueryNode & QueryNode

export type FnQueryNode = QueryNode & CommonFunctionQueryNode

export interface QMapIndex {
  index: {
    [key: string]: QMapIndex
  },
  all?: boolean
  exclude?: {
    [key: string]: boolean
  }
}

export interface CommonQueryNode {
  type: QueryType
  alias?: string
  definitions: QueryNode[]
}

export interface CommonNamedQueryNode extends CommonQueryNode {
  name: string
}

export interface PrimitiveNode {
  type: QueryType.PRIMITIVE
  val: unknown
  name: string
}

export interface AllQueryNode {
  type: QueryType.ALL
}


export interface CommonFunctionQueryNode extends CommonNamedQueryNode {
  arrayPosition?: number
  alias: string
  args: QueryNode[]
}

export interface FunctionQueryNode extends CommonFunctionQueryNode {
  type: QueryType.FUNCTION
}

export interface ClientFunctionQueryNode extends CommonFunctionQueryNode {
  type: QueryType.CLIENT_FUNCTION
}

export interface ExcludeQueryNode {
  type: QueryType.EXCLUDE
  name: string
}

export interface SelectQueryNode extends CommonNamedQueryNode {
  type: QueryType.SELECT
}

export interface CommonAccessQueryNode extends CommonQueryNode {
  alias: string
  keys: string[]
}

export interface AccessQueryNode extends CommonAccessQueryNode {
  type: QueryType.ACCESS
}

export interface GlobalAccessQueryNode extends CommonAccessQueryNode {
  type: QueryType.GLOBAL_ACCESS
}

export type SpreadIds = [(string | symbol)?, ...string[]]

export interface SpreadQueryNode {
  type: QueryType.SPREAD
  keys: SpreadIds
  node: QueryNode
}

export interface RenameQueryNode {
  type: QueryType.RENAME
  alias: string
  node: QueryNode
}

export interface VarQueryNode {
  type: QueryType.VAR
  name: string
}

export interface HideQueryNode {
  type: QueryType.HIDE
  name: string
  definitions: QueryNode[]
  index: QMapIndex
}

export interface RootQueryNode {
  type: QueryType.ROOT
  definitions: QueryNode[]
  query?: string
  descriptor: QMapIndex
  errors: unknown[]
}
