import { AccessQueryNode, AllQueryNode, ClientFunctionQueryNode, ExcludeQueryNode, FunctionQueryNode, GlobalAccessQueryNode, HideQueryNode, NewObjectQueryNode, OnResultQueryNode, PrimitiveNode, QMapIndex, QueryNode, QueryNodeInterface, RenameQueryNode, RootQueryNode, SelectQueryNode, SpreadQueryNode, VarQueryNode } from "./query.types"

export abstract class QueryNodeVisitor implements QueryNodeInterface {
  public visit(node: QueryNode<QMapIndex | null>) {
    const visit = this[node.type].bind(this)
    visit(node as any)
  }

  abstract root(n: RootQueryNode<QMapIndex>): void
  abstract select(n: SelectQueryNode): void
  abstract newObject(n: NewObjectQueryNode): void
  abstract function(n: FunctionQueryNode): void
  abstract clientFunction(n: ClientFunctionQueryNode): void
  abstract access(n: AccessQueryNode): void
  abstract globalAccess(n: GlobalAccessQueryNode): void
  abstract all(n: AllQueryNode): void
  abstract exclude(n: ExcludeQueryNode): void
  abstract spread(n: SpreadQueryNode): void
  abstract rename(n: RenameQueryNode): void
  abstract variable(n: VarQueryNode): void
  abstract hide(n: HideQueryNode): void
  abstract primitive(n: PrimitiveNode): void
  abstract onResult(n: OnResultQueryNode): void
}
