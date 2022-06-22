// Generated from /home/gbenm/code/pumkat/qmap/antlr4/QMap.g4 by ANTLR 4.9.3
// jshint ignore: start
import antlr4 from 'antlr4';
import QMapListener from './QMapListener.js';

import * as astn from ".."


const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0003\u0014\u00ad\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010",
    "\t\u0010\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013",
    "\u0003\u0002\u0003\u0002\u0003\u0002\u0005\u0002*\n\u0002\u0003\u0002",
    "\u0005\u0002-\n\u0002\u0003\u0003\u0005\u00030\n\u0003\u0003\u0004\u0003",
    "\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0005\u00057\n\u0005\u0003",
    "\u0006\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0003\u0007\u0007\u0007A\n\u0007\f\u0007\u000e\u0007D\u000b\u0007",
    "\u0003\b\u0003\b\u0005\bH\n\b\u0003\b\u0003\b\u0007\bL\n\b\f\b\u000e",
    "\bO\u000b\b\u0003\t\u0003\t\u0005\tS\n\t\u0003\n\u0003\n\u0003\n\u0003",
    "\u000b\u0003\u000b\u0005\u000bZ\n\u000b\u0003\f\u0003\f\u0003\f\u0007",
    "\f_\n\f\f\f\u000e\fb\u000b\f\u0003\r\u0003\r\u0003\r\u0003\r\u0005\r",
    "h\n\r\u0003\u000e\u0003\u000e\u0003\u000e\u0007\u000em\n\u000e\f\u000e",
    "\u000e\u000ep\u000b\u000e\u0003\u000e\u0005\u000es\n\u000e\u0003\u000f",
    "\u0003\u000f\u0003\u000f\u0007\u000fx\n\u000f\f\u000f\u000e\u000f{\u000b",
    "\u000f\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003",
    "\u0010\u0003\u0010\u0005\u0010\u0084\n\u0010\u0003\u0011\u0003\u0011",
    "\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0012\u0003\u0012\u0003\u0012",
    "\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012",
    "\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0005\u0012",
    "\u0099\n\u0012\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003",
    "\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003",
    "\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0005",
    "\u0013\u00ab\n\u0013\u0003\u0013\u0002\u0002\u0014\u0002\u0004\u0006",
    "\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u001c\u001e \"$\u0002",
    "\u0003\u0003\u0002\u0010\u0011\u0002\u00ae\u0002&\u0003\u0002\u0002",
    "\u0002\u0004/\u0003\u0002\u0002\u0002\u00061\u0003\u0002\u0002\u0002",
    "\b6\u0003\u0002\u0002\u0002\n8\u0003\u0002\u0002\u0002\f;\u0003\u0002",
    "\u0002\u0002\u000eE\u0003\u0002\u0002\u0002\u0010R\u0003\u0002\u0002",
    "\u0002\u0012T\u0003\u0002\u0002\u0002\u0014Y\u0003\u0002\u0002\u0002",
    "\u0016[\u0003\u0002\u0002\u0002\u0018g\u0003\u0002\u0002\u0002\u001a",
    "i\u0003\u0002\u0002\u0002\u001ct\u0003\u0002\u0002\u0002\u001e|\u0003",
    "\u0002\u0002\u0002 \u0085\u0003\u0002\u0002\u0002\"\u0098\u0003\u0002",
    "\u0002\u0002$\u00aa\u0003\u0002\u0002\u0002&,\u0005\u0004\u0003\u0002",
    "\')\u0007\u0006\u0002\u0002(*\u0005\u001a\u000e\u0002)(\u0003\u0002",
    "\u0002\u0002)*\u0003\u0002\u0002\u0002*+\u0003\u0002\u0002\u0002+-\u0007",
    "\u0007\u0002\u0002,\'\u0003\u0002\u0002\u0002,-\u0003\u0002\u0002\u0002",
    "-\u0003\u0003\u0002\u0002\u0002.0\u0005\u0006\u0004\u0002/.\u0003\u0002",
    "\u0002\u0002/0\u0003\u0002\u0002\u00020\u0005\u0003\u0002\u0002\u0002",
    "12\t\u0002\u0002\u00022\u0007\u0003\u0002\u0002\u000237\u0005\u001e",
    "\u0010\u000247\u0005\"\u0012\u000257\u0005$\u0013\u000263\u0003\u0002",
    "\u0002\u000264\u0003\u0002\u0002\u000265\u0003\u0002\u0002\u00027\t",
    "\u0003\u0002\u0002\u000289\u0007\b\u0002\u00029:\u0005\u0006\u0004\u0002",
    ":\u000b\u0003\u0002\u0002\u0002;<\u0007\u000b\u0002\u0002<=\u0007\u000f",
    "\u0002\u0002=B\u0005\u0006\u0004\u0002>?\u0007\f\u0002\u0002?A\u0005",
    "\u0006\u0004\u0002@>\u0003\u0002\u0002\u0002AD\u0003\u0002\u0002\u0002",
    "B@\u0003\u0002\u0002\u0002BC\u0003\u0002\u0002\u0002C\r\u0003\u0002",
    "\u0002\u0002DB\u0003\u0002\u0002\u0002EG\u0007\u000b\u0002\u0002FH\u0005",
    "\u0006\u0004\u0002GF\u0003\u0002\u0002\u0002GH\u0003\u0002\u0002\u0002",
    "HM\u0003\u0002\u0002\u0002IJ\u0007\f\u0002\u0002JL\u0005\u0006\u0004",
    "\u0002KI\u0003\u0002\u0002\u0002LO\u0003\u0002\u0002\u0002MK\u0003\u0002",
    "\u0002\u0002MN\u0003\u0002\u0002\u0002N\u000f\u0003\u0002\u0002\u0002",
    "OM\u0003\u0002\u0002\u0002PS\u0005\f\u0007\u0002QS\u0005\u000e\b\u0002",
    "RP\u0003\u0002\u0002\u0002RQ\u0003\u0002\u0002\u0002S\u0011\u0003\u0002",
    "\u0002\u0002TU\u0007\u0003\u0002\u0002UV\u0007\u0011\u0002\u0002V\u0013",
    "\u0003\u0002\u0002\u0002WZ\u0005\u0012\n\u0002XZ\u0005\b\u0005\u0002",
    "YW\u0003\u0002\u0002\u0002YX\u0003\u0002\u0002\u0002Z\u0015\u0003\u0002",
    "\u0002\u0002[`\u0005\u0014\u000b\u0002\\]\u0007\n\u0002\u0002]_\u0005",
    "\u0014\u000b\u0002^\\\u0003\u0002\u0002\u0002_b\u0003\u0002\u0002\u0002",
    "`^\u0003\u0002\u0002\u0002`a\u0003\u0002\u0002\u0002a\u0017\u0003\u0002",
    "\u0002\u0002b`\u0003\u0002\u0002\u0002ch\u0005\b\u0005\u0002dh\u0005",
    "\n\u0006\u0002eh\u0005\u0010\t\u0002fh\u0005 \u0011\u0002gc\u0003\u0002",
    "\u0002\u0002gd\u0003\u0002\u0002\u0002ge\u0003\u0002\u0002\u0002gf\u0003",
    "\u0002\u0002\u0002h\u0019\u0003\u0002\u0002\u0002in\u0005\u0018\r\u0002",
    "jk\u0007\n\u0002\u0002km\u0005\u0018\r\u0002lj\u0003\u0002\u0002\u0002",
    "mp\u0003\u0002\u0002\u0002nl\u0003\u0002\u0002\u0002no\u0003\u0002\u0002",
    "\u0002or\u0003\u0002\u0002\u0002pn\u0003\u0002\u0002\u0002qs\u0007\n",
    "\u0002\u0002rq\u0003\u0002\u0002\u0002rs\u0003\u0002\u0002\u0002s\u001b",
    "\u0003\u0002\u0002\u0002ty\u0005\u0006\u0004\u0002uv\u0007\f\u0002\u0002",
    "vx\u0005\u0006\u0004\u0002wu\u0003\u0002\u0002\u0002x{\u0003\u0002\u0002",
    "\u0002yw\u0003\u0002\u0002\u0002yz\u0003\u0002\u0002\u0002z\u001d\u0003",
    "\u0002\u0002\u0002{y\u0003\u0002\u0002\u0002|}\u0005\u001c\u000f\u0002",
    "}\u0083\b\u0010\u0001\u0002~\u007f\u0007\u0006\u0002\u0002\u007f\u0080",
    "\u0005\u001a\u000e\u0002\u0080\u0081\u0007\u0007\u0002\u0002\u0081\u0082",
    "\b\u0010\u0001\u0002\u0082\u0084\u0003\u0002\u0002\u0002\u0083~\u0003",
    "\u0002\u0002\u0002\u0083\u0084\u0003\u0002\u0002\u0002\u0084\u001f\u0003",
    "\u0002\u0002\u0002\u0085\u0086\u0005\u0006\u0004\u0002\u0086\u0087\u0007",
    "\t\u0002\u0002\u0087\u0088\u0005\b\u0005\u0002\u0088\u0089\b\u0011\u0001",
    "\u0002\u0089!\u0003\u0002\u0002\u0002\u008a\u008b\u0007\u0011\u0002",
    "\u0002\u008b\u008c\u0007\r\u0002\u0002\u008c\u008d\u0005\u0016\f\u0002",
    "\u008d\u008e\u0007\u000e\u0002\u0002\u008e\u008f\b\u0012\u0001\u0002",
    "\u008f\u0099\u0003\u0002\u0002\u0002\u0090\u0091\u0007\u0004\u0002\u0002",
    "\u0091\u0092\u0007\u0011\u0002\u0002\u0092\u0093\u0007\r\u0002\u0002",
    "\u0093\u0094\u0005\u0016\f\u0002\u0094\u0095\u0007\u000e\u0002\u0002",
    "\u0095\u0096\u0007\u0005\u0002\u0002\u0096\u0097\b\u0012\u0001\u0002",
    "\u0097\u0099\u0003\u0002\u0002\u0002\u0098\u008a\u0003\u0002\u0002\u0002",
    "\u0098\u0090\u0003\u0002\u0002\u0002\u0099#\u0003\u0002\u0002\u0002",
    "\u009a\u009b\u0007\u0011\u0002\u0002\u009b\u009c\u0007\b\u0002\u0002",
    "\u009c\u009d\u0007\r\u0002\u0002\u009d\u009e\u0005\u0016\f\u0002\u009e",
    "\u009f\u0007\u000e\u0002\u0002\u009f\u00a0\b\u0013\u0001\u0002\u00a0",
    "\u00ab\u0003\u0002\u0002\u0002\u00a1\u00a2\u0007\u0004\u0002\u0002\u00a2",
    "\u00a3\u0007\u0011\u0002\u0002\u00a3\u00a4\u0007\b\u0002\u0002\u00a4",
    "\u00a5\u0007\r\u0002\u0002\u00a5\u00a6\u0005\u0016\f\u0002\u00a6\u00a7",
    "\u0007\u000e\u0002\u0002\u00a7\u00a8\u0007\u0005\u0002\u0002\u00a8\u00a9",
    "\b\u0013\u0001\u0002\u00a9\u00ab\u0003\u0002\u0002\u0002\u00aa\u009a",
    "\u0003\u0002\u0002\u0002\u00aa\u00a1\u0003\u0002\u0002\u0002\u00ab%",
    "\u0003\u0002\u0002\u0002\u0013),/6BGMRY`gnry\u0083\u0098\u00aa"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class QMapParser extends antlr4.Parser {

    static grammarFileName = "QMap.g4";
    static literalNames = [ null, "'@'", "'['", "']'", "'{'", "'}'", "'!'", 
                            "':'", "','", "'...'", "'.'", "'('", "')'", 
                            "'&'" ];
    static symbolicNames = [ null, "AT", "LEFT_BRACKET", "RIGHT_BRACKET", 
                             "LEFT_BRACE", "RIGHT_BRACE", "EX_MARK", "COLON", 
                             "COMMA", "TRIPLE_DOT", "DOT", "LEFT_PAREN", 
                             "RIGHT_PAREN", "AMPERSAND", "STRING", "ID", 
                             "WS", "BLOCK_COMMENT", "LINE_COMMENT" ];
    static ruleNames = [ "start", "optional_id", "id", "stm", "exclude", 
                         "global_spread", "scoped_spread", "spread", "variable", 
                         "param", "params", "query", "query_list", "obj_ref", 
                         "field", "field_rename", "fn", "client_function" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = QMapParser.ruleNames;
        this.literalNames = QMapParser.literalNames;
        this.symbolicNames = QMapParser.symbolicNames;
    }

    get atn() {
        return atn;
    }



	start() {
	    let localctx = new StartContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, QMapParser.RULE_start);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 36;
	        this.optional_id();
	        this.state = 42;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===QMapParser.LEFT_BRACE) {
	            this.state = 37;
	            this.match(QMapParser.LEFT_BRACE);
	            this.state = 39;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << QMapParser.LEFT_BRACKET) | (1 << QMapParser.EX_MARK) | (1 << QMapParser.TRIPLE_DOT) | (1 << QMapParser.STRING) | (1 << QMapParser.ID))) !== 0)) {
	                this.state = 38;
	                this.query_list();
	            }

	            this.state = 41;
	            this.match(QMapParser.RIGHT_BRACE);
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
	    this.enterRule(localctx, 2, QMapParser.RULE_optional_id);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 45;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===QMapParser.STRING || _la===QMapParser.ID) {
	            this.state = 44;
	            this.id();
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
	    this.enterRule(localctx, 4, QMapParser.RULE_id);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 47;
	        _la = this._input.LA(1);
	        if(!(_la===QMapParser.STRING || _la===QMapParser.ID)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
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
	    this.enterRule(localctx, 6, QMapParser.RULE_stm);
	    try {
	        this.state = 52;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 49;
	            this.field();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 50;
	            this.fn();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 51;
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
	    this.enterRule(localctx, 8, QMapParser.RULE_exclude);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 54;
	        this.match(QMapParser.EX_MARK);
	        this.state = 55;
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



	global_spread() {
	    let localctx = new Global_spreadContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, QMapParser.RULE_global_spread);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 57;
	        this.match(QMapParser.TRIPLE_DOT);
	        this.state = 58;
	        this.match(QMapParser.AMPERSAND);
	        this.state = 59;
	        this.id();
	        this.state = 64;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===QMapParser.DOT) {
	            this.state = 60;
	            this.match(QMapParser.DOT);
	            this.state = 61;
	            this.id();
	            this.state = 66;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
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



	scoped_spread() {
	    let localctx = new Scoped_spreadContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, QMapParser.RULE_scoped_spread);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 67;
	        this.match(QMapParser.TRIPLE_DOT);
	        this.state = 69;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===QMapParser.STRING || _la===QMapParser.ID) {
	            this.state = 68;
	            this.id();
	        }

	        this.state = 75;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===QMapParser.DOT) {
	            this.state = 71;
	            this.match(QMapParser.DOT);
	            this.state = 72;
	            this.id();
	            this.state = 77;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
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



	spread() {
	    let localctx = new SpreadContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, QMapParser.RULE_spread);
	    try {
	        this.state = 80;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 78;
	            this.global_spread();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 79;
	            this.scoped_spread();
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



	variable() {
	    let localctx = new VariableContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, QMapParser.RULE_variable);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 82;
	        this.match(QMapParser.AT);
	        this.state = 83;
	        this.match(QMapParser.ID);
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



	param() {
	    let localctx = new ParamContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, QMapParser.RULE_param);
	    try {
	        this.state = 87;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case QMapParser.AT:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 85;
	            this.variable();
	            break;
	        case QMapParser.LEFT_BRACKET:
	        case QMapParser.STRING:
	        case QMapParser.ID:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 86;
	            this.stm();
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



	params() {
	    let localctx = new ParamsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, QMapParser.RULE_params);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 89;
	        this.param();
	        this.state = 94;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===QMapParser.COMMA) {
	            this.state = 90;
	            this.match(QMapParser.COMMA);
	            this.state = 91;
	            this.param();
	            this.state = 96;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
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
	    this.enterRule(localctx, 22, QMapParser.RULE_query);
	    try {
	        this.state = 101;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,10,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 97;
	            this.stm();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 98;
	            this.exclude();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 99;
	            this.spread();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 100;
	            this.field_rename();
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



	query_list() {
	    let localctx = new Query_listContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, QMapParser.RULE_query_list);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 103;
	        this.query();
	        this.state = 108;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,11,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 104;
	                this.match(QMapParser.COMMA);
	                this.state = 105;
	                this.query(); 
	            }
	            this.state = 110;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,11,this._ctx);
	        }

	        this.state = 112;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===QMapParser.COMMA) {
	            this.state = 111;
	            this.match(QMapParser.COMMA);
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



	obj_ref() {
	    let localctx = new Obj_refContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, QMapParser.RULE_obj_ref);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 114;
	        this.id();
	        this.state = 119;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===QMapParser.DOT) {
	            this.state = 115;
	            this.match(QMapParser.DOT);
	            this.state = 116;
	            this.id();
	            this.state = 121;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
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



	field() {
	    let localctx = new FieldContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, QMapParser.RULE_field);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 122;
	        localctx._obj_ref = this.obj_ref();
	         localctx.node = new astn.Field(localctx._obj_ref.ids, null) 
	        this.state = 129;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===QMapParser.LEFT_BRACE) {
	            this.state = 124;
	            this.match(QMapParser.LEFT_BRACE);
	            this.state = 125;
	            localctx._query_list = this.query_list();
	            this.state = 126;
	            this.match(QMapParser.RIGHT_BRACE);
	             localctx.node = new astn.Field(localctx._obj_ref.ids, localctx._query_list.nodes) 
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
	    this.enterRule(localctx, 30, QMapParser.RULE_field_rename);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 131;
	        localctx._id = this.id();
	        this.state = 132;
	        this.match(QMapParser.COLON);
	        this.state = 133;
	        localctx._stm = this.stm();
	         localctx.node = new astn.Rename((localctx._id===null ? null : this._input.getText(new antlr4.Interval(localctx._id.start,localctx._id.stop))), localctx._stm.node) 
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
	    this.enterRule(localctx, 32, QMapParser.RULE_fn);
	    try {
	        this.state = 150;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case QMapParser.ID:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 136;
	            localctx._ID = this.match(QMapParser.ID);
	            this.state = 137;
	            this.match(QMapParser.LEFT_PAREN);
	            this.state = 138;
	            localctx._params = this.params();
	            this.state = 139;
	            this.match(QMapParser.RIGHT_PAREN);
	             localctx.node = new astn.Function((localctx._ID===null ? null : localctx._ID.text), localctx._params.nodes, false) 
	            break;
	        case QMapParser.LEFT_BRACKET:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 142;
	            this.match(QMapParser.LEFT_BRACKET);
	            this.state = 143;
	            localctx._ID = this.match(QMapParser.ID);
	            this.state = 144;
	            this.match(QMapParser.LEFT_PAREN);
	            this.state = 145;
	            localctx._params = this.params();
	            this.state = 146;
	            this.match(QMapParser.RIGHT_PAREN);
	            this.state = 147;
	            this.match(QMapParser.RIGHT_BRACKET);
	             localctx.node = new astn.Function((localctx._ID===null ? null : localctx._ID.text), localctx._params.nodes, false, true) 
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



	client_function() {
	    let localctx = new Client_functionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, QMapParser.RULE_client_function);
	    try {
	        this.state = 168;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case QMapParser.ID:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 152;
	            localctx._ID = this.match(QMapParser.ID);
	            this.state = 153;
	            this.match(QMapParser.EX_MARK);
	            this.state = 154;
	            this.match(QMapParser.LEFT_PAREN);
	            this.state = 155;
	            localctx._params = this.params();
	            this.state = 156;
	            this.match(QMapParser.RIGHT_PAREN);
	             localctx.node = new astn.Function((localctx._ID===null ? null : localctx._ID.text), localctx._params.nodes, true) 
	            break;
	        case QMapParser.LEFT_BRACKET:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 159;
	            this.match(QMapParser.LEFT_BRACKET);
	            this.state = 160;
	            localctx._ID = this.match(QMapParser.ID);
	            this.state = 161;
	            this.match(QMapParser.EX_MARK);
	            this.state = 162;
	            this.match(QMapParser.LEFT_PAREN);
	            this.state = 163;
	            localctx._params = this.params();
	            this.state = 164;
	            this.match(QMapParser.RIGHT_PAREN);
	            this.state = 165;
	            this.match(QMapParser.RIGHT_BRACKET);
	             localctx.node = new astn.Function((localctx._ID===null ? null : localctx._ID.text), localctx._params.nodes, true, true) 
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


}

QMapParser.EOF = antlr4.Token.EOF;
QMapParser.AT = 1;
QMapParser.LEFT_BRACKET = 2;
QMapParser.RIGHT_BRACKET = 3;
QMapParser.LEFT_BRACE = 4;
QMapParser.RIGHT_BRACE = 5;
QMapParser.EX_MARK = 6;
QMapParser.COLON = 7;
QMapParser.COMMA = 8;
QMapParser.TRIPLE_DOT = 9;
QMapParser.DOT = 10;
QMapParser.LEFT_PAREN = 11;
QMapParser.RIGHT_PAREN = 12;
QMapParser.AMPERSAND = 13;
QMapParser.STRING = 14;
QMapParser.ID = 15;
QMapParser.WS = 16;
QMapParser.BLOCK_COMMENT = 17;
QMapParser.LINE_COMMENT = 18;

QMapParser.RULE_start = 0;
QMapParser.RULE_optional_id = 1;
QMapParser.RULE_id = 2;
QMapParser.RULE_stm = 3;
QMapParser.RULE_exclude = 4;
QMapParser.RULE_global_spread = 5;
QMapParser.RULE_scoped_spread = 6;
QMapParser.RULE_spread = 7;
QMapParser.RULE_variable = 8;
QMapParser.RULE_param = 9;
QMapParser.RULE_params = 10;
QMapParser.RULE_query = 11;
QMapParser.RULE_query_list = 12;
QMapParser.RULE_obj_ref = 13;
QMapParser.RULE_field = 14;
QMapParser.RULE_field_rename = 15;
QMapParser.RULE_fn = 16;
QMapParser.RULE_client_function = 17;

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
        this.ruleIndex = QMapParser.RULE_start;
    }

	optional_id() {
	    return this.getTypedRuleContext(Optional_idContext,0);
	};

	LEFT_BRACE() {
	    return this.getToken(QMapParser.LEFT_BRACE, 0);
	};

	RIGHT_BRACE() {
	    return this.getToken(QMapParser.RIGHT_BRACE, 0);
	};

	query_list() {
	    return this.getTypedRuleContext(Query_listContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof QMapListener ) {
	        listener.enterStart(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof QMapListener ) {
	        listener.exitStart(this);
		}
	}


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
        this.ruleIndex = QMapParser.RULE_optional_id;
    }

	id() {
	    return this.getTypedRuleContext(IdContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof QMapListener ) {
	        listener.enterOptional_id(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof QMapListener ) {
	        listener.exitOptional_id(this);
		}
	}


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
        this.ruleIndex = QMapParser.RULE_id;
    }

	ID() {
	    return this.getToken(QMapParser.ID, 0);
	};

	STRING() {
	    return this.getToken(QMapParser.STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof QMapListener ) {
	        listener.enterId(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof QMapListener ) {
	        listener.exitId(this);
		}
	}


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
        this.ruleIndex = QMapParser.RULE_stm;
        this.node = null
    }

	field() {
	    return this.getTypedRuleContext(FieldContext,0);
	};

	fn() {
	    return this.getTypedRuleContext(FnContext,0);
	};

	client_function() {
	    return this.getTypedRuleContext(Client_functionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof QMapListener ) {
	        listener.enterStm(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof QMapListener ) {
	        listener.exitStm(this);
		}
	}


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
        this.ruleIndex = QMapParser.RULE_exclude;
        this.node = null
    }

	EX_MARK() {
	    return this.getToken(QMapParser.EX_MARK, 0);
	};

	id() {
	    return this.getTypedRuleContext(IdContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof QMapListener ) {
	        listener.enterExclude(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof QMapListener ) {
	        listener.exitExclude(this);
		}
	}


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
        this.ruleIndex = QMapParser.RULE_global_spread;
    }

	TRIPLE_DOT() {
	    return this.getToken(QMapParser.TRIPLE_DOT, 0);
	};

	AMPERSAND() {
	    return this.getToken(QMapParser.AMPERSAND, 0);
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
	        return this.getTokens(QMapParser.DOT);
	    } else {
	        return this.getToken(QMapParser.DOT, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof QMapListener ) {
	        listener.enterGlobal_spread(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof QMapListener ) {
	        listener.exitGlobal_spread(this);
		}
	}


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
        this.ruleIndex = QMapParser.RULE_scoped_spread;
    }

	TRIPLE_DOT() {
	    return this.getToken(QMapParser.TRIPLE_DOT, 0);
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
	        return this.getTokens(QMapParser.DOT);
	    } else {
	        return this.getToken(QMapParser.DOT, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof QMapListener ) {
	        listener.enterScoped_spread(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof QMapListener ) {
	        listener.exitScoped_spread(this);
		}
	}


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
        this.ruleIndex = QMapParser.RULE_spread;
        this.node = null
    }

	global_spread() {
	    return this.getTypedRuleContext(Global_spreadContext,0);
	};

	scoped_spread() {
	    return this.getTypedRuleContext(Scoped_spreadContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof QMapListener ) {
	        listener.enterSpread(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof QMapListener ) {
	        listener.exitSpread(this);
		}
	}


}



class VariableContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = QMapParser.RULE_variable;
    }

	AT() {
	    return this.getToken(QMapParser.AT, 0);
	};

	ID() {
	    return this.getToken(QMapParser.ID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof QMapListener ) {
	        listener.enterVariable(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof QMapListener ) {
	        listener.exitVariable(this);
		}
	}


}



class ParamContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = QMapParser.RULE_param;
        this.node = null
    }

	variable() {
	    return this.getTypedRuleContext(VariableContext,0);
	};

	stm() {
	    return this.getTypedRuleContext(StmContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof QMapListener ) {
	        listener.enterParam(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof QMapListener ) {
	        listener.exitParam(this);
		}
	}


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
        this.ruleIndex = QMapParser.RULE_params;
        this.nodes = null
    }

	param = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ParamContext);
	    } else {
	        return this.getTypedRuleContext(ParamContext,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(QMapParser.COMMA);
	    } else {
	        return this.getToken(QMapParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof QMapListener ) {
	        listener.enterParams(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof QMapListener ) {
	        listener.exitParams(this);
		}
	}


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
        this.ruleIndex = QMapParser.RULE_query;
        this.node = null
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

	field_rename() {
	    return this.getTypedRuleContext(Field_renameContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof QMapListener ) {
	        listener.enterQuery(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof QMapListener ) {
	        listener.exitQuery(this);
		}
	}


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
        this.ruleIndex = QMapParser.RULE_query_list;
        this.nodes = null
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
	        return this.getTokens(QMapParser.COMMA);
	    } else {
	        return this.getToken(QMapParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof QMapListener ) {
	        listener.enterQuery_list(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof QMapListener ) {
	        listener.exitQuery_list(this);
		}
	}


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
        this.ruleIndex = QMapParser.RULE_obj_ref;
        this.ids = null
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

	DOT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(QMapParser.DOT);
	    } else {
	        return this.getToken(QMapParser.DOT, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof QMapListener ) {
	        listener.enterObj_ref(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof QMapListener ) {
	        listener.exitObj_ref(this);
		}
	}


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
        this.ruleIndex = QMapParser.RULE_field;
        this.node = null
        this._obj_ref = null; // Obj_refContext
        this._query_list = null; // Query_listContext
    }

	obj_ref() {
	    return this.getTypedRuleContext(Obj_refContext,0);
	};

	LEFT_BRACE() {
	    return this.getToken(QMapParser.LEFT_BRACE, 0);
	};

	query_list() {
	    return this.getTypedRuleContext(Query_listContext,0);
	};

	RIGHT_BRACE() {
	    return this.getToken(QMapParser.RIGHT_BRACE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof QMapListener ) {
	        listener.enterField(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof QMapListener ) {
	        listener.exitField(this);
		}
	}


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
        this.ruleIndex = QMapParser.RULE_field_rename;
        this.node = null
        this._id = null; // IdContext
        this._stm = null; // StmContext
    }

	id() {
	    return this.getTypedRuleContext(IdContext,0);
	};

	COLON() {
	    return this.getToken(QMapParser.COLON, 0);
	};

	stm() {
	    return this.getTypedRuleContext(StmContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof QMapListener ) {
	        listener.enterField_rename(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof QMapListener ) {
	        listener.exitField_rename(this);
		}
	}


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
        this.ruleIndex = QMapParser.RULE_fn;
        this.node = null
        this._ID = null; // Token
        this._params = null; // ParamsContext
    }

	ID() {
	    return this.getToken(QMapParser.ID, 0);
	};

	LEFT_PAREN() {
	    return this.getToken(QMapParser.LEFT_PAREN, 0);
	};

	params() {
	    return this.getTypedRuleContext(ParamsContext,0);
	};

	RIGHT_PAREN() {
	    return this.getToken(QMapParser.RIGHT_PAREN, 0);
	};

	LEFT_BRACKET() {
	    return this.getToken(QMapParser.LEFT_BRACKET, 0);
	};

	RIGHT_BRACKET() {
	    return this.getToken(QMapParser.RIGHT_BRACKET, 0);
	};

	enterRule(listener) {
	    if(listener instanceof QMapListener ) {
	        listener.enterFn(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof QMapListener ) {
	        listener.exitFn(this);
		}
	}


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
        this.ruleIndex = QMapParser.RULE_client_function;
        this.node = null
        this._ID = null; // Token
        this._params = null; // ParamsContext
    }

	ID() {
	    return this.getToken(QMapParser.ID, 0);
	};

	EX_MARK() {
	    return this.getToken(QMapParser.EX_MARK, 0);
	};

	LEFT_PAREN() {
	    return this.getToken(QMapParser.LEFT_PAREN, 0);
	};

	params() {
	    return this.getTypedRuleContext(ParamsContext,0);
	};

	RIGHT_PAREN() {
	    return this.getToken(QMapParser.RIGHT_PAREN, 0);
	};

	LEFT_BRACKET() {
	    return this.getToken(QMapParser.LEFT_BRACKET, 0);
	};

	RIGHT_BRACKET() {
	    return this.getToken(QMapParser.RIGHT_BRACKET, 0);
	};

	enterRule(listener) {
	    if(listener instanceof QMapListener ) {
	        listener.enterClient_function(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof QMapListener ) {
	        listener.exitClient_function(this);
		}
	}


}




QMapParser.StartContext = StartContext; 
QMapParser.Optional_idContext = Optional_idContext; 
QMapParser.IdContext = IdContext; 
QMapParser.StmContext = StmContext; 
QMapParser.ExcludeContext = ExcludeContext; 
QMapParser.Global_spreadContext = Global_spreadContext; 
QMapParser.Scoped_spreadContext = Scoped_spreadContext; 
QMapParser.SpreadContext = SpreadContext; 
QMapParser.VariableContext = VariableContext; 
QMapParser.ParamContext = ParamContext; 
QMapParser.ParamsContext = ParamsContext; 
QMapParser.QueryContext = QueryContext; 
QMapParser.Query_listContext = Query_listContext; 
QMapParser.Obj_refContext = Obj_refContext; 
QMapParser.FieldContext = FieldContext; 
QMapParser.Field_renameContext = Field_renameContext; 
QMapParser.FnContext = FnContext; 
QMapParser.Client_functionContext = Client_functionContext; 
