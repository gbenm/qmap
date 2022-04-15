grammar qMap;

start: ID? (LEFT_BRACKET
        query_field*
    RIGHT_BRACKET)?;

query_field: ID (LEFT_BRACKET query_field* RIGHT_BRACKET)?;

fragment DOUBLE_QUOTE: '"';
fragment SINGLE_QUOTE: '\'';
fragment ESCAPE: '\\' ['"?abfnrtv\\];
fragment DLOUBE_QUOTE_STR_CHAR: ~["]|ESCAPE|'\\'?'\r'?'\n';
fragment SIGLE_QUOTE_STR_CHAR: ~[']|ESCAPE|'\\'?'\r'?'\n';

LEFT_BRACKET: '{';
RIGHT_BRACKET: '}';
EX_MARK: '!';
COLON: ':';
COMMA: ',';
TRIPLE_DOT: '...';
DOT: '.';
LEFT_PAREN: '(';
RIHT_PAREN: ')';
STRING: (SINGLE_QUOTE SIGLE_QUOTE_STR_CHAR* SINGLE_QUOTE)
 | (DOUBLE_QUOTE DLOUBE_QUOTE_STR_CHAR* DOUBLE_QUOTE);

ID: ([a-zA-Z0-9_$]+) | STRING;
WS: [ \t\n\r]+;
