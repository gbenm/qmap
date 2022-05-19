import { compile, RootQueryNode } from "../../compiler"
import { Nullable } from "../../utils/types"
import { QMapContext } from "../creator/types"
import { QMapExecutors, QMapIndex } from "./types"

export { QMap } from "./types"

export function includes(this: RootQueryNode, path: string[]): boolean {
  let key: string
  let descriptor: QMapIndex | undefined = this.descriptor as QMapIndex
  path = [...path]

  for (key = path.shift() as string; path.length > 0; key = path.shift() as string) {
    descriptor = descriptor?.index[key]
    if (!descriptor) {
      return false
    }
  }

  if (descriptor?.all) {
    return !descriptor?.exclude[key]
  }

  return !!descriptor?.index[key]
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function apply(this: RootQueryNode, target: any): any {
  // TODO: implementar algoritmo para aplicar definitions
  return target
}

export function qmap(this: QMapContext, target: Nullable<string>): QMapExecutors {
  const root = compile(target)

  return {
    apply: apply.bind(root),
    includes: includes.bind(root),
    errors: root.errors.length > 0 ? root.errors : undefined,
  }
}
