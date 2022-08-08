import { identity } from "../utils"
import { ComputeFn } from "./types"

export abstract class CachePolicy<InitialKey, Key = unknown> {
  protected next?: CachePolicy<Key>
  private computeFn: ComputeFn = identity

  protected get cache(): CachePolicy<Key> {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.next!
  }

  get lastPolicy (): CachePolicy<unknown> {
    return this.next ? this.next.lastPolicy : this
  }

  public pipe(policy: CachePolicy<Key>) {
    this.next = policy
    return this
  }

  public setComputeFn(fn: ComputeFn): void {
    this.computeFn = fn
  }

  public computeAndSave(key: InitialKey, data: unknown): Key {
    const result = this.computeFn(data)
    return this.save(key, result)
  }

  abstract save(key: InitialKey, data: unknown): Key
  abstract update(key: Key, data: unknown): void
  abstract hasKey(key: Key): boolean
  abstract lookup(key: Key): unknown
  abstract remove(key: Key): unknown
}
