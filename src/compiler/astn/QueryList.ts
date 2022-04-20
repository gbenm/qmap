import { ASTNode, Json } from "compiler"

export class QueryList implements ASTNode {
  constructor (public nodes: ASTNode[]) { }

  generate(): Json {
    return this.nodes.reduce((json, node) => ({...json, ...node.generate()}), {})
  }
}
