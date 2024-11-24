


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
        "for",
        "break",
        "echo",
        "fscan",
        "return",
        "this",
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

    const alfabeto = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, '+', '*', '/', '=', '$', '%', '&', '!', '"', '|', '<', '>', '(', ')', '[', ']', '{', '}', ';', '.', ',', ' '];

    //'+', '*', '/', '=', '$', '%', '&', '!', '"', '|', '<', '>', '(', ')', '[', ']', '{', '}', ';', '.', ',', ' '];
    //const regex = /\b(\w+)\b/g;
    const regex = /\b(\W{0,2}\w+)\b/g;

    lines.forEach((line, lineIndex) => {

        const tokens = line.split(" ");

        tokens.forEach((token)=>{
            let tipo;

            if (token[0] === '$' && [...token].every(caracter => alfabeto.includes(caracter))) tipo = "Identificador";
            else if (keywords.includes(token)) tipo = "Palabra Clave";
            else if (!isNaN(token)) tipo = "Constante numérica";
            else if (token[0] === '"' && token[token.length-1] === '"') tipo = "Constante de texto"
            else if (operators.includes(token)) tipo = "Operador";
            else if (groupSigns.includes(token)) tipo = "Delimitadores";
            else{
                tipo = "No reconocido por el lenguaje";
                let errorId;
                if (!isNaN(token[0]) && ((token.split(".").length-1) > 1 || [...token].some(char => isNaN(char) && char !== '.')))
                    errorId = 3
                else if (token[0] === '"' && token[token.length-1] !== '"')
                    errorId = 2
                //else if (!isNaN(token[0]) && ((token.split(".").length-1) > 1 || [...token].some(char => isNaN(char) && char !== '.')))
                else if (![...token].every(caracter => alfabeto.includes(caracter)))
                    errorId = 0
                else
                    errorId = 1
                errorStack.pushError(errorId, lineIndex + 1, line.indexOf(token) + 1)
                console.log(errorId)
            }


            //Añadir al frontend
            const newRow = tokenTable.insertRow();
            newRow.insertCell(0).textContent = tipo;
            newRow.insertCell(1).textContent = token;
            newRow.insertCell(2).textContent = `${lineIndex + 1}, ${line.indexOf(token) + 1}`;

            //Añadir a la TokenTable
            tablaSimbolos.addToken(tipo, token, lineIndex + 1, line.indexOf(token) + 1);

            tablaSimbolos.readToken(1); // Leer el primer token
            //tablaSimbolos.updateToken(1, "Identificador", "y", 1, 6);
            //tablaSimbolos.clear();

            //Imprimir errores si existen
            if(errorStack.stack.length > 0){
                errorArea.value = errorStack.popAllErrors();
            }

        })

    });
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
        return "Error: " + ErrorStack.errorTypes[error.error] + " Línea: " + error.line + " Columna: " + error.column;
    }

    popAllErrors(){
        const errors = [];
        while (this.stack.length > 0){
            const error = this.stack.pop();
            errors.push("Error: " + ErrorStack.errorTypes[error.error] + " Línea: " + error.line + " Columna: " + error.column);
        }
        return errors.join("\n")
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
        console.log(`Token agregado: ID=${this.id}, Token=${JSON.stringify(token)}`);
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