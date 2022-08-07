import { CachePolicy } from "./cachePolicy"
import { ComputeFn } from "./types"

export abstract class CacheStore<Key> {
  private policy!: CachePolicy<string, string>

  private readonly self: CachePolicy<Key, Key> = new CacheStoreWrapper(this)

  constructor() {
    this.policy.lastPolicy.pipe(this.self)
  }

  public accept(policy: CachePolicy<string, string>): CacheStore<Key> {
    this.policy = policy
    return this
  }

  public setComputeFn(fn: ComputeFn): void {
    this.policy.setComputeFn(fn)
  }

  public computeAndSave(key: string, data: unknown): string {
    return this.policy.computeAndSave(key, data)
  }

  public save(key: string, data: unknown): string {
    return this.policy.save(key, data)
  }

  public lookup(key: string): unknown {
    return this.policy.lookup(key)
  }

  public remove(key: string): unknown {
    return this.policy.remove(key)
  }

  protected abstract _save(key: Key, data: unknown): Key
  protected abstract _lookup(key: Key): unknown
  protected abstract _remove(key: Key): unknown
}

class CacheStoreWrapper<Key> extends CachePolicy<Key, Key> {
  constructor(private store: CacheStore<Key>) {
    super()
  }

  save(key: Key, data: unknown): Key {
    return this.store["_save"](key, data)
  }

  lookup(key: Key): unknown {
    return this.store["_lookup"](key)
  }

  remove(key: Key): unknown {
    return this.store["_remove"](key)
  }
}
