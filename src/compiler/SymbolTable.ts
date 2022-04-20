import { Json } from "./ASTNode"
export const rootScope = Symbol("__root__")


export interface SymbolTable {
  createScope(name?: symbol): SymbolTable
  lookup(name: string, scope?: symbol): Json | undefined
  add(name: string, value: Json): void
}

export type Scope = { name: symbol, table: Json }

let globalScopeId = 0

function generateScopeUniqueId(): symbol {
  return Symbol(`scope_${globalScopeId++}`)
}

export class SymbolTableImpl implements SymbolTable {
  private stack: Scope[] = []

  private get currentScope(): Scope {
    return this.stack[0]
  }

  private constructor (stack: Scope[]) {
    this.stack = stack
  }

  public static create(): SymbolTable {
    const scopes = [{
      name: rootScope,
      table: {}
    }]
    return new SymbolTableImpl(scopes)
  }

  createScope(name?: symbol): SymbolTable {
    const scopeName = name || generateScopeUniqueId()
    const scope = {
      name: scopeName,
      table: {}
    }
    const stack = [scope, ...this.stack]

    return new SymbolTableImpl(stack)
  }

  lookup(name: string, scope?: symbol): Json | undefined {
    if (scope) {
      const scopeIndex = this.stack.findIndex(s => s.name === scope)
      if (scopeIndex === -1) {
        return undefined
      }
      const scopeTable = this.stack[scopeIndex].table

      return scopeTable[name] as (Json | undefined)
    }

    for (const scope of this.stack) {
      const table = scope.table
      const value = table[name]
      if (value !== undefined) {
        return value as (Json | undefined)
      }
    }

    return undefined
  }

  add(name: string, value: Json) {
    this.currentScope.table[name] = value
  }
}
