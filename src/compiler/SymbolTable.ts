import { Json } from "./ASTNode"
import { getQmapCtx, getValue, mergeObjectsWithCtx, wrapQmapCtx } from "./utils"

export const rootScope = Symbol("__root__")
export const allQuery = Symbol("__all__")
export const excludeQuery = Symbol("__exclude__")


export interface SymbolTable {
  createScope(name?: symbol): SymbolTable
  lookup(name: string, scope?: symbol): Json | undefined
  add(name: string | null, value: Json): void
  addQuery(special: symbol): void
  addQuery(query: string, ...queries: string[]): void
  enterTo(name: string, ...path: string[]): SymbolTable
  generateQueries(): Json
}

export type Scope = { name: symbol, table: Json }

let globalScopeId = 0

function generateScopeUniqueId(): symbol {
  return Symbol(`scope_${globalScopeId++}`)
}

export class SymbolTableImpl implements SymbolTable {
  private get currentScope(): Scope {
    return this.stack[0]
  }

  private constructor (
    private stack: Scope[],
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    private queryDescriptor: any,
    private currentPath: string[]
  ) { }

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
      }
      if (name === excludeQuery) {
        const prevObj = getValue(this.queryDescriptor, this.currentPath.slice(0, -1))
        const context = getQmapCtx(prevObj)
        if (!context.exclude) {
          context.exclude = []
        }
        context.exclude.push(this.currentPath[this.currentPath.length - 1])
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
    const queries = {}

    this.queryDescriptor.forEach((path) => {
      path.forEach((key, i) => {
        if (typeof key === "symbol") {
          if (key === allQuery) {
            const prevKey = path[i - 1]
            const currentObj = queries[prevKey]
            queries[prevKey] = mergeObjectsWithCtx(currentObj, wrapQmapCtx({
              all: true
            }))
          }
          if (key === excludeQuery) {
            const prevKey = path[i - 1]
            const currentObj = queries[prevKey]
            queries[path[i - 2]] = mergeObjectsWithCtx(currentObj, wrapQmapCtx({
              exclude: [prevKey]
            }))
          }
          return
        }
        queries[key] = {}
      })
    })

    return queries
  }

  public static create(): SymbolTable {
    const scopes = [{
      name: rootScope,
      table: {}
    }]
    return new SymbolTableImpl(scopes, {}, [])
  }

  createScope(name?: symbol): SymbolTable {
    const scopeName = name || generateScopeUniqueId()
    const scope = {
      name: scopeName,
      table: {}
    }
    const stack = [scope, ...this.stack]

    return new SymbolTableImpl(stack, this.queryDescriptor, this.currentPath)
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

  add(name: string | null, value: Json) {
    if (name === null) {
      this.currentScope.table = mergeObjectsWithCtx(this.currentScope.table, value)
      return
    }

    this.currentScope.table[name] = value
  }
}
