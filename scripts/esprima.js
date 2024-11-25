const esprima = require('esprima');
const code = "if ( 7 > 8 ) {" +
    "$x = \"Hola_mundo\"" +
    "}" +
    "else {" +
    "$x = \"Mundo_hola\"" +
    "}"

const ast = esprima.parseScript(code)

console.log(JSON.stringify(ast, null, 2))