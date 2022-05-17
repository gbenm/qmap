grammar qMap;

@parser::header {
import * as astn from "../compiler"
}

start returns [root]
    : optional_id { $root = new astn.Root($optional_id.text, null) } (LEFT_BRACKET
        (query_list {$root = new astn.Root($optional_id.text, $query_list.nodes) })?
    RIGHT_BRACKET)?
;

optional_id returns [text]
    : (id {$text = $id.text})?
    ;

id returns [text]
    : ID { $text = $ID.text }
    | STRING { $text = eval($STRING.text) }
;

stm returns [node]
    : field {$node = $field.node}
    | fn { $node = $fn.node }
    | client_function { $node = $client_function.node }
;
exclude returns [node]
    : EX_MARK id { $node = new astn.Exclude($id.text) }
;

global_spread returns [node]
    : { const nodes = [] }
    TRIPLE_DOT AMPERSAND { nodes.push(astn.rootScope) }
    id { nodes.push($id.text) } (DOT id { nodes.push($id.text) })*
    { $node = new astn.Spread(nodes) }
;
scoped_spread returns [node]
    : { const nodes = [] }
    TRIPLE_DOT (id { nodes.push($id.text) } (DOT id { nodes.push($id.text) })* )?
    { $node = new astn.Spread(nodes) }
;
spread returns [node]
    : global_spread { $node = $global_spread.node }
    | scoped_spread { $node = $scoped_spread.node }
;

params returns [nodes]
    : { const nodes = [] }
    (stm { nodes.push($stm.node) } (COMMA stm { nodes.push($stm.node) })* COMMA?)
    {$nodes = nodes}
;

query returns [node]
    : stm {$node = $stm.node}
    | exclude {$node = $exclude.node}
    | spread {$node = $spread.node}
    | field_rename {$node = $field_rename.node}
;
query_list returns [nodes]
    : {
    const nodes = []
    }
    ( query {nodes.push($query.node)} (COMMA query {nodes.push($query.node)})* COMMA?)
    {$nodes = nodes}
;

obj_ref returns [ids]
    : {const ids = []}
    id {ids.push($id.text)} (DOT id {ids.push($id.text)})*
    {$ids = ids}
;

field returns [node]
    : obj_ref { $node = new astn.Field($obj_ref.ids, null) }
    (LEFT_BRACKET query_list RIGHT_BRACKET { $node = new astn.Field($obj_ref.ids, $query_list.nodes) })?
;
field_rename returns [node]
    : id COLON stm { $node = new astn.Rename($id.text, $stm.node) }
;
fn returns [node]
    : ID LEFT_PAREN params RIHT_PAREN { $node = new astn.Function($ID.text, $params.nodes) }
;
client_function returns [node]
    : ID EX_MARK LEFT_PAREN params RIHT_PAREN { $node = new astn.Function($ID.text, $params.nodes, true) }
;

fragment DOUBLE_QUOTE: '"';
fragment SINGLE_QUOTE: '\'';
fragment ESCAPE: '\\' ['"?abfnrtv\\];
fragment DLOUBE_QUOTE_STR_CHAR: ~["]|ESCAPE|'\\'?'\r'?'\n';
fragment SINGLE_QUOTE_STR_CHAR: ~[']|ESCAPE|'\\'?'\r'?'\n';

LEFT_BRACKET: '{';
RIGHT_BRACKET: '}';
EX_MARK: '!';
COLON: ':';
COMMA: ',';
TRIPLE_DOT: '...';
DOT: '.';
LEFT_PAREN: '(';
RIHT_PAREN: ')';
AMPERSAND: '&';
STRING: (SINGLE_QUOTE SINGLE_QUOTE_STR_CHAR*? SINGLE_QUOTE)
 | (DOUBLE_QUOTE DLOUBE_QUOTE_STR_CHAR*? DOUBLE_QUOTE);

ID: ([a-zA-Z0-9_$]+);

WS: [ \t\n\r]+ -> skip;
