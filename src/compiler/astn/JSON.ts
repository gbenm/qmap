import { ASTNode, Json } from ".."

export class JsonNode implements ASTNode {
  constructor (public json: Json) { }

  generate(): Json {
    return this.json
  }
}
