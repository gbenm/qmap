import { ASTNode } from "compiler"

export class Root implements ASTNode {
  constructor (public id: string, public children: ASTNode) { }

  generate (): { [key: string]: unknown } {
    const json = this.children ? this.children.generate() : {}

    if (this.id) {
      return {
        [this.id]: json,
        named: true
      }
    }

    return {
      "root": json,
      named: false
    }
  }
}
