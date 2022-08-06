import { getValue, intersect } from "../../utils"
import { AccessQueryNode, ClientFunctionQueryNode, ExcludeQueryNode, FunctionQueryNode, GlobalAccessQueryNode, NewObjectQueryNode, ParentIndexQueryNode, ParentQueryNode, QMapIndex, QueryNode, QueryType, RenameQueryNode, RootQueryNode, SelectQueryNode, SpreadQueryNode } from "../query.types"
import { QueryNodeVisitor } from "../queryNodeVisitor"
import { IndexStoreScope } from "./types"

export class IndexGenerator extends QueryNodeVisitor {
  private store: IndexStore = new IndexStore()

  createIndexFrom(node: RootQueryNode<QMapIndex | null>) {
    this.visit(node)
    return this.store.getIndex()
  }

  root(n: RootQueryNode<QMapIndex>): void {
    this.visitChildren(n, "definitions")
    this.setAllIfEmpty(n)
  }

  select(n: SelectQueryNode): void {
    this.store.enterScope(n.name)

    this.visitChildren(n, "definitions")
    this.visitChildren(n, "indexDefinitions")
    this.setAllIfEmpty(n)

    this.store.popScope()
  }

  newObject(n: NewObjectQueryNode): void {
    this.visitChildren(n, "definitions")
  }

  function(n: FunctionQueryNode): void {
    this.visitChildren(n, "args")
  }

  clientFunction(n: ClientFunctionQueryNode): void {
    const func: FunctionQueryNode = {...n, type: QueryType.FUNCTION }
    this.function(func)
  }

  access(n: AccessQueryNode): void {
    const [scope, ...rest] = n.keys
    this.store.enterScope(scope, ...rest)
    this.visitChildren(n, "definitions")
    this.visitChildren(n, "indexDefinitions")
    this.setAllIfEmpty(n)
    this.store.popScope()
  }

  globalAccess(n: GlobalAccessQueryNode): void {
    const [scope, ...rest] = n.keys
    this.store.enterGlobalScope(scope, ...rest)
    this.visitChildren(n, "definitions")
    this.visitChildren(n, "indexDefinitions")
    this.setAllIfEmpty(n)
    this.store.popScope()
  }

  all(): void {
    this.store.addIncludeAll()
  }

  exclude(n: ExcludeQueryNode): void {
    this.store.exclude(n.name)
  }

  spread(n: SpreadQueryNode): void {
    this.visitChildren(n.node, "definitions")
  }

  rename(n: RenameQueryNode): void {
    this.visit(n.node)
  }

  variable(): void {
    // nothing
  }

  hide(): void {
    // nothing
  }

  primitive(): void {
    // nothing
  }

  onResult(): void {
    // nothing
  }

  private visitChildren<K extends string>(node: QueryNode & ParentNode<K>, key: K) {
    (<any> node)[key].forEach(child => this.visit(child))
  }

  private setAllIfEmpty(n: ParentQueryNode | ParentIndexQueryNode) {
    const indexNode = <ParentIndexQueryNode> n
    const includeAllParentIndex = indexNode.indexDefinitions && n.definitions.length === 0 && indexNode.indexDefinitions.length === 0
    const includeAll = !indexNode.indexDefinitions && n.definitions.length === 0

    if (includeAll || includeAllParentIndex) {
      this.store.addIncludeAll()
    }
  }
}

type ParentNode<K extends string> = {
  [k in K]: QueryNode[]
}

class IndexStore {
  private index: QMapIndex
  private scopes: IndexStoreScope[]
  private availableID: number
  private snapshot: QMapIndex

  constructor() {
    this.index = { index: {} }
    this.snapshot = { index: {} }
    this.scopes = [
      { id: 0, path: [] }
    ]
    this.availableID = 1
  }

  private get currentScope(): IndexStoreScope {
    return this.scopes[0]
  }

  private get currentPath(): string[] {
    return this.currentScope.path
  }

  private scopedIndex(): QMapIndex {
    return this.getValueFromIndex(this.index, this.currentPath)
  }

  getIndex() {
    return this.index
  }

  enterGlobalScope(firstScope: string, ...otherScopes: string[]) {
    this.addToIndex(this.index, firstScope, ...otherScopes)

    this.scopes.unshift({
      id: this.availableID++,
      path: [firstScope, ...otherScopes],
    })
  }

  enterScope(firstScope: string, ...otherScopes: string[]) {
    const scopedIndex = this.scopedIndex()
    this.addToIndex(scopedIndex, firstScope, ...otherScopes)
    this.scopes.unshift({
      id: this.availableID++,
      path: [...this.currentPath, firstScope, ...otherScopes],
    })
  }

  private addToIndex(scopedIndex: QMapIndex, scope: string, ...scopes: string[]) {
    const targetIndex = scopedIndex.index[scope]

    if (!targetIndex) {
      scopedIndex.index[scope] = {
        index: {}
      }
    }

    if (scopes.length === 0) {
      return
    }

    const [nextScope, ...otherScopes] = scopes
    const nextScopedIndex = this.getValueFromIndex(scopedIndex, [scope])
    this.addToIndex(nextScopedIndex, nextScope, ...otherScopes)
  }

  popScope() {
    const prevExclude = this.getValueFromIndexSnapshot(this.currentPath)?.exclude
    const scopedIndex = this.scopedIndex()
    if (prevExclude) {
      const currentExclude = this.currentExcludeToArray()
      scopedIndex.exclude = intersect(currentExclude, this.excludeToArray(prevExclude))
        .reduce((excludeIndex, target) => {
          excludeIndex[target] = true
          return excludeIndex
        }, {})
    }

    this.scopes.shift()
  }

  addIncludeAll() {
    const scopedIndex = this.scopedIndex()
    if (!scopedIndex.all) {
      scopedIndex.all = true
    } else {
      this.takeSnapshot()
      scopedIndex.exclude = {}
    }
  }

  exclude(name: string) {
    const scopedIndex = this.scopedIndex()
    if (scopedIndex.all) {
      if (!scopedIndex.exclude) {
        scopedIndex.exclude = {}
      }
      scopedIndex.exclude[name] = true
    }
  }

  private currentExcludeToArray(): string[] {
    const scopedIndex = this.scopedIndex()
    return this.excludeToArray(scopedIndex.exclude)
  }

  private excludeToArray(exclude: QMapIndex["exclude"]): string[] {
    return Object.keys(exclude ?? {})
  }

  private getValueFromIndex(index: QMapIndex, path: string[]): QMapIndex {
    return getValue(index, path, (value: QMapIndex, key) => {
      return value.index[key]
    })
  }

  private getValueFromIndexSnapshot(path: string[]): QMapIndex | undefined {
    return getValue(this.snapshot, path, (value: QMapIndex | null, key) => {
      return value?.index[key]
    })
  }

  private takeSnapshot() {
    this.snapshot = JSON.parse(JSON.stringify(this.index))
  }
}
