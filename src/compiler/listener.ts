import { Exclude, Root, Spread } from "./astn"
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

  enterSpread(_ctx: ListenerContext): void {
    //
  }
  exitSpread(_ctx: ListenerContext): void {
    //
  }
  enterParam(_ctx: ListenerContext): void {
    //
  }
  exitParam(_ctx: ListenerContext): void {
    //
  }
  enterParams(_ctx: ListenerContext): void {
    //
  }
  exitParams(_ctx: ListenerContext): void {
    //
  }
  enterQuery(_ctx: ListenerContext): void {
    //
  }
  exitQuery(_ctx: ListenerContext): void {
    //
  }
  enterQuery_list(_ctx: ListenerContext): void {
    //
  }
  exitQuery_list(_ctx: ListenerContext): void {
    //
  }
  enterObj_ref(_ctx: ListenerContext): void {
    //
  }
  exitObj_ref(_ctx: ListenerContext): void {
    //
  }
  enterField(_ctx: ListenerContext): void {
    //
  }
  exitField(_ctx: ListenerContext): void {
    //
  }
  enterField_rename(_ctx: ListenerContext): void {
    //
  }
  exitField_rename(_ctx: ListenerContext): void {
    //
  }
  enterFn(_ctx: ListenerContext): void {
    //
  }
  exitFn(_ctx: ListenerContext): void {
    //
  }
  enterClient_function(_ctx: ListenerContext): void {
    //
  }
  exitClient_function(_ctx: ListenerContext): void {
    //
  }
}
