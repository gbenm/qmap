import { Exclude, Field, Function as FunctionNode, NewObject, OnResult, Primitive, Rename, Root, Spread, Var } from "./astn"
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

  exitIndex_ref(ctx: ListenerContext): void {
    forwardNode(ctx, {
      index: 1,
      key: "ids",
      byDefault: []
    })
  }

  exitFn_return(ctx: ListenerContext): void {
    forwardNode(ctx, {
      index: 1,
      key: "nodes"
    })
  }

  exitFn_stm(ctx: ListenerContext): void {
    const fn: FunctionNode = ctx.getChild(0).node
    const queryList = ctx.getChild(1)

    if (queryList) {
      fn.setQueryList(queryList.nodes)
    }

    ctx.node = fn
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

  exitExvar(ctx: ListenerContext): void {
    const terminal = ctx.getChild(1)
    ctx.node = new Var(terminal.getText())
  }

  exitPrimitive_val(ctx: ListenerContext): void {
    const terminal = ctx.getChild(0)
    ctx.node = new Primitive(eval(terminal.getText()))
  }

  exitPrimitive(ctx: ListenerContext): void {
    ctx.node = ctx.getChild(2).node
  }

  exitVariable(ctx: ListenerContext): void {
    forwardNode(ctx)
  }

  exitParam(ctx: ListenerContext): void {
    forwardNode(ctx)
  }

  exitAparam(ctx: ListenerContext): void {
    ctx.isArray = true
    ctx.node = ctx.getChild(2).node
  }

  exitAparams(ctx: ListenerContext): void {
    ctx.nodes = ignoreTerminals(ctx.children, (astn, i) => {
      if (astn.isArray) {
        ctx.arrayPosition = i
      }
      return astn.node
    })
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

  exitField_defs(ctx: ListenerContext): void {
    forwardNode(ctx, {
      index: 1,
      key: "nodes"
    })
  }

  exitIndex_select(ctx: ListenerContext): void {
    const objRef = ctx.getChild(0)
    const queryList = ctx.getChild(2)

    ctx.node = new Field(objRef.ids, queryList.nodes, true)
  }

  exitSelect(ctx: ListenerContext): void {
    const objRef = ctx.getChild(0)
    const queryList = ctx.getChild(1)

    ctx.node = new Field(objRef.ids, queryList?.nodes)
  }

  exitField_scoped(ctx: ListenerContext): void {
    forwardNode(ctx)
  }

  exitField_global(ctx: ListenerContext): void {
    const field: Field = ctx.getChild(2).node

    field.globalAccess = true

    forwardNode(ctx, {
      index: 2
    })
  }

  exitField(ctx: ListenerContext): void {
    forwardNode(ctx)
  }

  exitNew_object(ctx: ListenerContext): void {
    const name = ctx.getChild(0).text
    const nodes = ctx.getChild(3).nodes

    ctx.node = new NewObject(name, nodes)
  }

  exitField_rename(ctx: ListenerContext): void {
    const id = ctx.getChild(0)
    const stm = ctx.getChild(2)

    ctx.node = new Rename(id.text, stm.node)
  }

  exitNormal_fn(ctx: ListenerContext): void {
    const id = ctx.getChild(0)
    const params = ctx.getChild(2)

    ctx.node = new FunctionNode(id.getText(), params.nodes, [], false, params.arrayPosition)
  }

  exitMap_fn(ctx: ListenerContext): void {
    const id = ctx.getChild(1)
    const params = ctx.getChild(3)

    ctx.node = new FunctionNode(id.getText(), params.nodes, [], false, 0)
  }

  exitFn(ctx: ListenerContext): void {
    forwardNode(ctx)
  }

  exitNormal_client_fn(ctx: ListenerContext): void {
    const id = ctx.getChild(0)
    const params = ctx.getChild(3)

    ctx.node = new FunctionNode(id.getText(), params.nodes, [], true, params.arrayPosition)
  }

  exitMap_client_fn(ctx: ListenerContext): void {
    const id = ctx.getChild(1)
    const params = ctx.getChild(4)

    ctx.node = new FunctionNode(id.getText(), params.nodes, [], true, 0)
  }

  exitClient_fn(ctx: ListenerContext): void {
    forwardNode(ctx)
  }

  exitOnresult(ctx: ListenerContext): void {
    const stm = ctx.getChild(2)
    ctx.node = new OnResult(stm.node)
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function ignoreTerminals(children: any[], map: (child: any, i: number) => any) {
  return children.filter(astn => !astn.symbol).map(map)
}

function forwardNode(ctx: ListenerContext, {key = "node", index = 0, byDefault = null}: {key?: string, index?: number, byDefault?: any} = {key: "node", index: 0}) {
  ctx[key] = ctx.getChild(index)?.[key] ?? byDefault
}
