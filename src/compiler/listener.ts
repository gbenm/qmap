import { Exclude, Field, Function, Rename, Root, Spread, Var } from "./astn"
import { rootScope } from "./SymbolTable"
import Listener from "./syntax/QMapListener"

export interface Parser {
  symbolicNames: string[]
}

export interface ListenerContext {
  parser: Parser
  children: any[]
  getChild(index: number): any
  [key: string]: any
}

export default class QMapListener extends Listener {
  exitStart(ctx: ListenerContext): void {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [query, _, queryListASTNode] = ctx.children
    if (queryListASTNode) {
      ctx.root = new Root(query.text, queryListASTNode.nodes)
    } else {
      ctx.root = new Root(query.text)
    }
  }

  exitOptional_id(ctx: ListenerContext): void {
    const child = ctx.getChild(0)

    ctx.text = child?.text
  }

  exitId(ctx: ListenerContext): void {
    const terminal = ctx.getChild(0)
    const symbol = terminal.getSymbol()

    if (ctx.parser.symbolicNames[symbol.type] === "ID") {
      ctx.text = terminal.getText()
    } else {
      ctx.text = eval(terminal.getText())
    }
  }

  exitStm(ctx: ListenerContext): void {
    ctx.node = ctx.getChild(0).node
  }

  exitExclude(ctx: ListenerContext): void {
    const id = ctx.getChild(1)
    ctx.node = new Exclude(id.getText())
  }

  exitGlobal_spread(ctx: ListenerContext): void {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [_0, _1, ...idATSNodes] = ctx.children
    const ids = idATSNodes.filter(astn => !astn.symbol).map(astn => astn.text)

    ctx.node = new Spread([rootScope, ...ids])
  }

  exitScoped_spread(ctx: ListenerContext): void {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [_, ...idASTNodes] = ctx.children

    ctx.node = new Spread(idASTNodes.filter(astn => !astn.symbol).map(astn => astn.text))
  }

  exitSpread(ctx: ListenerContext): void {
    ctx.node = ctx.getChild(0).node
  }

  exitVariable(ctx: ListenerContext): void {
    const terminal = ctx.getChild(1)
    ctx.node = new Var(terminal.getText())
  }

  exitParam(ctx: ListenerContext): void {
    ctx.node = ctx.getChild(0).node
  }

  exitParams(ctx: ListenerContext): void {
    ctx.nodes = ctx.children.filter(astn => !astn.symbol).map(astn => astn.node)
  }

  exitQuery(ctx: ListenerContext): void {
    ctx.node = ctx.getChild(0).node
  }

  exitQuery_list(ctx: ListenerContext): void {
    ctx.nodes = ignoreTerminals(ctx.children, astn => astn.node)
  }

  exitObj_ref(ctx: ListenerContext): void {
    ctx.ids = ignoreTerminals(ctx.children, id => id.text)
  }

  exitField(ctx: ListenerContext): void {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [objRef, _lbrace, queryList] = ctx.children

    if (queryList) {
      ctx.node = new Field(objRef.ids, queryList.nodes)
    } else {
      ctx.node = new Field(objRef.ids)
    }
  }

  exitField_rename(ctx: ListenerContext): void {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [id, _colon, stm] = ctx.children

    ctx.node = new Rename(id.text, stm.node)
  }

  exitNormal_fn(ctx: ListenerContext): void {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [id, _lparen, params] = ctx.children

    ctx.node = new Function(id.getText(), params.nodes, false, false)
  }

  exitMap_fn(ctx: ListenerContext): void {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [_lbracket, id, _lparen, params] = ctx.children

    ctx.node = new Function(id.getText(), params.nodes, false, true)
  }

  exitFn(ctx: ListenerContext): void {
    ctx.node = ctx.getChild(0).node
  }

  exitNormal_client_fn(ctx: ListenerContext): void {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [id, _exMark, _lparen, params] = ctx.children

    ctx.node = new Function(id.getText(), params.nodes, true, false)
  }

  exitMap_client_fn(ctx: ListenerContext): void {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [_lbracket, id, _exMark, _lparen, params] = ctx.children

    ctx.node = new Function(id.getText(), params.nodes, true, true)
  }

  exitClient_fn(ctx: ListenerContext): void {
    ctx.node = ctx.getChild(0).node
  }
}

function ignoreTerminals(children: any[], map: (child: any) => any) {
  return children.filter(astn => !astn.symbol).map(map)
}
