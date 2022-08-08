import { QueryNode } from "./query.types"

export const rootScope = Symbol("__root__")

export interface SymbolTable {
  createScope(name?: symbol): SymbolTable
  add(name: string, value: QueryNode): void
  lookup(name: string, scope?: symbol): [QueryNode | undefined, string[]] | []
}

export type ScopeTable = {
  [key: string]: QueryNode
}
export type Scope = { name: symbol, table: ScopeTable, path: string[] }

let globalScopeId = 0

function generateScopeUniqueId(): symbol {
  return Symbol(`scope_${globalScopeId++}`)
}

export class SymbolTableImpl implements SymbolTable {
  private get currentScope(): Scope {
    return this.stack[0]
  }

  private get lastKeyInPath(): string {
    return this.currentPath[this.currentPath.length - 1]
  }

  private get prevObjPath(): string[] {
    return this.currentPath.slice(0, -1)
  }

  private constructor (
    private stack: Scope[],
    private currentPath: string[],
    private ignoreIndex: boolean
  ) {
    this.currentScope.path = this.currentPath
  }

  public static create(ignoreIndex: boolean): SymbolTable {
    const scopes = [{
      name: rootScope,
      table: {},
      path: []
    }]
    return new SymbolTableImpl(scopes, [], ignoreIndex)
  }

  createScope(name?: symbol): SymbolTable {
    const scopeName = name || generateScopeUniqueId()
    const scope = {
      name: scopeName,
      table: {},
      path: [...this.currentPath]
    }
    const stack = [scope, ...this.stack]

    return new SymbolTableImpl(stack, this.currentPath, this.ignoreIndex)
  }

  private _lookup(name: string, scope?: symbol): Scope | undefined {
    if (scope) {
      const scopeIndex = this.stack.findIndex(s => s.name === scope)
      if (scopeIndex === -1) {
        return
      }
      return this.stack[scopeIndex]
    }

    for (const scope of this.stack) {
      const table = scope.table
      const value = table[name]
      if (value !== undefined) {
        return scope
      }
    }

    return
  }

  lookup(name: string, scopeName?: symbol): [QueryNode | undefined, string[]] | [] {
    const scope = this._lookup(name, scopeName)
    if (!scope) {
      return []
    }

    return [scope.table[name], scope.path]
  }

  add(name: string, value: QueryNode) {
    this.currentScope.table[name] = value
  }
}
