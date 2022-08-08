import { CachePolicy } from "./cachePolicy"

type OmitFirst<T extends any[]> = T extends [any, ...infer R] ? R : never
type GetValueOrDefault<Thing, Key, Default = never> = Key extends keyof Thing ? Thing[Key] : Default

type Chain<S, N, Types extends [S, ...any[]], ShiftTypes extends any[] = OmitFirst<Types>> = {
  [I in keyof Types]: CachePolicy<Types[I], GetValueOrDefault<ShiftTypes, I, N>>
}

type NextKeyType<CP> = CP extends CachePolicy<any, infer Key> ? Key : never

export function chain<FC extends CachePolicy<any, any>, N extends NextKeyType<FC>, P extends [N, ...any[]]>(
  ...policies: [FC, ...Chain<N, any, P>]
): FC {
  policies.reduce<null | CachePolicy<any>>((prev, curr) => {
    prev?.pipe(curr)
    return curr
  }, null)
  return policies[0]
}
