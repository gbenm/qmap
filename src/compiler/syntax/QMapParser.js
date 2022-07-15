// Generated from /home/gbenm/code/pumkat/qmap/antlr4/QMap.g4 by ANTLR 4.9.3
// jshint ignore: start
import antlr4 from 'antlr4';
import QMapListener from './QMapListener.js';

const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0003\u0019\u0123\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010",
    "\t\u0010\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013",
    "\u0004\u0014\t\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017",
    "\t\u0017\u0004\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a",
    "\u0004\u001b\t\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e",
    "\t\u001e\u0004\u001f\t\u001f\u0004 \t \u0004!\t!\u0004\"\t\"\u0004#",
    "\t#\u0003\u0002\u0003\u0002\u0003\u0002\u0005\u0002J\n\u0002\u0003\u0002",
    "\u0005\u0002M\n\u0002\u0003\u0003\u0005\u0003P\n\u0003\u0003\u0004\u0003",
    "\u0004\u0003\u0005\u0003\u0005\u0005\u0005V\n\u0005\u0003\u0006\u0003",
    "\u0006\u0005\u0006Z\n\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0003\b\u0003\b\u0005\bb\n\b\u0003\b\u0005\be\n\b\u0003\b\u0005",
    "\bh\n\b\u0003\t\u0003\t\u0003\t\u0003\n\u0003\n\u0003\n\u0005\np\n\n",
    "\u0003\n\u0003\n\u0003\n\u0007\nu\n\n\f\n\u000e\nx\u000b\n\u0003\u000b",
    "\u0003\u000b\u0005\u000b|\n\u000b\u0003\u000b\u0003\u000b\u0007\u000b",
    "\u0080\n\u000b\f\u000b\u000e\u000b\u0083\u000b\u000b\u0003\f\u0003\f",
    "\u0005\f\u0087\n\f\u0003\r\u0003\r\u0003\u000e\u0003\u000e\u0003\u000e",
    "\u0003\u000e\u0003\u000e\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u0010",
    "\u0003\u0010\u0005\u0010\u0095\n\u0010\u0003\u0011\u0003\u0011\u0005",
    "\u0011\u0099\n\u0011\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012",
    "\u0003\u0012\u0003\u0013\u0003\u0013\u0003\u0013\u0007\u0013\u00a3\n",
    "\u0013\f\u0013\u000e\u0013\u00a6\u000b\u0013\u0003\u0013\u0003\u0013",
    "\u0005\u0013\u00aa\n\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003",
    "\u0013\u0003\u0013\u0007\u0013\u00b1\n\u0013\f\u0013\u000e\u0013\u00b4",
    "\u000b\u0013\u0005\u0013\u00b6\n\u0013\u0003\u0014\u0003\u0014\u0003",
    "\u0014\u0007\u0014\u00bb\n\u0014\f\u0014\u000e\u0014\u00be\u000b\u0014",
    "\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0005\u0015",
    "\u00c5\n\u0015\u0003\u0016\u0003\u0016\u0005\u0016\u00c9\n\u0016\u0003",
    "\u0016\u0007\u0016\u00cc\n\u0016\f\u0016\u000e\u0016\u00cf\u000b\u0016",
    "\u0003\u0016\u0005\u0016\u00d2\n\u0016\u0003\u0017\u0003\u0017\u0003",
    "\u0017\u0007\u0017\u00d7\n\u0017\f\u0017\u000e\u0017\u00da\u000b\u0017",
    "\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0005\u0018",
    "\u00e1\n\u0018\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0003",
    "\u001a\u0003\u001a\u0003\u001a\u0005\u001a\u00ea\n\u001a\u0003\u001b",
    "\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001c",
    "\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001d\u0003\u001d\u0003\u001d",
    "\u0003\u001d\u0005\u001d\u00fa\n\u001d\u0003\u001d\u0003\u001d\u0003",
    "\u001e\u0003\u001e\u0003\u001e\u0003\u001e\u0003\u001e\u0003\u001e\u0003",
    "\u001e\u0003\u001f\u0003\u001f\u0005\u001f\u0107\n\u001f\u0003 \u0003",
    " \u0003 \u0003 \u0003 \u0005 \u010e\n \u0003 \u0003 \u0003!\u0003!\u0003",
    "!\u0003!\u0003!\u0003!\u0003!\u0003!\u0003\"\u0003\"\u0005\"\u011c\n",
    "\"\u0003#\u0003#\u0003#\u0003#\u0003#\u0003#\u0002\u0002$\u0002\u0004",
    "\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u001c\u001e ",
    "\"$&(*,.02468:<>@BD\u0002\u0005\u0004\u0002\u0013\u0013\u0016\u0016",
    "\u0003\u0002\u0013\u0015\u0003\u0002\f\r\u0002\u0123\u0002F\u0003\u0002",
    "\u0002\u0002\u0004O\u0003\u0002\u0002\u0002\u0006Q\u0003\u0002\u0002",
    "\u0002\bU\u0003\u0002\u0002\u0002\nW\u0003\u0002\u0002\u0002\f[\u0003",
    "\u0002\u0002\u0002\u000ea\u0003\u0002\u0002\u0002\u0010i\u0003\u0002",
    "\u0002\u0002\u0012l\u0003\u0002\u0002\u0002\u0014y\u0003\u0002\u0002",
    "\u0002\u0016\u0086\u0003\u0002\u0002\u0002\u0018\u0088\u0003\u0002\u0002",
    "\u0002\u001a\u008a\u0003\u0002\u0002\u0002\u001c\u008f\u0003\u0002\u0002",
    "\u0002\u001e\u0094\u0003\u0002\u0002\u0002 \u0098\u0003\u0002\u0002",
    "\u0002\"\u009a\u0003\u0002\u0002\u0002$\u00a9\u0003\u0002\u0002\u0002",
    "&\u00b7\u0003\u0002\u0002\u0002(\u00c4\u0003\u0002\u0002\u0002*\u00c6",
    "\u0003\u0002\u0002\u0002,\u00d3\u0003\u0002\u0002\u0002.\u00db\u0003",
    "\u0002\u0002\u00020\u00e2\u0003\u0002\u0002\u00022\u00e9\u0003\u0002",
    "\u0002\u00024\u00eb\u0003\u0002\u0002\u00026\u00f1\u0003\u0002\u0002",
    "\u00028\u00f5\u0003\u0002\u0002\u0002:\u00fd\u0003\u0002\u0002\u0002",
    "<\u0106\u0003\u0002\u0002\u0002>\u0108\u0003\u0002\u0002\u0002@\u0111",
    "\u0003\u0002\u0002\u0002B\u011b\u0003\u0002\u0002\u0002D\u011d\u0003",
    "\u0002\u0002\u0002FL\u0005\u0004\u0003\u0002GI\u0007\b\u0002\u0002H",
    "J\u0005*\u0016\u0002IH\u0003\u0002\u0002\u0002IJ\u0003\u0002\u0002\u0002",
    "JK\u0003\u0002\u0002\u0002KM\u0007\t\u0002\u0002LG\u0003\u0002\u0002",
    "\u0002LM\u0003\u0002\u0002\u0002M\u0003\u0003\u0002\u0002\u0002NP\u0005",
    "\u0006\u0004\u0002ON\u0003\u0002\u0002\u0002OP\u0003\u0002\u0002\u0002",
    "P\u0005\u0003\u0002\u0002\u0002QR\t\u0002\u0002\u0002R\u0007\u0003\u0002",
    "\u0002\u0002SV\u00052\u001a\u0002TV\u0005\u000e\b\u0002US\u0003\u0002",
    "\u0002\u0002UT\u0003\u0002\u0002\u0002V\t\u0003\u0002\u0002\u0002WY",
    "\u0007\u0005\u0002\u0002XZ\u0005,\u0017\u0002YX\u0003\u0002\u0002\u0002",
    "YZ\u0003\u0002\u0002\u0002Z\u000b\u0003\u0002\u0002\u0002[\\\u0007\b",
    "\u0002\u0002\\]\u0005*\u0016\u0002]^\u0007\t\u0002\u0002^\r\u0003\u0002",
    "\u0002\u0002_b\u0005<\u001f\u0002`b\u0005B\"\u0002a_\u0003\u0002\u0002",
    "\u0002a`\u0003\u0002\u0002\u0002bg\u0003\u0002\u0002\u0002ce\u0005\n",
    "\u0006\u0002dc\u0003\u0002\u0002\u0002de\u0003\u0002\u0002\u0002ef\u0003",
    "\u0002\u0002\u0002fh\u0005\f\u0007\u0002gd\u0003\u0002\u0002\u0002g",
    "h\u0003\u0002\u0002\u0002h\u000f\u0003\u0002\u0002\u0002ij\u0007\n\u0002",
    "\u0002jk\u0005\u0006\u0004\u0002k\u0011\u0003\u0002\u0002\u0002lm\u0007",
    "\u000e\u0002\u0002mo\u0007\u0012\u0002\u0002np\u0007\u000f\u0002\u0002",
    "on\u0003\u0002\u0002\u0002op\u0003\u0002\u0002\u0002pq\u0003\u0002\u0002",
    "\u0002qv\u0005\u0006\u0004\u0002rs\u0007\u000f\u0002\u0002su\u0005\u0006",
    "\u0004\u0002tr\u0003\u0002\u0002\u0002ux\u0003\u0002\u0002\u0002vt\u0003",
    "\u0002\u0002\u0002vw\u0003\u0002\u0002\u0002w\u0013\u0003\u0002\u0002",
    "\u0002xv\u0003\u0002\u0002\u0002y{\u0007\u000e\u0002\u0002z|\u0005\u0006",
    "\u0004\u0002{z\u0003\u0002\u0002\u0002{|\u0003\u0002\u0002\u0002|\u0081",
    "\u0003\u0002\u0002\u0002}~\u0007\u000f\u0002\u0002~\u0080\u0005\u0006",
    "\u0004\u0002\u007f}\u0003\u0002\u0002\u0002\u0080\u0083\u0003\u0002",
    "\u0002\u0002\u0081\u007f\u0003\u0002\u0002\u0002\u0081\u0082\u0003\u0002",
    "\u0002\u0002\u0082\u0015\u0003\u0002\u0002\u0002\u0083\u0081\u0003\u0002",
    "\u0002\u0002\u0084\u0087\u0005\u0012\n\u0002\u0085\u0087\u0005\u0014",
    "\u000b\u0002\u0086\u0084\u0003\u0002\u0002\u0002\u0086\u0085\u0003\u0002",
    "\u0002\u0002\u0087\u0017\u0003\u0002\u0002\u0002\u0088\u0089\t\u0003",
    "\u0002\u0002\u0089\u0019\u0003\u0002\u0002\u0002\u008a\u008b\u0007\u0004",
    "\u0002\u0002\u008b\u008c\u0007\b\u0002\u0002\u008c\u008d\u0005\u0018",
    "\r\u0002\u008d\u008e\u0007\t\u0002\u0002\u008e\u001b\u0003\u0002\u0002",
    "\u0002\u008f\u0090\u0007\u0004\u0002\u0002\u0090\u0091\u0007\u0016\u0002",
    "\u0002\u0091\u001d\u0003\u0002\u0002\u0002\u0092\u0095\u0005\u001c\u000f",
    "\u0002\u0093\u0095\u0005\u001a\u000e\u0002\u0094\u0092\u0003\u0002\u0002",
    "\u0002\u0094\u0093\u0003\u0002\u0002\u0002\u0095\u001f\u0003\u0002\u0002",
    "\u0002\u0096\u0099\u0005\u001e\u0010\u0002\u0097\u0099\u0005\b\u0005",
    "\u0002\u0098\u0096\u0003\u0002\u0002\u0002\u0098\u0097\u0003\u0002\u0002",
    "\u0002\u0099!\u0003\u0002\u0002\u0002\u009a\u009b\u0007\u0004\u0002",
    "\u0002\u009b\u009c\u0007\u0006\u0002\u0002\u009c\u009d\u0005 \u0011",
    "\u0002\u009d\u009e\u0007\u0007\u0002\u0002\u009e#\u0003\u0002\u0002",
    "\u0002\u009f\u00a4\u0005 \u0011\u0002\u00a0\u00a1\u0007\f\u0002\u0002",
    "\u00a1\u00a3\u0005 \u0011\u0002\u00a2\u00a0\u0003\u0002\u0002\u0002",
    "\u00a3\u00a6\u0003\u0002\u0002\u0002\u00a4\u00a2\u0003\u0002\u0002\u0002",
    "\u00a4\u00a5\u0003\u0002\u0002\u0002\u00a5\u00a7\u0003\u0002\u0002\u0002",
    "\u00a6\u00a4\u0003\u0002\u0002\u0002\u00a7\u00a8\u0007\f\u0002\u0002",
    "\u00a8\u00aa\u0003\u0002\u0002\u0002\u00a9\u009f\u0003\u0002\u0002\u0002",
    "\u00a9\u00aa\u0003\u0002\u0002\u0002\u00aa\u00ab\u0003\u0002\u0002\u0002",
    "\u00ab\u00b5\u0005\"\u0012\u0002\u00ac\u00ad\u0007\f\u0002\u0002\u00ad",
    "\u00b2\u0005 \u0011\u0002\u00ae\u00af\u0007\f\u0002\u0002\u00af\u00b1",
    "\u0005 \u0011\u0002\u00b0\u00ae\u0003\u0002\u0002\u0002\u00b1\u00b4",
    "\u0003\u0002\u0002\u0002\u00b2\u00b0\u0003\u0002\u0002\u0002\u00b2\u00b3",
    "\u0003\u0002\u0002\u0002\u00b3\u00b6\u0003\u0002\u0002\u0002\u00b4\u00b2",
    "\u0003\u0002\u0002\u0002\u00b5\u00ac\u0003\u0002\u0002\u0002\u00b5\u00b6",
    "\u0003\u0002\u0002\u0002\u00b6%\u0003\u0002\u0002\u0002\u00b7\u00bc",
    "\u0005 \u0011\u0002\u00b8\u00b9\u0007\f\u0002\u0002\u00b9\u00bb\u0005",
    " \u0011\u0002\u00ba\u00b8\u0003\u0002\u0002\u0002\u00bb\u00be\u0003",
    "\u0002\u0002\u0002\u00bc\u00ba\u0003\u0002\u0002\u0002\u00bc\u00bd\u0003",
    "\u0002\u0002\u0002\u00bd\'\u0003\u0002\u0002\u0002\u00be\u00bc\u0003",
    "\u0002\u0002\u0002\u00bf\u00c5\u0005\b\u0005\u0002\u00c0\u00c5\u0005",
    "\u0010\t\u0002\u00c1\u00c5\u0005\u0016\f\u0002\u00c2\u00c5\u00056\u001c",
    "\u0002\u00c3\u00c5\u00054\u001b\u0002\u00c4\u00bf\u0003\u0002\u0002",
    "\u0002\u00c4\u00c0\u0003\u0002\u0002\u0002\u00c4\u00c1\u0003\u0002\u0002",
    "\u0002\u00c4\u00c2\u0003\u0002\u0002\u0002\u00c4\u00c3\u0003\u0002\u0002",
    "\u0002\u00c5)\u0003\u0002\u0002\u0002\u00c6\u00cd\u0005(\u0015\u0002",
    "\u00c7\u00c9\t\u0004\u0002\u0002\u00c8\u00c7\u0003\u0002\u0002\u0002",
    "\u00c8\u00c9\u0003\u0002\u0002\u0002\u00c9\u00ca\u0003\u0002\u0002\u0002",
    "\u00ca\u00cc\u0005(\u0015\u0002\u00cb\u00c8\u0003\u0002\u0002\u0002",
    "\u00cc\u00cf\u0003\u0002\u0002\u0002\u00cd\u00cb\u0003\u0002\u0002\u0002",
    "\u00cd\u00ce\u0003\u0002\u0002\u0002\u00ce\u00d1\u0003\u0002\u0002\u0002",
    "\u00cf\u00cd\u0003\u0002\u0002\u0002\u00d0\u00d2\t\u0004\u0002\u0002",
    "\u00d1\u00d0\u0003\u0002\u0002\u0002\u00d1\u00d2\u0003\u0002\u0002\u0002",
    "\u00d2+\u0003\u0002\u0002\u0002\u00d3\u00d8\u0005\u0006\u0004\u0002",
    "\u00d4\u00d5\u0007\u000f\u0002\u0002\u00d5\u00d7\u0005\u0006\u0004\u0002",
    "\u00d6\u00d4\u0003\u0002\u0002\u0002\u00d7\u00da\u0003\u0002\u0002\u0002",
    "\u00d8\u00d6\u0003\u0002\u0002\u0002\u00d8\u00d9\u0003\u0002\u0002\u0002",
    "\u00d9-\u0003\u0002\u0002\u0002\u00da\u00d8\u0003\u0002\u0002\u0002",
    "\u00db\u00e0\u0005,\u0017\u0002\u00dc\u00dd\u0007\b\u0002\u0002\u00dd",
    "\u00de\u0005*\u0016\u0002\u00de\u00df\u0007\t\u0002\u0002\u00df\u00e1",
    "\u0003\u0002\u0002\u0002\u00e0\u00dc\u0003\u0002\u0002\u0002\u00e0\u00e1",
    "\u0003\u0002\u0002\u0002\u00e1/\u0003\u0002\u0002\u0002\u00e2\u00e3",
    "\u0007\u0012\u0002\u0002\u00e3\u00e4\u0007\u000f\u0002\u0002\u00e4\u00e5",
    "\u0005.\u0018\u0002\u00e51\u0003\u0002\u0002\u0002\u00e6\u00ea\u0005",
    "0\u0019\u0002\u00e7\u00ea\u0005.\u0018\u0002\u00e8\u00ea\u0005D#\u0002",
    "\u00e9\u00e6\u0003\u0002\u0002\u0002\u00e9\u00e7\u0003\u0002\u0002\u0002",
    "\u00e9\u00e8\u0003\u0002\u0002\u0002\u00ea3\u0003\u0002\u0002\u0002",
    "\u00eb\u00ec\u0005\u0006\u0004\u0002\u00ec\u00ed\u0007\u000b\u0002\u0002",
    "\u00ed\u00ee\u0007\b\u0002\u0002\u00ee\u00ef\u0005*\u0016\u0002\u00ef",
    "\u00f0\u0007\t\u0002\u0002\u00f05\u0003\u0002\u0002\u0002\u00f1\u00f2",
    "\u0005\u0006\u0004\u0002\u00f2\u00f3\u0007\u000b\u0002\u0002\u00f3\u00f4",
    "\u0005\b\u0005\u0002\u00f47\u0003\u0002\u0002\u0002\u00f5\u00f6\u0007",
    "\u0016\u0002\u0002\u00f6\u00f9\u0007\u0010\u0002\u0002\u00f7\u00fa\u0005",
    "&\u0014\u0002\u00f8\u00fa\u0005$\u0013\u0002\u00f9\u00f7\u0003\u0002",
    "\u0002\u0002\u00f9\u00f8\u0003\u0002\u0002\u0002\u00fa\u00fb\u0003\u0002",
    "\u0002\u0002\u00fb\u00fc\u0007\u0011\u0002\u0002\u00fc9\u0003\u0002",
    "\u0002\u0002\u00fd\u00fe\u0007\u0006\u0002\u0002\u00fe\u00ff\u0007\u0016",
    "\u0002\u0002\u00ff\u0100\u0007\u0010\u0002\u0002\u0100\u0101\u0005&",
    "\u0014\u0002\u0101\u0102\u0007\u0011\u0002\u0002\u0102\u0103\u0007\u0007",
    "\u0002\u0002\u0103;\u0003\u0002\u0002\u0002\u0104\u0107\u00058\u001d",
    "\u0002\u0105\u0107\u0005:\u001e\u0002\u0106\u0104\u0003\u0002\u0002",
    "\u0002\u0106\u0105\u0003\u0002\u0002\u0002\u0107=\u0003\u0002\u0002",
    "\u0002\u0108\u0109\u0007\u0016\u0002\u0002\u0109\u010a\u0007\n\u0002",
    "\u0002\u010a\u010d\u0007\u0010\u0002\u0002\u010b\u010e\u0005&\u0014",
    "\u0002\u010c\u010e\u0005$\u0013\u0002\u010d\u010b\u0003\u0002\u0002",
    "\u0002\u010d\u010c\u0003\u0002\u0002\u0002\u010e\u010f\u0003\u0002\u0002",
    "\u0002\u010f\u0110\u0007\u0011\u0002\u0002\u0110?\u0003\u0002\u0002",
    "\u0002\u0111\u0112\u0007\u0006\u0002\u0002\u0112\u0113\u0007\u0016\u0002",
    "\u0002\u0113\u0114\u0007\n\u0002\u0002\u0114\u0115\u0007\u0010\u0002",
    "\u0002\u0115\u0116\u0005&\u0014\u0002\u0116\u0117\u0007\u0011\u0002",
    "\u0002\u0117\u0118\u0007\u0007\u0002\u0002\u0118A\u0003\u0002\u0002",
    "\u0002\u0119\u011c\u0005> \u0002\u011a\u011c\u0005@!\u0002\u011b\u0119",
    "\u0003\u0002\u0002\u0002\u011b\u011a\u0003\u0002\u0002\u0002\u011cC",
    "\u0003\u0002\u0002\u0002\u011d\u011e\u0007\u0003\u0002\u0002\u011e\u011f",
    "\u0007\b\u0002\u0002\u011f\u0120\u0005\b\u0005\u0002\u0120\u0121\u0007",
    "\t\u0002\u0002\u0121E\u0003\u0002\u0002\u0002!ILOUYadgov{\u0081\u0086",
    "\u0094\u0098\u00a4\u00a9\u00b2\u00b5\u00bc\u00c4\u00c8\u00cd\u00d1\u00d8",
    "\u00e0\u00e9\u00f9\u0106\u010d\u011b"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class QMapParser extends antlr4.Parser {

    static grammarFileName = "QMap.g4";
    static literalNames = [ null, "'%'", "'@'", "'#'", "'['", "']'", "'{'", 
                            "'}'", "'!'", "':'", "','", "';'", "'...'", 
                            "'.'", "'('", "')'", "'&'" ];
    static symbolicNames = [ null, "PERCENT", "AT", "HASH", "LEFT_BRACKET", 
                             "RIGHT_BRACKET", "LEFT_BRACE", "RIGHT_BRACE", 
                             "EX_MARK", "COLON", "COMMA", "SEMICOLON", "TRIPLE_DOT", 
                             "DOT", "LEFT_PAREN", "RIGHT_PAREN", "AMPERSAND", 
                             "STRING", "BOOL", "NUMBER", "ID", "WS", "BLOCK_COMMENT", 
                             "LINE_COMMENT" ];
    static ruleNames = [ "start", "optional_id", "id", "stm", "index_ref", 
                         "fn_return", "fn_stm", "exclude", "global_spread", 
                         "scoped_spread", "spread", "primitive_val", "primitive", 
                         "exvar", "variable", "param", "aparam", "aparams", 
                         "params", "query", "query_list", "obj_ref", "field_scoped", 
                         "field_global", "field", "new_object", "field_rename", 
                         "normal_fn", "map_fn", "fn", "normal_client_fn", 
                         "map_client_fn", "client_fn", "onresult" ];

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
	        this.state = 68;
	        this.optional_id();
	        this.state = 74;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===QMapParser.LEFT_BRACE) {
	            this.state = 69;
	            this.match(QMapParser.LEFT_BRACE);
	            this.state = 71;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << QMapParser.PERCENT) | (1 << QMapParser.LEFT_BRACKET) | (1 << QMapParser.EX_MARK) | (1 << QMapParser.TRIPLE_DOT) | (1 << QMapParser.AMPERSAND) | (1 << QMapParser.STRING) | (1 << QMapParser.ID))) !== 0)) {
	                this.state = 70;
	                this.query_list();
	            }

	            this.state = 73;
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
	        this.state = 77;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===QMapParser.STRING || _la===QMapParser.ID) {
	            this.state = 76;
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
	        this.state = 79;
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
	        this.state = 83;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 81;
	            this.field();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 82;
	            this.fn_stm();
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



	index_ref() {
	    let localctx = new Index_refContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, QMapParser.RULE_index_ref);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 85;
	        this.match(QMapParser.HASH);
	        this.state = 87;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===QMapParser.STRING || _la===QMapParser.ID) {
	            this.state = 86;
	            this.obj_ref();
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



	fn_return() {
	    let localctx = new Fn_returnContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, QMapParser.RULE_fn_return);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 89;
	        this.match(QMapParser.LEFT_BRACE);
	        this.state = 90;
	        this.query_list();
	        this.state = 91;
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



	fn_stm() {
	    let localctx = new Fn_stmContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, QMapParser.RULE_fn_stm);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 95;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 93;
	            this.fn();
	            break;

	        case 2:
	            this.state = 94;
	            this.client_fn();
	            break;

	        }
	        this.state = 101;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===QMapParser.HASH || _la===QMapParser.LEFT_BRACE) {
	            this.state = 98;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===QMapParser.HASH) {
	                this.state = 97;
	                this.index_ref();
	            }

	            this.state = 100;
	            this.fn_return();
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
	    this.enterRule(localctx, 14, QMapParser.RULE_exclude);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 103;
	        this.match(QMapParser.EX_MARK);
	        this.state = 104;
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
	    this.enterRule(localctx, 16, QMapParser.RULE_global_spread);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 106;
	        this.match(QMapParser.TRIPLE_DOT);
	        this.state = 107;
	        this.match(QMapParser.AMPERSAND);
	        this.state = 109;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===QMapParser.DOT) {
	            this.state = 108;
	            this.match(QMapParser.DOT);
	        }

	        this.state = 111;
	        this.id();
	        this.state = 116;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===QMapParser.DOT) {
	            this.state = 112;
	            this.match(QMapParser.DOT);
	            this.state = 113;
	            this.id();
	            this.state = 118;
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
	    this.enterRule(localctx, 18, QMapParser.RULE_scoped_spread);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 119;
	        this.match(QMapParser.TRIPLE_DOT);
	        this.state = 121;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,10,this._ctx);
	        if(la_===1) {
	            this.state = 120;
	            this.id();

	        }
	        this.state = 127;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===QMapParser.DOT) {
	            this.state = 123;
	            this.match(QMapParser.DOT);
	            this.state = 124;
	            this.id();
	            this.state = 129;
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
	    this.enterRule(localctx, 20, QMapParser.RULE_spread);
	    try {
	        this.state = 132;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,12,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 130;
	            this.global_spread();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 131;
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
	    this.enterRule(localctx, 22, QMapParser.RULE_primitive_val);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 134;
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
	    this.enterRule(localctx, 24, QMapParser.RULE_primitive);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 136;
	        this.match(QMapParser.AT);
	        this.state = 137;
	        this.match(QMapParser.LEFT_BRACE);
	        this.state = 138;
	        this.primitive_val();
	        this.state = 139;
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
	    this.enterRule(localctx, 26, QMapParser.RULE_exvar);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 141;
	        this.match(QMapParser.AT);
	        this.state = 142;
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
	    this.enterRule(localctx, 28, QMapParser.RULE_variable);
	    try {
	        this.state = 146;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,13,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 144;
	            this.exvar();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 145;
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
	    this.enterRule(localctx, 30, QMapParser.RULE_param);
	    try {
	        this.state = 150;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case QMapParser.AT:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 148;
	            this.variable();
	            break;
	        case QMapParser.PERCENT:
	        case QMapParser.LEFT_BRACKET:
	        case QMapParser.AMPERSAND:
	        case QMapParser.STRING:
	        case QMapParser.ID:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 149;
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
	    this.enterRule(localctx, 32, QMapParser.RULE_aparam);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 152;
	        this.match(QMapParser.AT);
	        this.state = 153;
	        this.match(QMapParser.LEFT_BRACKET);
	        this.state = 154;
	        this.param();
	        this.state = 155;
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
	    this.enterRule(localctx, 34, QMapParser.RULE_aparams);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 167;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,16,this._ctx);
	        if(la_===1) {
	            this.state = 157;
	            this.param();
	            this.state = 162;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,15,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 158;
	                    this.match(QMapParser.COMMA);
	                    this.state = 159;
	                    this.param(); 
	                }
	                this.state = 164;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,15,this._ctx);
	            }

	            this.state = 165;
	            this.match(QMapParser.COMMA);

	        }
	        this.state = 169;
	        this.aparam();
	        this.state = 179;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===QMapParser.COMMA) {
	            this.state = 170;
	            this.match(QMapParser.COMMA);
	            this.state = 171;
	            this.param();
	            this.state = 176;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===QMapParser.COMMA) {
	                this.state = 172;
	                this.match(QMapParser.COMMA);
	                this.state = 173;
	                this.param();
	                this.state = 178;
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
	    this.enterRule(localctx, 36, QMapParser.RULE_params);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 181;
	        this.param();
	        this.state = 186;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===QMapParser.COMMA) {
	            this.state = 182;
	            this.match(QMapParser.COMMA);
	            this.state = 183;
	            this.param();
	            this.state = 188;
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
	    this.enterRule(localctx, 38, QMapParser.RULE_query);
	    try {
	        this.state = 194;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,20,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 189;
	            this.stm();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 190;
	            this.exclude();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 191;
	            this.spread();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 192;
	            this.field_rename();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 193;
	            this.new_object();
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
	    this.enterRule(localctx, 40, QMapParser.RULE_query_list);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 196;
	        this.query();
	        this.state = 203;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,22,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 198;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                if(_la===QMapParser.COMMA || _la===QMapParser.SEMICOLON) {
	                    this.state = 197;
	                    _la = this._input.LA(1);
	                    if(!(_la===QMapParser.COMMA || _la===QMapParser.SEMICOLON)) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                }

	                this.state = 200;
	                this.query(); 
	            }
	            this.state = 205;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,22,this._ctx);
	        }

	        this.state = 207;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===QMapParser.COMMA || _la===QMapParser.SEMICOLON) {
	            this.state = 206;
	            _la = this._input.LA(1);
	            if(!(_la===QMapParser.COMMA || _la===QMapParser.SEMICOLON)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
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



	obj_ref() {
	    let localctx = new Obj_refContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 42, QMapParser.RULE_obj_ref);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 209;
	        this.id();
	        this.state = 214;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===QMapParser.DOT) {
	            this.state = 210;
	            this.match(QMapParser.DOT);
	            this.state = 211;
	            this.id();
	            this.state = 216;
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



	field_scoped() {
	    let localctx = new Field_scopedContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 44, QMapParser.RULE_field_scoped);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 217;
	        this.obj_ref();
	        this.state = 222;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===QMapParser.LEFT_BRACE) {
	            this.state = 218;
	            this.match(QMapParser.LEFT_BRACE);
	            this.state = 219;
	            this.query_list();
	            this.state = 220;
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



	field_global() {
	    let localctx = new Field_globalContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 46, QMapParser.RULE_field_global);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 224;
	        this.match(QMapParser.AMPERSAND);
	        this.state = 225;
	        this.match(QMapParser.DOT);
	        this.state = 226;
	        this.field_scoped();
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
	    this.enterRule(localctx, 48, QMapParser.RULE_field);
	    try {
	        this.state = 231;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case QMapParser.AMPERSAND:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 228;
	            this.field_global();
	            break;
	        case QMapParser.STRING:
	        case QMapParser.ID:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 229;
	            this.field_scoped();
	            break;
	        case QMapParser.PERCENT:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 230;
	            this.onresult();
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



	new_object() {
	    let localctx = new New_objectContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 50, QMapParser.RULE_new_object);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 233;
	        this.id();
	        this.state = 234;
	        this.match(QMapParser.COLON);
	        this.state = 235;
	        this.match(QMapParser.LEFT_BRACE);
	        this.state = 236;
	        this.query_list();
	        this.state = 237;
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



	field_rename() {
	    let localctx = new Field_renameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 52, QMapParser.RULE_field_rename);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 239;
	        this.id();
	        this.state = 240;
	        this.match(QMapParser.COLON);
	        this.state = 241;
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
	    this.enterRule(localctx, 54, QMapParser.RULE_normal_fn);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 243;
	        this.match(QMapParser.ID);
	        this.state = 244;
	        this.match(QMapParser.LEFT_PAREN);
	        this.state = 247;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,27,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 245;
	            this.params();
	            break;

	        case 2:
	            this.state = 246;
	            this.aparams();
	            break;

	        }
	        this.state = 249;
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
	    this.enterRule(localctx, 56, QMapParser.RULE_map_fn);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 251;
	        this.match(QMapParser.LEFT_BRACKET);
	        this.state = 252;
	        this.match(QMapParser.ID);
	        this.state = 253;
	        this.match(QMapParser.LEFT_PAREN);
	        this.state = 254;
	        this.params();
	        this.state = 255;
	        this.match(QMapParser.RIGHT_PAREN);
	        this.state = 256;
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
	    this.enterRule(localctx, 58, QMapParser.RULE_fn);
	    try {
	        this.state = 260;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case QMapParser.ID:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 258;
	            this.normal_fn();
	            break;
	        case QMapParser.LEFT_BRACKET:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 259;
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
	    this.enterRule(localctx, 60, QMapParser.RULE_normal_client_fn);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 262;
	        this.match(QMapParser.ID);
	        this.state = 263;
	        this.match(QMapParser.EX_MARK);
	        this.state = 264;
	        this.match(QMapParser.LEFT_PAREN);
	        this.state = 267;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,29,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 265;
	            this.params();
	            break;

	        case 2:
	            this.state = 266;
	            this.aparams();
	            break;

	        }
	        this.state = 269;
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
	    this.enterRule(localctx, 62, QMapParser.RULE_map_client_fn);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 271;
	        this.match(QMapParser.LEFT_BRACKET);
	        this.state = 272;
	        this.match(QMapParser.ID);
	        this.state = 273;
	        this.match(QMapParser.EX_MARK);
	        this.state = 274;
	        this.match(QMapParser.LEFT_PAREN);
	        this.state = 275;
	        this.params();
	        this.state = 276;
	        this.match(QMapParser.RIGHT_PAREN);
	        this.state = 277;
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
	    this.enterRule(localctx, 64, QMapParser.RULE_client_fn);
	    try {
	        this.state = 281;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case QMapParser.ID:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 279;
	            this.normal_client_fn();
	            break;
	        case QMapParser.LEFT_BRACKET:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 280;
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



	onresult() {
	    let localctx = new OnresultContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 66, QMapParser.RULE_onresult);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 283;
	        this.match(QMapParser.PERCENT);
	        this.state = 284;
	        this.match(QMapParser.LEFT_BRACE);
	        this.state = 285;
	        this.stm();
	        this.state = 286;
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


}

QMapParser.EOF = antlr4.Token.EOF;
QMapParser.PERCENT = 1;
QMapParser.AT = 2;
QMapParser.HASH = 3;
QMapParser.LEFT_BRACKET = 4;
QMapParser.RIGHT_BRACKET = 5;
QMapParser.LEFT_BRACE = 6;
QMapParser.RIGHT_BRACE = 7;
QMapParser.EX_MARK = 8;
QMapParser.COLON = 9;
QMapParser.COMMA = 10;
QMapParser.SEMICOLON = 11;
QMapParser.TRIPLE_DOT = 12;
QMapParser.DOT = 13;
QMapParser.LEFT_PAREN = 14;
QMapParser.RIGHT_PAREN = 15;
QMapParser.AMPERSAND = 16;
QMapParser.STRING = 17;
QMapParser.BOOL = 18;
QMapParser.NUMBER = 19;
QMapParser.ID = 20;
QMapParser.WS = 21;
QMapParser.BLOCK_COMMENT = 22;
QMapParser.LINE_COMMENT = 23;

QMapParser.RULE_start = 0;
QMapParser.RULE_optional_id = 1;
QMapParser.RULE_id = 2;
QMapParser.RULE_stm = 3;
QMapParser.RULE_index_ref = 4;
QMapParser.RULE_fn_return = 5;
QMapParser.RULE_fn_stm = 6;
QMapParser.RULE_exclude = 7;
QMapParser.RULE_global_spread = 8;
QMapParser.RULE_scoped_spread = 9;
QMapParser.RULE_spread = 10;
QMapParser.RULE_primitive_val = 11;
QMapParser.RULE_primitive = 12;
QMapParser.RULE_exvar = 13;
QMapParser.RULE_variable = 14;
QMapParser.RULE_param = 15;
QMapParser.RULE_aparam = 16;
QMapParser.RULE_aparams = 17;
QMapParser.RULE_params = 18;
QMapParser.RULE_query = 19;
QMapParser.RULE_query_list = 20;
QMapParser.RULE_obj_ref = 21;
QMapParser.RULE_field_scoped = 22;
QMapParser.RULE_field_global = 23;
QMapParser.RULE_field = 24;
QMapParser.RULE_new_object = 25;
QMapParser.RULE_field_rename = 26;
QMapParser.RULE_normal_fn = 27;
QMapParser.RULE_map_fn = 28;
QMapParser.RULE_fn = 29;
QMapParser.RULE_normal_client_fn = 30;
QMapParser.RULE_map_client_fn = 31;
QMapParser.RULE_client_fn = 32;
QMapParser.RULE_onresult = 33;

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

	fn_stm() {
	    return this.getTypedRuleContext(Fn_stmContext,0);
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



class Index_refContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = QMapParser.RULE_index_ref;
    }

	HASH() {
	    return this.getToken(QMapParser.HASH, 0);
	};

	obj_ref() {
	    return this.getTypedRuleContext(Obj_refContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof QMapListener ) {
	        listener.enterIndex_ref(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof QMapListener ) {
	        listener.exitIndex_ref(this);
		}
	}


}



class Fn_returnContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = QMapParser.RULE_fn_return;
    }

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
	        listener.enterFn_return(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof QMapListener ) {
	        listener.exitFn_return(this);
		}
	}


}



class Fn_stmContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = QMapParser.RULE_fn_stm;
    }

	fn() {
	    return this.getTypedRuleContext(FnContext,0);
	};

	client_fn() {
	    return this.getTypedRuleContext(Client_fnContext,0);
	};

	fn_return() {
	    return this.getTypedRuleContext(Fn_returnContext,0);
	};

	index_ref() {
	    return this.getTypedRuleContext(Index_refContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof QMapListener ) {
	        listener.enterFn_stm(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof QMapListener ) {
	        listener.exitFn_stm(this);
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

	new_object() {
	    return this.getTypedRuleContext(New_objectContext,0);
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


	SEMICOLON = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(QMapParser.SEMICOLON);
	    } else {
	        return this.getToken(QMapParser.SEMICOLON, i);
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



class Field_scopedContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = QMapParser.RULE_field_scoped;
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
	        listener.enterField_scoped(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof QMapListener ) {
	        listener.exitField_scoped(this);
		}
	}


}



class Field_globalContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = QMapParser.RULE_field_global;
    }

	AMPERSAND() {
	    return this.getToken(QMapParser.AMPERSAND, 0);
	};

	DOT() {
	    return this.getToken(QMapParser.DOT, 0);
	};

	field_scoped() {
	    return this.getTypedRuleContext(Field_scopedContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof QMapListener ) {
	        listener.enterField_global(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof QMapListener ) {
	        listener.exitField_global(this);
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

	field_global() {
	    return this.getTypedRuleContext(Field_globalContext,0);
	};

	field_scoped() {
	    return this.getTypedRuleContext(Field_scopedContext,0);
	};

	onresult() {
	    return this.getTypedRuleContext(OnresultContext,0);
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



class New_objectContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = QMapParser.RULE_new_object;
    }

	id() {
	    return this.getTypedRuleContext(IdContext,0);
	};

	COLON() {
	    return this.getToken(QMapParser.COLON, 0);
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
	        listener.enterNew_object(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof QMapListener ) {
	        listener.exitNew_object(this);
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



class OnresultContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = QMapParser.RULE_onresult;
    }

	PERCENT() {
	    return this.getToken(QMapParser.PERCENT, 0);
	};

	LEFT_BRACE() {
	    return this.getToken(QMapParser.LEFT_BRACE, 0);
	};

	stm() {
	    return this.getTypedRuleContext(StmContext,0);
	};

	RIGHT_BRACE() {
	    return this.getToken(QMapParser.RIGHT_BRACE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof QMapListener ) {
	        listener.enterOnresult(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof QMapListener ) {
	        listener.exitOnresult(this);
		}
	}


}




QMapParser.StartContext = StartContext; 
QMapParser.Optional_idContext = Optional_idContext; 
QMapParser.IdContext = IdContext; 
QMapParser.StmContext = StmContext; 
QMapParser.Index_refContext = Index_refContext; 
QMapParser.Fn_returnContext = Fn_returnContext; 
QMapParser.Fn_stmContext = Fn_stmContext; 
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
QMapParser.Field_scopedContext = Field_scopedContext; 
QMapParser.Field_globalContext = Field_globalContext; 
QMapParser.FieldContext = FieldContext; 
QMapParser.New_objectContext = New_objectContext; 
QMapParser.Field_renameContext = Field_renameContext; 
QMapParser.Normal_fnContext = Normal_fnContext; 
QMapParser.Map_fnContext = Map_fnContext; 
QMapParser.FnContext = FnContext; 
QMapParser.Normal_client_fnContext = Normal_client_fnContext; 
QMapParser.Map_client_fnContext = Map_client_fnContext; 
QMapParser.Client_fnContext = Client_fnContext; 
QMapParser.OnresultContext = OnresultContext; 
