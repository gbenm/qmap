import { compile, QMapIndex, RootQueryNode } from "../../compiler"
import { Nullable } from "../../utils/types"
import { QMapContext } from "../creator/types"
import { CacheMissError } from "./errors"
import { includes, apply } from "./features"
import { QMapExecutors, QMapOptions } from "./types"
import { findQuery, findSchema } from "./utils"

export { QMap } from "./types"
export * from "./features"

export function qmap(this: QMapContext<any, any>, target: Nullable<string>, options?: QMapOptions): QMapExecutors {
  let root: RootQueryNode<QMapIndex | null> | undefined

  if (options?.mode) {
    this.mode = options.mode
  }

  if (target && this.cache && this.mode !== "compiler") {
    root = this.cache.lookup(target) as any
    if (!root && this.mode === "only-cache") {
      throw new CacheMissError(target)
    }
  }

  if (!root) {
    root = compile(target, { ignoreIndex: options?.ignoreIndex ?? false })
    if (this.cache && target) {
      if (this.cache.hasKey(target)) {
        this.cache.update(target, root)
      } else {
        this.cache.save(target, root)
      }
    }
  }

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
