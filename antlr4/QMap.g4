grammar QMap;

start: optional_id (LEFT_BRACE query_list? RIGHT_BRACE)?;

optional_id: id?;

id: ID | STRING;

stm: field | fn | client_fn;

exclude: EX_MARK id;

global_spread: TRIPLE_DOT AMPERSAND id (DOT id)*;

scoped_spread: TRIPLE_DOT id? (DOT id)*;

spread: global_spread | scoped_spread;

variable: AT ID;

param: variable | stm;
aparam: AT LEFT_BRACKET param RIGHT_BRACKET;

aparams: (param (COMMA param)* COMMA)? aparam (COMMA param (COMMA param)*)?;
params: param (COMMA param)*;

query
    : stm
    | exclude
    | spread
    | field_rename
;

query_list: query (COMMA query)* COMMA?;

obj_ref: id (DOT id)*;

field: obj_ref (LEFT_BRACE query_list RIGHT_BRACE)?;

field_rename: id COLON stm;

normal_fn: ID LEFT_PAREN (params | aparams) RIGHT_PAREN;
map_fn: LEFT_BRACKET ID LEFT_PAREN params RIGHT_PAREN RIGHT_BRACKET;
fn: normal_fn | map_fn;

normal_client_fn: ID EX_MARK LEFT_PAREN (params | aparams) RIGHT_PAREN;
map_client_fn: LEFT_BRACKET ID EX_MARK LEFT_PAREN params RIGHT_PAREN RIGHT_BRACKET;
client_fn: normal_client_fn | map_client_fn;

fragment DOUBLE_QUOTE: '"';
fragment SINGLE_QUOTE: '\'';
fragment ESCAPE: '\\' ['"?abfnrtv\\];
fragment DLOUBE_QUOTE_STR_CHAR: ~["]|ESCAPE|'\\'?'\r'?'\n';
fragment SINGLE_QUOTE_STR_CHAR: ~[']|ESCAPE|'\\'?'\r'?'\n';

AT: '@';
LEFT_BRACKET: '[';
RIGHT_BRACKET: ']';
LEFT_BRACE: '{';
RIGHT_BRACE: '}';
EX_MARK: '!';
COLON: ':';
COMMA: ',';
TRIPLE_DOT: '...';
DOT: '.';
LEFT_PAREN: '(';
RIGHT_PAREN: ')';
AMPERSAND: '&';
STRING: (SINGLE_QUOTE SINGLE_QUOTE_STR_CHAR*? SINGLE_QUOTE)
 | (DOUBLE_QUOTE DLOUBE_QUOTE_STR_CHAR*? DOUBLE_QUOTE);

ID: ([a-zA-Z0-9_$]+);

WS: [ \t\n\r]+ -> skip;
BLOCK_COMMENT: '/*' .*? '*/' -> skip;
LINE_COMMENT: '//' ~[\r\n]* -> skip;
