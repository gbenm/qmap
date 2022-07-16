import { CompilerConfig } from "./config"
import { QueryNode } from "./query.types"
import { SymbolTable } from "./SymbolTable"

export interface ASTNode {
  generate (config: CompilerConfig, parentTable: SymbolTable): QueryNode<any>
}
