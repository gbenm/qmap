// Generated from /home/gbenm/code/pumkat/qMap/antlr4/qMap.g4 by ANTLR 4.9.3
// jshint ignore: start
import antlr4 from 'antlr4';

import * as astn from "../compiler"


const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0003\u000e\u0098\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0003\u0002\u0005\u0002\u001e",
    "\n\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002",
    "\u0005\u0002%\n\u0002\u0003\u0002\u0005\u0002(\n\u0002\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0005\u0003.\n\u0003\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0005\u00046",
    "\n\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0007\u0006?\n\u0006\f\u0006\u000e\u0006B\u000b",
    "\u0006\u0005\u0006D\n\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0007",
    "\u0007I\n\u0007\f\u0007\u000e\u0007L\u000b\u0007\u0003\u0007\u0005\u0007",
    "O\n\u0007\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0005\bZ\n\b\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003",
    "\t\u0003\t\u0007\tc\n\t\f\t\u000e\tf\u000b\t\u0003\t\u0005\ti\n\t\u0003",
    "\t\u0003\t\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0005\ns",
    "\n\n\u0003\n\u0003\n\u0003\n\u0003\n\u0007\ny\n\n\f\n\u000e\n|\u000b",
    "\n\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003",
    "\u000b\u0003\u000b\u0003\u000b\u0005\u000b\u0087\n\u000b\u0003\f\u0003",
    "\f\u0003\f\u0003\f\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\u000e",
    "\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e",
    "\u0002\u0002\u000f\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016",
    "\u0018\u001a\u0002\u0002\u0002\u009c\u0002\u001d\u0003\u0002\u0002\u0002",
    "\u0004-\u0003\u0002\u0002\u0002\u00065\u0003\u0002\u0002\u0002\b7\u0003",
    "\u0002\u0002\u0002\n:\u0003\u0002\u0002\u0002\fE\u0003\u0002\u0002\u0002",
    "\u000eY\u0003\u0002\u0002\u0002\u0010[\u0003\u0002\u0002\u0002\u0012",
    "l\u0003\u0002\u0002\u0002\u0014\u007f\u0003\u0002\u0002\u0002\u0016",
    "\u0088\u0003\u0002\u0002\u0002\u0018\u008c\u0003\u0002\u0002\u0002\u001a",
    "\u0091\u0003\u0002\u0002\u0002\u001c\u001e\u0005\u0004\u0003\u0002\u001d",
    "\u001c\u0003\u0002\u0002\u0002\u001d\u001e\u0003\u0002\u0002\u0002\u001e",
    "\u001f\u0003\u0002\u0002\u0002\u001f\'\b\u0002\u0001\u0002 $\u0007\u0003",
    "\u0002\u0002!\"\u0005\u0010\t\u0002\"#\b\u0002\u0001\u0002#%\u0003\u0002",
    "\u0002\u0002$!\u0003\u0002\u0002\u0002$%\u0003\u0002\u0002\u0002%&\u0003",
    "\u0002\u0002\u0002&(\u0007\u0004\u0002\u0002\' \u0003\u0002\u0002\u0002",
    "\'(\u0003\u0002\u0002\u0002(\u0003\u0003\u0002\u0002\u0002)*\u0007\r",
    "\u0002\u0002*.\b\u0003\u0001\u0002+,\u0007\f\u0002\u0002,.\b\u0003\u0001",
    "\u0002-)\u0003\u0002\u0002\u0002-+\u0003\u0002\u0002\u0002.\u0005\u0003",
    "\u0002\u0002\u0002/0\u0005\u0014\u000b\u000201\b\u0004\u0001\u00021",
    "6\u0003\u0002\u0002\u000226\u0005\u0016\f\u000236\u0005\u0018\r\u0002",
    "46\u0005\u001a\u000e\u00025/\u0003\u0002\u0002\u000252\u0003\u0002\u0002",
    "\u000253\u0003\u0002\u0002\u000254\u0003\u0002\u0002\u00026\u0007\u0003",
    "\u0002\u0002\u000278\u0007\u0005\u0002\u000289\u0005\u0004\u0003\u0002",
    "9\t\u0003\u0002\u0002\u0002:C\u0007\b\u0002\u0002;@\u0005\u0004\u0003",
    "\u0002<=\u0007\t\u0002\u0002=?\u0005\u0004\u0003\u0002><\u0003\u0002",
    "\u0002\u0002?B\u0003\u0002\u0002\u0002@>\u0003\u0002\u0002\u0002@A\u0003",
    "\u0002\u0002\u0002AD\u0003\u0002\u0002\u0002B@\u0003\u0002\u0002\u0002",
    "C;\u0003\u0002\u0002\u0002CD\u0003\u0002\u0002\u0002D\u000b\u0003\u0002",
    "\u0002\u0002EJ\u0005\u0006\u0004\u0002FG\u0007\u0007\u0002\u0002GI\u0005",
    "\u0006\u0004\u0002HF\u0003\u0002\u0002\u0002IL\u0003\u0002\u0002\u0002",
    "JH\u0003\u0002\u0002\u0002JK\u0003\u0002\u0002\u0002KN\u0003\u0002\u0002",
    "\u0002LJ\u0003\u0002\u0002\u0002MO\u0007\u0007\u0002\u0002NM\u0003\u0002",
    "\u0002\u0002NO\u0003\u0002\u0002\u0002O\r\u0003\u0002\u0002\u0002PQ",
    "\u0005\u0006\u0004\u0002QR\b\b\u0001\u0002RZ\u0003\u0002\u0002\u0002",
    "ST\u0005\b\u0005\u0002TU\b\b\u0001\u0002UZ\u0003\u0002\u0002\u0002V",
    "W\u0005\n\u0006\u0002WX\b\b\u0001\u0002XZ\u0003\u0002\u0002\u0002YP",
    "\u0003\u0002\u0002\u0002YS\u0003\u0002\u0002\u0002YV\u0003\u0002\u0002",
    "\u0002Z\u000f\u0003\u0002\u0002\u0002[\\\b\t\u0001\u0002\\]\u0005\u000e",
    "\b\u0002]d\b\t\u0001\u0002^_\u0007\u0007\u0002\u0002_`\u0005\u000e\b",
    "\u0002`a\b\t\u0001\u0002ac\u0003\u0002\u0002\u0002b^\u0003\u0002\u0002",
    "\u0002cf\u0003\u0002\u0002\u0002db\u0003\u0002\u0002\u0002de\u0003\u0002",
    "\u0002\u0002eh\u0003\u0002\u0002\u0002fd\u0003\u0002\u0002\u0002gi\u0007",
    "\u0007\u0002\u0002hg\u0003\u0002\u0002\u0002hi\u0003\u0002\u0002\u0002",
    "ij\u0003\u0002\u0002\u0002jk\b\t\u0001\u0002k\u0011\u0003\u0002\u0002",
    "\u0002lr\b\n\u0001\u0002mn\u0005\u0004\u0003\u0002no\b\n\u0001\u0002",
    "os\u0003\u0002\u0002\u0002pq\u0007\f\u0002\u0002qs\b\n\u0001\u0002r",
    "m\u0003\u0002\u0002\u0002rp\u0003\u0002\u0002\u0002sz\u0003\u0002\u0002",
    "\u0002tu\u0007\t\u0002\u0002uv\u0005\u0004\u0003\u0002vw\b\n\u0001\u0002",
    "wy\u0003\u0002\u0002\u0002xt\u0003\u0002\u0002\u0002y|\u0003\u0002\u0002",
    "\u0002zx\u0003\u0002\u0002\u0002z{\u0003\u0002\u0002\u0002{}\u0003\u0002",
    "\u0002\u0002|z\u0003\u0002\u0002\u0002}~\b\n\u0001\u0002~\u0013\u0003",
    "\u0002\u0002\u0002\u007f\u0080\u0005\u0012\n\u0002\u0080\u0086\b\u000b",
    "\u0001\u0002\u0081\u0082\u0007\u0003\u0002\u0002\u0082\u0083\u0005\u0010",
    "\t\u0002\u0083\u0084\u0007\u0004\u0002\u0002\u0084\u0085\b\u000b\u0001",
    "\u0002\u0085\u0087\u0003\u0002\u0002\u0002\u0086\u0081\u0003\u0002\u0002",
    "\u0002\u0086\u0087\u0003\u0002\u0002\u0002\u0087\u0015\u0003\u0002\u0002",
    "\u0002\u0088\u0089\u0005\u0004\u0003\u0002\u0089\u008a\u0007\u0006\u0002",
    "\u0002\u008a\u008b\u0005\u0006\u0004\u0002\u008b\u0017\u0003\u0002\u0002",
    "\u0002\u008c\u008d\u0007\r\u0002\u0002\u008d\u008e\u0007\u0003\u0002",
    "\u0002\u008e\u008f\u0005\f\u0007\u0002\u008f\u0090\u0007\u0004\u0002",
    "\u0002\u0090\u0019\u0003\u0002\u0002\u0002\u0091\u0092\u0007\r\u0002",
    "\u0002\u0092\u0093\u0007\u0005\u0002\u0002\u0093\u0094\u0007\u0003\u0002",
    "\u0002\u0094\u0095\u0005\f\u0007\u0002\u0095\u0096\u0007\u0004\u0002",
    "\u0002\u0096\u001b\u0003\u0002\u0002\u0002\u0011\u001d$\'-5@CJNYdhr",
    "z\u0086"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class qMapParser extends antlr4.Parser {

    static grammarFileName = "qMap.g4";
    static literalNames = [ null, "'{'", "'}'", "'!'", "':'", "','", "'...'", 
                            "'.'", "'('", "')'" ];
    static symbolicNames = [ null, "LEFT_BRACKET", "RIGHT_BRACKET", "EX_MARK", 
                             "COLON", "COMMA", "TRIPLE_DOT", "DOT", "LEFT_PAREN", 
                             "RIHT_PAREN", "STRING", "ID", "WS" ];
    static ruleNames = [ "start", "id", "stm", "exclude", "destructuring", 
                         "params", "query", "query_list", "obj_ref", "field", 
                         "field_rename", "fn", "client_function" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = qMapParser.ruleNames;
        this.literalNames = qMapParser.literalNames;
        this.symbolicNames = qMapParser.symbolicNames;
    }

    get atn() {
        return atn;
    }



	start() {
	    let localctx = new StartContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, qMapParser.RULE_start);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 27;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===qMapParser.STRING || _la===qMapParser.ID) {
	            this.state = 26;
	            localctx._id = this.id();
	        }

	         localctx.json = (new astn.Root(localctx._id.text, null)).generate() 
	        this.state = 37;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===qMapParser.LEFT_BRACKET) {
	            this.state = 30;
	            this.match(qMapParser.LEFT_BRACKET);
	            this.state = 34;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << qMapParser.EX_MARK) | (1 << qMapParser.TRIPLE_DOT) | (1 << qMapParser.STRING) | (1 << qMapParser.ID))) !== 0)) {
	                this.state = 31;
	                localctx._query_list = this.query_list();
	                 localctx.json = (new astn.Root(localctx._id.text, localctx._query_list.node)).generate() 
	            }

	            this.state = 36;
	            this.match(qMapParser.RIGHT_BRACKET);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	id() {
	    let localctx = new IdContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, qMapParser.RULE_id);
	    try {
	        this.state = 43;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case qMapParser.ID:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 39;
	            localctx._ID = this.match(qMapParser.ID);
	             localctx.text = (localctx._ID===null ? null : localctx._ID.text) 
	            break;
	        case qMapParser.STRING:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 41;
	            localctx._STRING = this.match(qMapParser.STRING);
	             localctx.text = eval((localctx._STRING===null ? null : localctx._STRING.text)) 
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	stm() {
	    let localctx = new StmContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, qMapParser.RULE_stm);
	    try {
	        this.state = 51;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 45;
	            localctx._field = this.field();
	            localctx.node = localctx._field.node
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 48;
	            this.field_rename();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 49;
	            this.fn();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 50;
	            this.client_function();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	exclude() {
	    let localctx = new ExcludeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, qMapParser.RULE_exclude);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 53;
	        this.match(qMapParser.EX_MARK);
	        this.state = 54;
	        this.id();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	destructuring() {
	    let localctx = new DestructuringContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, qMapParser.RULE_destructuring);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 56;
	        this.match(qMapParser.TRIPLE_DOT);
	        this.state = 65;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===qMapParser.STRING || _la===qMapParser.ID) {
	            this.state = 57;
	            this.id();
	            this.state = 62;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===qMapParser.DOT) {
	                this.state = 58;
	                this.match(qMapParser.DOT);
	                this.state = 59;
	                this.id();
	                this.state = 64;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	params() {
	    let localctx = new ParamsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, qMapParser.RULE_params);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 67;
	        this.stm();
	        this.state = 72;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,7,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 68;
	                this.match(qMapParser.COMMA);
	                this.state = 69;
	                this.stm(); 
	            }
	            this.state = 74;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,7,this._ctx);
	        }

	        this.state = 76;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===qMapParser.COMMA) {
	            this.state = 75;
	            this.match(qMapParser.COMMA);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	query() {
	    let localctx = new QueryContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, qMapParser.RULE_query);
	    try {
	        this.state = 87;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case qMapParser.STRING:
	        case qMapParser.ID:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 78;
	            localctx._stm = this.stm();
	            localctx.node = localctx._stm.node
	            break;
	        case qMapParser.EX_MARK:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 81;
	            localctx._exclude = this.exclude();
	            localctx.node = localctx._exclude.node
	            break;
	        case qMapParser.TRIPLE_DOT:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 84;
	            localctx._destructuring = this.destructuring();
	            localctx.node = localctx._destructuring.node
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	query_list() {
	    let localctx = new Query_listContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, qMapParser.RULE_query_list);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);

	            const nodes = []
	            

	        this.state = 90;
	        localctx._query = this.query();
	        nodes.push(localctx._query.node)
	        this.state = 98;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,10,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 92;
	                this.match(qMapParser.COMMA);
	                this.state = 93;
	                localctx._query = this.query();
	                nodes.push(localctx._query.node) 
	            }
	            this.state = 100;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,10,this._ctx);
	        }

	        this.state = 102;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===qMapParser.COMMA) {
	            this.state = 101;
	            this.match(qMapParser.COMMA);
	        }

	        localctx.node = new astn.QueryList(nodes)
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	obj_ref() {
	    let localctx = new Obj_refContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, qMapParser.RULE_obj_ref);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        const ids = []
	        this.state = 112;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,12,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 107;
	            localctx._id = this.id();
	            ids.push(localctx._id.text)
	            break;

	        case 2:
	            this.state = 110;
	            localctx._STRING = this.match(qMapParser.STRING);
	            ids.push((localctx._STRING===null ? null : localctx._STRING.text))
	            break;

	        }
	        this.state = 120;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===qMapParser.DOT) {
	            this.state = 114;
	            this.match(qMapParser.DOT);
	            this.state = 115;
	            localctx._id = this.id();
	            ids.push(localctx._id.text)
	            this.state = 122;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        localctx.node = new astn.ObjRef(ids)
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	field() {
	    let localctx = new FieldContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, qMapParser.RULE_field);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 125;
	        localctx._obj_ref = this.obj_ref();
	         localctx.node = new astn.Field(localctx._obj_ref.node, null) 
	        this.state = 132;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===qMapParser.LEFT_BRACKET) {
	            this.state = 127;
	            this.match(qMapParser.LEFT_BRACKET);
	            this.state = 128;
	            localctx._query_list = this.query_list();
	            this.state = 129;
	            this.match(qMapParser.RIGHT_BRACKET);
	             localctx.node = new astn.Field(localctx._obj_ref.node, localctx._query_list.node) 
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	field_rename() {
	    let localctx = new Field_renameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, qMapParser.RULE_field_rename);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 134;
	        this.id();
	        this.state = 135;
	        this.match(qMapParser.COLON);
	        this.state = 136;
	        this.stm();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	fn() {
	    let localctx = new FnContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, qMapParser.RULE_fn);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 138;
	        this.match(qMapParser.ID);
	        this.state = 139;
	        this.match(qMapParser.LEFT_BRACKET);
	        this.state = 140;
	        this.params();
	        this.state = 141;
	        this.match(qMapParser.RIGHT_BRACKET);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	client_function() {
	    let localctx = new Client_functionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, qMapParser.RULE_client_function);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 143;
	        this.match(qMapParser.ID);
	        this.state = 144;
	        this.match(qMapParser.EX_MARK);
	        this.state = 145;
	        this.match(qMapParser.LEFT_BRACKET);
	        this.state = 146;
	        this.params();
	        this.state = 147;
	        this.match(qMapParser.RIGHT_BRACKET);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

qMapParser.EOF = antlr4.Token.EOF;
qMapParser.LEFT_BRACKET = 1;
qMapParser.RIGHT_BRACKET = 2;
qMapParser.EX_MARK = 3;
qMapParser.COLON = 4;
qMapParser.COMMA = 5;
qMapParser.TRIPLE_DOT = 6;
qMapParser.DOT = 7;
qMapParser.LEFT_PAREN = 8;
qMapParser.RIHT_PAREN = 9;
qMapParser.STRING = 10;
qMapParser.ID = 11;
qMapParser.WS = 12;

qMapParser.RULE_start = 0;
qMapParser.RULE_id = 1;
qMapParser.RULE_stm = 2;
qMapParser.RULE_exclude = 3;
qMapParser.RULE_destructuring = 4;
qMapParser.RULE_params = 5;
qMapParser.RULE_query = 6;
qMapParser.RULE_query_list = 7;
qMapParser.RULE_obj_ref = 8;
qMapParser.RULE_field = 9;
qMapParser.RULE_field_rename = 10;
qMapParser.RULE_fn = 11;
qMapParser.RULE_client_function = 12;

class StartContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = qMapParser.RULE_start;
        this.json = null
        this._id = null; // IdContext
        this._query_list = null; // Query_listContext
    }

	id() {
	    return this.getTypedRuleContext(IdContext,0);
	};

	LEFT_BRACKET() {
	    return this.getToken(qMapParser.LEFT_BRACKET, 0);
	};

	RIGHT_BRACKET() {
	    return this.getToken(qMapParser.RIGHT_BRACKET, 0);
	};

	query_list() {
	    return this.getTypedRuleContext(Query_listContext,0);
	};


}



class IdContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = qMapParser.RULE_id;
        this.text = null
        this._ID = null; // Token
        this._STRING = null; // Token
    }

	ID() {
	    return this.getToken(qMapParser.ID, 0);
	};

	STRING() {
	    return this.getToken(qMapParser.STRING, 0);
	};


}



class StmContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = qMapParser.RULE_stm;
        this.node = null
        this._field = null; // FieldContext
    }

	field() {
	    return this.getTypedRuleContext(FieldContext,0);
	};

	field_rename() {
	    return this.getTypedRuleContext(Field_renameContext,0);
	};

	fn() {
	    return this.getTypedRuleContext(FnContext,0);
	};

	client_function() {
	    return this.getTypedRuleContext(Client_functionContext,0);
	};


}



class ExcludeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = qMapParser.RULE_exclude;
        this.node = null
    }

	EX_MARK() {
	    return this.getToken(qMapParser.EX_MARK, 0);
	};

	id() {
	    return this.getTypedRuleContext(IdContext,0);
	};


}



class DestructuringContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = qMapParser.RULE_destructuring;
        this.node = null
    }

	TRIPLE_DOT() {
	    return this.getToken(qMapParser.TRIPLE_DOT, 0);
	};

	id = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(IdContext);
	    } else {
	        return this.getTypedRuleContext(IdContext,i);
	    }
	};

	DOT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(qMapParser.DOT);
	    } else {
	        return this.getToken(qMapParser.DOT, i);
	    }
	};



}



class ParamsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = qMapParser.RULE_params;
    }

	stm = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StmContext);
	    } else {
	        return this.getTypedRuleContext(StmContext,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(qMapParser.COMMA);
	    } else {
	        return this.getToken(qMapParser.COMMA, i);
	    }
	};



}



class QueryContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = qMapParser.RULE_query;
        this.node = null
        this._stm = null; // StmContext
        this._exclude = null; // ExcludeContext
        this._destructuring = null; // DestructuringContext
    }

	stm() {
	    return this.getTypedRuleContext(StmContext,0);
	};

	exclude() {
	    return this.getTypedRuleContext(ExcludeContext,0);
	};

	destructuring() {
	    return this.getTypedRuleContext(DestructuringContext,0);
	};


}



class Query_listContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = qMapParser.RULE_query_list;
        this.node = null
        this._query = null; // QueryContext
    }

	query = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(QueryContext);
	    } else {
	        return this.getTypedRuleContext(QueryContext,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(qMapParser.COMMA);
	    } else {
	        return this.getToken(qMapParser.COMMA, i);
	    }
	};



}



class Obj_refContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = qMapParser.RULE_obj_ref;
        this.node = null
        this._id = null; // IdContext
        this._STRING = null; // Token
    }

	id = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(IdContext);
	    } else {
	        return this.getTypedRuleContext(IdContext,i);
	    }
	};

	STRING() {
	    return this.getToken(qMapParser.STRING, 0);
	};

	DOT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(qMapParser.DOT);
	    } else {
	        return this.getToken(qMapParser.DOT, i);
	    }
	};



}



class FieldContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = qMapParser.RULE_field;
        this.node = null
        this._obj_ref = null; // Obj_refContext
        this._query_list = null; // Query_listContext
    }

	obj_ref() {
	    return this.getTypedRuleContext(Obj_refContext,0);
	};

	LEFT_BRACKET() {
	    return this.getToken(qMapParser.LEFT_BRACKET, 0);
	};

	query_list() {
	    return this.getTypedRuleContext(Query_listContext,0);
	};

	RIGHT_BRACKET() {
	    return this.getToken(qMapParser.RIGHT_BRACKET, 0);
	};


}



class Field_renameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = qMapParser.RULE_field_rename;
    }

	id() {
	    return this.getTypedRuleContext(IdContext,0);
	};

	COLON() {
	    return this.getToken(qMapParser.COLON, 0);
	};

	stm() {
	    return this.getTypedRuleContext(StmContext,0);
	};


}



class FnContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = qMapParser.RULE_fn;
    }

	ID() {
	    return this.getToken(qMapParser.ID, 0);
	};

	LEFT_BRACKET() {
	    return this.getToken(qMapParser.LEFT_BRACKET, 0);
	};

	params() {
	    return this.getTypedRuleContext(ParamsContext,0);
	};

	RIGHT_BRACKET() {
	    return this.getToken(qMapParser.RIGHT_BRACKET, 0);
	};


}



class Client_functionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = qMapParser.RULE_client_function;
    }

	ID() {
	    return this.getToken(qMapParser.ID, 0);
	};

	EX_MARK() {
	    return this.getToken(qMapParser.EX_MARK, 0);
	};

	LEFT_BRACKET() {
	    return this.getToken(qMapParser.LEFT_BRACKET, 0);
	};

	params() {
	    return this.getTypedRuleContext(ParamsContext,0);
	};

	RIGHT_BRACKET() {
	    return this.getToken(qMapParser.RIGHT_BRACKET, 0);
	};


}




qMapParser.StartContext = StartContext; 
qMapParser.IdContext = IdContext; 
qMapParser.StmContext = StmContext; 
qMapParser.ExcludeContext = ExcludeContext; 
qMapParser.DestructuringContext = DestructuringContext; 
qMapParser.ParamsContext = ParamsContext; 
qMapParser.QueryContext = QueryContext; 
qMapParser.Query_listContext = Query_listContext; 
qMapParser.Obj_refContext = Obj_refContext; 
qMapParser.FieldContext = FieldContext; 
qMapParser.Field_renameContext = Field_renameContext; 
qMapParser.FnContext = FnContext; 
qMapParser.Client_functionContext = Client_functionContext; 
