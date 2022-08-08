import { createHash } from "crypto"
import { CachePolicy } from "../cachePolicy"

export default class HashCache extends CachePolicy<string, string> {
  private keyMap: { [k: string]: unknown } = {}

  constructor(public readonly algorithm: string = "sha256") {
    super()
  }

  getHash(key: string): string {
    return createHash(this.algorithm).update(key).digest("hex")
  }

  save(key: string, data: unknown): string {
    const hash = this.getHash(key)
    const nextCacheKey = this.cache.save(hash, data)
    this.keyMap[hash] = nextCacheKey
    return hash
  }

  update(key: string, data: unknown): void {
    return this.cache.update(this.keyMap[key], data)
  }

  hasKey(key: string): boolean {
    const nextKey = this.keyMap[key]

    return !!nextKey
  }

  lookup(key: string): unknown {
    return this.cache.lookup(this.keyMap[key])
  }

  remove(key: string): unknown {
    return this.cache.remove(this.keyMap[key])
  }
}
