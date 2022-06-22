import QMapLexer from "./syntax/QMapLexer"
import QMapParser from "./syntax/QMapParser"
import antlr from "antlr4"
import { QueryType, RootQueryNode } from "./query.types"
import { CompilerConfig } from "./config"
import { mergeObjects } from "./utils"

export * from "./ASTNode"
export * from "./SymbolTable"
export * from "./astn"
export * from "./query.types"
export * from "./config"

const defaultConfig: CompilerConfig = {
  mode: "compact",
  ignoreIndex: false
}

export function compile (query: string | undefined | null, config: Partial<CompilerConfig> = defaultConfig): RootQueryNode {
  config = mergeObjects(config, defaultConfig)

  const errors: unknown[] = []
  const chars = new antlr.InputStream(query ?? "")
  const lexer = new QMapLexer(chars)
  const tokens = new antlr.CommonTokenStream(lexer)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const parser = new QMapParser(tokens) as any
  parser.buildParseTrees = true
  parser.addErrorListener({
    syntaxError: (_: string, offendingSymbol: string, line: string, column: string, msg: string, error: Error) => {
      errors.push(`${offendingSymbol} line ${line}, col ${column}: ${msg}`)
      if (error) {
        errors.push(error)
      }
    }
  })

  try {
    const tree = parser.start()
    const root = tree.root.generate(config) as RootQueryNode

    root.errors = errors

    return root
  } catch (error: unknown) {
    errors.push(error)
  }

  return {
    type: QueryType.ROOT,
    definitions: [],
    descriptor: {
      index: {}
    },
    errors
   }
}
