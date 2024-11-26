
import antlr4 from "antlr4";
import { MyLanguageLexer } from './MyLanguageLexer.mjs';
import { MyLanguageParser } from './MyLanguageParser.mjs';

class MyErrorListener extends antlr4.error.ErrorListener {
    constructor(errorStack) {
        super();
        this.errorStack = errorStack; // Variable para almacenar los errores
    }

    syntaxError(recognizer, offendingSymbol, line, column, msg, e) {
        // Guardamos el error en un formato personalizado
        this.errorStack.pushError(msg, line, column)
        //this.errorStack.push(`Line ${line}:${column} - ${msg}`);
    }

    getErrors() {
        return this.errorStack; // Método para obtener los errores
    }
}


const input = `
    $true = "verdadero"
    $b = 0
    if ( $true ) {
      foreach ( $x as $po ) {
         echo ( $po . $po )
      }
    }
    else {
      while ( $b < 10 ) {
         echo ( $b )
         $b = $b + 1
      }
    }
`;

// Crear lexer y parser
const chars = new antlr4.InputStream(input);
const lexer = new MyLanguageLexer(chars);
const tokens = new antlr4.CommonTokenStream(lexer);
const parser = new MyLanguageParser(tokens);
// Configurar el error listener personalizado
const errorListener = new MyErrorListener(errorStack);
parser.removeErrorListeners(); // Remover los listeners predeterminados
parser.addErrorListener(errorListener); // Agregar el listener personalizado

// Parsear la entrada
const tree = parser.program();
// Imprimir los errores almacenados
errorStack = errorListener.getErrors();
console.log("Errores:", errorStack);
// Imprimir el árbol sintáctico
console.log("Árbol:", tree.toStringTree(parser.ruleNames));

export {MyErrorListener}