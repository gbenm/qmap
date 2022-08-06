export type IndexStoreEntryType = "scoped" | "global" | "all" | "exclude"

export interface IndexStoreEntry {
  type: IndexStoreEntryType
  path: string[]
  index: IndexStoreEntry[]
}

export interface IndexStoreScope {
  id: number
  path: string[]
  prevExclude?: string[]
}
