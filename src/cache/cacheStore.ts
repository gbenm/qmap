import { CachePolicy } from "./cachePolicy"
import { ComputeFn as _ComputeFn } from "./types"

export abstract class CacheStore<Key, ComputeFn extends _ComputeFn = _ComputeFn>{
  private policy!: CachePolicy<string, string>

  private readonly self: CachePolicy<Key, Key> = new CacheStoreWrapper(this)

  constructor() {
    this.policy = <any> this.self
  }

  public getMainPolicy<P extends CachePolicy<string, string>>(): P {
    return <any> this.policy
  }

  public accept(policy: CachePolicy<string, string>): CacheStore<Key> {
    this.policy = policy
    this.policy.lastPolicy.pipe(this.self)
    return this
  }

  public setComputeFn(fn: ComputeFn): void {
    this.policy.setComputeFn(fn)
  }

  public computeAndSave(key: string, data: Parameters<ComputeFn>[0]): string {
    return this.policy.computeAndSave(key, data)
  }

  public save(key: string, data: unknown): string {
    return this.policy.save(key, data)
  }

  public update(key: string, data: unknown): void {
    return this.policy.update(key, data)
  }

  public hasKey(key: string): boolean {
    return this.policy.hasKey(key)
  }

  public lookup(key: string): unknown {
    return this.policy.lookup(key)
  }

  public remove(key: string): unknown {
    return this.policy.remove(key)
  }

  protected abstract _save(key: Key, data: unknown): Key
  protected abstract _update(key: Key, data: unknown): void
  protected abstract _hasKey(key: Key): boolean
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

  update(key: Key, data: unknown): void {
    this.store["_update"](key, data)
  }

  hasKey(key: Key): boolean {
    return this.store["_hasKey"](key)
  }

  lookup(key: Key): unknown {
    return this.store["_lookup"](key)
  }

  remove(key: Key): unknown {
    return this.store["_remove"](key)
  }
}
