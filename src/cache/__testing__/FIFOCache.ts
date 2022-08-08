import { CachePolicy } from "../cachePolicy"

export default class FIFOCache extends CachePolicy<any, any> {
  private queue: unknown[] = []

  constructor(private readonly capacity: number) {
    super()
  }

  save(key: any, data: unknown): any {
    if (!this.lookup(key) && this.queue.length === this.capacity) {
      this.remove(this.dequeue())
    }

    this.enqueue(key)

    return this.cache.save(key, data)
  }

  update(key: any, data: unknown): void {
    return this.cache.update(key, data)
  }

  hasKey(key: any): boolean {
    return this.cache.hasKey(key)
  }

  lookup(key: any): unknown {
    return this.cache.lookup(key)
  }

  remove(key: any): unknown {
    return this.cache.remove(key)
  }

  private enqueue(key: any) {
    if (this.queue.length < this.capacity) {
      this.queue.push(key)
    }
  }

  private dequeue(): unknown {
    return this.queue.shift()
  }
}
