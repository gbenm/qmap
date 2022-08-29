import { QMapIndex } from "@qmap/compiler"
import { DefinitionNode } from "./definition"

export interface QMapQuery {
  definitions: DefinitionNode[]
  descriptor: QMapIndex
}
