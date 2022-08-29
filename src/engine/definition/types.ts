import { ExecutionContext } from "../instance/features/types"

export interface DefinitionNode {
  apply(context: ApplyDefinitionContext): void
}

export interface DefinitionNodeWithChildren extends DefinitionNode {
  definitions: DefinitionNode[]
}

export interface DefinitionNodeWithChild extends DefinitionNode {
  node: DefinitionNode
}

export interface DefintionNodeWithArgs extends DefinitionNode {
  args: DefinitionNode[]
}

export interface ApplyDefinitionContext {
  context: ExecutionContext
  result: any
  target: any
}
