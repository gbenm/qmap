export class CacheMissError extends Error {
  constructor(key: string) {
    super(`${key} is not in cache`)
  }
}
