import { compile } from "../../compiler"
import { Nullable } from "../../utils/types"
import { QMapContext } from "../creator/types"
import { includes, apply } from "./features"
import { QMapExecutors, QMapOptions } from "./types"
import { findQuery, findSchema } from "./utils"

export { QMap } from "./types"
export * from "./features"

export function qmap(this: QMapContext<any, any>, target: Nullable<string>, options?: QMapOptions): QMapExecutors {
  const root = compile(target)

  return {
    apply: apply.bind({
      root,
      context: this,
      query: findQuery(this, root.query),
      schema: findSchema(this, options?.schema ?? this.defaultSchema),
      variables: options?.variables
    }) as any,
    includes: includes.bind({
      root,
      context: this,
      query: findQuery(this, root.query),
      schema: findSchema(this, options?.schema ?? this.defaultSchema),
    }),
    errors: root.errors.length > 0 ? root.errors : undefined,
  }
}
