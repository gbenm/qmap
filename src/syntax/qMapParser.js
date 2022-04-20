// Generated from /home/gbenm/code/pumkat/qMap/antlr4/qMap.g4 by ANTLR 4.9.3
// jshint ignore: start
import antlr4 from 'antlr4';

import * as astn from "../compiler"


const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0003\u000f\u00c1\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010",
    "\t\u0010\u0004\u0011\t\u0011\u0003\u0002\u0003\u0002\u0003\u0002\u0003",
    "\u0002\u0003\u0002\u0003\u0002\u0005\u0002)\n\u0002\u0003\u0002\u0005",
    "\u0002,\n\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0005\u00031\n\u0003",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0005\u00047\n\u0004",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0005\u0005?\n\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0007\u0007O\n\u0007",
    "\f\u0007\u000e\u0007R\u000b\u0007\u0003\u0007\u0003\u0007\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0007\b^\n\b\f\b",
    "\u000e\ba\u000b\b\u0005\bc\n\b\u0003\b\u0003\b\u0003\t\u0003\t\u0003",
    "\t\u0003\t\u0003\t\u0003\t\u0005\tm\n\t\u0003\n\u0003\n\u0003\n\u0007",
    "\nr\n\n\f\n\u000e\nu\u000b\n\u0003\n\u0005\nx\n\n\u0003\u000b\u0003",
    "\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003",
    "\u000b\u0003\u000b\u0005\u000b\u0083\n\u000b\u0003\f\u0003\f\u0003\f",
    "\u0003\f\u0003\f\u0003\f\u0003\f\u0007\f\u008c\n\f\f\f\u000e\f\u008f",
    "\u000b\f\u0003\f\u0005\f\u0092\n\f\u0003\f\u0003\f\u0003\r\u0003\r\u0003",
    "\r\u0003\r\u0003\r\u0003\r\u0005\r\u009c\n\r\u0003\r\u0003\r\u0003\r",
    "\u0003\r\u0007\r\u00a2\n\r\f\r\u000e\r\u00a5\u000b\r\u0003\r\u0003\r",
    "\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e",
    "\u0003\u000e\u0005\u000e\u00b0\n\u000e\u0003\u000f\u0003\u000f\u0003",
    "\u000f\u0003\u000f\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003",
    "\u0010\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003",
    "\u0011\u0003\u0011\u0002\u0002\u0012\u0002\u0004\u0006\b\n\f\u000e\u0010",
    "\u0012\u0014\u0016\u0018\u001a\u001c\u001e \u0002\u0002\u0002\u00c4",
    "\u0002\"\u0003\u0002\u0002\u0002\u00040\u0003\u0002\u0002\u0002\u0006",
    "6\u0003\u0002\u0002\u0002\b>\u0003\u0002\u0002\u0002\n@\u0003\u0002",
    "\u0002\u0002\fD\u0003\u0002\u0002\u0002\u000eU\u0003\u0002\u0002\u0002",
    "\u0010l\u0003\u0002\u0002\u0002\u0012n\u0003\u0002\u0002\u0002\u0014",
    "\u0082\u0003\u0002\u0002\u0002\u0016\u0084\u0003\u0002\u0002\u0002\u0018",
    "\u0095\u0003\u0002\u0002\u0002\u001a\u00a8\u0003\u0002\u0002\u0002\u001c",
    "\u00b1\u0003\u0002\u0002\u0002\u001e\u00b5\u0003\u0002\u0002\u0002 ",
    "\u00ba\u0003\u0002\u0002\u0002\"#\u0005\u0004\u0003\u0002#+\b\u0002",
    "\u0001\u0002$(\u0007\u0003\u0002\u0002%&\u0005\u0016\f\u0002&\'\b\u0002",
    "\u0001\u0002\')\u0003\u0002\u0002\u0002(%\u0003\u0002\u0002\u0002()",
    "\u0003\u0002\u0002\u0002)*\u0003\u0002\u0002\u0002*,\u0007\u0004\u0002",
    "\u0002+$\u0003\u0002\u0002\u0002+,\u0003\u0002\u0002\u0002,\u0003\u0003",
    "\u0002\u0002\u0002-.\u0005\u0006\u0004\u0002./\b\u0003\u0001\u0002/",
    "1\u0003\u0002\u0002\u00020-\u0003\u0002\u0002\u000201\u0003\u0002\u0002",
    "\u00021\u0005\u0003\u0002\u0002\u000223\u0007\u000e\u0002\u000237\b",
    "\u0004\u0001\u000245\u0007\r\u0002\u000257\b\u0004\u0001\u000262\u0003",
    "\u0002\u0002\u000264\u0003\u0002\u0002\u00027\u0007\u0003\u0002\u0002",
    "\u000289\u0005\u001a\u000e\u00029:\b\u0005\u0001\u0002:?\u0003\u0002",
    "\u0002\u0002;?\u0005\u001c\u000f\u0002<?\u0005\u001e\u0010\u0002=?\u0005",
    " \u0011\u0002>8\u0003\u0002\u0002\u0002>;\u0003\u0002\u0002\u0002><",
    "\u0003\u0002\u0002\u0002>=\u0003\u0002\u0002\u0002?\t\u0003\u0002\u0002",
    "\u0002@A\u0007\u0005\u0002\u0002AB\u0005\u0006\u0004\u0002BC\b\u0006",
    "\u0001\u0002C\u000b\u0003\u0002\u0002\u0002DE\b\u0007\u0001\u0002EF",
    "\u0007\b\u0002\u0002FG\u0007\f\u0002\u0002GH\b\u0007\u0001\u0002HI\u0005",
    "\u0006\u0004\u0002IP\b\u0007\u0001\u0002JK\u0007\t\u0002\u0002KL\u0005",
    "\u0006\u0004\u0002LM\b\u0007\u0001\u0002MO\u0003\u0002\u0002\u0002N",
    "J\u0003\u0002\u0002\u0002OR\u0003\u0002\u0002\u0002PN\u0003\u0002\u0002",
    "\u0002PQ\u0003\u0002\u0002\u0002QS\u0003\u0002\u0002\u0002RP\u0003\u0002",
    "\u0002\u0002ST\b\u0007\u0001\u0002T\r\u0003\u0002\u0002\u0002UV\b\b",
    "\u0001\u0002Vb\u0007\b\u0002\u0002WX\u0005\u0006\u0004\u0002X_\b\b\u0001",
    "\u0002YZ\u0007\t\u0002\u0002Z[\u0005\u0006\u0004\u0002[\\\b\b\u0001",
    "\u0002\\^\u0003\u0002\u0002\u0002]Y\u0003\u0002\u0002\u0002^a\u0003",
    "\u0002\u0002\u0002_]\u0003\u0002\u0002\u0002_`\u0003\u0002\u0002\u0002",
    "`c\u0003\u0002\u0002\u0002a_\u0003\u0002\u0002\u0002bW\u0003\u0002\u0002",
    "\u0002bc\u0003\u0002\u0002\u0002cd\u0003\u0002\u0002\u0002de\b\b\u0001",
    "\u0002e\u000f\u0003\u0002\u0002\u0002fg\u0005\f\u0007\u0002gh\b\t\u0001",
    "\u0002hm\u0003\u0002\u0002\u0002ij\u0005\u000e\b\u0002jk\b\t\u0001\u0002",
    "km\u0003\u0002\u0002\u0002lf\u0003\u0002\u0002\u0002li\u0003\u0002\u0002",
    "\u0002m\u0011\u0003\u0002\u0002\u0002ns\u0005\b\u0005\u0002op\u0007",
    "\u0007\u0002\u0002pr\u0005\b\u0005\u0002qo\u0003\u0002\u0002\u0002r",
    "u\u0003\u0002\u0002\u0002sq\u0003\u0002\u0002\u0002st\u0003\u0002\u0002",
    "\u0002tw\u0003\u0002\u0002\u0002us\u0003\u0002\u0002\u0002vx\u0007\u0007",
    "\u0002\u0002wv\u0003\u0002\u0002\u0002wx\u0003\u0002\u0002\u0002x\u0013",
    "\u0003\u0002\u0002\u0002yz\u0005\b\u0005\u0002z{\b\u000b\u0001\u0002",
    "{\u0083\u0003\u0002\u0002\u0002|}\u0005\n\u0006\u0002}~\b\u000b\u0001",
    "\u0002~\u0083\u0003\u0002\u0002\u0002\u007f\u0080\u0005\u0010\t\u0002",
    "\u0080\u0081\b\u000b\u0001\u0002\u0081\u0083\u0003\u0002\u0002\u0002",
    "\u0082y\u0003\u0002\u0002\u0002\u0082|\u0003\u0002\u0002\u0002\u0082",
    "\u007f\u0003\u0002\u0002\u0002\u0083\u0015\u0003\u0002\u0002\u0002\u0084",
    "\u0085\b\f\u0001\u0002\u0085\u0086\u0005\u0014\u000b\u0002\u0086\u008d",
    "\b\f\u0001\u0002\u0087\u0088\u0007\u0007\u0002\u0002\u0088\u0089\u0005",
    "\u0014\u000b\u0002\u0089\u008a\b\f\u0001\u0002\u008a\u008c\u0003\u0002",
    "\u0002\u0002\u008b\u0087\u0003\u0002\u0002\u0002\u008c\u008f\u0003\u0002",
    "\u0002\u0002\u008d\u008b\u0003\u0002\u0002\u0002\u008d\u008e\u0003\u0002",
    "\u0002\u0002\u008e\u0091\u0003\u0002\u0002\u0002\u008f\u008d\u0003\u0002",
    "\u0002\u0002\u0090\u0092\u0007\u0007\u0002\u0002\u0091\u0090\u0003\u0002",
    "\u0002\u0002\u0091\u0092\u0003\u0002\u0002\u0002\u0092\u0093\u0003\u0002",
    "\u0002\u0002\u0093\u0094\b\f\u0001\u0002\u0094\u0017\u0003\u0002\u0002",
    "\u0002\u0095\u009b\b\r\u0001\u0002\u0096\u0097\u0005\u0006\u0004\u0002",
    "\u0097\u0098\b\r\u0001\u0002\u0098\u009c\u0003\u0002\u0002\u0002\u0099",
    "\u009a\u0007\r\u0002\u0002\u009a\u009c\b\r\u0001\u0002\u009b\u0096\u0003",
    "\u0002\u0002\u0002\u009b\u0099\u0003\u0002\u0002\u0002\u009c\u00a3\u0003",
    "\u0002\u0002\u0002\u009d\u009e\u0007\t\u0002\u0002\u009e\u009f\u0005",
    "\u0006\u0004\u0002\u009f\u00a0\b\r\u0001\u0002\u00a0\u00a2\u0003\u0002",
    "\u0002\u0002\u00a1\u009d\u0003\u0002\u0002\u0002\u00a2\u00a5\u0003\u0002",
    "\u0002\u0002\u00a3\u00a1\u0003\u0002\u0002\u0002\u00a3\u00a4\u0003\u0002",
    "\u0002\u0002\u00a4\u00a6\u0003\u0002\u0002\u0002\u00a5\u00a3\u0003\u0002",
    "\u0002\u0002\u00a6\u00a7\b\r\u0001\u0002\u00a7\u0019\u0003\u0002\u0002",
    "\u0002\u00a8\u00a9\u0005\u0018\r\u0002\u00a9\u00af\b\u000e\u0001\u0002",
    "\u00aa\u00ab\u0007\u0003\u0002\u0002\u00ab\u00ac\u0005\u0016\f\u0002",
    "\u00ac\u00ad\u0007\u0004\u0002\u0002\u00ad\u00ae\b\u000e\u0001\u0002",
    "\u00ae\u00b0\u0003\u0002\u0002\u0002\u00af\u00aa\u0003\u0002\u0002\u0002",
    "\u00af\u00b0\u0003\u0002\u0002\u0002\u00b0\u001b\u0003\u0002\u0002\u0002",
    "\u00b1\u00b2\u0005\u0006\u0004\u0002\u00b2\u00b3\u0007\u0006\u0002\u0002",
    "\u00b3\u00b4\u0005\b\u0005\u0002\u00b4\u001d\u0003\u0002\u0002\u0002",
    "\u00b5\u00b6\u0007\u000e\u0002\u0002\u00b6\u00b7\u0007\u0003\u0002\u0002",
    "\u00b7\u00b8\u0005\u0012\n\u0002\u00b8\u00b9\u0007\u0004\u0002\u0002",
    "\u00b9\u001f\u0003\u0002\u0002\u0002\u00ba\u00bb\u0007\u000e\u0002\u0002",
    "\u00bb\u00bc\u0007\u0005\u0002\u0002\u00bc\u00bd\u0007\u0003\u0002\u0002",
    "\u00bd\u00be\u0005\u0012\n\u0002\u00be\u00bf\u0007\u0004\u0002\u0002",
    "\u00bf!\u0003\u0002\u0002\u0002\u0013(+06>P_blsw\u0082\u008d\u0091\u009b",
    "\u00a3\u00af"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class qMapParser extends antlr4.Parser {

    static grammarFileName = "qMap.g4";
    static literalNames = [ null, "'{'", "'}'", "'!'", "':'", "','", "'...'", 
                            "'.'", "'('", "')'", "'&'" ];
    static symbolicNames = [ null, "LEFT_BRACKET", "RIGHT_BRACKET", "EX_MARK", 
                             "COLON", "COMMA", "TRIPLE_DOT", "DOT", "LEFT_PAREN", 
                             "RIHT_PAREN", "AMPERSAND", "STRING", "ID", 
                             "WS" ];
    static ruleNames = [ "start", "optional_id", "id", "stm", "exclude", 
                         "global_spread", "scoped_spread", "spread", "params", 
                         "query", "query_list", "obj_ref", "field", "field_rename", 
                         "fn", "client_function" ];

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
	        this.state = 32;
	        localctx._optional_id = this.optional_id();
	         localctx.json = (new astn.Root(localctx._optional_id.text, null)).generate() 
	        this.state = 41;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===qMapParser.LEFT_BRACKET) {
	            this.state = 34;
	            this.match(qMapParser.LEFT_BRACKET);
	            this.state = 38;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << qMapParser.EX_MARK) | (1 << qMapParser.TRIPLE_DOT) | (1 << qMapParser.STRING) | (1 << qMapParser.ID))) !== 0)) {
	                this.state = 35;
	                localctx._query_list = this.query_list();
	                 localctx.json = (new astn.Root(localctx._optional_id.text, localctx._query_list.node)).generate() 
	            }

	            this.state = 40;
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



	optional_id() {
	    let localctx = new Optional_idContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, qMapParser.RULE_optional_id);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 46;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===qMapParser.STRING || _la===qMapParser.ID) {
	            this.state = 43;
	            localctx._id = this.id();
	            localctx.text = localctx._id.text
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
	    this.enterRule(localctx, 4, qMapParser.RULE_id);
	    try {
	        this.state = 52;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case qMapParser.ID:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 48;
	            localctx._ID = this.match(qMapParser.ID);
	             localctx.text = (localctx._ID===null ? null : localctx._ID.text) 
	            break;
	        case qMapParser.STRING:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 50;
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
	    this.enterRule(localctx, 6, qMapParser.RULE_stm);
	    try {
	        this.state = 60;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 54;
	            localctx._field = this.field();
	            localctx.node = localctx._field.node
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 57;
	            this.field_rename();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 58;
	            this.fn();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 59;
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
	    this.enterRule(localctx, 8, qMapParser.RULE_exclude);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 62;
	        this.match(qMapParser.EX_MARK);
	        this.state = 63;
	        localctx._id = this.id();
	         localctx.node = new astn.Exclude(localctx._id.text) 
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



	global_spread() {
	    let localctx = new Global_spreadContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, qMapParser.RULE_global_spread);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	         const nodes = [] 
	        this.state = 67;
	        this.match(qMapParser.TRIPLE_DOT);
	        this.state = 68;
	        this.match(qMapParser.AMPERSAND);
	         nodes.push(astn.rootScope) 
	        this.state = 70;
	        localctx._id = this.id();
	         nodes.push(localctx._id.text) 
	        this.state = 78;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===qMapParser.DOT) {
	            this.state = 72;
	            this.match(qMapParser.DOT);
	            this.state = 73;
	            localctx._id = this.id();
	             nodes.push(localctx._id.text) 
	            this.state = 80;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	         localctx.node = new astn.Spread(nodes) 
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



	scoped_spread() {
	    let localctx = new Scoped_spreadContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, qMapParser.RULE_scoped_spread);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	         const nodes = [] 
	        this.state = 84;
	        this.match(qMapParser.TRIPLE_DOT);
	        this.state = 96;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===qMapParser.STRING || _la===qMapParser.ID) {
	            this.state = 85;
	            localctx._id = this.id();
	             nodes.push(localctx._id.text) 
	            this.state = 93;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===qMapParser.DOT) {
	                this.state = 87;
	                this.match(qMapParser.DOT);
	                this.state = 88;
	                localctx._id = this.id();
	                 nodes.push(localctx._id.text) 
	                this.state = 95;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	         localctx.node = new astn.Spread(nodes) 
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



	spread() {
	    let localctx = new SpreadContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, qMapParser.RULE_spread);
	    try {
	        this.state = 106;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 100;
	            localctx._global_spread = this.global_spread();
	             localctx.node = localctx._global_spread.node 
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 103;
	            localctx._scoped_spread = this.scoped_spread();
	             localctx.node = localctx._scoped_spread.node 
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



	params() {
	    let localctx = new ParamsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, qMapParser.RULE_params);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 108;
	        this.stm();
	        this.state = 113;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,9,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 109;
	                this.match(qMapParser.COMMA);
	                this.state = 110;
	                this.stm(); 
	            }
	            this.state = 115;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,9,this._ctx);
	        }

	        this.state = 117;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===qMapParser.COMMA) {
	            this.state = 116;
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
	    this.enterRule(localctx, 18, qMapParser.RULE_query);
	    try {
	        this.state = 128;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case qMapParser.STRING:
	        case qMapParser.ID:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 119;
	            localctx._stm = this.stm();
	            localctx.node = localctx._stm.node
	            break;
	        case qMapParser.EX_MARK:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 122;
	            localctx._exclude = this.exclude();
	            localctx.node = localctx._exclude.node
	            break;
	        case qMapParser.TRIPLE_DOT:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 125;
	            localctx._spread = this.spread();
	            localctx.node = localctx._spread.node
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
	    this.enterRule(localctx, 20, qMapParser.RULE_query_list);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);

	            const nodes = []
	            

	        this.state = 131;
	        localctx._query = this.query();
	        nodes.push(localctx._query.node)
	        this.state = 139;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,12,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 133;
	                this.match(qMapParser.COMMA);
	                this.state = 134;
	                localctx._query = this.query();
	                nodes.push(localctx._query.node) 
	            }
	            this.state = 141;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,12,this._ctx);
	        }

	        this.state = 143;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===qMapParser.COMMA) {
	            this.state = 142;
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
	    this.enterRule(localctx, 22, qMapParser.RULE_obj_ref);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        const ids = []
	        this.state = 153;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,14,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 148;
	            localctx._id = this.id();
	            ids.push(localctx._id.text)
	            break;

	        case 2:
	            this.state = 151;
	            localctx._STRING = this.match(qMapParser.STRING);
	            ids.push((localctx._STRING===null ? null : localctx._STRING.text))
	            break;

	        }
	        this.state = 161;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===qMapParser.DOT) {
	            this.state = 155;
	            this.match(qMapParser.DOT);
	            this.state = 156;
	            localctx._id = this.id();
	            ids.push(localctx._id.text)
	            this.state = 163;
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
	    this.enterRule(localctx, 24, qMapParser.RULE_field);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 166;
	        localctx._obj_ref = this.obj_ref();
	         localctx.node = new astn.Field(localctx._obj_ref.node, null) 
	        this.state = 173;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===qMapParser.LEFT_BRACKET) {
	            this.state = 168;
	            this.match(qMapParser.LEFT_BRACKET);
	            this.state = 169;
	            localctx._query_list = this.query_list();
	            this.state = 170;
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
	    this.enterRule(localctx, 26, qMapParser.RULE_field_rename);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 175;
	        this.id();
	        this.state = 176;
	        this.match(qMapParser.COLON);
	        this.state = 177;
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
	    this.enterRule(localctx, 28, qMapParser.RULE_fn);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 179;
	        this.match(qMapParser.ID);
	        this.state = 180;
	        this.match(qMapParser.LEFT_BRACKET);
	        this.state = 181;
	        this.params();
	        this.state = 182;
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
	    this.enterRule(localctx, 30, qMapParser.RULE_client_function);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 184;
	        this.match(qMapParser.ID);
	        this.state = 185;
	        this.match(qMapParser.EX_MARK);
	        this.state = 186;
	        this.match(qMapParser.LEFT_BRACKET);
	        this.state = 187;
	        this.params();
	        this.state = 188;
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
qMapParser.AMPERSAND = 10;
qMapParser.STRING = 11;
qMapParser.ID = 12;
qMapParser.WS = 13;

qMapParser.RULE_start = 0;
qMapParser.RULE_optional_id = 1;
qMapParser.RULE_id = 2;
qMapParser.RULE_stm = 3;
qMapParser.RULE_exclude = 4;
qMapParser.RULE_global_spread = 5;
qMapParser.RULE_scoped_spread = 6;
qMapParser.RULE_spread = 7;
qMapParser.RULE_params = 8;
qMapParser.RULE_query = 9;
qMapParser.RULE_query_list = 10;
qMapParser.RULE_obj_ref = 11;
qMapParser.RULE_field = 12;
qMapParser.RULE_field_rename = 13;
qMapParser.RULE_fn = 14;
qMapParser.RULE_client_function = 15;

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
        this._optional_id = null; // Optional_idContext
        this._query_list = null; // Query_listContext
    }

	optional_id() {
	    return this.getTypedRuleContext(Optional_idContext,0);
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



class Optional_idContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = qMapParser.RULE_optional_id;
        this.text = null
        this._id = null; // IdContext
    }

	id() {
	    return this.getTypedRuleContext(IdContext,0);
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
        this._id = null; // IdContext
    }

	EX_MARK() {
	    return this.getToken(qMapParser.EX_MARK, 0);
	};

	id() {
	    return this.getTypedRuleContext(IdContext,0);
	};


}



class Global_spreadContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = qMapParser.RULE_global_spread;
        this.node = null
        this._id = null; // IdContext
    }

	TRIPLE_DOT() {
	    return this.getToken(qMapParser.TRIPLE_DOT, 0);
	};

	AMPERSAND() {
	    return this.getToken(qMapParser.AMPERSAND, 0);
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



class Scoped_spreadContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = qMapParser.RULE_scoped_spread;
        this.node = null
        this._id = null; // IdContext
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



class SpreadContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = qMapParser.RULE_spread;
        this.node = null
        this._global_spread = null; // Global_spreadContext
        this._scoped_spread = null; // Scoped_spreadContext
    }

	global_spread() {
	    return this.getTypedRuleContext(Global_spreadContext,0);
	};

	scoped_spread() {
	    return this.getTypedRuleContext(Scoped_spreadContext,0);
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
        this._spread = null; // SpreadContext
    }

	stm() {
	    return this.getTypedRuleContext(StmContext,0);
	};

	exclude() {
	    return this.getTypedRuleContext(ExcludeContext,0);
	};

	spread() {
	    return this.getTypedRuleContext(SpreadContext,0);
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
qMapParser.Optional_idContext = Optional_idContext; 
qMapParser.IdContext = IdContext; 
qMapParser.StmContext = StmContext; 
qMapParser.ExcludeContext = ExcludeContext; 
qMapParser.Global_spreadContext = Global_spreadContext; 
qMapParser.Scoped_spreadContext = Scoped_spreadContext; 
qMapParser.SpreadContext = SpreadContext; 
qMapParser.ParamsContext = ParamsContext; 
qMapParser.QueryContext = QueryContext; 
qMapParser.Query_listContext = Query_listContext; 
qMapParser.Obj_refContext = Obj_refContext; 
qMapParser.FieldContext = FieldContext; 
qMapParser.Field_renameContext = Field_renameContext; 
qMapParser.FnContext = FnContext; 
qMapParser.Client_functionContext = Client_functionContext; 
