// Generated from /home/gbenm/code/pumkat/qmap/antlr4/QMap.g4 by ANTLR 4.9.3
// jshint ignore: start
import antlr4 from 'antlr4';
import QMapListener from './QMapListener.js';

const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0003\u0014\u00d9\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010",
    "\t\u0010\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013",
    "\u0004\u0014\t\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017",
    "\t\u0017\u0004\u0018\t\u0018\u0004\u0019\t\u0019\u0003\u0002\u0003\u0002",
    "\u0003\u0002\u0005\u00026\n\u0002\u0003\u0002\u0005\u00029\n\u0002\u0003",
    "\u0003\u0005\u0003<\n\u0003\u0003\u0004\u0003\u0004\u0003\u0005\u0003",
    "\u0005\u0003\u0005\u0005\u0005C\n\u0005\u0003\u0006\u0003\u0006\u0003",
    "\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0007",
    "\u0007M\n\u0007\f\u0007\u000e\u0007P\u000b\u0007\u0003\b\u0003\b\u0005",
    "\bT\n\b\u0003\b\u0003\b\u0007\bX\n\b\f\b\u000e\b[\u000b\b\u0003\t\u0003",
    "\t\u0005\t_\n\t\u0003\n\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0005",
    "\u000bf\n\u000b\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\r\u0003",
    "\r\u0003\r\u0007\rp\n\r\f\r\u000e\rs\u000b\r\u0003\r\u0003\r\u0005\r",
    "w\n\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0007\r~\n\r\f\r\u000e",
    "\r\u0081\u000b\r\u0005\r\u0083\n\r\u0003\u000e\u0003\u000e\u0003\u000e",
    "\u0007\u000e\u0088\n\u000e\f\u000e\u000e\u000e\u008b\u000b\u000e\u0003",
    "\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0005\u000f\u0091\n\u000f",
    "\u0003\u0010\u0003\u0010\u0003\u0010\u0007\u0010\u0096\n\u0010\f\u0010",
    "\u000e\u0010\u0099\u000b\u0010\u0003\u0010\u0005\u0010\u009c\n\u0010",
    "\u0003\u0011\u0003\u0011\u0003\u0011\u0007\u0011\u00a1\n\u0011\f\u0011",
    "\u000e\u0011\u00a4\u000b\u0011\u0003\u0012\u0003\u0012\u0003\u0012\u0003",
    "\u0012\u0003\u0012\u0005\u0012\u00ab\n\u0012\u0003\u0013\u0003\u0013",
    "\u0003\u0013\u0003\u0013\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014",
    "\u0005\u0014\u00b5\n\u0014\u0003\u0014\u0003\u0014\u0003\u0015\u0003",
    "\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003",
    "\u0016\u0003\u0016\u0005\u0016\u00c2\n\u0016\u0003\u0017\u0003\u0017",
    "\u0003\u0017\u0003\u0017\u0003\u0017\u0005\u0017\u00c9\n\u0017\u0003",
    "\u0017\u0003\u0017\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003",
    "\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0019\u0003\u0019\u0005",
    "\u0019\u00d7\n\u0019\u0003\u0019\u0002\u0002\u001a\u0002\u0004\u0006",
    "\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u001c\u001e \"$&(*",
    ",.0\u0002\u0003\u0003\u0002\u0010\u0011\u0002\u00da\u00022\u0003\u0002",
    "\u0002\u0002\u0004;\u0003\u0002\u0002\u0002\u0006=\u0003\u0002\u0002",
    "\u0002\bB\u0003\u0002\u0002\u0002\nD\u0003\u0002\u0002\u0002\fG\u0003",
    "\u0002\u0002\u0002\u000eQ\u0003\u0002\u0002\u0002\u0010^\u0003\u0002",
    "\u0002\u0002\u0012`\u0003\u0002\u0002\u0002\u0014e\u0003\u0002\u0002",
    "\u0002\u0016g\u0003\u0002\u0002\u0002\u0018v\u0003\u0002\u0002\u0002",
    "\u001a\u0084\u0003\u0002\u0002\u0002\u001c\u0090\u0003\u0002\u0002\u0002",
    "\u001e\u0092\u0003\u0002\u0002\u0002 \u009d\u0003\u0002\u0002\u0002",
    "\"\u00a5\u0003\u0002\u0002\u0002$\u00ac\u0003\u0002\u0002\u0002&\u00b0",
    "\u0003\u0002\u0002\u0002(\u00b8\u0003\u0002\u0002\u0002*\u00c1\u0003",
    "\u0002\u0002\u0002,\u00c3\u0003\u0002\u0002\u0002.\u00cc\u0003\u0002",
    "\u0002\u00020\u00d6\u0003\u0002\u0002\u000228\u0005\u0004\u0003\u0002",
    "35\u0007\u0006\u0002\u000246\u0005\u001e\u0010\u000254\u0003\u0002\u0002",
    "\u000256\u0003\u0002\u0002\u000267\u0003\u0002\u0002\u000279\u0007\u0007",
    "\u0002\u000283\u0003\u0002\u0002\u000289\u0003\u0002\u0002\u00029\u0003",
    "\u0003\u0002\u0002\u0002:<\u0005\u0006\u0004\u0002;:\u0003\u0002\u0002",
    "\u0002;<\u0003\u0002\u0002\u0002<\u0005\u0003\u0002\u0002\u0002=>\t",
    "\u0002\u0002\u0002>\u0007\u0003\u0002\u0002\u0002?C\u0005\"\u0012\u0002",
    "@C\u0005*\u0016\u0002AC\u00050\u0019\u0002B?\u0003\u0002\u0002\u0002",
    "B@\u0003\u0002\u0002\u0002BA\u0003\u0002\u0002\u0002C\t\u0003\u0002",
    "\u0002\u0002DE\u0007\b\u0002\u0002EF\u0005\u0006\u0004\u0002F\u000b",
    "\u0003\u0002\u0002\u0002GH\u0007\u000b\u0002\u0002HI\u0007\u000f\u0002",
    "\u0002IN\u0005\u0006\u0004\u0002JK\u0007\f\u0002\u0002KM\u0005\u0006",
    "\u0004\u0002LJ\u0003\u0002\u0002\u0002MP\u0003\u0002\u0002\u0002NL\u0003",
    "\u0002\u0002\u0002NO\u0003\u0002\u0002\u0002O\r\u0003\u0002\u0002\u0002",
    "PN\u0003\u0002\u0002\u0002QS\u0007\u000b\u0002\u0002RT\u0005\u0006\u0004",
    "\u0002SR\u0003\u0002\u0002\u0002ST\u0003\u0002\u0002\u0002TY\u0003\u0002",
    "\u0002\u0002UV\u0007\f\u0002\u0002VX\u0005\u0006\u0004\u0002WU\u0003",
    "\u0002\u0002\u0002X[\u0003\u0002\u0002\u0002YW\u0003\u0002\u0002\u0002",
    "YZ\u0003\u0002\u0002\u0002Z\u000f\u0003\u0002\u0002\u0002[Y\u0003\u0002",
    "\u0002\u0002\\_\u0005\f\u0007\u0002]_\u0005\u000e\b\u0002^\\\u0003\u0002",
    "\u0002\u0002^]\u0003\u0002\u0002\u0002_\u0011\u0003\u0002\u0002\u0002",
    "`a\u0007\u0003\u0002\u0002ab\u0007\u0011\u0002\u0002b\u0013\u0003\u0002",
    "\u0002\u0002cf\u0005\u0012\n\u0002df\u0005\b\u0005\u0002ec\u0003\u0002",
    "\u0002\u0002ed\u0003\u0002\u0002\u0002f\u0015\u0003\u0002\u0002\u0002",
    "gh\u0007\u0003\u0002\u0002hi\u0007\u0004\u0002\u0002ij\u0005\u0014\u000b",
    "\u0002jk\u0007\u0005\u0002\u0002k\u0017\u0003\u0002\u0002\u0002lq\u0005",
    "\u0014\u000b\u0002mn\u0007\n\u0002\u0002np\u0005\u0014\u000b\u0002o",
    "m\u0003\u0002\u0002\u0002ps\u0003\u0002\u0002\u0002qo\u0003\u0002\u0002",
    "\u0002qr\u0003\u0002\u0002\u0002rt\u0003\u0002\u0002\u0002sq\u0003\u0002",
    "\u0002\u0002tu\u0007\n\u0002\u0002uw\u0003\u0002\u0002\u0002vl\u0003",
    "\u0002\u0002\u0002vw\u0003\u0002\u0002\u0002wx\u0003\u0002\u0002\u0002",
    "x\u0082\u0005\u0016\f\u0002yz\u0007\n\u0002\u0002z\u007f\u0005\u0014",
    "\u000b\u0002{|\u0007\n\u0002\u0002|~\u0005\u0014\u000b\u0002}{\u0003",
    "\u0002\u0002\u0002~\u0081\u0003\u0002\u0002\u0002\u007f}\u0003\u0002",
    "\u0002\u0002\u007f\u0080\u0003\u0002\u0002\u0002\u0080\u0083\u0003\u0002",
    "\u0002\u0002\u0081\u007f\u0003\u0002\u0002\u0002\u0082y\u0003\u0002",
    "\u0002\u0002\u0082\u0083\u0003\u0002\u0002\u0002\u0083\u0019\u0003\u0002",
    "\u0002\u0002\u0084\u0089\u0005\u0014\u000b\u0002\u0085\u0086\u0007\n",
    "\u0002\u0002\u0086\u0088\u0005\u0014\u000b\u0002\u0087\u0085\u0003\u0002",
    "\u0002\u0002\u0088\u008b\u0003\u0002\u0002\u0002\u0089\u0087\u0003\u0002",
    "\u0002\u0002\u0089\u008a\u0003\u0002\u0002\u0002\u008a\u001b\u0003\u0002",
    "\u0002\u0002\u008b\u0089\u0003\u0002\u0002\u0002\u008c\u0091\u0005\b",
    "\u0005\u0002\u008d\u0091\u0005\n\u0006\u0002\u008e\u0091\u0005\u0010",
    "\t\u0002\u008f\u0091\u0005$\u0013\u0002\u0090\u008c\u0003\u0002\u0002",
    "\u0002\u0090\u008d\u0003\u0002\u0002\u0002\u0090\u008e\u0003\u0002\u0002",
    "\u0002\u0090\u008f\u0003\u0002\u0002\u0002\u0091\u001d\u0003\u0002\u0002",
    "\u0002\u0092\u0097\u0005\u001c\u000f\u0002\u0093\u0094\u0007\n\u0002",
    "\u0002\u0094\u0096\u0005\u001c\u000f\u0002\u0095\u0093\u0003\u0002\u0002",
    "\u0002\u0096\u0099\u0003\u0002\u0002\u0002\u0097\u0095\u0003\u0002\u0002",
    "\u0002\u0097\u0098\u0003\u0002\u0002\u0002\u0098\u009b\u0003\u0002\u0002",
    "\u0002\u0099\u0097\u0003\u0002\u0002\u0002\u009a\u009c\u0007\n\u0002",
    "\u0002\u009b\u009a\u0003\u0002\u0002\u0002\u009b\u009c\u0003\u0002\u0002",
    "\u0002\u009c\u001f\u0003\u0002\u0002\u0002\u009d\u00a2\u0005\u0006\u0004",
    "\u0002\u009e\u009f\u0007\f\u0002\u0002\u009f\u00a1\u0005\u0006\u0004",
    "\u0002\u00a0\u009e\u0003\u0002\u0002\u0002\u00a1\u00a4\u0003\u0002\u0002",
    "\u0002\u00a2\u00a0\u0003\u0002\u0002\u0002\u00a2\u00a3\u0003\u0002\u0002",
    "\u0002\u00a3!\u0003\u0002\u0002\u0002\u00a4\u00a2\u0003\u0002\u0002",
    "\u0002\u00a5\u00aa\u0005 \u0011\u0002\u00a6\u00a7\u0007\u0006\u0002",
    "\u0002\u00a7\u00a8\u0005\u001e\u0010\u0002\u00a8\u00a9\u0007\u0007\u0002",
    "\u0002\u00a9\u00ab\u0003\u0002\u0002\u0002\u00aa\u00a6\u0003\u0002\u0002",
    "\u0002\u00aa\u00ab\u0003\u0002\u0002\u0002\u00ab#\u0003\u0002\u0002",
    "\u0002\u00ac\u00ad\u0005\u0006\u0004\u0002\u00ad\u00ae\u0007\t\u0002",
    "\u0002\u00ae\u00af\u0005\b\u0005\u0002\u00af%\u0003\u0002\u0002\u0002",
    "\u00b0\u00b1\u0007\u0011\u0002\u0002\u00b1\u00b4\u0007\r\u0002\u0002",
    "\u00b2\u00b5\u0005\u001a\u000e\u0002\u00b3\u00b5\u0005\u0018\r\u0002",
    "\u00b4\u00b2\u0003\u0002\u0002\u0002\u00b4\u00b3\u0003\u0002\u0002\u0002",
    "\u00b5\u00b6\u0003\u0002\u0002\u0002\u00b6\u00b7\u0007\u000e\u0002\u0002",
    "\u00b7\'\u0003\u0002\u0002\u0002\u00b8\u00b9\u0007\u0004\u0002\u0002",
    "\u00b9\u00ba\u0007\u0011\u0002\u0002\u00ba\u00bb\u0007\r\u0002\u0002",
    "\u00bb\u00bc\u0005\u001a\u000e\u0002\u00bc\u00bd\u0007\u000e\u0002\u0002",
    "\u00bd\u00be\u0007\u0005\u0002\u0002\u00be)\u0003\u0002\u0002\u0002",
    "\u00bf\u00c2\u0005&\u0014\u0002\u00c0\u00c2\u0005(\u0015\u0002\u00c1",
    "\u00bf\u0003\u0002\u0002\u0002\u00c1\u00c0\u0003\u0002\u0002\u0002\u00c2",
    "+\u0003\u0002\u0002\u0002\u00c3\u00c4\u0007\u0011\u0002\u0002\u00c4",
    "\u00c5\u0007\b\u0002\u0002\u00c5\u00c8\u0007\r\u0002\u0002\u00c6\u00c9",
    "\u0005\u001a\u000e\u0002\u00c7\u00c9\u0005\u0018\r\u0002\u00c8\u00c6",
    "\u0003\u0002\u0002\u0002\u00c8\u00c7\u0003\u0002\u0002\u0002\u00c9\u00ca",
    "\u0003\u0002\u0002\u0002\u00ca\u00cb\u0007\u000e\u0002\u0002\u00cb-",
    "\u0003\u0002\u0002\u0002\u00cc\u00cd\u0007\u0004\u0002\u0002\u00cd\u00ce",
    "\u0007\u0011\u0002\u0002\u00ce\u00cf\u0007\b\u0002\u0002\u00cf\u00d0",
    "\u0007\r\u0002\u0002\u00d0\u00d1\u0005\u001a\u000e\u0002\u00d1\u00d2",
    "\u0007\u000e\u0002\u0002\u00d2\u00d3\u0007\u0005\u0002\u0002\u00d3/",
    "\u0003\u0002\u0002\u0002\u00d4\u00d7\u0005,\u0017\u0002\u00d5\u00d7",
    "\u0005.\u0018\u0002\u00d6\u00d4\u0003\u0002\u0002\u0002\u00d6\u00d5",
    "\u0003\u0002\u0002\u0002\u00d71\u0003\u0002\u0002\u0002\u001958;BNS",
    "Y^eqv\u007f\u0082\u0089\u0090\u0097\u009b\u00a2\u00aa\u00b4\u00c1\u00c8",
    "\u00d6"].join("");


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
                         "param", "aparam", "aparams", "params", "query", 
                         "query_list", "obj_ref", "field", "field_rename", 
                         "normal_fn", "map_fn", "fn", "normal_client_fn", 
                         "map_client_fn", "client_fn" ];

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
	        this.state = 48;
	        this.optional_id();
	        this.state = 54;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===QMapParser.LEFT_BRACE) {
	            this.state = 49;
	            this.match(QMapParser.LEFT_BRACE);
	            this.state = 51;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << QMapParser.LEFT_BRACKET) | (1 << QMapParser.EX_MARK) | (1 << QMapParser.TRIPLE_DOT) | (1 << QMapParser.STRING) | (1 << QMapParser.ID))) !== 0)) {
	                this.state = 50;
	                this.query_list();
	            }

	            this.state = 53;
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
	        this.state = 57;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===QMapParser.STRING || _la===QMapParser.ID) {
	            this.state = 56;
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
	        this.state = 59;
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
	        this.state = 64;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 61;
	            this.field();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 62;
	            this.fn();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 63;
	            this.client_fn();
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
	        this.state = 66;
	        this.match(QMapParser.EX_MARK);
	        this.state = 67;
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
	        this.state = 69;
	        this.match(QMapParser.TRIPLE_DOT);
	        this.state = 70;
	        this.match(QMapParser.AMPERSAND);
	        this.state = 71;
	        this.id();
	        this.state = 76;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===QMapParser.DOT) {
	            this.state = 72;
	            this.match(QMapParser.DOT);
	            this.state = 73;
	            this.id();
	            this.state = 78;
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
	        this.state = 79;
	        this.match(QMapParser.TRIPLE_DOT);
	        this.state = 81;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===QMapParser.STRING || _la===QMapParser.ID) {
	            this.state = 80;
	            this.id();
	        }

	        this.state = 87;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===QMapParser.DOT) {
	            this.state = 83;
	            this.match(QMapParser.DOT);
	            this.state = 84;
	            this.id();
	            this.state = 89;
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
	        this.state = 92;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 90;
	            this.global_spread();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 91;
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
	        this.state = 94;
	        this.match(QMapParser.AT);
	        this.state = 95;
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
	        this.state = 99;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case QMapParser.AT:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 97;
	            this.variable();
	            break;
	        case QMapParser.LEFT_BRACKET:
	        case QMapParser.STRING:
	        case QMapParser.ID:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 98;
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



	aparam() {
	    let localctx = new AparamContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, QMapParser.RULE_aparam);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 101;
	        this.match(QMapParser.AT);
	        this.state = 102;
	        this.match(QMapParser.LEFT_BRACKET);
	        this.state = 103;
	        this.param();
	        this.state = 104;
	        this.match(QMapParser.RIGHT_BRACKET);
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



	aparams() {
	    let localctx = new AparamsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, QMapParser.RULE_aparams);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 116;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,10,this._ctx);
	        if(la_===1) {
	            this.state = 106;
	            this.param();
	            this.state = 111;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,9,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 107;
	                    this.match(QMapParser.COMMA);
	                    this.state = 108;
	                    this.param(); 
	                }
	                this.state = 113;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,9,this._ctx);
	            }

	            this.state = 114;
	            this.match(QMapParser.COMMA);

	        }
	        this.state = 118;
	        this.aparam();
	        this.state = 128;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===QMapParser.COMMA) {
	            this.state = 119;
	            this.match(QMapParser.COMMA);
	            this.state = 120;
	            this.param();
	            this.state = 125;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===QMapParser.COMMA) {
	                this.state = 121;
	                this.match(QMapParser.COMMA);
	                this.state = 122;
	                this.param();
	                this.state = 127;
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
	    this.enterRule(localctx, 24, QMapParser.RULE_params);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 130;
	        this.param();
	        this.state = 135;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===QMapParser.COMMA) {
	            this.state = 131;
	            this.match(QMapParser.COMMA);
	            this.state = 132;
	            this.param();
	            this.state = 137;
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
	    this.enterRule(localctx, 26, QMapParser.RULE_query);
	    try {
	        this.state = 142;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,14,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 138;
	            this.stm();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 139;
	            this.exclude();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 140;
	            this.spread();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 141;
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
	    this.enterRule(localctx, 28, QMapParser.RULE_query_list);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 144;
	        this.query();
	        this.state = 149;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,15,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 145;
	                this.match(QMapParser.COMMA);
	                this.state = 146;
	                this.query(); 
	            }
	            this.state = 151;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,15,this._ctx);
	        }

	        this.state = 153;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===QMapParser.COMMA) {
	            this.state = 152;
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
	    this.enterRule(localctx, 30, QMapParser.RULE_obj_ref);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 155;
	        this.id();
	        this.state = 160;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===QMapParser.DOT) {
	            this.state = 156;
	            this.match(QMapParser.DOT);
	            this.state = 157;
	            this.id();
	            this.state = 162;
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
	    this.enterRule(localctx, 32, QMapParser.RULE_field);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 163;
	        this.obj_ref();
	        this.state = 168;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===QMapParser.LEFT_BRACE) {
	            this.state = 164;
	            this.match(QMapParser.LEFT_BRACE);
	            this.state = 165;
	            this.query_list();
	            this.state = 166;
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



	field_rename() {
	    let localctx = new Field_renameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, QMapParser.RULE_field_rename);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 170;
	        this.id();
	        this.state = 171;
	        this.match(QMapParser.COLON);
	        this.state = 172;
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



	normal_fn() {
	    let localctx = new Normal_fnContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, QMapParser.RULE_normal_fn);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 174;
	        this.match(QMapParser.ID);
	        this.state = 175;
	        this.match(QMapParser.LEFT_PAREN);
	        this.state = 178;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,19,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 176;
	            this.params();
	            break;

	        case 2:
	            this.state = 177;
	            this.aparams();
	            break;

	        }
	        this.state = 180;
	        this.match(QMapParser.RIGHT_PAREN);
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



	map_fn() {
	    let localctx = new Map_fnContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, QMapParser.RULE_map_fn);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 182;
	        this.match(QMapParser.LEFT_BRACKET);
	        this.state = 183;
	        this.match(QMapParser.ID);
	        this.state = 184;
	        this.match(QMapParser.LEFT_PAREN);
	        this.state = 185;
	        this.params();
	        this.state = 186;
	        this.match(QMapParser.RIGHT_PAREN);
	        this.state = 187;
	        this.match(QMapParser.RIGHT_BRACKET);
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
	    this.enterRule(localctx, 40, QMapParser.RULE_fn);
	    try {
	        this.state = 191;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case QMapParser.ID:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 189;
	            this.normal_fn();
	            break;
	        case QMapParser.LEFT_BRACKET:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 190;
	            this.map_fn();
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



	normal_client_fn() {
	    let localctx = new Normal_client_fnContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 42, QMapParser.RULE_normal_client_fn);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 193;
	        this.match(QMapParser.ID);
	        this.state = 194;
	        this.match(QMapParser.EX_MARK);
	        this.state = 195;
	        this.match(QMapParser.LEFT_PAREN);
	        this.state = 198;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,21,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 196;
	            this.params();
	            break;

	        case 2:
	            this.state = 197;
	            this.aparams();
	            break;

	        }
	        this.state = 200;
	        this.match(QMapParser.RIGHT_PAREN);
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



	map_client_fn() {
	    let localctx = new Map_client_fnContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 44, QMapParser.RULE_map_client_fn);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 202;
	        this.match(QMapParser.LEFT_BRACKET);
	        this.state = 203;
	        this.match(QMapParser.ID);
	        this.state = 204;
	        this.match(QMapParser.EX_MARK);
	        this.state = 205;
	        this.match(QMapParser.LEFT_PAREN);
	        this.state = 206;
	        this.params();
	        this.state = 207;
	        this.match(QMapParser.RIGHT_PAREN);
	        this.state = 208;
	        this.match(QMapParser.RIGHT_BRACKET);
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



	client_fn() {
	    let localctx = new Client_fnContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 46, QMapParser.RULE_client_fn);
	    try {
	        this.state = 212;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case QMapParser.ID:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 210;
	            this.normal_client_fn();
	            break;
	        case QMapParser.LEFT_BRACKET:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 211;
	            this.map_client_fn();
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
QMapParser.RULE_aparam = 10;
QMapParser.RULE_aparams = 11;
QMapParser.RULE_params = 12;
QMapParser.RULE_query = 13;
QMapParser.RULE_query_list = 14;
QMapParser.RULE_obj_ref = 15;
QMapParser.RULE_field = 16;
QMapParser.RULE_field_rename = 17;
QMapParser.RULE_normal_fn = 18;
QMapParser.RULE_map_fn = 19;
QMapParser.RULE_fn = 20;
QMapParser.RULE_normal_client_fn = 21;
QMapParser.RULE_map_client_fn = 22;
QMapParser.RULE_client_fn = 23;

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
    }

	field() {
	    return this.getTypedRuleContext(FieldContext,0);
	};

	fn() {
	    return this.getTypedRuleContext(FnContext,0);
	};

	client_fn() {
	    return this.getTypedRuleContext(Client_fnContext,0);
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



class AparamContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = QMapParser.RULE_aparam;
    }

	AT() {
	    return this.getToken(QMapParser.AT, 0);
	};

	LEFT_BRACKET() {
	    return this.getToken(QMapParser.LEFT_BRACKET, 0);
	};

	param() {
	    return this.getTypedRuleContext(ParamContext,0);
	};

	RIGHT_BRACKET() {
	    return this.getToken(QMapParser.RIGHT_BRACKET, 0);
	};

	enterRule(listener) {
	    if(listener instanceof QMapListener ) {
	        listener.enterAparam(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof QMapListener ) {
	        listener.exitAparam(this);
		}
	}


}



class AparamsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = QMapParser.RULE_aparams;
    }

	aparam() {
	    return this.getTypedRuleContext(AparamContext,0);
	};

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
	        listener.enterAparams(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof QMapListener ) {
	        listener.exitAparams(this);
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



class Normal_fnContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = QMapParser.RULE_normal_fn;
    }

	ID() {
	    return this.getToken(QMapParser.ID, 0);
	};

	LEFT_PAREN() {
	    return this.getToken(QMapParser.LEFT_PAREN, 0);
	};

	RIGHT_PAREN() {
	    return this.getToken(QMapParser.RIGHT_PAREN, 0);
	};

	params() {
	    return this.getTypedRuleContext(ParamsContext,0);
	};

	aparams() {
	    return this.getTypedRuleContext(AparamsContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof QMapListener ) {
	        listener.enterNormal_fn(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof QMapListener ) {
	        listener.exitNormal_fn(this);
		}
	}


}



class Map_fnContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = QMapParser.RULE_map_fn;
    }

	LEFT_BRACKET() {
	    return this.getToken(QMapParser.LEFT_BRACKET, 0);
	};

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

	RIGHT_BRACKET() {
	    return this.getToken(QMapParser.RIGHT_BRACKET, 0);
	};

	enterRule(listener) {
	    if(listener instanceof QMapListener ) {
	        listener.enterMap_fn(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof QMapListener ) {
	        listener.exitMap_fn(this);
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
    }

	normal_fn() {
	    return this.getTypedRuleContext(Normal_fnContext,0);
	};

	map_fn() {
	    return this.getTypedRuleContext(Map_fnContext,0);
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



class Normal_client_fnContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = QMapParser.RULE_normal_client_fn;
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

	RIGHT_PAREN() {
	    return this.getToken(QMapParser.RIGHT_PAREN, 0);
	};

	params() {
	    return this.getTypedRuleContext(ParamsContext,0);
	};

	aparams() {
	    return this.getTypedRuleContext(AparamsContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof QMapListener ) {
	        listener.enterNormal_client_fn(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof QMapListener ) {
	        listener.exitNormal_client_fn(this);
		}
	}


}



class Map_client_fnContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = QMapParser.RULE_map_client_fn;
    }

	LEFT_BRACKET() {
	    return this.getToken(QMapParser.LEFT_BRACKET, 0);
	};

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

	RIGHT_BRACKET() {
	    return this.getToken(QMapParser.RIGHT_BRACKET, 0);
	};

	enterRule(listener) {
	    if(listener instanceof QMapListener ) {
	        listener.enterMap_client_fn(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof QMapListener ) {
	        listener.exitMap_client_fn(this);
		}
	}


}



class Client_fnContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = QMapParser.RULE_client_fn;
    }

	normal_client_fn() {
	    return this.getTypedRuleContext(Normal_client_fnContext,0);
	};

	map_client_fn() {
	    return this.getTypedRuleContext(Map_client_fnContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof QMapListener ) {
	        listener.enterClient_fn(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof QMapListener ) {
	        listener.exitClient_fn(this);
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
QMapParser.AparamContext = AparamContext; 
QMapParser.AparamsContext = AparamsContext; 
QMapParser.ParamsContext = ParamsContext; 
QMapParser.QueryContext = QueryContext; 
QMapParser.Query_listContext = Query_listContext; 
QMapParser.Obj_refContext = Obj_refContext; 
QMapParser.FieldContext = FieldContext; 
QMapParser.Field_renameContext = Field_renameContext; 
QMapParser.Normal_fnContext = Normal_fnContext; 
QMapParser.Map_fnContext = Map_fnContext; 
QMapParser.FnContext = FnContext; 
QMapParser.Normal_client_fnContext = Normal_client_fnContext; 
QMapParser.Map_client_fnContext = Map_client_fnContext; 
QMapParser.Client_fnContext = Client_fnContext; 
