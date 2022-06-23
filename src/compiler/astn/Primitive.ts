import { ASTNode } from "../ASTNode"
import { QueryNode, QueryType } from "../query.types"

export class Primitive implements ASTNode {
  constructor(public val: unknown) {}

  generate(): QueryNode {
    return {
      type: QueryType.PRIMITIVE,
      val: this.val,
      name: typeof this.val
    }
  }
}
