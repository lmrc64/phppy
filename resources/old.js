

function alexico() {
    const code = document.getElementById("codeArea").value;
    const errorArea = document.getElementById("ErrorArea");
    errorArea.value = "";
    const tokenTable = document.getElementById("tokenTable");

    const tablaSimbolos = new TokenTable();
    const errorStack = new ErrorStack();

    // Limpia la tabla antes de compilar
    while (tokenTable.rows.length > 1) {
        tokenTable.deleteRow(1);
    }

    // Simulación de análisis de tokens (básico)
    const lines = code.split("\n");
    const keywords = [
        "if",
        "elseif",
        "else",
        "while",
        "foreach",
        "break",
        "echo",
        "fscan",
        "return",
        "this",
        "as"
    ];

    const operators = [
        "+",
        "-",
        "*",
        "/",
        "%",
        "=",
        "<",
        ">",
        "!",
        "==",
        "!=",
        "&&",
        "||",
        "->",
        "++",
        "--"
    ];

    const groupSigns = [
        "(",
        ")",
        "{",
        "}"
    ];

    const alfabeto = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '*', '/', '=', '$', '%', '&', '!', '"', '|', '<', '>', '(', ')', '[', ']', '{', '}', '.', ',', ' '];

    //'+', '*', '/', '=', '$', '%', '&', '!', '"', '|', '<', '>', '(', ')', '[', ']', '{', '}', ';', '.', ',', ' '];
    //const regex = /\b(\w+)\b/g;
    const regex = /\b(\W{0,2}\w+)\b/g;

    lines.forEach((line, lineIndex) => {

        const tokens = line.split(" ");
        console.log(tokens)

        tokens.forEach((token)=>{
            let tipo;

            if (token[0] === '$' && isNaN(token[1]) && [...token].every(caracter => alfabeto.includes(caracter))) tipo = "Identificador";
            else if (keywords.includes(token)) tipo = "Palabra Clave";
            else if (!isNaN(token)) tipo = "Constante numérica";
            else if (token[0] === '"' && token[token.length-1] === '"') tipo = "Constante de texto"
            else if (operators.includes(token)) tipo = "Operador";
            else if (groupSigns.includes(token)) tipo = "Delimitadores";
            else{
                tipo = "No reconocido por el lenguaje";
                let error;
                if (!isNaN(token[0]) && ((token.split(".").length-1) > 1 || [...token].some(char => isNaN(char) && char !== '.')))
                    error = "Error: Constante numérica invalida. Línea: " + (lineIndex + 1) + " Columna: " + (line.indexOf(token) + 1)
                else if (token[0] === '"' && token[token.length-1] !== '"')
                    error = "Error: Constante de texto invalida. Línea: " + (lineIndex + 1) + " Columna: " + (line.indexOf(token) + 1)
                //else if (!isNaN(token[0]) && ((token.split(".").length-1) > 1 || [...token].some(char => isNaN(char) && char !== '.')))
                else if (![...token].every(caracter => alfabeto.includes(caracter)))
                    error = "Error: Caracter no permitido. Línea: " + (lineIndex + 1) + " Columna: " + (line.indexOf(token) + 1)
                else
                    error = "Error: Nombre de identificador invalido. Línea: " + (lineIndex + 1) + " Columna: " + (line.indexOf(token) + 1)
                errorStack.pushError(error, lineIndex + 1, line.indexOf(token) + 1)
                //console.log(errorId)
            }




            if (token !== ''){
                //Añadir al frontend
                const newRow = tokenTable.insertRow();
                newRow.insertCell(0).textContent = tipo;
                newRow.insertCell(1).textContent = token;
                newRow.insertCell(2).textContent = `${lineIndex + 1}, ${line.indexOf(token) + 1}`;

                //Añadir a la TokenTable
                tablaSimbolos.addToken(tipo, token, lineIndex + 1, line.indexOf(token) + 1);

                //tablaSimbolos.readToken(1); // Leer el primer token
                //tablaSimbolos.updateToken(1, "Identificador", "y", 1, 6);
                //tablaSimbolos.clear();
            }





        })

    });
    //Imprimir errores si existen
    if(errorStack.stack.length > 0){
        errorArea.value = errorStack.popAllErrors();
    }

    return { tablaSimbolos, errorStack };
}

function asintactico() {
    const code = document.getElementById("codeArea").value;
    const errorArea = document.getElementById("ErrorArea");
    errorArea.value = "";
    //const tokenTable = document.getElementById("tokenTable");

    let { tablaSimbolos, errorStack } = alexico();

    //console.log(tablaSimbolos)

    errorStack = verificarBalanceo(code, errorStack)

    //Implementaci[on G4



    //Fin G4


    //Imprimir errores si existen
    if(errorStack.stack.length > 0){
        errorArea.value = errorStack.popAllErrors();
    }


}










function verificarBalanceo(codigo, errorStack) {
    const stack = []; // Pila para almacenar los caracteres de apertura
    const abren = ["(", "{"]; // Caracteres de apertura
    const cierran = [")", "}"]; // Caracteres de cierre

    const lines = codigo.split("\n"); // Separar el código en líneas

    // Recorrer cada línea del código
    for (let lineNumber = 0; lineNumber < lines.length; lineNumber++) {
        const line = lines[lineNumber];

        // Recorrer cada caracter de la línea
        for (let colNumber = 0; colNumber < line.length; colNumber++) {
            const char = line[colNumber];

            if (abren.includes(char)) {
                stack.push({ char, line: lineNumber + 1, column: colNumber + 1 }); // Almacenar la posición de apertura
            } else if (cierran.includes(char)) {
                // Verificar si la pila está vacía antes de hacer pop
                if (stack.length === 0) {
                    errorStack.pushError(`Balanceo incorrecto: Se encontró un '${char}' en la línea ${lineNumber + 1}, columna ${colNumber + 1}, pero no hay ningún paréntesis de apertura correspondiente.`, lineNumber + 1, colNumber + 1)
                    return errorStack;
                }

                const ultimo = stack.pop();

                // Si el último carácter de apertura no coincide con el carácter de cierre
                if (abren.indexOf(ultimo.char) !== cierran.indexOf(char)) {
                    errorStack.pushError(`Balanceo incorrecto: Se esperaba un '${abren[cierran.indexOf(char)]}' en la línea ${ultimo.line}, columna ${ultimo.column}. Pero se encontró un '${char}' en línea ${lineNumber + 1}, columna ${colNumber + 1}.`, 0, 0)
                    return errorStack;
                }
            }
        }
    }

    // Si la pila no está vacía, significa que faltan caracteres de cierre
    if (stack.length > 0) {
        const ultimo = stack[stack.length - 1];
        errorStack.pushError(`Balanceo incorrecto: Falta un '${cierran[abren.indexOf(ultimo.char)]}' en la línea ${ultimo.line}, columna ${ultimo.column}.`, cierran[abren.indexOf(ultimo.char)], ultimo.column)
        return errorStack;
    }



    return errorStack;
}



















class ErrorStack {

    static errorTypes = [
        //Lexic Errors
        "Caracter no permitido.", //0
        "Nombre de identificador invalido.", //1
        "Constante de texto invalida.", //2
        "Constante numérica invalida." //3
        //Syntactic Errors
        //Semantic Errors
    ];

    constructor() {
        this.stack = [];
    }

    pushError(error, line, column){
        this.stack.push({
            error: error,
            line: line,
            column: column
        });
    }

    popError(){
        const error = this.stack.pop();
        return "Error: " + error.error + " Línea: " + error.line + " Columna: " + error.column;
    }

    popAllErrors(){
        let errors = "";
        while (this.stack.length > 0){

            const error = this.stack.pop();
            errors = error.error + "\n" +  errors;
            //console.log(ErrorStack.errorTypes[error.error])
        }
        console.log(errors)
        return errors
    }

    clearStack() {
        this.stack = [];
    }
}


class TokenTable {
    constructor() {
        this.id = 0; // Contador para asignar IDs únicos
        this.tabla = []; // Lista para almacenar las instancias de tokens
    }

    // Método para agregar un token a la tabla
    addToken(type, value, line, column) {
        const token = new Token(type, value, line, column); // Crear una instancia de Token
        this.tabla.push({
            id: ++this.id,
            token: token,
        });
        //console.log(`Token agregado: ID=${this.id}, Token=${JSON.stringify(token)}`);
    }

    // Método para actualizar un token por ID
    updateToken(id, newType, newValue, newLine, newColumn) {
        const entry = this.tabla.find((t) => t.id === id);
        if (entry) {
            const token = entry.token;
            token.type = newType || token.type;
            token.value = newValue || token.value;
            token.line = newLine || token.line;
            token.column = newColumn || token.column;
            console.log(`Token actualizado: ${JSON.stringify(entry)}`);
        } else {
            console.log(`Token con ID ${id} no encontrado.`);
        }
    }

    // Método para leer un token por ID
    readToken(id) {
        const entry = this.tabla.find((t) => t.id === id);
        if (entry) {
            console.log(`Token encontrado: ${JSON.stringify(entry)}`);
            return entry;
        } else {
            console.log(`Token con ID ${id} no encontrado.`);
            return null;
        }
    }

    // Método para limpiar la tabla de símbolos
    clear() {
        this.tabla = [];
        this.id = 0;
        console.log("Tabla de símbolos limpiada.");
    }
}

class Token {
    constructor(type, value, line, column) {
        this.type = type || "";   // Tipo del token (por ejemplo, "Identificador", "Palabra Clave", etc.)
        this.value = value || ""; // Valor del token (el texto que representa)
        this.line = line || 0;    // Línea en la que aparece el token
        this.column = column || 0; // Columna en la que aparece el token
    }
}
