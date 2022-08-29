import { AccessQueryNode, ExcludeQueryNode, FunctionQueryNode, GlobalAccessQueryNode, NewObjectQueryNode, OnResultQueryNode, PrimitiveNode, QMapIndex, QueryNode, RenameQueryNode, RootQueryNode, SelectQueryNode, VarQueryNode } from "@qmap/compiler"
import { QueryNodeVisitor } from "@qmap/compiler/queryNodeVisitor"
import AccessDefinition from "./Access"
import AllDefinition from "./All"
import ExcludeDefinition from "./Exclude"
import FunctionDefinition from "./Function"
import GlobalAccessDefinition from "./GlobalAccess"
import NewObjectDefinition from "./NewObject"
import OnResultDefinition from "./OnResult"
import PrimitiveDefinition from "./Primitive"
import RootDefinition from "./Root"
import SelectDefinition from "./Select"
import VarDefinition from "./Var"

export class DefinitionTreeCreator extends QueryNodeVisitor {
  root(n: RootQueryNode<QMapIndex>) {
    return new RootDefinition(n, visitChildren(this, n.definitions))
  }

  select(n: SelectQueryNode) {
    return new SelectDefinition(n,visitChildren(this, n.definitions))
  }

  newObject(n: NewObjectQueryNode) {
    return new NewObjectDefinition(n, visitChildren(this, n.definitions))
  }

  function(n: FunctionQueryNode) {
    return new FunctionDefinition(n, visitChildren(this, n.args), visitChildren(this, n.definitions))
  }

  clientFunction() {
    throw new Error("Client functions are not supported")
  }

  access(n: AccessQueryNode) {
    return new AccessDefinition(n, visitChildren(this, n.definitions))
  }

  globalAccess(n: GlobalAccessQueryNode) {
    return new GlobalAccessDefinition(n, visitChildren(this, n.definitions))
  }

  all() {
    return new AllDefinition()
  }

  exclude(n: ExcludeQueryNode) {
    return new ExcludeDefinition(n)
  }

  spread() {
    return null
  }

  rename(n: RenameQueryNode) {
    return this.visit(n.node)
  }

  variable(n: VarQueryNode) {
    return new VarDefinition(n)
  }

  hide() {
    return null
  }

  primitive(n: PrimitiveNode) {
    return new PrimitiveDefinition(n)
  }

  onResult(n: OnResultQueryNode) {
    return new OnResultDefinition(n, this.visit(n.node))
  }
}

function visitChildren(instance: DefinitionTreeCreator, defs: QueryNode[]) {
  return defs.map(def => instance.visit(def)).filter(def => def)
}
