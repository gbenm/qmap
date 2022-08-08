import { CacheStore } from "../cacheStore"

export default class InMemoryCache extends CacheStore<string> {
  private memo: { [k: string]: unknown } = {}

  protected _save(key: string, data: unknown) {
    this.memo[key] = data
    return key
  }

  protected _update(key: string, data: unknown): void {
    this.save(key, data)
  }

  protected _hasKey(key: string): boolean {
    return !!this.memo[key]
  }

  protected _lookup(key: string): unknown {
    return this.memo[key]
  }

  protected _remove(key: string): unknown {
    const target = this.memo[key]
    delete this.memo[key]
    return target
  }
}
