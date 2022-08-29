import { QueryNode, RootQueryNode } from "@qmap/compiler"
import { DefinitionTreeCreator } from "./creator"
import RootDefinition from "./Root"
import { DefinitionNode } from "./types"

export * from "./types"

export function createDefinitionsTree(root: RootQueryNode<any>): RootDefinition {
  return new DefinitionTreeCreator().root(root)
}

export function createDefinitionsTreeFrom(node: QueryNode<any>): DefinitionNode {
  return new DefinitionTreeCreator().visit(node)
}

export function isDefinitionsTree(root: unknown) {
  return root instanceof RootDefinition
}
