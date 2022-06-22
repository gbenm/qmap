export enum QueryType {
  ROOT = "root",
  SELECT = "select",
  FUNCTION = "function",
  CLIENT_FUNCTION = "client_function",
  ACCESS = "access",
  ALL = "all",
  EXCLUDE = "exclude",
  SPREAD = "spread",
  RENAME = "rename",
  VAR = "variable",
  HIDE = "hide",
}

export type QueryNode = CommonNamedQueryNode | CommonFunctionQueryNode | AllQueryNode | ExcludeQueryNode | SelectQueryNode | FunctionQueryNode | ClientFunctionQueryNode | AccessQueryNode | RootQueryNode | SpreadQueryNode | RenameQueryNode | VarQueryNode | HideQueryNode

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

export interface AllQueryNode {
  type: QueryType.ALL
}


export interface CommonFunctionQueryNode extends CommonNamedQueryNode {
  byItem: boolean
  alias: string
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

export interface AccessQueryNode extends CommonQueryNode {
  type: QueryType.ACCESS
  alias: string
  keys: string[]
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
