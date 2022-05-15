import { QueryNode } from "./query.types"
import { SymbolTable } from "./SymbolTable"
export interface ASTNode {
  generate (parentTable: SymbolTable): QueryNode
}
