import { Json } from "./ASTNode"

export const qmapCTXKey = Symbol("$qmap_ctx")

export const wrapQmapCtx = (json: Json) => ({
  [qmapCTXKey]: json
})

export const wrapQmapJsonCtx = (json: Json, ctx: Json) => mergeQmapJsonWithCtx(json, wrapQmapCtx(ctx))

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getQmapCtx = (json?: Json): any => json ? json[qmapCTXKey] ?? {} : {}

export const mergeQmapCtx = (json?: Json, ...jsons: Json[]) => json === undefined ?
  {} :
  wrapQmapCtx({
    ...getQmapCtx(json),
    ...getQmapCtx(mergeQmapCtx(...jsons))
  })

export const mergeQmapJsonWithCtx = (...jsons: Json[]) => jsons
  .reduce((json, next) => {
    return {
    ...json,
    ...next,
    ...mergeQmapCtx(json, next)
  }
  }, {})
