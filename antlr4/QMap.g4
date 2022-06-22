grammar QMap;

@parser::header {
import * as astn from ".."
}

start: optional_id (LEFT_BRACE query_list? RIGHT_BRACE)?;

optional_id: id?;

id: ID | STRING;

stm returns[node]: field | fn | client_fn;

exclude returns[node]: EX_MARK id;

global_spread: TRIPLE_DOT AMPERSAND id (DOT id)*;

scoped_spread: TRIPLE_DOT id? (DOT id)*;

spread returns[node]: global_spread | scoped_spread;

variable: AT ID;

param returns [node]: variable | stm;

params returns [nodes]: param (COMMA param)*;

query returns [node]
    : stm
    | exclude
    | spread
    | field_rename
;

query_list returns [nodes]: query (COMMA query)* COMMA?;

obj_ref returns [ids]: id (DOT id)*;

field returns [node]: obj_ref (LEFT_BRACE query_list RIGHT_BRACE)?;

field_rename returns [node]: id COLON stm;

normal_fn returns[node]: ID LEFT_PAREN params RIGHT_PAREN;
map_fn returns[node]: LEFT_BRACKET ID LEFT_PAREN params RIGHT_PAREN RIGHT_BRACKET;
fn returns [node]: normal_fn | map_fn;

normal_client_fn returns[node]: ID EX_MARK LEFT_PAREN params RIGHT_PAREN;
map_client_fn returns[node]: LEFT_BRACKET ID EX_MARK LEFT_PAREN params RIGHT_PAREN RIGHT_BRACKET;
client_fn returns [node]: normal_client_fn | map_client_fn;

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
