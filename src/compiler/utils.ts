import { ASTNode } from "./ASTNode"
import { CompilerConfig } from "./config"
import { NamedQueryNode, QueryNode, QueryType } from "./query.types"
import { SymbolTable } from "./SymbolTable"

export function buildDefinitionsFromASTNodes ({
  config,
  nodes,
  table
}: {
  config: CompilerConfig, nodes: ASTNode[] | undefined, table: SymbolTable
}): QueryNode[] {
  const definitions: QueryNode[] = []

  nodes?.forEach((child) => {
    const queryNode = child.generate(config, table)

    if (queryNode.type === QueryType.SPREAD && config.mode === "compact") {
      definitions.push(...queryNode.node["definitions"])
    } else {
      definitions.push(queryNode)
    }
  })

  return definitions
}

export function searchQueryNode<T extends NamedQueryNode>(node: T, path: string[]): QueryNode | undefined {
  if (path.length === 0) {
    return node
  }

  const [key, ...rest] = path
  const children = node.definitions
    .map(node => node as NamedQueryNode)
    .filter(d => d.name === key || d.alias === key)

  for (const child of children) {
    const result = searchQueryNode(child, rest)

    if (result) {
      return result
    }
  }
}
