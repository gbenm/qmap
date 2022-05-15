import { Json, QueryNode } from "./query.types"
import { getQmapCtx, getValue, mergeObjectsWithCtx } from "./utils"

export const rootScope = Symbol("__root__")
export const allQuery = Symbol("__all__")
export const excludeQuery = Symbol("__exclude__")

export interface SymbolTable {
  createScope(name?: symbol): SymbolTable
  lookup(name: string, scope?: symbol): [QueryNode | undefined, string[]] | []
  copyIndexFrom(...path: string[]): void
  enterTo(name: string, ...path: string[]): SymbolTable
  add(name: string, value: QueryNode): void
  addToIndex(special: symbol): void
  addToIndex(query: string, ...queries: string[]): void
  generateIndex(): Json
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
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    private queryDescriptor: any,
    private currentPath: string[]
  ) {
    this.currentScope.path = this.currentPath
  }

  private getValue (path) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return getValue(this.queryDescriptor, path, (obj: any, key: string) => obj[key].index)
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private _addIndextoPrevObj(obj: any): void {
    const prevObj = this.getValue(this.prevObjPath)
    prevObj[this.lastKeyInPath] = mergeObjectsWithCtx(prevObj[this.lastKeyInPath], obj)
  }

  copyIndexFrom(...path: string[]): void {
    if (!path || path.length === 0) {
      return
    }

    this._addIndextoPrevObj(this.getValue(path))
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  _addToIndex(obj: any, name: string, ...rest: string[]) {
    const value = obj[name]?.index
    if (rest.length > 0) {
      if (value) {
        this._addToIndex(value, name, ...rest)
      } else {
        if (!obj[name]) {
          obj[name] = {}
        }
        obj[name].index = {}
        const [key, ...rest2] = rest
        this._addToIndex(obj[name].index, key, ...rest2)
      }
      return
    }

    if (!value) {
      if (!obj[name]) {
        obj[name] = {}
      }

      obj[name].index = {}
    }
  }

  addToIndex(special: symbol): void;
  addToIndex(query: string, ...queries: string[]): void;
  addToIndex(name: symbol | string, ...rest: string[]): void {
    const currentObj = this.getValue(this.currentPath)

    if (typeof name === "symbol") {
      if (name === allQuery) {
        currentObj.all = true
      } else if (name === excludeQuery) {
        const prevObj = this.getValue(this.prevObjPath)
        delete prevObj[this.lastKeyInPath]

        if (!prevObj.exclude) {
          prevObj.exclude = {}
        }

        prevObj.exclude[this.lastKeyInPath] = true
      }
      return
    }

    this._addToIndex(currentObj, name, ...rest)
  }

  enterTo(name: string, ...path: string[]): SymbolTable {
    this.addToIndex(name, ...path)
    return new SymbolTableImpl(this.stack, this.queryDescriptor, [...this.currentPath, name, ...path])
  }

  generateIndex(): Json {
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
