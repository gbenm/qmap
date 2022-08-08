import { chain } from "./tools"
import FIFOCache from "./__testing__/FIFOCache"
import HashCache from "./__testing__/HashCache"

test("chain", () => {
  const policies = (
    (...args) => args
  )(new HashCache(), new FIFOCache(10), new HashCache(), new FIFOCache(20))

  const cache = chain(...policies)
  expect(cache).toBe(policies[0])
  expect(cache["cache"]).toBe(policies[1])
  expect(cache["cache"]["cache"]).toBe(policies[2])
  expect(cache["cache"]["cache"]["cache"]).toBe(policies[3])
})

