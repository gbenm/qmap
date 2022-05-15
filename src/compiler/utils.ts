import { Json } from "./query.types"

export const qmapCTXKey = Symbol("qmap")

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function getValue(obj: any, keys: string[], getter = (value: any, key: string) => value[key]): Json {
  let value = obj
  for (const key of keys) {
    value = getter(value, key)
  }

  return value
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isNullable = (obj: any) => obj === null || obj === undefined

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const mergeObjects = (obj: any, obj2: any) => {
  if (isNullable(obj)) {
    return obj2
  }

  if (typeof obj !== "object") {
    return obj
  }

  if (typeof obj2 !== "object") {
    return obj
  }

  if (Array.isArray(obj) && Array.isArray(obj2)) {
    return obj.concat(obj2)
  }

  if (Array.isArray(obj)) {
    return obj
  }

  if (Array.isArray(obj2)) {
    return obj
  }

  const keys = Array.from(new Set([...Object.keys(obj), ...Object.keys(obj2)]))

  const result = keys.map((key) => {
    if (isNullable(obj2[key])) {
      return [key, obj[key]]
    }

    return [key, mergeObjects(obj[key], obj2[key])]
  }).reduce((acc, [key, value]) => {
    acc[key] = value
    return acc
  }, {})

  return result
}

export const mergeObjectsWithCtx = (obj: Json, obj2: Json) => {
  const merged = mergeObjects(obj, obj2)
  const ctx = wrapQmapCtx(mergeObjects(getQmapCtx(obj), getQmapCtx(obj2)))
  return {
    ...merged,
    ...ctx
  }
}

export const wrapQmapCtx = (json: Json) => ({
  [qmapCTXKey]: json
})

export const wrapQmapJsonCtx = (json: Json, ctx: Json) => mergeQmapJsonWithCtx(json, wrapQmapCtx(ctx))

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getQmapCtx = (json?: Json): any => {
  if (!json) {
    return {}
  }

  if(!json[qmapCTXKey]) {
    json[qmapCTXKey] = {}
    return json[qmapCTXKey]
  }

  return json[qmapCTXKey]
}

export const mergeQmapCtx = (json?: Json, ...jsons: Json[]) => json === undefined ?
  {} :
  wrapQmapCtx(mergeObjects(
    getQmapCtx(json),
    getQmapCtx(mergeQmapCtx(...jsons))
  ))

export const mergeQmapJsonWithCtx = (...jsons: Json[]) => jsons
  .reduce((json, next) => {
    return {
    ...json,
    ...next,
    ...mergeQmapCtx(json, next)
  }
  }, {})
