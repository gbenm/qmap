grammar QMap;

@parser::header {
import * as astn from ".."
}

start: optional_id (LEFT_BRACE query_list? RIGHT_BRACE)?;

optional_id: id?;

id: ID | STRING;

stm returns[node]: field | fn | client_function;

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

obj_ref returns [ids]
    : {const ids = []}
    id {ids.push($id.text)} (DOT id {ids.push($id.text)})*
    {$ids = ids}
;

field returns [node]
    : obj_ref { $node = new astn.Field($obj_ref.ids, null) }
    (LEFT_BRACE query_list RIGHT_BRACE { $node = new astn.Field($obj_ref.ids, $query_list.nodes) })?
;
field_rename returns [node]
    : id COLON stm { $node = new astn.Rename($id.text, $stm.node) }
;
fn returns [node]
    : ID LEFT_PAREN params RIGHT_PAREN { $node = new astn.Function($ID.text, $params.nodes, false) }
    | LEFT_BRACKET ID LEFT_PAREN params RIGHT_PAREN RIGHT_BRACKET { $node = new astn.Function($ID.text, $params.nodes, false, true) }
;
client_function returns [node]
    : ID EX_MARK LEFT_PAREN params RIGHT_PAREN { $node = new astn.Function($ID.text, $params.nodes, true) }
    | LEFT_BRACKET ID EX_MARK LEFT_PAREN params RIGHT_PAREN RIGHT_BRACKET { $node = new astn.Function($ID.text, $params.nodes, true, true) }
;

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
