import { compile } from "../../compiler"
import { Nullable } from "../../utils/types"
import { QMapContext } from "../creator/types"
import { includes, apply } from "./features"
import { QMapExecutors, QMapOptions } from "./types"
import { findQuery, findSchema } from "./utils"

export { QMap } from "./types"
export * from "./features"

export function qmap(this: QMapContext, target: Nullable<string>, options?: QMapOptions): QMapExecutors {
  const root = compile(target)

  return {
    apply: apply.bind({
      root,
      context: this,
      query: findQuery(this, root.query),
      schema: findSchema(this, options?.schema),
      variables: options?.variables
    }),
    includes: includes.bind({
      root,
      query: findQuery(this, root.query),
      schema: findSchema(this, options?.schema),
    }),
    errors: root.errors.length > 0 ? root.errors : undefined,
  }
}
