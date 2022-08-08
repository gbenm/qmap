import { AccessQueryNode, AllQueryNode, ClientFunctionQueryNode, ExcludeQueryNode, FunctionQueryNode, GlobalAccessQueryNode, HideQueryNode, NewObjectQueryNode, OnResultQueryNode, PrimitiveNode, QMapIndex, QueryNode, QueryNodeInterface, RenameQueryNode, RootQueryNode, SelectQueryNode, SpreadQueryNode, VarQueryNode } from "./query.types"

export abstract class QueryNodeVisitor implements QueryNodeInterface {
  public visit(node: QueryNode<QMapIndex | null>, ...args: any[]) {
    const visit = this[node.type].bind(this)
    return visit(node as any, ...args)
  }

  abstract root(n: RootQueryNode<QMapIndex>, ...args: any[]): any
  abstract select(n: SelectQueryNode, ...args: any[]): any
  abstract newObject(n: NewObjectQueryNode, ...args: any[]): any
  abstract function(n: FunctionQueryNode, ...args: any[]): any
  abstract clientFunction(n: ClientFunctionQueryNode, ...args: any[]): any
  abstract access(n: AccessQueryNode, ...args: any[]): any
  abstract globalAccess(n: GlobalAccessQueryNode, ...args: any[]): any
  abstract all(n: AllQueryNode, ...args: any[]): any
  abstract exclude(n: ExcludeQueryNode, ...args: any[]): any
  abstract spread(n: SpreadQueryNode, ...args: any[]): any
  abstract rename(n: RenameQueryNode, ...args: any[]): any
  abstract variable(n: VarQueryNode, ...args: any[]): any
  abstract hide(n: HideQueryNode, ...args: any[]): any
  abstract primitive(n: PrimitiveNode, ...args: any[]): any
  abstract onResult(n: OnResultQueryNode, ...args: any[]): any
}
