import { ASTNode, ASTNodeEntry, Json } from ".."

export class Field implements ASTNode {
  constructor (public entry: ASTNodeEntry, public body: ASTNode) { }

  generate(): Json {
    return {
      [this.entry.id]: {
        ...this.entry.body.generate(),
        ...this.body?.generate()
      }
    }
  }
}
