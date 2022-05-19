import { ASTNode } from "../ASTNode"
import { QueryNode, QueryType } from "../query.types"

export class Var implements ASTNode {
  constructor (private name: string) { }

  generate(): QueryNode {
    return {
      type: QueryType.VAR,
      name: this.name
    }
  }
}
