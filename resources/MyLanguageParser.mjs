// Generated from MyLanguage.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import MyLanguageListener from './MyLanguageListener.mjs';
const serializedATN = [4,1,33,123,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,1,0,4,0,24,8,0,11,0,
12,0,25,1,1,1,1,1,1,1,1,1,1,3,1,33,8,1,1,2,1,2,1,2,1,2,1,3,1,3,1,3,1,3,1,
3,1,4,1,4,1,4,1,4,1,4,1,4,5,4,50,8,4,10,4,12,4,53,9,4,1,4,1,4,1,4,1,4,5,
4,59,8,4,10,4,12,4,62,9,4,1,4,3,4,65,8,4,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,
5,5,75,8,5,10,5,12,5,78,9,5,1,5,1,5,1,6,1,6,1,6,1,6,1,6,1,6,5,6,88,8,6,10,
6,12,6,91,9,6,1,6,1,6,1,7,1,7,1,7,1,7,3,7,99,8,7,1,7,1,7,1,7,1,7,5,7,105,
8,7,10,7,12,7,108,9,7,1,8,1,8,1,8,1,8,1,8,1,8,1,8,3,8,117,8,8,1,9,1,9,1,
10,1,10,1,10,0,1,14,11,0,2,4,6,8,10,12,14,16,18,20,0,3,1,0,28,30,2,0,1,1,
10,24,1,0,25,27,126,0,23,1,0,0,0,2,32,1,0,0,0,4,34,1,0,0,0,6,38,1,0,0,0,
8,43,1,0,0,0,10,66,1,0,0,0,12,81,1,0,0,0,14,98,1,0,0,0,16,116,1,0,0,0,18,
118,1,0,0,0,20,120,1,0,0,0,22,24,3,2,1,0,23,22,1,0,0,0,24,25,1,0,0,0,25,
23,1,0,0,0,25,26,1,0,0,0,26,1,1,0,0,0,27,33,3,4,2,0,28,33,3,6,3,0,29,33,
3,8,4,0,30,33,3,10,5,0,31,33,3,12,6,0,32,27,1,0,0,0,32,28,1,0,0,0,32,29,
1,0,0,0,32,30,1,0,0,0,32,31,1,0,0,0,33,3,1,0,0,0,34,35,5,28,0,0,35,36,5,
1,0,0,36,37,3,14,7,0,37,5,1,0,0,0,38,39,5,2,0,0,39,40,5,3,0,0,40,41,7,0,
0,0,41,42,5,4,0,0,42,7,1,0,0,0,43,44,5,5,0,0,44,45,5,3,0,0,45,46,3,14,7,
0,46,47,5,4,0,0,47,51,5,31,0,0,48,50,3,2,1,0,49,48,1,0,0,0,50,53,1,0,0,0,
51,49,1,0,0,0,51,52,1,0,0,0,52,54,1,0,0,0,53,51,1,0,0,0,54,64,5,32,0,0,55,
56,5,6,0,0,56,60,5,31,0,0,57,59,3,2,1,0,58,57,1,0,0,0,59,62,1,0,0,0,60,58,
1,0,0,0,60,61,1,0,0,0,61,63,1,0,0,0,62,60,1,0,0,0,63,65,5,32,0,0,64,55,1,
0,0,0,64,65,1,0,0,0,65,9,1,0,0,0,66,67,5,7,0,0,67,68,5,3,0,0,68,69,5,28,
0,0,69,70,5,8,0,0,70,71,5,28,0,0,71,72,5,4,0,0,72,76,5,31,0,0,73,75,3,2,
1,0,74,73,1,0,0,0,75,78,1,0,0,0,76,74,1,0,0,0,76,77,1,0,0,0,77,79,1,0,0,
0,78,76,1,0,0,0,79,80,5,32,0,0,80,11,1,0,0,0,81,82,5,9,0,0,82,83,5,3,0,0,
83,84,3,14,7,0,84,85,5,4,0,0,85,89,5,31,0,0,86,88,3,2,1,0,87,86,1,0,0,0,
88,91,1,0,0,0,89,87,1,0,0,0,89,90,1,0,0,0,90,92,1,0,0,0,91,89,1,0,0,0,92,
93,5,32,0,0,93,13,1,0,0,0,94,95,6,7,-1,0,95,99,3,16,8,0,96,97,5,28,0,0,97,
99,3,20,10,0,98,94,1,0,0,0,98,96,1,0,0,0,99,106,1,0,0,0,100,101,10,2,0,0,
101,102,3,18,9,0,102,103,3,14,7,3,103,105,1,0,0,0,104,100,1,0,0,0,105,108,
1,0,0,0,106,104,1,0,0,0,106,107,1,0,0,0,107,15,1,0,0,0,108,106,1,0,0,0,109,
117,5,28,0,0,110,117,5,29,0,0,111,117,5,30,0,0,112,113,5,3,0,0,113,114,3,
14,7,0,114,115,5,4,0,0,115,117,1,0,0,0,116,109,1,0,0,0,116,110,1,0,0,0,116,
111,1,0,0,0,116,112,1,0,0,0,117,17,1,0,0,0,118,119,7,1,0,0,119,19,1,0,0,
0,120,121,7,2,0,0,121,21,1,0,0,0,10,25,32,51,60,64,76,89,98,106,116];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class MyLanguageParser extends antlr4.Parser {

    static grammarFileName = "MyLanguage.g4";
    static literalNames = [ null, "'='", "'echo'", "'('", "')'", "'if'", 
                            "'else'", "'foreach'", "'as'", "'while'", "'+'", 
                            "'-'", "'*'", "'/'", "'.='", "'.'", "'%'", "'=='", 
                            "'!='", "'<'", "'>'", "'<='", "'>='", "'&&'", 
                            "'||'", "'++'", "'--'", "'!'", null, null, null, 
                            "'{'", "'}'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, "Identificador", "ConstanteNumerica", 
                             "StringValue", "LCURLY", "RCURLY", "WS" ];
    static ruleNames = [ "program", "statement", "variableDeclaration", 
                         "printStatement", "ifStatement", "forStatement", 
                         "whileStatement", "expression", "primary", "binaryOperator", 
                         "unaryOperator" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = MyLanguageParser.ruleNames;
        this.literalNames = MyLanguageParser.literalNames;
        this.symbolicNames = MyLanguageParser.symbolicNames;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 7:
    	    		return this.expression_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    expression_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 2);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	program() {
	    let localctx = new ProgramContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, MyLanguageParser.RULE_program);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 23; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 22;
	            this.statement();
	            this.state = 25; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 268436132) !== 0));
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



	statement() {
	    let localctx = new StatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, MyLanguageParser.RULE_statement);
	    try {
	        this.state = 32;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 28:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 27;
	            this.variableDeclaration();
	            break;
	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 28;
	            this.printStatement();
	            break;
	        case 5:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 29;
	            this.ifStatement();
	            break;
	        case 7:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 30;
	            this.forStatement();
	            break;
	        case 9:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 31;
	            this.whileStatement();
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



	variableDeclaration() {
	    let localctx = new VariableDeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, MyLanguageParser.RULE_variableDeclaration);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 34;
	        this.match(MyLanguageParser.Identificador);
	        this.state = 35;
	        this.match(MyLanguageParser.T__0);
	        this.state = 36;
	        this.expression(0);
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



	printStatement() {
	    let localctx = new PrintStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, MyLanguageParser.RULE_printStatement);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 38;
	        this.match(MyLanguageParser.T__1);
	        this.state = 39;
	        this.match(MyLanguageParser.T__2);
	        this.state = 40;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 1879048192) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 41;
	        this.match(MyLanguageParser.T__3);
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



	ifStatement() {
	    let localctx = new IfStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, MyLanguageParser.RULE_ifStatement);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 43;
	        this.match(MyLanguageParser.T__4);
	        this.state = 44;
	        this.match(MyLanguageParser.T__2);
	        this.state = 45;
	        this.expression(0);
	        this.state = 46;
	        this.match(MyLanguageParser.T__3);
	        this.state = 47;
	        this.match(MyLanguageParser.LCURLY);
	        this.state = 51;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 268436132) !== 0)) {
	            this.state = 48;
	            this.statement();
	            this.state = 53;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 54;
	        this.match(MyLanguageParser.RCURLY);
	        this.state = 64;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===6) {
	            this.state = 55;
	            this.match(MyLanguageParser.T__5);
	            this.state = 56;
	            this.match(MyLanguageParser.LCURLY);
	            this.state = 60;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while((((_la) & ~0x1f) === 0 && ((1 << _la) & 268436132) !== 0)) {
	                this.state = 57;
	                this.statement();
	                this.state = 62;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 63;
	            this.match(MyLanguageParser.RCURLY);
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



	forStatement() {
	    let localctx = new ForStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, MyLanguageParser.RULE_forStatement);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 66;
	        this.match(MyLanguageParser.T__6);
	        this.state = 67;
	        this.match(MyLanguageParser.T__2);
	        this.state = 68;
	        this.match(MyLanguageParser.Identificador);
	        this.state = 69;
	        this.match(MyLanguageParser.T__7);
	        this.state = 70;
	        this.match(MyLanguageParser.Identificador);
	        this.state = 71;
	        this.match(MyLanguageParser.T__3);
	        this.state = 72;
	        this.match(MyLanguageParser.LCURLY);
	        this.state = 76;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 268436132) !== 0)) {
	            this.state = 73;
	            this.statement();
	            this.state = 78;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 79;
	        this.match(MyLanguageParser.RCURLY);
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



	whileStatement() {
	    let localctx = new WhileStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, MyLanguageParser.RULE_whileStatement);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 81;
	        this.match(MyLanguageParser.T__8);
	        this.state = 82;
	        this.match(MyLanguageParser.T__2);
	        this.state = 83;
	        this.expression(0);
	        this.state = 84;
	        this.match(MyLanguageParser.T__3);
	        this.state = 85;
	        this.match(MyLanguageParser.LCURLY);
	        this.state = 89;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 268436132) !== 0)) {
	            this.state = 86;
	            this.statement();
	            this.state = 91;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 92;
	        this.match(MyLanguageParser.RCURLY);
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


	expression(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ExpressionContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 14;
	    this.enterRecursionRule(localctx, 14, MyLanguageParser.RULE_expression, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 98;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 95;
	            this.primary();
	            break;

	        case 2:
	            this.state = 96;
	            this.match(MyLanguageParser.Identificador);
	            this.state = 97;
	            this.unaryOperator();
	            break;

	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 106;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,8,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new ExpressionContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, MyLanguageParser.RULE_expression);
	                this.state = 100;
	                if (!( this.precpred(this._ctx, 2))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                }
	                this.state = 101;
	                this.binaryOperator();
	                this.state = 102;
	                this.expression(3); 
	            }
	            this.state = 108;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,8,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}



	primary() {
	    let localctx = new PrimaryContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, MyLanguageParser.RULE_primary);
	    try {
	        this.state = 116;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 28:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 109;
	            this.match(MyLanguageParser.Identificador);
	            break;
	        case 29:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 110;
	            this.match(MyLanguageParser.ConstanteNumerica);
	            break;
	        case 30:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 111;
	            this.match(MyLanguageParser.StringValue);
	            break;
	        case 3:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 112;
	            this.match(MyLanguageParser.T__2);
	            this.state = 113;
	            this.expression(0);
	            this.state = 114;
	            this.match(MyLanguageParser.T__3);
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



	binaryOperator() {
	    let localctx = new BinaryOperatorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, MyLanguageParser.RULE_binaryOperator);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 118;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 33553410) !== 0))) {
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



	unaryOperator() {
	    let localctx = new UnaryOperatorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, MyLanguageParser.RULE_unaryOperator);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 120;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 234881024) !== 0))) {
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


}

MyLanguageParser.EOF = antlr4.Token.EOF;
MyLanguageParser.T__0 = 1;
MyLanguageParser.T__1 = 2;
MyLanguageParser.T__2 = 3;
MyLanguageParser.T__3 = 4;
MyLanguageParser.T__4 = 5;
MyLanguageParser.T__5 = 6;
MyLanguageParser.T__6 = 7;
MyLanguageParser.T__7 = 8;
MyLanguageParser.T__8 = 9;
MyLanguageParser.T__9 = 10;
MyLanguageParser.T__10 = 11;
MyLanguageParser.T__11 = 12;
MyLanguageParser.T__12 = 13;
MyLanguageParser.T__13 = 14;
MyLanguageParser.T__14 = 15;
MyLanguageParser.T__15 = 16;
MyLanguageParser.T__16 = 17;
MyLanguageParser.T__17 = 18;
MyLanguageParser.T__18 = 19;
MyLanguageParser.T__19 = 20;
MyLanguageParser.T__20 = 21;
MyLanguageParser.T__21 = 22;
MyLanguageParser.T__22 = 23;
MyLanguageParser.T__23 = 24;
MyLanguageParser.T__24 = 25;
MyLanguageParser.T__25 = 26;
MyLanguageParser.T__26 = 27;
MyLanguageParser.Identificador = 28;
MyLanguageParser.ConstanteNumerica = 29;
MyLanguageParser.StringValue = 30;
MyLanguageParser.LCURLY = 31;
MyLanguageParser.RCURLY = 32;
MyLanguageParser.WS = 33;

MyLanguageParser.RULE_program = 0;
MyLanguageParser.RULE_statement = 1;
MyLanguageParser.RULE_variableDeclaration = 2;
MyLanguageParser.RULE_printStatement = 3;
MyLanguageParser.RULE_ifStatement = 4;
MyLanguageParser.RULE_forStatement = 5;
MyLanguageParser.RULE_whileStatement = 6;
MyLanguageParser.RULE_expression = 7;
MyLanguageParser.RULE_primary = 8;
MyLanguageParser.RULE_binaryOperator = 9;
MyLanguageParser.RULE_unaryOperator = 10;

class ProgramContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MyLanguageParser.RULE_program;
    }

	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof MyLanguageListener ) {
	        listener.enterProgram(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MyLanguageListener ) {
	        listener.exitProgram(this);
		}
	}


}



class StatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MyLanguageParser.RULE_statement;
    }

	variableDeclaration() {
	    return this.getTypedRuleContext(VariableDeclarationContext,0);
	};

	printStatement() {
	    return this.getTypedRuleContext(PrintStatementContext,0);
	};

	ifStatement() {
	    return this.getTypedRuleContext(IfStatementContext,0);
	};

	forStatement() {
	    return this.getTypedRuleContext(ForStatementContext,0);
	};

	whileStatement() {
	    return this.getTypedRuleContext(WhileStatementContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MyLanguageListener ) {
	        listener.enterStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MyLanguageListener ) {
	        listener.exitStatement(this);
		}
	}


}



class VariableDeclarationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MyLanguageParser.RULE_variableDeclaration;
    }

	Identificador() {
	    return this.getToken(MyLanguageParser.Identificador, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MyLanguageListener ) {
	        listener.enterVariableDeclaration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MyLanguageListener ) {
	        listener.exitVariableDeclaration(this);
		}
	}


}



class PrintStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MyLanguageParser.RULE_printStatement;
    }

	StringValue() {
	    return this.getToken(MyLanguageParser.StringValue, 0);
	};

	Identificador() {
	    return this.getToken(MyLanguageParser.Identificador, 0);
	};

	ConstanteNumerica() {
	    return this.getToken(MyLanguageParser.ConstanteNumerica, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MyLanguageListener ) {
	        listener.enterPrintStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MyLanguageListener ) {
	        listener.exitPrintStatement(this);
		}
	}


}



class IfStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MyLanguageParser.RULE_ifStatement;
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	LCURLY = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MyLanguageParser.LCURLY);
	    } else {
	        return this.getToken(MyLanguageParser.LCURLY, i);
	    }
	};


	RCURLY = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MyLanguageParser.RCURLY);
	    } else {
	        return this.getToken(MyLanguageParser.RCURLY, i);
	    }
	};


	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof MyLanguageListener ) {
	        listener.enterIfStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MyLanguageListener ) {
	        listener.exitIfStatement(this);
		}
	}


}



class ForStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MyLanguageParser.RULE_forStatement;
    }

	Identificador = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MyLanguageParser.Identificador);
	    } else {
	        return this.getToken(MyLanguageParser.Identificador, i);
	    }
	};


	LCURLY() {
	    return this.getToken(MyLanguageParser.LCURLY, 0);
	};

	RCURLY() {
	    return this.getToken(MyLanguageParser.RCURLY, 0);
	};

	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof MyLanguageListener ) {
	        listener.enterForStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MyLanguageListener ) {
	        listener.exitForStatement(this);
		}
	}


}



class WhileStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MyLanguageParser.RULE_whileStatement;
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	LCURLY() {
	    return this.getToken(MyLanguageParser.LCURLY, 0);
	};

	RCURLY() {
	    return this.getToken(MyLanguageParser.RCURLY, 0);
	};

	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof MyLanguageListener ) {
	        listener.enterWhileStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MyLanguageListener ) {
	        listener.exitWhileStatement(this);
		}
	}


}



class ExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MyLanguageParser.RULE_expression;
    }

	primary() {
	    return this.getTypedRuleContext(PrimaryContext,0);
	};

	Identificador() {
	    return this.getToken(MyLanguageParser.Identificador, 0);
	};

	unaryOperator() {
	    return this.getTypedRuleContext(UnaryOperatorContext,0);
	};

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	binaryOperator() {
	    return this.getTypedRuleContext(BinaryOperatorContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MyLanguageListener ) {
	        listener.enterExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MyLanguageListener ) {
	        listener.exitExpression(this);
		}
	}


}



class PrimaryContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MyLanguageParser.RULE_primary;
    }

	Identificador() {
	    return this.getToken(MyLanguageParser.Identificador, 0);
	};

	ConstanteNumerica() {
	    return this.getToken(MyLanguageParser.ConstanteNumerica, 0);
	};

	StringValue() {
	    return this.getToken(MyLanguageParser.StringValue, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MyLanguageListener ) {
	        listener.enterPrimary(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MyLanguageListener ) {
	        listener.exitPrimary(this);
		}
	}


}



class BinaryOperatorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MyLanguageParser.RULE_binaryOperator;
    }


	enterRule(listener) {
	    if(listener instanceof MyLanguageListener ) {
	        listener.enterBinaryOperator(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MyLanguageListener ) {
	        listener.exitBinaryOperator(this);
		}
	}


}



class UnaryOperatorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MyLanguageParser.RULE_unaryOperator;
    }


	enterRule(listener) {
	    if(listener instanceof MyLanguageListener ) {
	        listener.enterUnaryOperator(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MyLanguageListener ) {
	        listener.exitUnaryOperator(this);
		}
	}


}




MyLanguageParser.ProgramContext = ProgramContext; 
MyLanguageParser.StatementContext = StatementContext; 
MyLanguageParser.VariableDeclarationContext = VariableDeclarationContext; 
MyLanguageParser.PrintStatementContext = PrintStatementContext; 
MyLanguageParser.IfStatementContext = IfStatementContext; 
MyLanguageParser.ForStatementContext = ForStatementContext; 
MyLanguageParser.WhileStatementContext = WhileStatementContext; 
MyLanguageParser.ExpressionContext = ExpressionContext; 
MyLanguageParser.PrimaryContext = PrimaryContext; 
MyLanguageParser.BinaryOperatorContext = BinaryOperatorContext; 
MyLanguageParser.UnaryOperatorContext = UnaryOperatorContext; 

export {MyLanguageParser}