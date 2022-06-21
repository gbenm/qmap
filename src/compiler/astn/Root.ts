import { ASTNode, SymbolTableImpl, QueryNode, QueryType, CompilerConfig } from ".."
import { buildDefinitionsFromASTNodes } from "../utils"
import { Spread } from "./Spread"

export class Root implements ASTNode {
  constructor (public id: string | undefined, public children?: ASTNode[]) { }

  generate (config: CompilerConfig): QueryNode {
    const rootTable = SymbolTableImpl.create(config.ignoreIndex)

    const definitions: QueryNode[] = buildDefinitionsFromASTNodes({
      config,
      table: rootTable,
      nodes: this.children
    })

    if(definitions.length === 0) {
      // sets all flag to true
      new Spread([]).generate(config, rootTable)
    }

    return {
      type: QueryType.ROOT,
      definitions,
      query: this.id,
      descriptor: rootTable.generateIndex(),
      errors: []
    }
  }
}
