grammar QMap;

start: optional_id (LEFT_BRACE query_list? RIGHT_BRACE)?;

optional_id: id?;

id: ID | STRING;

stm: field | fn_stm;

fn_return: LEFT_BRACE query_list RIGHT_BRACE;
fn_stm: (fn | client_fn) fn_return?;

exclude: EX_MARK id;

global_spread: TRIPLE_DOT AMPERSAND DOT? id (DOT id)*;

scoped_spread: TRIPLE_DOT id? (DOT id)*;

spread: global_spread | scoped_spread;

primitive_val: STRING | NUMBER | BOOL;
primitive: AT LEFT_BRACE primitive_val RIGHT_BRACE;
exvar: AT ID;

variable: exvar | primitive;

param: variable | stm;
aparam: AT LEFT_BRACKET param RIGHT_BRACKET;

aparams: (param (COMMA param)* COMMA)? aparam (COMMA param (COMMA param)*)?;
params: param (COMMA param)*;

query
    : stm
    | exclude
    | spread
    | field_rename
    | new_object
    | hide
;

query_list: query ((COMMA | SEMICOLON) query)* (COMMA | SEMICOLON)?;

obj_ref: id (DOT id)*;

field_defs: LEFT_BRACE query_list RIGHT_BRACE;
select: obj_ref field_defs?;
index_select: obj_ref HASH field_defs;
field_scoped: select | index_select;
field_global: AMPERSAND DOT field_scoped;
field: field_global | field_scoped | onresult;

new_object: id COLON LEFT_BRACE query_list RIGHT_BRACE;
field_rename: id COLON stm;

normal_fn: ID LEFT_PAREN (params | aparams) RIGHT_PAREN;
map_fn: LEFT_BRACKET ID LEFT_PAREN params RIGHT_PAREN RIGHT_BRACKET;
fn: normal_fn | map_fn;

normal_client_fn: ID EX_MARK LEFT_PAREN (params | aparams) RIGHT_PAREN;
map_client_fn: LEFT_BRACKET ID EX_MARK LEFT_PAREN params RIGHT_PAREN RIGHT_BRACKET;
client_fn: normal_client_fn | map_client_fn;

onresult: PERCENT LEFT_BRACE stm RIGHT_BRACE;

hide: TILDE ID field_defs;

fragment DOUBLE_QUOTE: '"';
fragment SINGLE_QUOTE: '\'';
fragment ESCAPE: '\\' ['"?abfnrtv\\];
fragment DLOUBE_QUOTE_STR_CHAR: ~["]|ESCAPE|'\\'?'\r'?'\n';
fragment SINGLE_QUOTE_STR_CHAR: ~[']|ESCAPE|'\\'?'\r'?'\n';

TILDE: '~';
PERCENT: '%';
AT: '@';
HASH: '#';
LEFT_BRACKET: '[';
RIGHT_BRACKET: ']';
LEFT_BRACE: '{';
RIGHT_BRACE: '}';
EX_MARK: '!';
COLON: ':';
COMMA: ',';
SEMICOLON: ';';
TRIPLE_DOT: '...';
DOT: '.';
LEFT_PAREN: '(';
RIGHT_PAREN: ')';
AMPERSAND: '&';
STRING: (SINGLE_QUOTE SINGLE_QUOTE_STR_CHAR*? SINGLE_QUOTE)
 | (DOUBLE_QUOTE DLOUBE_QUOTE_STR_CHAR*? DOUBLE_QUOTE);

BOOL: 'true' | 'false';
NUMBER: [+-]?[0-9]+('.'[0-9]+)?;
ID: [a-zA-Z_$][a-zA-Z0-9_$]*;

WS: [ \t\n\r]+ -> skip;
BLOCK_COMMENT: '/*' .*? '*/' -> skip;
LINE_COMMENT: '//' ~[\r\n]* -> skip;
