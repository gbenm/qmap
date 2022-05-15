import qMapLexer from "../syntax/qMapLexer"
import qMapParser from "../syntax/qMapParser"
import antlr from "antlr4"
import { QueryType, RootQueryNode } from "./query.types"

export * from "./ASTNode"
export * from "./SymbolTable"
export * from "./astn"
export * from "./query.types"

export function compile (query: string | undefined | null): RootQueryNode {
  const errors: unknown[] = []
  const chars = new antlr.InputStream(query ?? "")
  const lexer = new qMapLexer(chars)
  const tokens = new antlr.CommonTokenStream(lexer)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const parser = new qMapParser(tokens) as any
  parser.buildParseTrees = true

  try {
    const tree = parser.start()
    const root = tree.root as RootQueryNode

    root.errors = errors

    return root
  } catch (error: unknown) {
    errors.push(error)
  }

  return {
    type: QueryType.ROOT,
    definitions: [],
    descriptor: {},
    errors
   }
}
