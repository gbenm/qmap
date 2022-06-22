// Generated from /home/gbenm/code/pumkat/qmap/antlr4/QMap.g4 by ANTLR 4.9.3
// jshint ignore: start
import antlr4 from 'antlr4';
import QMapListener from './QMapListener.js';

import * as astn from ".."


const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0003\u0014\u00de\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010",
    "\t\u0010\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0003\u0002\u0003\u0002",
    "\u0003\u0002\u0005\u0002(\n\u0002\u0003\u0002\u0005\u0002+\n\u0002\u0003",
    "\u0003\u0005\u0003.\n\u0003\u0003\u0004\u0003\u0004\u0003\u0005\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003",
    "\u0005\u0003\u0005\u0005\u0005;\n\u0005\u0003\u0006\u0003\u0006\u0003",
    "\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0007",
    "\u0007K\n\u0007\f\u0007\u000e\u0007N\u000b\u0007\u0003\u0007\u0003\u0007",
    "\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0007",
    "\bZ\n\b\f\b\u000e\b]\u000b\b\u0005\b_\n\b\u0003\b\u0003\b\u0003\t\u0003",
    "\t\u0003\t\u0003\t\u0003\t\u0003\t\u0005\ti\n\t\u0003\n\u0003\n\u0003",
    "\n\u0003\n\u0003\n\u0003\n\u0005\nq\n\n\u0003\u000b\u0003\u000b\u0003",
    "\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0007\u000bz",
    "\n\u000b\f\u000b\u000e\u000b}\u000b\u000b\u0003\u000b\u0003\u000b\u0003",
    "\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003",
    "\f\u0003\f\u0003\f\u0005\f\u008d\n\f\u0003\r\u0003\r\u0003\r\u0003\r",
    "\u0003\r\u0003\r\u0003\r\u0007\r\u0096\n\r\f\r\u000e\r\u0099\u000b\r",
    "\u0003\r\u0005\r\u009c\n\r\u0003\r\u0003\r\u0003\u000e\u0003\u000e\u0003",
    "\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0007\u000e\u00a7",
    "\n\u000e\f\u000e\u000e\u000e\u00aa\u000b\u000e\u0003\u000e\u0003\u000e",
    "\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f",
    "\u0003\u000f\u0005\u000f\u00b5\n\u000f\u0003\u0010\u0003\u0010\u0003",
    "\u0010\u0003\u0010\u0003\u0010\u0003\u0011\u0003\u0011\u0003\u0011\u0003",
    "\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003",
    "\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0005\u0011\u00ca",
    "\n\u0011\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012",
    "\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012",
    "\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0005\u0012",
    "\u00dc\n\u0012\u0003\u0012\u0002\u0002\u0013\u0002\u0004\u0006\b\n\f",
    "\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u001c\u001e \"\u0002\u0003",
    "\u0003\u0002\u0010\u0011\u0002\u00e0\u0002$\u0003\u0002\u0002\u0002",
    "\u0004-\u0003\u0002\u0002\u0002\u0006/\u0003\u0002\u0002\u0002\b:\u0003",
    "\u0002\u0002\u0002\n<\u0003\u0002\u0002\u0002\f@\u0003\u0002\u0002\u0002",
    "\u000eQ\u0003\u0002\u0002\u0002\u0010h\u0003\u0002\u0002\u0002\u0012",
    "p\u0003\u0002\u0002\u0002\u0014r\u0003\u0002\u0002\u0002\u0016\u008c",
    "\u0003\u0002\u0002\u0002\u0018\u008e\u0003\u0002\u0002\u0002\u001a\u009f",
    "\u0003\u0002\u0002\u0002\u001c\u00ad\u0003\u0002\u0002\u0002\u001e\u00b6",
    "\u0003\u0002\u0002\u0002 \u00c9\u0003\u0002\u0002\u0002\"\u00db\u0003",
    "\u0002\u0002\u0002$*\u0005\u0004\u0003\u0002%\'\u0007\u0006\u0002\u0002",
    "&(\u0005\u0018\r\u0002\'&\u0003\u0002\u0002\u0002\'(\u0003\u0002\u0002",
    "\u0002()\u0003\u0002\u0002\u0002)+\u0007\u0007\u0002\u0002*%\u0003\u0002",
    "\u0002\u0002*+\u0003\u0002\u0002\u0002+\u0003\u0003\u0002\u0002\u0002",
    ",.\u0005\u0006\u0004\u0002-,\u0003\u0002\u0002\u0002-.\u0003\u0002\u0002",
    "\u0002.\u0005\u0003\u0002\u0002\u0002/0\t\u0002\u0002\u00020\u0007\u0003",
    "\u0002\u0002\u000212\u0005\u001c\u000f\u000223\b\u0005\u0001\u00023",
    ";\u0003\u0002\u0002\u000245\u0005 \u0011\u000256\b\u0005\u0001\u0002",
    "6;\u0003\u0002\u0002\u000278\u0005\"\u0012\u000289\b\u0005\u0001\u0002",
    "9;\u0003\u0002\u0002\u0002:1\u0003\u0002\u0002\u0002:4\u0003\u0002\u0002",
    "\u0002:7\u0003\u0002\u0002\u0002;\t\u0003\u0002\u0002\u0002<=\u0007",
    "\b\u0002\u0002=>\u0005\u0006\u0004\u0002>?\b\u0006\u0001\u0002?\u000b",
    "\u0003\u0002\u0002\u0002@A\b\u0007\u0001\u0002AB\u0007\u000b\u0002\u0002",
    "BC\u0007\u000f\u0002\u0002CD\b\u0007\u0001\u0002DE\u0005\u0006\u0004",
    "\u0002EL\b\u0007\u0001\u0002FG\u0007\f\u0002\u0002GH\u0005\u0006\u0004",
    "\u0002HI\b\u0007\u0001\u0002IK\u0003\u0002\u0002\u0002JF\u0003\u0002",
    "\u0002\u0002KN\u0003\u0002\u0002\u0002LJ\u0003\u0002\u0002\u0002LM\u0003",
    "\u0002\u0002\u0002MO\u0003\u0002\u0002\u0002NL\u0003\u0002\u0002\u0002",
    "OP\b\u0007\u0001\u0002P\r\u0003\u0002\u0002\u0002QR\b\b\u0001\u0002",
    "R^\u0007\u000b\u0002\u0002ST\u0005\u0006\u0004\u0002T[\b\b\u0001\u0002",
    "UV\u0007\f\u0002\u0002VW\u0005\u0006\u0004\u0002WX\b\b\u0001\u0002X",
    "Z\u0003\u0002\u0002\u0002YU\u0003\u0002\u0002\u0002Z]\u0003\u0002\u0002",
    "\u0002[Y\u0003\u0002\u0002\u0002[\\\u0003\u0002\u0002\u0002\\_\u0003",
    "\u0002\u0002\u0002][\u0003\u0002\u0002\u0002^S\u0003\u0002\u0002\u0002",
    "^_\u0003\u0002\u0002\u0002_`\u0003\u0002\u0002\u0002`a\b\b\u0001\u0002",
    "a\u000f\u0003\u0002\u0002\u0002bc\u0005\f\u0007\u0002cd\b\t\u0001\u0002",
    "di\u0003\u0002\u0002\u0002ef\u0005\u000e\b\u0002fg\b\t\u0001\u0002g",
    "i\u0003\u0002\u0002\u0002hb\u0003\u0002\u0002\u0002he\u0003\u0002\u0002",
    "\u0002i\u0011\u0003\u0002\u0002\u0002jk\u0007\u0003\u0002\u0002kl\u0007",
    "\u0011\u0002\u0002lq\b\n\u0001\u0002mn\u0005\b\u0005\u0002no\b\n\u0001",
    "\u0002oq\u0003\u0002\u0002\u0002pj\u0003\u0002\u0002\u0002pm\u0003\u0002",
    "\u0002\u0002q\u0013\u0003\u0002\u0002\u0002rs\b\u000b\u0001\u0002st",
    "\u0005\u0012\n\u0002t{\b\u000b\u0001\u0002uv\u0007\n\u0002\u0002vw\u0005",
    "\u0012\n\u0002wx\b\u000b\u0001\u0002xz\u0003\u0002\u0002\u0002yu\u0003",
    "\u0002\u0002\u0002z}\u0003\u0002\u0002\u0002{y\u0003\u0002\u0002\u0002",
    "{|\u0003\u0002\u0002\u0002|~\u0003\u0002\u0002\u0002}{\u0003\u0002\u0002",
    "\u0002~\u007f\b\u000b\u0001\u0002\u007f\u0015\u0003\u0002\u0002\u0002",
    "\u0080\u0081\u0005\b\u0005\u0002\u0081\u0082\b\f\u0001\u0002\u0082\u008d",
    "\u0003\u0002\u0002\u0002\u0083\u0084\u0005\n\u0006\u0002\u0084\u0085",
    "\b\f\u0001\u0002\u0085\u008d\u0003\u0002\u0002\u0002\u0086\u0087\u0005",
    "\u0010\t\u0002\u0087\u0088\b\f\u0001\u0002\u0088\u008d\u0003\u0002\u0002",
    "\u0002\u0089\u008a\u0005\u001e\u0010\u0002\u008a\u008b\b\f\u0001\u0002",
    "\u008b\u008d\u0003\u0002\u0002\u0002\u008c\u0080\u0003\u0002\u0002\u0002",
    "\u008c\u0083\u0003\u0002\u0002\u0002\u008c\u0086\u0003\u0002\u0002\u0002",
    "\u008c\u0089\u0003\u0002\u0002\u0002\u008d\u0017\u0003\u0002\u0002\u0002",
    "\u008e\u008f\b\r\u0001\u0002\u008f\u0090\u0005\u0016\f\u0002\u0090\u0097",
    "\b\r\u0001\u0002\u0091\u0092\u0007\n\u0002\u0002\u0092\u0093\u0005\u0016",
    "\f\u0002\u0093\u0094\b\r\u0001\u0002\u0094\u0096\u0003\u0002\u0002\u0002",
    "\u0095\u0091\u0003\u0002\u0002\u0002\u0096\u0099\u0003\u0002\u0002\u0002",
    "\u0097\u0095\u0003\u0002\u0002\u0002\u0097\u0098\u0003\u0002\u0002\u0002",
    "\u0098\u009b\u0003\u0002\u0002\u0002\u0099\u0097\u0003\u0002\u0002\u0002",
    "\u009a\u009c\u0007\n\u0002\u0002\u009b\u009a\u0003\u0002\u0002\u0002",
    "\u009b\u009c\u0003\u0002\u0002\u0002\u009c\u009d\u0003\u0002\u0002\u0002",
    "\u009d\u009e\b\r\u0001\u0002\u009e\u0019\u0003\u0002\u0002\u0002\u009f",
    "\u00a0\b\u000e\u0001\u0002\u00a0\u00a1\u0005\u0006\u0004\u0002\u00a1",
    "\u00a8\b\u000e\u0001\u0002\u00a2\u00a3\u0007\f\u0002\u0002\u00a3\u00a4",
    "\u0005\u0006\u0004\u0002\u00a4\u00a5\b\u000e\u0001\u0002\u00a5\u00a7",
    "\u0003\u0002\u0002\u0002\u00a6\u00a2\u0003\u0002\u0002\u0002\u00a7\u00aa",
    "\u0003\u0002\u0002\u0002\u00a8\u00a6\u0003\u0002\u0002\u0002\u00a8\u00a9",
    "\u0003\u0002\u0002\u0002\u00a9\u00ab\u0003\u0002\u0002\u0002\u00aa\u00a8",
    "\u0003\u0002\u0002\u0002\u00ab\u00ac\b\u000e\u0001\u0002\u00ac\u001b",
    "\u0003\u0002\u0002\u0002\u00ad\u00ae\u0005\u001a\u000e\u0002\u00ae\u00b4",
    "\b\u000f\u0001\u0002\u00af\u00b0\u0007\u0006\u0002\u0002\u00b0\u00b1",
    "\u0005\u0018\r\u0002\u00b1\u00b2\u0007\u0007\u0002\u0002\u00b2\u00b3",
    "\b\u000f\u0001\u0002\u00b3\u00b5\u0003\u0002\u0002\u0002\u00b4\u00af",
    "\u0003\u0002\u0002\u0002\u00b4\u00b5\u0003\u0002\u0002\u0002\u00b5\u001d",
    "\u0003\u0002\u0002\u0002\u00b6\u00b7\u0005\u0006\u0004\u0002\u00b7\u00b8",
    "\u0007\t\u0002\u0002\u00b8\u00b9\u0005\b\u0005\u0002\u00b9\u00ba\b\u0010",
    "\u0001\u0002\u00ba\u001f\u0003\u0002\u0002\u0002\u00bb\u00bc\u0007\u0011",
    "\u0002\u0002\u00bc\u00bd\u0007\r\u0002\u0002\u00bd\u00be\u0005\u0014",
    "\u000b\u0002\u00be\u00bf\u0007\u000e\u0002\u0002\u00bf\u00c0\b\u0011",
    "\u0001\u0002\u00c0\u00ca\u0003\u0002\u0002\u0002\u00c1\u00c2\u0007\u0004",
    "\u0002\u0002\u00c2\u00c3\u0007\u0011\u0002\u0002\u00c3\u00c4\u0007\r",
    "\u0002\u0002\u00c4\u00c5\u0005\u0014\u000b\u0002\u00c5\u00c6\u0007\u000e",
    "\u0002\u0002\u00c6\u00c7\u0007\u0005\u0002\u0002\u00c7\u00c8\b\u0011",
    "\u0001\u0002\u00c8\u00ca\u0003\u0002\u0002\u0002\u00c9\u00bb\u0003\u0002",
    "\u0002\u0002\u00c9\u00c1\u0003\u0002\u0002\u0002\u00ca!\u0003\u0002",
    "\u0002\u0002\u00cb\u00cc\u0007\u0011\u0002\u0002\u00cc\u00cd\u0007\b",
    "\u0002\u0002\u00cd\u00ce\u0007\r\u0002\u0002\u00ce\u00cf\u0005\u0014",
    "\u000b\u0002\u00cf\u00d0\u0007\u000e\u0002\u0002\u00d0\u00d1\b\u0012",
    "\u0001\u0002\u00d1\u00dc\u0003\u0002\u0002\u0002\u00d2\u00d3\u0007\u0004",
    "\u0002\u0002\u00d3\u00d4\u0007\u0011\u0002\u0002\u00d4\u00d5\u0007\b",
    "\u0002\u0002\u00d5\u00d6\u0007\r\u0002\u0002\u00d6\u00d7\u0005\u0014",
    "\u000b\u0002\u00d7\u00d8\u0007\u000e\u0002\u0002\u00d8\u00d9\u0007\u0005",
    "\u0002\u0002\u00d9\u00da\b\u0012\u0001\u0002\u00da\u00dc\u0003\u0002",
    "\u0002\u0002\u00db\u00cb\u0003\u0002\u0002\u0002\u00db\u00d2\u0003\u0002",
    "\u0002\u0002\u00dc#\u0003\u0002\u0002\u0002\u0013\'*-:L[^hp{\u008c\u0097",
    "\u009b\u00a8\u00b4\u00c9\u00db"].join("");


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
                         "global_spread", "scoped_spread", "spread", "param", 
                         "params", "query", "query_list", "obj_ref", "field", 
                         "field_rename", "fn", "client_function" ];

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
	        this.state = 34;
	        this.optional_id();
	        this.state = 40;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===QMapParser.LEFT_BRACE) {
	            this.state = 35;
	            this.match(QMapParser.LEFT_BRACE);
	            this.state = 37;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << QMapParser.LEFT_BRACKET) | (1 << QMapParser.EX_MARK) | (1 << QMapParser.TRIPLE_DOT) | (1 << QMapParser.STRING) | (1 << QMapParser.ID))) !== 0)) {
	                this.state = 36;
	                this.query_list();
	            }

	            this.state = 39;
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
	        this.state = 43;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===QMapParser.STRING || _la===QMapParser.ID) {
	            this.state = 42;
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
	        this.state = 45;
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
	        this.state = 56;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 47;
	            localctx._field = this.field();
	            localctx.node = localctx._field.node
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 50;
	            localctx._fn = this.fn();
	             localctx.node = localctx._fn.node 
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 53;
	            localctx._client_function = this.client_function();
	             localctx.node = localctx._client_function.node 
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
	        this.state = 58;
	        this.match(QMapParser.EX_MARK);
	        this.state = 59;
	        localctx._id = this.id();
	         localctx.node = new astn.Exclude((localctx._id===null ? null : this._input.getText(new antlr4.Interval(localctx._id.start,localctx._id.stop)))) 
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
	         const nodes = [] 
	        this.state = 63;
	        this.match(QMapParser.TRIPLE_DOT);
	        this.state = 64;
	        this.match(QMapParser.AMPERSAND);
	         nodes.push(astn.rootScope) 
	        this.state = 66;
	        localctx._id = this.id();
	         nodes.push((localctx._id===null ? null : this._input.getText(new antlr4.Interval(localctx._id.start,localctx._id.stop)))) 
	        this.state = 74;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===QMapParser.DOT) {
	            this.state = 68;
	            this.match(QMapParser.DOT);
	            this.state = 69;
	            localctx._id = this.id();
	             nodes.push((localctx._id===null ? null : this._input.getText(new antlr4.Interval(localctx._id.start,localctx._id.stop)))) 
	            this.state = 76;
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
	    this.enterRule(localctx, 12, QMapParser.RULE_scoped_spread);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	         const nodes = [] 
	        this.state = 80;
	        this.match(QMapParser.TRIPLE_DOT);
	        this.state = 92;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===QMapParser.STRING || _la===QMapParser.ID) {
	            this.state = 81;
	            localctx._id = this.id();
	             nodes.push((localctx._id===null ? null : this._input.getText(new antlr4.Interval(localctx._id.start,localctx._id.stop)))) 
	            this.state = 89;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===QMapParser.DOT) {
	                this.state = 83;
	                this.match(QMapParser.DOT);
	                this.state = 84;
	                localctx._id = this.id();
	                 nodes.push((localctx._id===null ? null : this._input.getText(new antlr4.Interval(localctx._id.start,localctx._id.stop)))) 
	                this.state = 91;
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
	    this.enterRule(localctx, 14, QMapParser.RULE_spread);
	    try {
	        this.state = 102;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 96;
	            localctx._global_spread = this.global_spread();
	             localctx.node = localctx._global_spread.node 
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 99;
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



	param() {
	    let localctx = new ParamContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, QMapParser.RULE_param);
	    try {
	        this.state = 110;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case QMapParser.AT:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 104;
	            this.match(QMapParser.AT);
	            this.state = 105;
	            localctx._ID = this.match(QMapParser.ID);
	             localctx.node = new astn.Var((localctx._ID===null ? null : localctx._ID.text)) 
	            break;
	        case QMapParser.LEFT_BRACKET:
	        case QMapParser.STRING:
	        case QMapParser.ID:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 107;
	            localctx._stm = this.stm();
	             localctx.node = localctx._stm.node 
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
	    this.enterRule(localctx, 18, QMapParser.RULE_params);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	         const nodes = [] 

	        this.state = 113;
	        localctx._param = this.param();
	         nodes.push(localctx._param.node) 
	        this.state = 121;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===QMapParser.COMMA) {
	            this.state = 115;
	            this.match(QMapParser.COMMA);
	            this.state = 116;
	            localctx._param = this.param();
	             nodes.push(localctx._param.node) 
	            this.state = 123;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        localctx.nodes = nodes
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
	    this.enterRule(localctx, 20, QMapParser.RULE_query);
	    try {
	        this.state = 138;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,10,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 126;
	            localctx._stm = this.stm();
	            localctx.node = localctx._stm.node
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 129;
	            localctx._exclude = this.exclude();
	            localctx.node = localctx._exclude.node
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 132;
	            localctx._spread = this.spread();
	            localctx.node = localctx._spread.node
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 135;
	            localctx._field_rename = this.field_rename();
	            localctx.node = localctx._field_rename.node
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
	    this.enterRule(localctx, 22, QMapParser.RULE_query_list);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);

	            const nodes = []
	            

	        this.state = 141;
	        localctx._query = this.query();
	        nodes.push(localctx._query.node)
	        this.state = 149;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,11,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 143;
	                this.match(QMapParser.COMMA);
	                this.state = 144;
	                localctx._query = this.query();
	                nodes.push(localctx._query.node) 
	            }
	            this.state = 151;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,11,this._ctx);
	        }

	        this.state = 153;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===QMapParser.COMMA) {
	            this.state = 152;
	            this.match(QMapParser.COMMA);
	        }

	        localctx.nodes = nodes
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
	    this.enterRule(localctx, 24, QMapParser.RULE_obj_ref);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        const ids = []
	        this.state = 158;
	        localctx._id = this.id();
	        ids.push((localctx._id===null ? null : this._input.getText(new antlr4.Interval(localctx._id.start,localctx._id.stop))))
	        this.state = 166;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===QMapParser.DOT) {
	            this.state = 160;
	            this.match(QMapParser.DOT);
	            this.state = 161;
	            localctx._id = this.id();
	            ids.push((localctx._id===null ? null : this._input.getText(new antlr4.Interval(localctx._id.start,localctx._id.stop))))
	            this.state = 168;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        localctx.ids = ids
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
	    this.enterRule(localctx, 26, QMapParser.RULE_field);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 171;
	        localctx._obj_ref = this.obj_ref();
	         localctx.node = new astn.Field(localctx._obj_ref.ids, null) 
	        this.state = 178;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===QMapParser.LEFT_BRACE) {
	            this.state = 173;
	            this.match(QMapParser.LEFT_BRACE);
	            this.state = 174;
	            localctx._query_list = this.query_list();
	            this.state = 175;
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
	    this.enterRule(localctx, 28, QMapParser.RULE_field_rename);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 180;
	        localctx._id = this.id();
	        this.state = 181;
	        this.match(QMapParser.COLON);
	        this.state = 182;
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
	    this.enterRule(localctx, 30, QMapParser.RULE_fn);
	    try {
	        this.state = 199;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case QMapParser.ID:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 185;
	            localctx._ID = this.match(QMapParser.ID);
	            this.state = 186;
	            this.match(QMapParser.LEFT_PAREN);
	            this.state = 187;
	            localctx._params = this.params();
	            this.state = 188;
	            this.match(QMapParser.RIGHT_PAREN);
	             localctx.node = new astn.Function((localctx._ID===null ? null : localctx._ID.text), localctx._params.nodes, false) 
	            break;
	        case QMapParser.LEFT_BRACKET:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 191;
	            this.match(QMapParser.LEFT_BRACKET);
	            this.state = 192;
	            localctx._ID = this.match(QMapParser.ID);
	            this.state = 193;
	            this.match(QMapParser.LEFT_PAREN);
	            this.state = 194;
	            localctx._params = this.params();
	            this.state = 195;
	            this.match(QMapParser.RIGHT_PAREN);
	            this.state = 196;
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
	    this.enterRule(localctx, 32, QMapParser.RULE_client_function);
	    try {
	        this.state = 217;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case QMapParser.ID:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 201;
	            localctx._ID = this.match(QMapParser.ID);
	            this.state = 202;
	            this.match(QMapParser.EX_MARK);
	            this.state = 203;
	            this.match(QMapParser.LEFT_PAREN);
	            this.state = 204;
	            localctx._params = this.params();
	            this.state = 205;
	            this.match(QMapParser.RIGHT_PAREN);
	             localctx.node = new astn.Function((localctx._ID===null ? null : localctx._ID.text), localctx._params.nodes, true) 
	            break;
	        case QMapParser.LEFT_BRACKET:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 208;
	            this.match(QMapParser.LEFT_BRACKET);
	            this.state = 209;
	            localctx._ID = this.match(QMapParser.ID);
	            this.state = 210;
	            this.match(QMapParser.EX_MARK);
	            this.state = 211;
	            this.match(QMapParser.LEFT_PAREN);
	            this.state = 212;
	            localctx._params = this.params();
	            this.state = 213;
	            this.match(QMapParser.RIGHT_PAREN);
	            this.state = 214;
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
QMapParser.RULE_param = 8;
QMapParser.RULE_params = 9;
QMapParser.RULE_query = 10;
QMapParser.RULE_query_list = 11;
QMapParser.RULE_obj_ref = 12;
QMapParser.RULE_field = 13;
QMapParser.RULE_field_rename = 14;
QMapParser.RULE_fn = 15;
QMapParser.RULE_client_function = 16;

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
        this._field = null; // FieldContext
        this._fn = null; // FnContext
        this._client_function = null; // Client_functionContext
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
        this._id = null; // IdContext
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
        this.node = null
        this._id = null; // IdContext
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
        this.node = null
        this._id = null; // IdContext
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
        this._global_spread = null; // Global_spreadContext
        this._scoped_spread = null; // Scoped_spreadContext
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
        this._ID = null; // Token
        this._stm = null; // StmContext
    }

	AT() {
	    return this.getToken(QMapParser.AT, 0);
	};

	ID() {
	    return this.getToken(QMapParser.ID, 0);
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
        this._param = null; // ParamContext
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
        this._stm = null; // StmContext
        this._exclude = null; // ExcludeContext
        this._spread = null; // SpreadContext
        this._field_rename = null; // Field_renameContext
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
        this._id = null; // IdContext
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
QMapParser.ParamContext = ParamContext; 
QMapParser.ParamsContext = ParamsContext; 
QMapParser.QueryContext = QueryContext; 
QMapParser.Query_listContext = Query_listContext; 
QMapParser.Obj_refContext = Obj_refContext; 
QMapParser.FieldContext = FieldContext; 
QMapParser.Field_renameContext = Field_renameContext; 
QMapParser.FnContext = FnContext; 
QMapParser.Client_functionContext = Client_functionContext; 
