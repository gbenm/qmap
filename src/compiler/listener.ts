import { Exclude, Field, Function, Rename, Root, Spread, Var } from "./astn"
import { rootScope } from "./SymbolTable"
import Listener from "./syntax/QMapListener"

export interface Parser {
  symbolicNames: string[]
}

export interface ListenerContext {
  parser: Parser
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: any[]
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getChild(index: number): any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any
}

export default class QMapListener extends Listener {
  exitStart(ctx: ListenerContext): void {
    const query = ctx.getChild(0)
    const queryListASTNode = ctx.getChild(2)

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
    forwardNode(ctx)
  }

  exitExclude(ctx: ListenerContext): void {
    const id = ctx.getChild(1)
    ctx.node = new Exclude(id.getText())
  }

  exitGlobal_spread(ctx: ListenerContext): void {
    const idNodes = ctx.children.slice(2)
    const ids = ignoreTerminals(idNodes, astn => astn.text)

    ctx.node = new Spread([rootScope, ...ids])
  }

  exitScoped_spread(ctx: ListenerContext): void {
    const idNodes = ctx.children.splice(1)
    const ids = ignoreTerminals(idNodes, astn => astn.text)

    ctx.node = new Spread(ids)
  }

  exitSpread(ctx: ListenerContext): void {
    forwardNode(ctx)
  }

  exitVariable(ctx: ListenerContext): void {
    const terminal = ctx.getChild(1)
    ctx.node = new Var(terminal.getText())
  }

  exitParam(ctx: ListenerContext): void {
    forwardNode(ctx)
  }

  exitParams(ctx: ListenerContext): void {
    ctx.nodes = ignoreTerminals(ctx.children, astn => astn.node)
  }

  exitQuery(ctx: ListenerContext): void {
    forwardNode(ctx)
  }

  exitQuery_list(ctx: ListenerContext): void {
    ctx.nodes = ignoreTerminals(ctx.children, astn => astn.node)
  }

  exitObj_ref(ctx: ListenerContext): void {
    ctx.ids = ignoreTerminals(ctx.children, id => id.text)
  }

  exitField(ctx: ListenerContext): void {
    const objRef = ctx.getChild(0)
    const queryList = ctx.getChild(2)

    if (queryList) {
      ctx.node = new Field(objRef.ids, queryList.nodes)
    } else {
      ctx.node = new Field(objRef.ids)
    }
  }

  exitField_rename(ctx: ListenerContext): void {
    const id = ctx.getChild(0)
    const stm = ctx.getChild(2)

    ctx.node = new Rename(id.text, stm.node)
  }

  exitNormal_fn(ctx: ListenerContext): void {
    const id = ctx.getChild(0)
    const params = ctx.getChild(2)

    ctx.node = new Function(id.getText(), params.nodes, false, false)
  }

  exitMap_fn(ctx: ListenerContext): void {
    const id = ctx.getChild(1)
    const params = ctx.getChild(3)

    ctx.node = new Function(id.getText(), params.nodes, false, true)
  }

  exitFn(ctx: ListenerContext): void {
    forwardNode(ctx)
  }

  exitNormal_client_fn(ctx: ListenerContext): void {
    const id = ctx.getChild(0)
    const params = ctx.getChild(3)

    ctx.node = new Function(id.getText(), params.nodes, true, false)
  }

  exitMap_client_fn(ctx: ListenerContext): void {
    const id = ctx.getChild(1)
    const params = ctx.getChild(4)

    ctx.node = new Function(id.getText(), params.nodes, true, true)
  }

  exitClient_fn(ctx: ListenerContext): void {
    forwardNode(ctx)
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function ignoreTerminals(children: any[], map: (child: any) => any) {
  return children.filter(astn => !astn.symbol).map(map)
}

function forwardNode(ctx: ListenerContext, key = "node") {
  ctx[key] = ctx.getChild(0)[key]
}
