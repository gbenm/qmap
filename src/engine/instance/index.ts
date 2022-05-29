import { compile, RootQueryNode } from "../../compiler"
import { Nullable } from "../../utils/types"
import { QMapContext } from "../creator/types"
import { includes } from "./features"
import { QMapExecutors, QMapOptions } from "./types"
import { findQuery, findSchema } from "./utils"

export { QMap } from "./types"
export * from "./features"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function apply(this: RootQueryNode, target: any): any {
  // TODO: implementar algoritmo para aplicar definitions
  return target
}

export function qmap(this: QMapContext, target: Nullable<string>, options?: QMapOptions): QMapExecutors {
  const root = compile(target)

  return {
    apply: apply.bind(root),
    includes: includes.bind({
      root,
      query: findQuery(this, root.query),
      schema: findSchema(this, options?.schema),
    }),
    errors: root.errors.length > 0 ? root.errors : undefined,
  }
}
