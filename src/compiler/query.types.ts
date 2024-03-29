export enum QueryType {
  ROOT = "root",
  SELECT = "select",
  NEW_OBJECT = "newObject",
  FUNCTION = "function",
  CLIENT_FUNCTION = "clientFunction",
  ACCESS = "access",
  GLOBAL_ACCESS = "globalAccess",
  ALL = "all",
  EXCLUDE = "exclude",
  SPREAD = "spread",
  RENAME = "rename",
  VAR = "variable",
  HIDE = "hide",
  PRIMITIVE = "primitive",
  ON_RESULT = "onResult"
}

export type QueryNode<IType = QMapIndex> = PrimitiveNode
  | AllQueryNode
  | ExcludeQueryNode
  | SelectQueryNode
  | FunctionQueryNode
  | ClientFunctionQueryNode
  | AccessQueryNode
  | GlobalAccessQueryNode
  | RootQueryNode<IType>
  | SpreadQueryNode
  | RenameQueryNode
  | VarQueryNode
  | HideQueryNode
  | NewObjectQueryNode
  | OnResultQueryNode

export type NamedQueryNode = CommonNamedQueryNode & QueryNode

export type FnQueryNode = QueryNode & CommonFunctionQueryNode

export type ParentQueryNode = QueryNode & Pick<CommonQueryNode, "definitions">
export type ParentIndexQueryNode = QueryNode & Pick<SelectQueryNode, "definitions" | "indexDefinitions">

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
  indexDefinitions: QueryNode[]
}

export interface NewObjectQueryNode extends CommonQueryNode {
  type: QueryType.NEW_OBJECT
  alias: string
}

export interface CommonAccessQueryNode extends CommonQueryNode {
  alias: string
  keys: string[]
}

export interface AccessQueryNode extends CommonAccessQueryNode {
  type: QueryType.ACCESS
  indexDefinitions: QueryNode[]
}

export interface GlobalAccessQueryNode extends CommonAccessQueryNode {
  type: QueryType.GLOBAL_ACCESS
  indexDefinitions: QueryNode[]
}

export type SpreadIds = [(string | symbol)?, ...string[]]

export interface SpreadQueryNode {
  type: QueryType.SPREAD
  keys: SpreadIds
  node: ParentQueryNode
}

export interface RenameQueryNode {
  type: QueryType.RENAME
  alias: string
  node: QueryNode
}

export interface OnResultQueryNode {
  type: QueryType.ON_RESULT
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
}

export interface RootQueryNode<IType = null> {
  type: QueryType.ROOT
  definitions: QueryNode[]
  query?: string
  descriptor: IType
  errors: unknown[]
}

export type QueryNodeInterface = {
  [T in QueryType]: (n: { type: T } & QueryNode, ...args: any[]) => any
}
