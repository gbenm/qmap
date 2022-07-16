import { ASTNode, QueryNode, QueryType } from ".."

export class Exclude implements ASTNode {
  constructor (public name: string) { }

  generate (): QueryNode {
    return {
      type: QueryType.EXCLUDE,
      name: this.name
    }
  }
}
