grammar MyLanguage;

program
    : (statement)+
    ;

statement
    : variableDeclaration
    | printStatement
    | ifStatement
    | forStatement
    | whileStatement
    ;

variableDeclaration
    : Identificador '=' expression
    ;

printStatement
    : 'echo' '(' (StringValue | Identificador | ConstanteNumerica) (. (StringValue | Identificador | ConstanteNumerica))? ')'
    ;

ifStatement
    : 'if' '(' expression ')' '{' statement* '}' ('else' '{' statement* '}')?
    ;

forStatement
    : 'foreach' '(' Identificador 'as' Identificador ')' '{' statement* '}'
    ;

whileStatement
    : 'while' '(' expression ')' '{' statement* '}'
    ;

expression
    : primary
    | expression binaryOperator expression
    | Identificador unaryOperator
    ;


primary
    : Identificador
    | ConstanteNumerica
    | StringValue
    | '(' expression ')'
    ;

binaryOperator
    : '+' | '-' | '*' | '/' | '=' | '.=' | '.' | '%' | '==' | '!=' | '<' | '>' | '<=' | '>=' | '&&' | '||'
    ;

unaryOperator
    : '++' | '--' | '!'
    ;

Identificador
    : '$' [a-zA-Z_] [a-zA-Z_0-9]*
    ;

ConstanteNumerica
    : [0-9]+ ('.' [0-9]+)?
    ;

StringValue
    : '"' .*? '"'
    ;

LCURLY : '{';
RCURLY : '}';

WS
    : [ \t\r\n]+ -> skip
    ;