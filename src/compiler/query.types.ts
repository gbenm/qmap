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
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Json = { [key: string | symbol]: any }

export type QueryNode = CommonNamedQueryNode | AllQueryNode | ExcludeQueryNode | SelectQueryNode | FunctionQueryNode | ClientFunctionQueryNode | AccessQueryNode | RootQueryNode | SpreadQueryNode | RenameQueryNode

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

export interface FunctionQueryNode extends CommonNamedQueryNode {
  type: QueryType.FUNCTION
}

export interface ClientFunctionQueryNode extends CommonNamedQueryNode {
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
  keys: string[]
}

export interface SpreadQueryNode {
  type: QueryType.SPREAD
  keys: (string | symbol)[]
  node: QueryNode
}

export interface RenameQueryNode {
  type: QueryType.RENAME
  alias: string
  node: QueryNode
}

export interface RootQueryNode {
  type: QueryType.ROOT
  definitions: QueryNode[]
  query?: string
  descriptor: Json
  errors: unknown[]
}
