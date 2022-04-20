import { Json } from "./ASTNode"

export const qmapCTXKey = Symbol("$qmap_ctx")

export const qmapCtxWrap = (json: Json) => ({
  [qmapCTXKey]: json
})

export const getQmapCtx = (json: Json) => json[qmapCTXKey]
