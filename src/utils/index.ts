export const isNullable = (obj: any) => obj === null || obj === undefined

export function getValue<R = any>(obj: any, keys: string[], getter = (value: any, key: string) => value[key]): R {
  let value = obj

  keys.forEach((key) => {
    value = getter(value, key)
  })

  return value
}

/**
 * 1. objects have precedence over primitives, i.e. mergeObject(3, {}) == {}
 * 2. the first object has precedence, .e.g. mergeObject({a: 1}, {a: 2}) == {a: 1}
 */
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

export function intersect<T>(arr1: T[], arr2: T[]): T[] {
  return arr1.filter(a => arr2.includes(a))
}

export const identity = <T>(v: T) => v

export const range = (startOrCount: number, end?: number) => end === undefined
  ? new Array(startOrCount).fill(0).map((_, i) => i)
  : new Array(end - startOrCount + 1).fill(0).map((_, i) => i + startOrCount)
