import { ASTNode, SymbolTableImpl, QueryNode, QueryType, CompilerConfig } from ".."

export class Root implements ASTNode {
  constructor (public id: string | undefined, public children: ASTNode[] | null) { }

  generate (config: CompilerConfig): QueryNode {
    const rootTable = SymbolTableImpl.create()

    return {
      type: QueryType.ROOT,
      definitions: this.children?.map(child => child.generate(config, rootTable)) ?? [],
      query: this.id,
      descriptor: rootTable.generateIndex(),
      errors: []
    }
  }
}
