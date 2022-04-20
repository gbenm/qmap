export type Json = { [key: string]: unknown }

export interface ASTNode {
  generate (): Json
}

export abstract class ASTNodeEntry implements ASTNode {
  abstract id: string
  abstract body: ASTNode

  public generate (): Json {
    return {
      [this.id]: this.body.generate()
    }
  }
}
