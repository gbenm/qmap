import { ASTNode, Json } from "compiler"

export class JsonNode implements ASTNode {
  constructor (public json: Json) { }

  generate(): Json {
    return this.json
  }
}
