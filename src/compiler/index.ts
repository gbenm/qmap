import qMapLexer from "../syntax/qMapLexer"
import qMapParser from "../syntax/qMapParser"
import antlr from "antlr4"

export * from "./ASTNode"
export * from "./astn"

export function compile (query: string) {
  const chars = new antlr.InputStream(query)
  const lexer = new qMapLexer(chars)
  const tokens = new antlr.CommonTokenStream(lexer)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const parser = new qMapParser(tokens) as any
  parser.buildParseTrees = true
  const tree = parser.start()
  return tree.json
}
