// Generated from /home/gbenm/code/pumkat/qMap/antlr4/qMap.g4 by ANTLR 4.10
// jshint ignore: start
import antlr4 from 'antlr4';
const serializedATN = [4,1,12,29,2,0,7,0,2,1,7,1,1,0,3,0,6,8,0,1,0,1,0,5,
0,10,8,0,10,0,12,0,13,9,0,1,0,3,0,16,8,0,1,1,1,1,1,1,5,1,21,8,1,10,1,12,
1,24,9,1,1,1,3,1,27,8,1,1,1,0,0,2,0,2,0,0,31,0,5,1,0,0,0,2,17,1,0,0,0,4,
6,5,11,0,0,5,4,1,0,0,0,5,6,1,0,0,0,6,15,1,0,0,0,7,11,5,1,0,0,8,10,3,2,1,
0,9,8,1,0,0,0,10,13,1,0,0,0,11,9,1,0,0,0,11,12,1,0,0,0,12,14,1,0,0,0,13,
11,1,0,0,0,14,16,5,2,0,0,15,7,1,0,0,0,15,16,1,0,0,0,16,1,1,0,0,0,17,26,5,
11,0,0,18,22,5,1,0,0,19,21,3,2,1,0,20,19,1,0,0,0,21,24,1,0,0,0,22,20,1,0,
0,0,22,23,1,0,0,0,23,25,1,0,0,0,24,22,1,0,0,0,25,27,5,2,0,0,26,18,1,0,0,
0,26,27,1,0,0,0,27,3,1,0,0,0,5,5,11,15,22,26];


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
    static ruleNames = [ "start", "query_field" ];

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
	        this.state = 5;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===qMapParser.ID) {
	            this.state = 4;
	            this.match(qMapParser.ID);
	        }

	        this.state = 15;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===qMapParser.LEFT_BRACKET) {
	            this.state = 7;
	            this.match(qMapParser.LEFT_BRACKET);
	            this.state = 11;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===qMapParser.ID) {
	                this.state = 8;
	                this.query_field();
	                this.state = 13;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 14;
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



	query_field() {
	    let localctx = new Query_fieldContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, qMapParser.RULE_query_field);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 17;
	        this.match(qMapParser.ID);
	        this.state = 26;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===qMapParser.LEFT_BRACKET) {
	            this.state = 18;
	            this.match(qMapParser.LEFT_BRACKET);
	            this.state = 22;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===qMapParser.ID) {
	                this.state = 19;
	                this.query_field();
	                this.state = 24;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 25;
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
qMapParser.RULE_query_field = 1;

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
    }

	ID() {
	    return this.getToken(qMapParser.ID, 0);
	};

	LEFT_BRACKET() {
	    return this.getToken(qMapParser.LEFT_BRACKET, 0);
	};

	RIGHT_BRACKET() {
	    return this.getToken(qMapParser.RIGHT_BRACKET, 0);
	};

	query_field = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Query_fieldContext);
	    } else {
	        return this.getTypedRuleContext(Query_fieldContext,i);
	    }
	};


}



class Query_fieldContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = qMapParser.RULE_query_field;
    }

	ID() {
	    return this.getToken(qMapParser.ID, 0);
	};

	LEFT_BRACKET() {
	    return this.getToken(qMapParser.LEFT_BRACKET, 0);
	};

	RIGHT_BRACKET() {
	    return this.getToken(qMapParser.RIGHT_BRACKET, 0);
	};

	query_field = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Query_fieldContext);
	    } else {
	        return this.getTypedRuleContext(Query_fieldContext,i);
	    }
	};


}




qMapParser.StartContext = StartContext; 
qMapParser.Query_fieldContext = Query_fieldContext; 
