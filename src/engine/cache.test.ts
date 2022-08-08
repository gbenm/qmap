import { CacheStore } from "../cache"
import FIFOCache from "../cache/__testing__/FIFOCache"
import HashCache from "../cache/__testing__/HashCache"
import InMemoryCache from "../cache/__testing__/InMemoryCache"
import * as compiler from "../compiler"
import { range } from "../utils"
import { qmapCreator } from "./creator"
import { CacheMissError } from "./instance/errors"

describe("with cache", () => {
  test("simple", () => {
    const qmap = qmapCreator({
      cache: new InMemoryCache()
    })

    const query = "{ id, name }"

    jest.clearAllMocks()
    jest.spyOn(compiler, "compile")

    range(5).forEach((i) => qmap(query))

    expect(compiler.compile).toHaveBeenCalledTimes(1)
  })

  test("cache miss error", () => {
    const qmap = qmapCreator({
      cache: setupCache()
    })

    const query = "{ id, name }"

    expect(() => qmap(query, { mode: "only-cache" }))
      .toThrow(new CacheMissError(query))
  })

  test("using cache", () => {
    const qmap = qmapCreator({
      cache: setupCache()
    })

    const query = "{ id, name }"
    const hash = (<HashCache> qmap.cache?.mainPolicy).getHash(query)

    jest.clearAllMocks()
    jest.spyOn(compiler, "compile")

    range(5).forEach((i) => qmap(i === 0 ? query : hash))

    expect(compiler.compile).toHaveBeenCalledTimes(1)
  })

  test("compute and save", () => {
    const qmap = qmapCreator({
      cache: setupCache()
    })

    const query = "{ id, name }"
    const hash = qmap.cache?.computeAndSave(query, { query })

    expect(hash).toBe(getHash(qmap.cache, query))

    expect(() => {
      jest.clearAllMocks()
      jest.spyOn(compiler, "compile")

      const { apply, errors } = qmap(hash, { mode: "only-cache" })
      expect(errors).toBeFalsy()
      expect(apply({ id: 3, name: "test", other: "other" }))
        .toEqual({ id: 3, name: "test" })

      expect(compiler.compile).toHaveBeenCalledTimes(0)
    }).not.toThrow()
  })
})

test("force recompile", () => {
  const qmap = qmapCreator({
    cache: setupCache(false)
  })

  const query = "{ id, name }"

  jest.clearAllMocks()
  jest.spyOn(compiler, "compile")

  range(3).forEach(() => qmap(query, { mode: "compiler" }))

  expect(compiler.compile).toHaveBeenCalledTimes(3)
})

const getHash = (cache: CacheStore<any> | undefined, value: string) => (<HashCache> cache?.mainPolicy).getHash(value)

const setupCache = (withHashCache = true) => {
    const fifo = new FIFOCache(2)
    const policy = withHashCache ? new HashCache().pipe(fifo) : fifo
    const cache = new InMemoryCache().accept(policy)
    return cache
}
