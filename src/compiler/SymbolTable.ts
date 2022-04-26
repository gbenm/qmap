import { Json } from "./ASTNode"
import { getQmapCtx, getValue, mergeObjectsWithCtx } from "./utils"

export const rootScope = Symbol("__root__")
export const allQuery = Symbol("__all__")
export const excludeQuery = Symbol("__exclude__")


export interface SymbolTable {
  createScope(name?: symbol): SymbolTable
  lookup(name: string, scope?: symbol): [Json | undefined, string[]] | []
  copyQueryFrom(...path: string[]): void
  add(name: string | null, value: Json): void
  addQuery(special: symbol): void
  addQuery(query: string, ...queries: string[]): void
  enterTo(name: string, ...path: string[]): SymbolTable
  generateQueries(): Json
}

export type Scope = { name: symbol, table: Json, path: string[] }

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
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    private queryDescriptor: any,
    private currentPath: string[]
  ) {
    this.currentScope.path = this.currentPath
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private _addQueriestoPrevObj(obj: any): void {
    const prevObj = getValue(this.queryDescriptor, this.prevObjPath)
    prevObj[this.lastKeyInPath] = mergeObjectsWithCtx(prevObj[this.lastKeyInPath], obj)
  }

  copyQueryFrom(...path: string[]): void {
    if (!path || path.length === 0) {
      return
    }

    this._addQueriestoPrevObj(getValue(this.queryDescriptor, path))
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  _addQuery(obj: any, name: string, ...rest: string[]) {
    const value = obj[name]

    if (rest.length > 0) {
      if (value) {
        this._addQuery(value, name, ...rest)
      } else {
        obj[name] = {}
        const [key, ...rest2] = rest
        this._addQuery(obj[name], key, ...rest2)
      }
      return
    }

    if (!value) {
      obj[name] = {}
    }
  }

  addQuery(special: symbol): void
  addQuery(name: string, ...queries: string[]): void
  addQuery(name: symbol | string, ...rest: string[]): void {
    const currentObj = getValue(this.queryDescriptor, this.currentPath)
    if (typeof name === "symbol") {
      if (name === allQuery) {
        getQmapCtx(currentObj).all = true
      } else if (name === excludeQuery) {
        const prevObj = getValue(this.queryDescriptor, this.prevObjPath)
        const [prevKey] = this.currentPath.slice(-1)
        delete prevObj[prevKey]
        const context = getQmapCtx(prevObj)
        if (!context.exclude) {
          context.exclude = []
        }
        context.exclude.push(this.lastKeyInPath)
      }
      return
    }

    this._addQuery(currentObj, name, ...rest)
  }

  enterTo(name: string, ...path: string[]): SymbolTable {
    this.addQuery(name, ...path)
    return new SymbolTableImpl(this.stack, this.queryDescriptor, [...this.currentPath, name, ...path])
  }

  generateQueries(): Json {
    return this.queryDescriptor
  }

  public static create(): SymbolTable {
    const scopes = [{
      name: rootScope,
      table: {},
      path: []
    }]
    return new SymbolTableImpl(scopes, {}, [])
  }

  createScope(name?: symbol): SymbolTable {
    const scopeName = name || generateScopeUniqueId()
    const scope = {
      name: scopeName,
      table: {},
      path: this.currentPath
    }
    const stack = [scope, ...this.stack]

    return new SymbolTableImpl(stack, this.queryDescriptor, this.currentPath)
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

  lookup(name: string, scopeName?: symbol): [Json | undefined, string[]] | [] {
    const scope = this._lookup(name, scopeName)
    if (!scope) {
      return []
    }

    return [scope.table[name] as (Json | undefined), scope.path]
  }

  add(name: string | null, value: Json) {
    if (name === null) {
      this.currentScope.table = mergeObjectsWithCtx(this.currentScope.table, value)
      return
    }

    this.currentScope.table[name] = value
  }
}
