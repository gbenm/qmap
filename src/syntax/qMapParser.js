// Generated from /home/gbenm/code/pumkat/qmap/antlr4/qMap.g4 by ANTLR 4.9.3
// jshint ignore: start
import antlr4 from 'antlr4';

import * as astn from "../compiler"


const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0003\u0014\u00e7\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010",
    "\t\u0010\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0003\u0002\u0003\u0002",
    "\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0005\u0002+\n\u0002",
    "\u0003\u0002\u0005\u0002.\n\u0002\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0005\u00033\n\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0005\u00049\n\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0005\u0005",
    "D\n\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0007\u0007T\n\u0007\f\u0007\u000e",
    "\u0007W\u000b\u0007\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003\b",
    "\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0007\bc\n\b\f\b\u000e\bf\u000b",
    "\b\u0005\bh\n\b\u0003\b\u0003\b\u0003\t\u0003\t\u0003\t\u0003\t\u0003",
    "\t\u0003\t\u0005\tr\n\t\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003",
    "\n\u0005\nz\n\n\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003",
    "\u000b\u0003\u000b\u0003\u000b\u0007\u000b\u0083\n\u000b\f\u000b\u000e",
    "\u000b\u0086\u000b\u000b\u0003\u000b\u0003\u000b\u0003\f\u0003\f\u0003",
    "\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003",
    "\f\u0005\f\u0096\n\f\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r",
    "\u0003\r\u0007\r\u009f\n\r\f\r\u000e\r\u00a2\u000b\r\u0003\r\u0005\r",
    "\u00a5\n\r\u0003\r\u0003\r\u0003\u000e\u0003\u000e\u0003\u000e\u0003",
    "\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0007\u000e\u00b0\n\u000e",
    "\f\u000e\u000e\u000e\u00b3\u000b\u000e\u0003\u000e\u0003\u000e\u0003",
    "\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003",
    "\u000f\u0005\u000f\u00be\n\u000f\u0003\u0010\u0003\u0010\u0003\u0010",
    "\u0003\u0010\u0003\u0010\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011",
    "\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011",
    "\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0005\u0011\u00d3\n",
    "\u0011\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003",
    "\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003",
    "\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0005\u0012\u00e5",
    "\n\u0012\u0003\u0012\u0002\u0002\u0013\u0002\u0004\u0006\b\n\f\u000e",
    "\u0010\u0012\u0014\u0016\u0018\u001a\u001c\u001e \"\u0002\u0002\u0002",
    "\u00ea\u0002$\u0003\u0002\u0002\u0002\u00042\u0003\u0002\u0002\u0002",
    "\u00068\u0003\u0002\u0002\u0002\bC\u0003\u0002\u0002\u0002\nE\u0003",
    "\u0002\u0002\u0002\fI\u0003\u0002\u0002\u0002\u000eZ\u0003\u0002\u0002",
    "\u0002\u0010q\u0003\u0002\u0002\u0002\u0012y\u0003\u0002\u0002\u0002",
    "\u0014{\u0003\u0002\u0002\u0002\u0016\u0095\u0003\u0002\u0002\u0002",
    "\u0018\u0097\u0003\u0002\u0002\u0002\u001a\u00a8\u0003\u0002\u0002\u0002",
    "\u001c\u00b6\u0003\u0002\u0002\u0002\u001e\u00bf\u0003\u0002\u0002\u0002",
    " \u00d2\u0003\u0002\u0002\u0002\"\u00e4\u0003\u0002\u0002\u0002$%\u0005",
    "\u0004\u0003\u0002%-\b\u0002\u0001\u0002&*\u0007\u0006\u0002\u0002\'",
    "(\u0005\u0018\r\u0002()\b\u0002\u0001\u0002)+\u0003\u0002\u0002\u0002",
    "*\'\u0003\u0002\u0002\u0002*+\u0003\u0002\u0002\u0002+,\u0003\u0002",
    "\u0002\u0002,.\u0007\u0007\u0002\u0002-&\u0003\u0002\u0002\u0002-.\u0003",
    "\u0002\u0002\u0002.\u0003\u0003\u0002\u0002\u0002/0\u0005\u0006\u0004",
    "\u000201\b\u0003\u0001\u000213\u0003\u0002\u0002\u00022/\u0003\u0002",
    "\u0002\u000223\u0003\u0002\u0002\u00023\u0005\u0003\u0002\u0002\u0002",
    "45\u0007\u0011\u0002\u000259\b\u0004\u0001\u000267\u0007\u0010\u0002",
    "\u000279\b\u0004\u0001\u000284\u0003\u0002\u0002\u000286\u0003\u0002",
    "\u0002\u00029\u0007\u0003\u0002\u0002\u0002:;\u0005\u001c\u000f\u0002",
    ";<\b\u0005\u0001\u0002<D\u0003\u0002\u0002\u0002=>\u0005 \u0011\u0002",
    ">?\b\u0005\u0001\u0002?D\u0003\u0002\u0002\u0002@A\u0005\"\u0012\u0002",
    "AB\b\u0005\u0001\u0002BD\u0003\u0002\u0002\u0002C:\u0003\u0002\u0002",
    "\u0002C=\u0003\u0002\u0002\u0002C@\u0003\u0002\u0002\u0002D\t\u0003",
    "\u0002\u0002\u0002EF\u0007\b\u0002\u0002FG\u0005\u0006\u0004\u0002G",
    "H\b\u0006\u0001\u0002H\u000b\u0003\u0002\u0002\u0002IJ\b\u0007\u0001",
    "\u0002JK\u0007\u000b\u0002\u0002KL\u0007\u000f\u0002\u0002LM\b\u0007",
    "\u0001\u0002MN\u0005\u0006\u0004\u0002NU\b\u0007\u0001\u0002OP\u0007",
    "\f\u0002\u0002PQ\u0005\u0006\u0004\u0002QR\b\u0007\u0001\u0002RT\u0003",
    "\u0002\u0002\u0002SO\u0003\u0002\u0002\u0002TW\u0003\u0002\u0002\u0002",
    "US\u0003\u0002\u0002\u0002UV\u0003\u0002\u0002\u0002VX\u0003\u0002\u0002",
    "\u0002WU\u0003\u0002\u0002\u0002XY\b\u0007\u0001\u0002Y\r\u0003\u0002",
    "\u0002\u0002Z[\b\b\u0001\u0002[g\u0007\u000b\u0002\u0002\\]\u0005\u0006",
    "\u0004\u0002]d\b\b\u0001\u0002^_\u0007\f\u0002\u0002_`\u0005\u0006\u0004",
    "\u0002`a\b\b\u0001\u0002ac\u0003\u0002\u0002\u0002b^\u0003\u0002\u0002",
    "\u0002cf\u0003\u0002\u0002\u0002db\u0003\u0002\u0002\u0002de\u0003\u0002",
    "\u0002\u0002eh\u0003\u0002\u0002\u0002fd\u0003\u0002\u0002\u0002g\\",
    "\u0003\u0002\u0002\u0002gh\u0003\u0002\u0002\u0002hi\u0003\u0002\u0002",
    "\u0002ij\b\b\u0001\u0002j\u000f\u0003\u0002\u0002\u0002kl\u0005\f\u0007",
    "\u0002lm\b\t\u0001\u0002mr\u0003\u0002\u0002\u0002no\u0005\u000e\b\u0002",
    "op\b\t\u0001\u0002pr\u0003\u0002\u0002\u0002qk\u0003\u0002\u0002\u0002",
    "qn\u0003\u0002\u0002\u0002r\u0011\u0003\u0002\u0002\u0002st\u0007\u0003",
    "\u0002\u0002tu\u0007\u0011\u0002\u0002uz\b\n\u0001\u0002vw\u0005\b\u0005",
    "\u0002wx\b\n\u0001\u0002xz\u0003\u0002\u0002\u0002ys\u0003\u0002\u0002",
    "\u0002yv\u0003\u0002\u0002\u0002z\u0013\u0003\u0002\u0002\u0002{|\b",
    "\u000b\u0001\u0002|}\u0005\u0012\n\u0002}\u0084\b\u000b\u0001\u0002",
    "~\u007f\u0007\n\u0002\u0002\u007f\u0080\u0005\u0012\n\u0002\u0080\u0081",
    "\b\u000b\u0001\u0002\u0081\u0083\u0003\u0002\u0002\u0002\u0082~\u0003",
    "\u0002\u0002\u0002\u0083\u0086\u0003\u0002\u0002\u0002\u0084\u0082\u0003",
    "\u0002\u0002\u0002\u0084\u0085\u0003\u0002\u0002\u0002\u0085\u0087\u0003",
    "\u0002\u0002\u0002\u0086\u0084\u0003\u0002\u0002\u0002\u0087\u0088\b",
    "\u000b\u0001\u0002\u0088\u0015\u0003\u0002\u0002\u0002\u0089\u008a\u0005",
    "\b\u0005\u0002\u008a\u008b\b\f\u0001\u0002\u008b\u0096\u0003\u0002\u0002",
    "\u0002\u008c\u008d\u0005\n\u0006\u0002\u008d\u008e\b\f\u0001\u0002\u008e",
    "\u0096\u0003\u0002\u0002\u0002\u008f\u0090\u0005\u0010\t\u0002\u0090",
    "\u0091\b\f\u0001\u0002\u0091\u0096\u0003\u0002\u0002\u0002\u0092\u0093",
    "\u0005\u001e\u0010\u0002\u0093\u0094\b\f\u0001\u0002\u0094\u0096\u0003",
    "\u0002\u0002\u0002\u0095\u0089\u0003\u0002\u0002\u0002\u0095\u008c\u0003",
    "\u0002\u0002\u0002\u0095\u008f\u0003\u0002\u0002\u0002\u0095\u0092\u0003",
    "\u0002\u0002\u0002\u0096\u0017\u0003\u0002\u0002\u0002\u0097\u0098\b",
    "\r\u0001\u0002\u0098\u0099\u0005\u0016\f\u0002\u0099\u00a0\b\r\u0001",
    "\u0002\u009a\u009b\u0007\n\u0002\u0002\u009b\u009c\u0005\u0016\f\u0002",
    "\u009c\u009d\b\r\u0001\u0002\u009d\u009f\u0003\u0002\u0002\u0002\u009e",
    "\u009a\u0003\u0002\u0002\u0002\u009f\u00a2\u0003\u0002\u0002\u0002\u00a0",
    "\u009e\u0003\u0002\u0002\u0002\u00a0\u00a1\u0003\u0002\u0002\u0002\u00a1",
    "\u00a4\u0003\u0002\u0002\u0002\u00a2\u00a0\u0003\u0002\u0002\u0002\u00a3",
    "\u00a5\u0007\n\u0002\u0002\u00a4\u00a3\u0003\u0002\u0002\u0002\u00a4",
    "\u00a5\u0003\u0002\u0002\u0002\u00a5\u00a6\u0003\u0002\u0002\u0002\u00a6",
    "\u00a7\b\r\u0001\u0002\u00a7\u0019\u0003\u0002\u0002\u0002\u00a8\u00a9",
    "\b\u000e\u0001\u0002\u00a9\u00aa\u0005\u0006\u0004\u0002\u00aa\u00b1",
    "\b\u000e\u0001\u0002\u00ab\u00ac\u0007\f\u0002\u0002\u00ac\u00ad\u0005",
    "\u0006\u0004\u0002\u00ad\u00ae\b\u000e\u0001\u0002\u00ae\u00b0\u0003",
    "\u0002\u0002\u0002\u00af\u00ab\u0003\u0002\u0002\u0002\u00b0\u00b3\u0003",
    "\u0002\u0002\u0002\u00b1\u00af\u0003\u0002\u0002\u0002\u00b1\u00b2\u0003",
    "\u0002\u0002\u0002\u00b2\u00b4\u0003\u0002\u0002\u0002\u00b3\u00b1\u0003",
    "\u0002\u0002\u0002\u00b4\u00b5\b\u000e\u0001\u0002\u00b5\u001b\u0003",
    "\u0002\u0002\u0002\u00b6\u00b7\u0005\u001a\u000e\u0002\u00b7\u00bd\b",
    "\u000f\u0001\u0002\u00b8\u00b9\u0007\u0006\u0002\u0002\u00b9\u00ba\u0005",
    "\u0018\r\u0002\u00ba\u00bb\u0007\u0007\u0002\u0002\u00bb\u00bc\b\u000f",
    "\u0001\u0002\u00bc\u00be\u0003\u0002\u0002\u0002\u00bd\u00b8\u0003\u0002",
    "\u0002\u0002\u00bd\u00be\u0003\u0002\u0002\u0002\u00be\u001d\u0003\u0002",
    "\u0002\u0002\u00bf\u00c0\u0005\u0006\u0004\u0002\u00c0\u00c1\u0007\t",
    "\u0002\u0002\u00c1\u00c2\u0005\b\u0005\u0002\u00c2\u00c3\b\u0010\u0001",
    "\u0002\u00c3\u001f\u0003\u0002\u0002\u0002\u00c4\u00c5\u0007\u0011\u0002",
    "\u0002\u00c5\u00c6\u0007\r\u0002\u0002\u00c6\u00c7\u0005\u0014\u000b",
    "\u0002\u00c7\u00c8\u0007\u000e\u0002\u0002\u00c8\u00c9\b\u0011\u0001",
    "\u0002\u00c9\u00d3\u0003\u0002\u0002\u0002\u00ca\u00cb\u0007\u0004\u0002",
    "\u0002\u00cb\u00cc\u0007\u0011\u0002\u0002\u00cc\u00cd\u0007\r\u0002",
    "\u0002\u00cd\u00ce\u0005\u0014\u000b\u0002\u00ce\u00cf\u0007\u000e\u0002",
    "\u0002\u00cf\u00d0\u0007\u0005\u0002\u0002\u00d0\u00d1\b\u0011\u0001",
    "\u0002\u00d1\u00d3\u0003\u0002\u0002\u0002\u00d2\u00c4\u0003\u0002\u0002",
    "\u0002\u00d2\u00ca\u0003\u0002\u0002\u0002\u00d3!\u0003\u0002\u0002",
    "\u0002\u00d4\u00d5\u0007\u0011\u0002\u0002\u00d5\u00d6\u0007\b\u0002",
    "\u0002\u00d6\u00d7\u0007\r\u0002\u0002\u00d7\u00d8\u0005\u0014\u000b",
    "\u0002\u00d8\u00d9\u0007\u000e\u0002\u0002\u00d9\u00da\b\u0012\u0001",
    "\u0002\u00da\u00e5\u0003\u0002\u0002\u0002\u00db\u00dc\u0007\u0004\u0002",
    "\u0002\u00dc\u00dd\u0007\u0011\u0002\u0002\u00dd\u00de\u0007\b\u0002",
    "\u0002\u00de\u00df\u0007\r\u0002\u0002\u00df\u00e0\u0005\u0014\u000b",
    "\u0002\u00e0\u00e1\u0007\u000e\u0002\u0002\u00e1\u00e2\u0007\u0005\u0002",
    "\u0002\u00e2\u00e3\b\u0012\u0001\u0002\u00e3\u00e5\u0003\u0002\u0002",
    "\u0002\u00e4\u00d4\u0003\u0002\u0002\u0002\u00e4\u00db\u0003\u0002\u0002",
    "\u0002\u00e5#\u0003\u0002\u0002\u0002\u0014*-28CUdgqy\u0084\u0095\u00a0",
    "\u00a4\u00b1\u00bd\u00d2\u00e4"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class qMapParser extends antlr4.Parser {

    static grammarFileName = "qMap.g4";
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
	        this.state = 34;
	        localctx._optional_id = this.optional_id();
	         localctx.root = new astn.Root(localctx._optional_id.text, null) 
	        this.state = 43;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===qMapParser.LEFT_BRACE) {
	            this.state = 36;
	            this.match(qMapParser.LEFT_BRACE);
	            this.state = 40;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << qMapParser.LEFT_BRACKET) | (1 << qMapParser.EX_MARK) | (1 << qMapParser.TRIPLE_DOT) | (1 << qMapParser.STRING) | (1 << qMapParser.ID))) !== 0)) {
	                this.state = 37;
	                localctx._query_list = this.query_list();
	                localctx.root = new astn.Root(localctx._optional_id.text, localctx._query_list.nodes) 
	            }

	            this.state = 42;
	            this.match(qMapParser.RIGHT_BRACE);
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
	        this.state = 48;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===qMapParser.STRING || _la===qMapParser.ID) {
	            this.state = 45;
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
	        this.state = 54;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case qMapParser.ID:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 50;
	            localctx._ID = this.match(qMapParser.ID);
	             localctx.text = (localctx._ID===null ? null : localctx._ID.text) 
	            break;
	        case qMapParser.STRING:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 52;
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
	        this.state = 65;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 56;
	            localctx._field = this.field();
	            localctx.node = localctx._field.node
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 59;
	            localctx._fn = this.fn();
	             localctx.node = localctx._fn.node 
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 62;
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
	    this.enterRule(localctx, 8, qMapParser.RULE_exclude);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 67;
	        this.match(qMapParser.EX_MARK);
	        this.state = 68;
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
	        this.state = 72;
	        this.match(qMapParser.TRIPLE_DOT);
	        this.state = 73;
	        this.match(qMapParser.AMPERSAND);
	         nodes.push(astn.rootScope) 
	        this.state = 75;
	        localctx._id = this.id();
	         nodes.push(localctx._id.text) 
	        this.state = 83;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===qMapParser.DOT) {
	            this.state = 77;
	            this.match(qMapParser.DOT);
	            this.state = 78;
	            localctx._id = this.id();
	             nodes.push(localctx._id.text) 
	            this.state = 85;
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
	        this.state = 89;
	        this.match(qMapParser.TRIPLE_DOT);
	        this.state = 101;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===qMapParser.STRING || _la===qMapParser.ID) {
	            this.state = 90;
	            localctx._id = this.id();
	             nodes.push(localctx._id.text) 
	            this.state = 98;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===qMapParser.DOT) {
	                this.state = 92;
	                this.match(qMapParser.DOT);
	                this.state = 93;
	                localctx._id = this.id();
	                 nodes.push(localctx._id.text) 
	                this.state = 100;
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
	        this.state = 111;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 105;
	            localctx._global_spread = this.global_spread();
	             localctx.node = localctx._global_spread.node 
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 108;
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
	    this.enterRule(localctx, 16, qMapParser.RULE_param);
	    try {
	        this.state = 119;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case qMapParser.AT:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 113;
	            this.match(qMapParser.AT);
	            this.state = 114;
	            localctx._ID = this.match(qMapParser.ID);
	             localctx.node = new astn.Var((localctx._ID===null ? null : localctx._ID.text)) 
	            break;
	        case qMapParser.LEFT_BRACKET:
	        case qMapParser.STRING:
	        case qMapParser.ID:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 116;
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
	    this.enterRule(localctx, 18, qMapParser.RULE_params);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	         const nodes = [] 

	        this.state = 122;
	        localctx._param = this.param();
	         nodes.push(localctx._param.node) 
	        this.state = 130;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===qMapParser.COMMA) {
	            this.state = 124;
	            this.match(qMapParser.COMMA);
	            this.state = 125;
	            localctx._param = this.param();
	             nodes.push(localctx._param.node) 
	            this.state = 132;
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
	    this.enterRule(localctx, 20, qMapParser.RULE_query);
	    try {
	        this.state = 147;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,11,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 135;
	            localctx._stm = this.stm();
	            localctx.node = localctx._stm.node
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 138;
	            localctx._exclude = this.exclude();
	            localctx.node = localctx._exclude.node
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 141;
	            localctx._spread = this.spread();
	            localctx.node = localctx._spread.node
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 144;
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
	    this.enterRule(localctx, 22, qMapParser.RULE_query_list);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);

	            const nodes = []
	            

	        this.state = 150;
	        localctx._query = this.query();
	        nodes.push(localctx._query.node)
	        this.state = 158;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,12,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 152;
	                this.match(qMapParser.COMMA);
	                this.state = 153;
	                localctx._query = this.query();
	                nodes.push(localctx._query.node) 
	            }
	            this.state = 160;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,12,this._ctx);
	        }

	        this.state = 162;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===qMapParser.COMMA) {
	            this.state = 161;
	            this.match(qMapParser.COMMA);
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
	    this.enterRule(localctx, 24, qMapParser.RULE_obj_ref);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        const ids = []
	        this.state = 167;
	        localctx._id = this.id();
	        ids.push(localctx._id.text)
	        this.state = 175;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===qMapParser.DOT) {
	            this.state = 169;
	            this.match(qMapParser.DOT);
	            this.state = 170;
	            localctx._id = this.id();
	            ids.push(localctx._id.text)
	            this.state = 177;
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
	    this.enterRule(localctx, 26, qMapParser.RULE_field);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 180;
	        localctx._obj_ref = this.obj_ref();
	         localctx.node = new astn.Field(localctx._obj_ref.ids, null) 
	        this.state = 187;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===qMapParser.LEFT_BRACE) {
	            this.state = 182;
	            this.match(qMapParser.LEFT_BRACE);
	            this.state = 183;
	            localctx._query_list = this.query_list();
	            this.state = 184;
	            this.match(qMapParser.RIGHT_BRACE);
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
	    this.enterRule(localctx, 28, qMapParser.RULE_field_rename);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 189;
	        localctx._id = this.id();
	        this.state = 190;
	        this.match(qMapParser.COLON);
	        this.state = 191;
	        localctx._stm = this.stm();
	         localctx.node = new astn.Rename(localctx._id.text, localctx._stm.node) 
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
	    this.enterRule(localctx, 30, qMapParser.RULE_fn);
	    try {
	        this.state = 208;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case qMapParser.ID:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 194;
	            localctx._ID = this.match(qMapParser.ID);
	            this.state = 195;
	            this.match(qMapParser.LEFT_PAREN);
	            this.state = 196;
	            localctx._params = this.params();
	            this.state = 197;
	            this.match(qMapParser.RIGHT_PAREN);
	             localctx.node = new astn.Function((localctx._ID===null ? null : localctx._ID.text), localctx._params.nodes, false) 
	            break;
	        case qMapParser.LEFT_BRACKET:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 200;
	            this.match(qMapParser.LEFT_BRACKET);
	            this.state = 201;
	            localctx._ID = this.match(qMapParser.ID);
	            this.state = 202;
	            this.match(qMapParser.LEFT_PAREN);
	            this.state = 203;
	            localctx._params = this.params();
	            this.state = 204;
	            this.match(qMapParser.RIGHT_PAREN);
	            this.state = 205;
	            this.match(qMapParser.RIGHT_BRACKET);
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
	    this.enterRule(localctx, 32, qMapParser.RULE_client_function);
	    try {
	        this.state = 226;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case qMapParser.ID:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 210;
	            localctx._ID = this.match(qMapParser.ID);
	            this.state = 211;
	            this.match(qMapParser.EX_MARK);
	            this.state = 212;
	            this.match(qMapParser.LEFT_PAREN);
	            this.state = 213;
	            localctx._params = this.params();
	            this.state = 214;
	            this.match(qMapParser.RIGHT_PAREN);
	             localctx.node = new astn.Function((localctx._ID===null ? null : localctx._ID.text), localctx._params.nodes, true) 
	            break;
	        case qMapParser.LEFT_BRACKET:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 217;
	            this.match(qMapParser.LEFT_BRACKET);
	            this.state = 218;
	            localctx._ID = this.match(qMapParser.ID);
	            this.state = 219;
	            this.match(qMapParser.EX_MARK);
	            this.state = 220;
	            this.match(qMapParser.LEFT_PAREN);
	            this.state = 221;
	            localctx._params = this.params();
	            this.state = 222;
	            this.match(qMapParser.RIGHT_PAREN);
	            this.state = 223;
	            this.match(qMapParser.RIGHT_BRACKET);
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

qMapParser.EOF = antlr4.Token.EOF;
qMapParser.AT = 1;
qMapParser.LEFT_BRACKET = 2;
qMapParser.RIGHT_BRACKET = 3;
qMapParser.LEFT_BRACE = 4;
qMapParser.RIGHT_BRACE = 5;
qMapParser.EX_MARK = 6;
qMapParser.COLON = 7;
qMapParser.COMMA = 8;
qMapParser.TRIPLE_DOT = 9;
qMapParser.DOT = 10;
qMapParser.LEFT_PAREN = 11;
qMapParser.RIGHT_PAREN = 12;
qMapParser.AMPERSAND = 13;
qMapParser.STRING = 14;
qMapParser.ID = 15;
qMapParser.WS = 16;
qMapParser.BLOCK_COMMENT = 17;
qMapParser.LINE_COMMENT = 18;

qMapParser.RULE_start = 0;
qMapParser.RULE_optional_id = 1;
qMapParser.RULE_id = 2;
qMapParser.RULE_stm = 3;
qMapParser.RULE_exclude = 4;
qMapParser.RULE_global_spread = 5;
qMapParser.RULE_scoped_spread = 6;
qMapParser.RULE_spread = 7;
qMapParser.RULE_param = 8;
qMapParser.RULE_params = 9;
qMapParser.RULE_query = 10;
qMapParser.RULE_query_list = 11;
qMapParser.RULE_obj_ref = 12;
qMapParser.RULE_field = 13;
qMapParser.RULE_field_rename = 14;
qMapParser.RULE_fn = 15;
qMapParser.RULE_client_function = 16;

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
        this.root = null
        this._optional_id = null; // Optional_idContext
        this._query_list = null; // Query_listContext
    }

	optional_id() {
	    return this.getTypedRuleContext(Optional_idContext,0);
	};

	LEFT_BRACE() {
	    return this.getToken(qMapParser.LEFT_BRACE, 0);
	};

	RIGHT_BRACE() {
	    return this.getToken(qMapParser.RIGHT_BRACE, 0);
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
        this.ruleIndex = qMapParser.RULE_param;
        this.node = null
        this._ID = null; // Token
        this._stm = null; // StmContext
    }

	AT() {
	    return this.getToken(qMapParser.AT, 0);
	};

	ID() {
	    return this.getToken(qMapParser.ID, 0);
	};

	stm() {
	    return this.getTypedRuleContext(StmContext,0);
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

	LEFT_BRACE() {
	    return this.getToken(qMapParser.LEFT_BRACE, 0);
	};

	query_list() {
	    return this.getTypedRuleContext(Query_listContext,0);
	};

	RIGHT_BRACE() {
	    return this.getToken(qMapParser.RIGHT_BRACE, 0);
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
        this.node = null
        this._id = null; // IdContext
        this._stm = null; // StmContext
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
        this.node = null
        this._ID = null; // Token
        this._params = null; // ParamsContext
    }

	ID() {
	    return this.getToken(qMapParser.ID, 0);
	};

	LEFT_PAREN() {
	    return this.getToken(qMapParser.LEFT_PAREN, 0);
	};

	params() {
	    return this.getTypedRuleContext(ParamsContext,0);
	};

	RIGHT_PAREN() {
	    return this.getToken(qMapParser.RIGHT_PAREN, 0);
	};

	LEFT_BRACKET() {
	    return this.getToken(qMapParser.LEFT_BRACKET, 0);
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
        this.node = null
        this._ID = null; // Token
        this._params = null; // ParamsContext
    }

	ID() {
	    return this.getToken(qMapParser.ID, 0);
	};

	EX_MARK() {
	    return this.getToken(qMapParser.EX_MARK, 0);
	};

	LEFT_PAREN() {
	    return this.getToken(qMapParser.LEFT_PAREN, 0);
	};

	params() {
	    return this.getTypedRuleContext(ParamsContext,0);
	};

	RIGHT_PAREN() {
	    return this.getToken(qMapParser.RIGHT_PAREN, 0);
	};

	LEFT_BRACKET() {
	    return this.getToken(qMapParser.LEFT_BRACKET, 0);
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
qMapParser.ParamContext = ParamContext; 
qMapParser.ParamsContext = ParamsContext; 
qMapParser.QueryContext = QueryContext; 
qMapParser.Query_listContext = Query_listContext; 
qMapParser.Obj_refContext = Obj_refContext; 
qMapParser.FieldContext = FieldContext; 
qMapParser.Field_renameContext = Field_renameContext; 
qMapParser.FnContext = FnContext; 
qMapParser.Client_functionContext = Client_functionContext; 
