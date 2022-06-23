// Generated from /home/gbenm/code/pumkat/qmap/antlr4/QMap.g4 by ANTLR 4.9.3
// jshint ignore: start
import antlr4 from 'antlr4';
import QMapListener from './QMapListener.js';

const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0003\u0016\u00ea\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010",
    "\t\u0010\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013",
    "\u0004\u0014\t\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017",
    "\t\u0017\u0004\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a",
    "\u0004\u001b\t\u001b\u0004\u001c\t\u001c\u0003\u0002\u0003\u0002\u0003",
    "\u0002\u0005\u0002<\n\u0002\u0003\u0002\u0005\u0002?\n\u0002\u0003\u0003",
    "\u0005\u0003B\n\u0003\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0005\u0005I\n\u0005\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0007\u0007",
    "S\n\u0007\f\u0007\u000e\u0007V\u000b\u0007\u0003\b\u0003\b\u0005\bZ",
    "\n\b\u0003\b\u0003\b\u0007\b^\n\b\f\b\u000e\ba\u000b\b\u0003\t\u0003",
    "\t\u0005\te\n\t\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003\u000b",
    "\u0003\u000b\u0003\u000b\u0003\f\u0003\f\u0003\f\u0003\r\u0003\r\u0005",
    "\rs\n\r\u0003\u000e\u0003\u000e\u0005\u000ew\n\u000e\u0003\u000f\u0003",
    "\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u0010\u0003\u0010\u0003",
    "\u0010\u0007\u0010\u0081\n\u0010\f\u0010\u000e\u0010\u0084\u000b\u0010",
    "\u0003\u0010\u0003\u0010\u0005\u0010\u0088\n\u0010\u0003\u0010\u0003",
    "\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0007\u0010\u008f\n\u0010",
    "\f\u0010\u000e\u0010\u0092\u000b\u0010\u0005\u0010\u0094\n\u0010\u0003",
    "\u0011\u0003\u0011\u0003\u0011\u0007\u0011\u0099\n\u0011\f\u0011\u000e",
    "\u0011\u009c\u000b\u0011\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012",
    "\u0005\u0012\u00a2\n\u0012\u0003\u0013\u0003\u0013\u0003\u0013\u0007",
    "\u0013\u00a7\n\u0013\f\u0013\u000e\u0013\u00aa\u000b\u0013\u0003\u0013",
    "\u0005\u0013\u00ad\n\u0013\u0003\u0014\u0003\u0014\u0003\u0014\u0007",
    "\u0014\u00b2\n\u0014\f\u0014\u000e\u0014\u00b5\u000b\u0014\u0003\u0015",
    "\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0005\u0015\u00bc\n",
    "\u0015\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0017\u0003",
    "\u0017\u0003\u0017\u0003\u0017\u0005\u0017\u00c6\n\u0017\u0003\u0017",
    "\u0003\u0017\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018",
    "\u0003\u0018\u0003\u0018\u0003\u0019\u0003\u0019\u0005\u0019\u00d3\n",
    "\u0019\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0005",
    "\u001a\u00da\n\u001a\u0003\u001a\u0003\u001a\u0003\u001b\u0003\u001b",
    "\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b",
    "\u0003\u001c\u0003\u001c\u0005\u001c\u00e8\n\u001c\u0003\u001c\u0002",
    "\u0002\u001d\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018",
    "\u001a\u001c\u001e \"$&(*,.0246\u0002\u0004\u0004\u0002\u0010\u0010",
    "\u0013\u0013\u0003\u0002\u0010\u0012\u0002\u00e9\u00028\u0003\u0002",
    "\u0002\u0002\u0004A\u0003\u0002\u0002\u0002\u0006C\u0003\u0002\u0002",
    "\u0002\bH\u0003\u0002\u0002\u0002\nJ\u0003\u0002\u0002\u0002\fM\u0003",
    "\u0002\u0002\u0002\u000eW\u0003\u0002\u0002\u0002\u0010d\u0003\u0002",
    "\u0002\u0002\u0012f\u0003\u0002\u0002\u0002\u0014h\u0003\u0002\u0002",
    "\u0002\u0016m\u0003\u0002\u0002\u0002\u0018r\u0003\u0002\u0002\u0002",
    "\u001av\u0003\u0002\u0002\u0002\u001cx\u0003\u0002\u0002\u0002\u001e",
    "\u0087\u0003\u0002\u0002\u0002 \u0095\u0003\u0002\u0002\u0002\"\u00a1",
    "\u0003\u0002\u0002\u0002$\u00a3\u0003\u0002\u0002\u0002&\u00ae\u0003",
    "\u0002\u0002\u0002(\u00b6\u0003\u0002\u0002\u0002*\u00bd\u0003\u0002",
    "\u0002\u0002,\u00c1\u0003\u0002\u0002\u0002.\u00c9\u0003\u0002\u0002",
    "\u00020\u00d2\u0003\u0002\u0002\u00022\u00d4\u0003\u0002\u0002\u0002",
    "4\u00dd\u0003\u0002\u0002\u00026\u00e7\u0003\u0002\u0002\u00028>\u0005",
    "\u0004\u0003\u00029;\u0007\u0006\u0002\u0002:<\u0005$\u0013\u0002;:",
    "\u0003\u0002\u0002\u0002;<\u0003\u0002\u0002\u0002<=\u0003\u0002\u0002",
    "\u0002=?\u0007\u0007\u0002\u0002>9\u0003\u0002\u0002\u0002>?\u0003\u0002",
    "\u0002\u0002?\u0003\u0003\u0002\u0002\u0002@B\u0005\u0006\u0004\u0002",
    "A@\u0003\u0002\u0002\u0002AB\u0003\u0002\u0002\u0002B\u0005\u0003\u0002",
    "\u0002\u0002CD\t\u0002\u0002\u0002D\u0007\u0003\u0002\u0002\u0002EI",
    "\u0005(\u0015\u0002FI\u00050\u0019\u0002GI\u00056\u001c\u0002HE\u0003",
    "\u0002\u0002\u0002HF\u0003\u0002\u0002\u0002HG\u0003\u0002\u0002\u0002",
    "I\t\u0003\u0002\u0002\u0002JK\u0007\b\u0002\u0002KL\u0005\u0006\u0004",
    "\u0002L\u000b\u0003\u0002\u0002\u0002MN\u0007\u000b\u0002\u0002NO\u0007",
    "\u000f\u0002\u0002OT\u0005\u0006\u0004\u0002PQ\u0007\f\u0002\u0002Q",
    "S\u0005\u0006\u0004\u0002RP\u0003\u0002\u0002\u0002SV\u0003\u0002\u0002",
    "\u0002TR\u0003\u0002\u0002\u0002TU\u0003\u0002\u0002\u0002U\r\u0003",
    "\u0002\u0002\u0002VT\u0003\u0002\u0002\u0002WY\u0007\u000b\u0002\u0002",
    "XZ\u0005\u0006\u0004\u0002YX\u0003\u0002\u0002\u0002YZ\u0003\u0002\u0002",
    "\u0002Z_\u0003\u0002\u0002\u0002[\\\u0007\f\u0002\u0002\\^\u0005\u0006",
    "\u0004\u0002][\u0003\u0002\u0002\u0002^a\u0003\u0002\u0002\u0002_]\u0003",
    "\u0002\u0002\u0002_`\u0003\u0002\u0002\u0002`\u000f\u0003\u0002\u0002",
    "\u0002a_\u0003\u0002\u0002\u0002be\u0005\f\u0007\u0002ce\u0005\u000e",
    "\b\u0002db\u0003\u0002\u0002\u0002dc\u0003\u0002\u0002\u0002e\u0011",
    "\u0003\u0002\u0002\u0002fg\t\u0003\u0002\u0002g\u0013\u0003\u0002\u0002",
    "\u0002hi\u0007\u0003\u0002\u0002ij\u0007\u0006\u0002\u0002jk\u0005\u0012",
    "\n\u0002kl\u0007\u0007\u0002\u0002l\u0015\u0003\u0002\u0002\u0002mn",
    "\u0007\u0003\u0002\u0002no\u0007\u0013\u0002\u0002o\u0017\u0003\u0002",
    "\u0002\u0002ps\u0005\u0016\f\u0002qs\u0005\u0014\u000b\u0002rp\u0003",
    "\u0002\u0002\u0002rq\u0003\u0002\u0002\u0002s\u0019\u0003\u0002\u0002",
    "\u0002tw\u0005\u0018\r\u0002uw\u0005\b\u0005\u0002vt\u0003\u0002\u0002",
    "\u0002vu\u0003\u0002\u0002\u0002w\u001b\u0003\u0002\u0002\u0002xy\u0007",
    "\u0003\u0002\u0002yz\u0007\u0004\u0002\u0002z{\u0005\u001a\u000e\u0002",
    "{|\u0007\u0005\u0002\u0002|\u001d\u0003\u0002\u0002\u0002}\u0082\u0005",
    "\u001a\u000e\u0002~\u007f\u0007\n\u0002\u0002\u007f\u0081\u0005\u001a",
    "\u000e\u0002\u0080~\u0003\u0002\u0002\u0002\u0081\u0084\u0003\u0002",
    "\u0002\u0002\u0082\u0080\u0003\u0002\u0002\u0002\u0082\u0083\u0003\u0002",
    "\u0002\u0002\u0083\u0085\u0003\u0002\u0002\u0002\u0084\u0082\u0003\u0002",
    "\u0002\u0002\u0085\u0086\u0007\n\u0002\u0002\u0086\u0088\u0003\u0002",
    "\u0002\u0002\u0087}\u0003\u0002\u0002\u0002\u0087\u0088\u0003\u0002",
    "\u0002\u0002\u0088\u0089\u0003\u0002\u0002\u0002\u0089\u0093\u0005\u001c",
    "\u000f\u0002\u008a\u008b\u0007\n\u0002\u0002\u008b\u0090\u0005\u001a",
    "\u000e\u0002\u008c\u008d\u0007\n\u0002\u0002\u008d\u008f\u0005\u001a",
    "\u000e\u0002\u008e\u008c\u0003\u0002\u0002\u0002\u008f\u0092\u0003\u0002",
    "\u0002\u0002\u0090\u008e\u0003\u0002\u0002\u0002\u0090\u0091\u0003\u0002",
    "\u0002\u0002\u0091\u0094\u0003\u0002\u0002\u0002\u0092\u0090\u0003\u0002",
    "\u0002\u0002\u0093\u008a\u0003\u0002\u0002\u0002\u0093\u0094\u0003\u0002",
    "\u0002\u0002\u0094\u001f\u0003\u0002\u0002\u0002\u0095\u009a\u0005\u001a",
    "\u000e\u0002\u0096\u0097\u0007\n\u0002\u0002\u0097\u0099\u0005\u001a",
    "\u000e\u0002\u0098\u0096\u0003\u0002\u0002\u0002\u0099\u009c\u0003\u0002",
    "\u0002\u0002\u009a\u0098\u0003\u0002\u0002\u0002\u009a\u009b\u0003\u0002",
    "\u0002\u0002\u009b!\u0003\u0002\u0002\u0002\u009c\u009a\u0003\u0002",
    "\u0002\u0002\u009d\u00a2\u0005\b\u0005\u0002\u009e\u00a2\u0005\n\u0006",
    "\u0002\u009f\u00a2\u0005\u0010\t\u0002\u00a0\u00a2\u0005*\u0016\u0002",
    "\u00a1\u009d\u0003\u0002\u0002\u0002\u00a1\u009e\u0003\u0002\u0002\u0002",
    "\u00a1\u009f\u0003\u0002\u0002\u0002\u00a1\u00a0\u0003\u0002\u0002\u0002",
    "\u00a2#\u0003\u0002\u0002\u0002\u00a3\u00a8\u0005\"\u0012\u0002\u00a4",
    "\u00a5\u0007\n\u0002\u0002\u00a5\u00a7\u0005\"\u0012\u0002\u00a6\u00a4",
    "\u0003\u0002\u0002\u0002\u00a7\u00aa\u0003\u0002\u0002\u0002\u00a8\u00a6",
    "\u0003\u0002\u0002\u0002\u00a8\u00a9\u0003\u0002\u0002\u0002\u00a9\u00ac",
    "\u0003\u0002\u0002\u0002\u00aa\u00a8\u0003\u0002\u0002\u0002\u00ab\u00ad",
    "\u0007\n\u0002\u0002\u00ac\u00ab\u0003\u0002\u0002\u0002\u00ac\u00ad",
    "\u0003\u0002\u0002\u0002\u00ad%\u0003\u0002\u0002\u0002\u00ae\u00b3",
    "\u0005\u0006\u0004\u0002\u00af\u00b0\u0007\f\u0002\u0002\u00b0\u00b2",
    "\u0005\u0006\u0004\u0002\u00b1\u00af\u0003\u0002\u0002\u0002\u00b2\u00b5",
    "\u0003\u0002\u0002\u0002\u00b3\u00b1\u0003\u0002\u0002\u0002\u00b3\u00b4",
    "\u0003\u0002\u0002\u0002\u00b4\'\u0003\u0002\u0002\u0002\u00b5\u00b3",
    "\u0003\u0002\u0002\u0002\u00b6\u00bb\u0005&\u0014\u0002\u00b7\u00b8",
    "\u0007\u0006\u0002\u0002\u00b8\u00b9\u0005$\u0013\u0002\u00b9\u00ba",
    "\u0007\u0007\u0002\u0002\u00ba\u00bc\u0003\u0002\u0002\u0002\u00bb\u00b7",
    "\u0003\u0002\u0002\u0002\u00bb\u00bc\u0003\u0002\u0002\u0002\u00bc)",
    "\u0003\u0002\u0002\u0002\u00bd\u00be\u0005\u0006\u0004\u0002\u00be\u00bf",
    "\u0007\t\u0002\u0002\u00bf\u00c0\u0005\b\u0005\u0002\u00c0+\u0003\u0002",
    "\u0002\u0002\u00c1\u00c2\u0007\u0013\u0002\u0002\u00c2\u00c5\u0007\r",
    "\u0002\u0002\u00c3\u00c6\u0005 \u0011\u0002\u00c4\u00c6\u0005\u001e",
    "\u0010\u0002\u00c5\u00c3\u0003\u0002\u0002\u0002\u00c5\u00c4\u0003\u0002",
    "\u0002\u0002\u00c6\u00c7\u0003\u0002\u0002\u0002\u00c7\u00c8\u0007\u000e",
    "\u0002\u0002\u00c8-\u0003\u0002\u0002\u0002\u00c9\u00ca\u0007\u0004",
    "\u0002\u0002\u00ca\u00cb\u0007\u0013\u0002\u0002\u00cb\u00cc\u0007\r",
    "\u0002\u0002\u00cc\u00cd\u0005 \u0011\u0002\u00cd\u00ce\u0007\u000e",
    "\u0002\u0002\u00ce\u00cf\u0007\u0005\u0002\u0002\u00cf/\u0003\u0002",
    "\u0002\u0002\u00d0\u00d3\u0005,\u0017\u0002\u00d1\u00d3\u0005.\u0018",
    "\u0002\u00d2\u00d0\u0003\u0002\u0002\u0002\u00d2\u00d1\u0003\u0002\u0002",
    "\u0002\u00d31\u0003\u0002\u0002\u0002\u00d4\u00d5\u0007\u0013\u0002",
    "\u0002\u00d5\u00d6\u0007\b\u0002\u0002\u00d6\u00d9\u0007\r\u0002\u0002",
    "\u00d7\u00da\u0005 \u0011\u0002\u00d8\u00da\u0005\u001e\u0010\u0002",
    "\u00d9\u00d7\u0003\u0002\u0002\u0002\u00d9\u00d8\u0003\u0002\u0002\u0002",
    "\u00da\u00db\u0003\u0002\u0002\u0002\u00db\u00dc\u0007\u000e\u0002\u0002",
    "\u00dc3\u0003\u0002\u0002\u0002\u00dd\u00de\u0007\u0004\u0002\u0002",
    "\u00de\u00df\u0007\u0013\u0002\u0002\u00df\u00e0\u0007\b\u0002\u0002",
    "\u00e0\u00e1\u0007\r\u0002\u0002\u00e1\u00e2\u0005 \u0011\u0002\u00e2",
    "\u00e3\u0007\u000e\u0002\u0002\u00e3\u00e4\u0007\u0005\u0002\u0002\u00e4",
    "5\u0003\u0002\u0002\u0002\u00e5\u00e8\u00052\u001a\u0002\u00e6\u00e8",
    "\u00054\u001b\u0002\u00e7\u00e5\u0003\u0002\u0002\u0002\u00e7\u00e6",
    "\u0003\u0002\u0002\u0002\u00e87\u0003\u0002\u0002\u0002\u001a;>AHTY",
    "_drv\u0082\u0087\u0090\u0093\u009a\u00a1\u00a8\u00ac\u00b3\u00bb\u00c5",
    "\u00d2\u00d9\u00e7"].join("");


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
                             "RIGHT_PAREN", "AMPERSAND", "STRING", "BOOL", 
                             "NUMBER", "ID", "WS", "BLOCK_COMMENT", "LINE_COMMENT" ];
    static ruleNames = [ "start", "optional_id", "id", "stm", "exclude", 
                         "global_spread", "scoped_spread", "spread", "primitive_val", 
                         "primitive", "exvar", "variable", "param", "aparam", 
                         "aparams", "params", "query", "query_list", "obj_ref", 
                         "field", "field_rename", "normal_fn", "map_fn", 
                         "fn", "normal_client_fn", "map_client_fn", "client_fn" ];

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
	        this.state = 54;
	        this.optional_id();
	        this.state = 60;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===QMapParser.LEFT_BRACE) {
	            this.state = 55;
	            this.match(QMapParser.LEFT_BRACE);
	            this.state = 57;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << QMapParser.LEFT_BRACKET) | (1 << QMapParser.EX_MARK) | (1 << QMapParser.TRIPLE_DOT) | (1 << QMapParser.STRING) | (1 << QMapParser.ID))) !== 0)) {
	                this.state = 56;
	                this.query_list();
	            }

	            this.state = 59;
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
	        this.state = 63;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===QMapParser.STRING || _la===QMapParser.ID) {
	            this.state = 62;
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
	        this.state = 65;
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
	        this.state = 70;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 67;
	            this.field();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 68;
	            this.fn();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 69;
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
	        this.state = 72;
	        this.match(QMapParser.EX_MARK);
	        this.state = 73;
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
	        this.state = 75;
	        this.match(QMapParser.TRIPLE_DOT);
	        this.state = 76;
	        this.match(QMapParser.AMPERSAND);
	        this.state = 77;
	        this.id();
	        this.state = 82;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===QMapParser.DOT) {
	            this.state = 78;
	            this.match(QMapParser.DOT);
	            this.state = 79;
	            this.id();
	            this.state = 84;
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
	        this.state = 85;
	        this.match(QMapParser.TRIPLE_DOT);
	        this.state = 87;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===QMapParser.STRING || _la===QMapParser.ID) {
	            this.state = 86;
	            this.id();
	        }

	        this.state = 93;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===QMapParser.DOT) {
	            this.state = 89;
	            this.match(QMapParser.DOT);
	            this.state = 90;
	            this.id();
	            this.state = 95;
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
	        this.state = 98;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 96;
	            this.global_spread();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 97;
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



	primitive_val() {
	    let localctx = new Primitive_valContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, QMapParser.RULE_primitive_val);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 100;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << QMapParser.STRING) | (1 << QMapParser.BOOL) | (1 << QMapParser.NUMBER))) !== 0))) {
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



	primitive() {
	    let localctx = new PrimitiveContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, QMapParser.RULE_primitive);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 102;
	        this.match(QMapParser.AT);
	        this.state = 103;
	        this.match(QMapParser.LEFT_BRACE);
	        this.state = 104;
	        this.primitive_val();
	        this.state = 105;
	        this.match(QMapParser.RIGHT_BRACE);
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



	exvar() {
	    let localctx = new ExvarContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, QMapParser.RULE_exvar);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 107;
	        this.match(QMapParser.AT);
	        this.state = 108;
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



	variable() {
	    let localctx = new VariableContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, QMapParser.RULE_variable);
	    try {
	        this.state = 112;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 110;
	            this.exvar();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 111;
	            this.primitive();
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
	    this.enterRule(localctx, 24, QMapParser.RULE_param);
	    try {
	        this.state = 116;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case QMapParser.AT:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 114;
	            this.variable();
	            break;
	        case QMapParser.LEFT_BRACKET:
	        case QMapParser.STRING:
	        case QMapParser.ID:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 115;
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
	    this.enterRule(localctx, 26, QMapParser.RULE_aparam);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 118;
	        this.match(QMapParser.AT);
	        this.state = 119;
	        this.match(QMapParser.LEFT_BRACKET);
	        this.state = 120;
	        this.param();
	        this.state = 121;
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
	    this.enterRule(localctx, 28, QMapParser.RULE_aparams);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 133;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,11,this._ctx);
	        if(la_===1) {
	            this.state = 123;
	            this.param();
	            this.state = 128;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,10,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 124;
	                    this.match(QMapParser.COMMA);
	                    this.state = 125;
	                    this.param(); 
	                }
	                this.state = 130;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,10,this._ctx);
	            }

	            this.state = 131;
	            this.match(QMapParser.COMMA);

	        }
	        this.state = 135;
	        this.aparam();
	        this.state = 145;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===QMapParser.COMMA) {
	            this.state = 136;
	            this.match(QMapParser.COMMA);
	            this.state = 137;
	            this.param();
	            this.state = 142;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===QMapParser.COMMA) {
	                this.state = 138;
	                this.match(QMapParser.COMMA);
	                this.state = 139;
	                this.param();
	                this.state = 144;
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
	    this.enterRule(localctx, 30, QMapParser.RULE_params);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 147;
	        this.param();
	        this.state = 152;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===QMapParser.COMMA) {
	            this.state = 148;
	            this.match(QMapParser.COMMA);
	            this.state = 149;
	            this.param();
	            this.state = 154;
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
	    this.enterRule(localctx, 32, QMapParser.RULE_query);
	    try {
	        this.state = 159;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,15,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 155;
	            this.stm();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 156;
	            this.exclude();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 157;
	            this.spread();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 158;
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
	    this.enterRule(localctx, 34, QMapParser.RULE_query_list);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 161;
	        this.query();
	        this.state = 166;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,16,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 162;
	                this.match(QMapParser.COMMA);
	                this.state = 163;
	                this.query(); 
	            }
	            this.state = 168;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,16,this._ctx);
	        }

	        this.state = 170;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===QMapParser.COMMA) {
	            this.state = 169;
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
	    this.enterRule(localctx, 36, QMapParser.RULE_obj_ref);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 172;
	        this.id();
	        this.state = 177;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===QMapParser.DOT) {
	            this.state = 173;
	            this.match(QMapParser.DOT);
	            this.state = 174;
	            this.id();
	            this.state = 179;
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
	    this.enterRule(localctx, 38, QMapParser.RULE_field);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 180;
	        this.obj_ref();
	        this.state = 185;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===QMapParser.LEFT_BRACE) {
	            this.state = 181;
	            this.match(QMapParser.LEFT_BRACE);
	            this.state = 182;
	            this.query_list();
	            this.state = 183;
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
	    this.enterRule(localctx, 40, QMapParser.RULE_field_rename);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 187;
	        this.id();
	        this.state = 188;
	        this.match(QMapParser.COLON);
	        this.state = 189;
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
	    this.enterRule(localctx, 42, QMapParser.RULE_normal_fn);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 191;
	        this.match(QMapParser.ID);
	        this.state = 192;
	        this.match(QMapParser.LEFT_PAREN);
	        this.state = 195;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,20,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 193;
	            this.params();
	            break;

	        case 2:
	            this.state = 194;
	            this.aparams();
	            break;

	        }
	        this.state = 197;
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
	    this.enterRule(localctx, 44, QMapParser.RULE_map_fn);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 199;
	        this.match(QMapParser.LEFT_BRACKET);
	        this.state = 200;
	        this.match(QMapParser.ID);
	        this.state = 201;
	        this.match(QMapParser.LEFT_PAREN);
	        this.state = 202;
	        this.params();
	        this.state = 203;
	        this.match(QMapParser.RIGHT_PAREN);
	        this.state = 204;
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
	    this.enterRule(localctx, 46, QMapParser.RULE_fn);
	    try {
	        this.state = 208;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case QMapParser.ID:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 206;
	            this.normal_fn();
	            break;
	        case QMapParser.LEFT_BRACKET:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 207;
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
	    this.enterRule(localctx, 48, QMapParser.RULE_normal_client_fn);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 210;
	        this.match(QMapParser.ID);
	        this.state = 211;
	        this.match(QMapParser.EX_MARK);
	        this.state = 212;
	        this.match(QMapParser.LEFT_PAREN);
	        this.state = 215;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,22,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 213;
	            this.params();
	            break;

	        case 2:
	            this.state = 214;
	            this.aparams();
	            break;

	        }
	        this.state = 217;
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
	    this.enterRule(localctx, 50, QMapParser.RULE_map_client_fn);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 219;
	        this.match(QMapParser.LEFT_BRACKET);
	        this.state = 220;
	        this.match(QMapParser.ID);
	        this.state = 221;
	        this.match(QMapParser.EX_MARK);
	        this.state = 222;
	        this.match(QMapParser.LEFT_PAREN);
	        this.state = 223;
	        this.params();
	        this.state = 224;
	        this.match(QMapParser.RIGHT_PAREN);
	        this.state = 225;
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
	    this.enterRule(localctx, 52, QMapParser.RULE_client_fn);
	    try {
	        this.state = 229;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case QMapParser.ID:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 227;
	            this.normal_client_fn();
	            break;
	        case QMapParser.LEFT_BRACKET:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 228;
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
QMapParser.BOOL = 15;
QMapParser.NUMBER = 16;
QMapParser.ID = 17;
QMapParser.WS = 18;
QMapParser.BLOCK_COMMENT = 19;
QMapParser.LINE_COMMENT = 20;

QMapParser.RULE_start = 0;
QMapParser.RULE_optional_id = 1;
QMapParser.RULE_id = 2;
QMapParser.RULE_stm = 3;
QMapParser.RULE_exclude = 4;
QMapParser.RULE_global_spread = 5;
QMapParser.RULE_scoped_spread = 6;
QMapParser.RULE_spread = 7;
QMapParser.RULE_primitive_val = 8;
QMapParser.RULE_primitive = 9;
QMapParser.RULE_exvar = 10;
QMapParser.RULE_variable = 11;
QMapParser.RULE_param = 12;
QMapParser.RULE_aparam = 13;
QMapParser.RULE_aparams = 14;
QMapParser.RULE_params = 15;
QMapParser.RULE_query = 16;
QMapParser.RULE_query_list = 17;
QMapParser.RULE_obj_ref = 18;
QMapParser.RULE_field = 19;
QMapParser.RULE_field_rename = 20;
QMapParser.RULE_normal_fn = 21;
QMapParser.RULE_map_fn = 22;
QMapParser.RULE_fn = 23;
QMapParser.RULE_normal_client_fn = 24;
QMapParser.RULE_map_client_fn = 25;
QMapParser.RULE_client_fn = 26;

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



class Primitive_valContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = QMapParser.RULE_primitive_val;
    }

	STRING() {
	    return this.getToken(QMapParser.STRING, 0);
	};

	NUMBER() {
	    return this.getToken(QMapParser.NUMBER, 0);
	};

	BOOL() {
	    return this.getToken(QMapParser.BOOL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof QMapListener ) {
	        listener.enterPrimitive_val(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof QMapListener ) {
	        listener.exitPrimitive_val(this);
		}
	}


}



class PrimitiveContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = QMapParser.RULE_primitive;
    }

	AT() {
	    return this.getToken(QMapParser.AT, 0);
	};

	LEFT_BRACE() {
	    return this.getToken(QMapParser.LEFT_BRACE, 0);
	};

	primitive_val() {
	    return this.getTypedRuleContext(Primitive_valContext,0);
	};

	RIGHT_BRACE() {
	    return this.getToken(QMapParser.RIGHT_BRACE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof QMapListener ) {
	        listener.enterPrimitive(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof QMapListener ) {
	        listener.exitPrimitive(this);
		}
	}


}



class ExvarContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = QMapParser.RULE_exvar;
    }

	AT() {
	    return this.getToken(QMapParser.AT, 0);
	};

	ID() {
	    return this.getToken(QMapParser.ID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof QMapListener ) {
	        listener.enterExvar(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof QMapListener ) {
	        listener.exitExvar(this);
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

	exvar() {
	    return this.getTypedRuleContext(ExvarContext,0);
	};

	primitive() {
	    return this.getTypedRuleContext(PrimitiveContext,0);
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
QMapParser.Primitive_valContext = Primitive_valContext; 
QMapParser.PrimitiveContext = PrimitiveContext; 
QMapParser.ExvarContext = ExvarContext; 
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
