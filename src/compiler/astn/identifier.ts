import { ASTNode } from "compiler"

export class Identifier implements ASTNode {
  constructor (public id: string, public child: ASTNode) { }

  generate (): { [key: string]: unknown } {
    const json = this.child ? this.child.generate() : {}

    return {
      [this.id]: json,
    }
  }
}
