import { ASTNode, SymbolTableImpl, QueryNode, QueryType, CompilerConfig } from ".."
import { buildDefinitionsFromASTNodes } from "../utils"

export class Root implements ASTNode {
  constructor (public id: string | undefined, public children: ASTNode[] | null) { }

  generate (config: CompilerConfig): QueryNode {
    const rootTable = SymbolTableImpl.create()

    const definitions: QueryNode[] = buildDefinitionsFromASTNodes({
      config,
      table: rootTable,
      nodes: this.children
    })

    return {
      type: QueryType.ROOT,
      definitions,
      query: this.id,
      descriptor: rootTable.generateIndex(),
      errors: []
    }
  }
}
