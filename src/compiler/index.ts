import QMapLexer from "./syntax/QMapLexer"
import QMapParser from "./syntax/QMapParser"
import QMapListener from "./listener"
import antlr from "antlr4"
import { QMapIndex, QueryType, RootQueryNode } from "./query.types"
import { CompilerConfig } from "./config"
import { mergeObjects } from "@qmap/utils"
import { Root } from "./astn"
import { IndexGenerator } from "./indexGenerator"

export * from "./ASTNode"
export * from "./SymbolTable"
export * from "./astn"
export * from "./query.types"
export * from "./config"

interface Parser extends QMapParser {
  buildParseTrees: boolean
  addErrorListener: (a: unknown) => void
  addParseListener: (l: unknown) => void
}

interface StartContext extends ReturnType<QMapParser["start"]> {
  root: Root
}

const defaultConfig: CompilerConfig = {
  mode: "compact",
  ignoreIndex: false
}

export function compile<Index=QMapIndex> (query: string | undefined | null, config: Partial<CompilerConfig> = defaultConfig): RootQueryNode<Index> {
  config = mergeObjects(config, defaultConfig)

  const errors: unknown[] = []
  const chars = new antlr.InputStream(query ?? "")
  const lexer = new QMapLexer(chars)
  const tokens = new antlr.CommonTokenStream(lexer)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const parser: Parser = new QMapParser(tokens) as any
  parser.buildParseTrees = true
  parser.addErrorListener({
    syntaxError: (_: string, offendingSymbol: string, line: string, column: string, msg: string, error: Error) => {
      errors.push(`${offendingSymbol} line ${line}, col ${column}: ${msg}`)
      if (error) {
        errors.push(error)
      }
    }
  })
  parser.addParseListener(new QMapListener())

  const gen = new IndexGenerator()

  try {
    const tree = parser.start() as StartContext
    const root = tree.root.generate(config as CompilerConfig) as RootQueryNode<QMapIndex | null>

    root.errors = errors

    if (!root.descriptor) {
      if (!config.ignoreIndex) {
        root.descriptor = gen.createIndexFrom(root)
      } else {
        root.descriptor = null
      }
    }

    return root as any
  } catch (error: unknown) {
    errors.push(error)
  }

  return {
    type: QueryType.ROOT,
    definitions: [],
    descriptor: {
      index: {}
    } as any,
    errors
  }
}
