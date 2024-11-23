


function alexico() {
    const code = document.getElementById("codeArea").value;
    const errorArea = document.getElementById("ErrorArea");
    errorArea.value = "";
    const tokenTable = document.getElementById("tokenTable");
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


            const newRow = tokenTable.insertRow();
            newRow.insertCell(0).textContent = tipo;
            newRow.insertCell(1).textContent = token;
            newRow.insertCell(2).textContent = `${lineIndex + 1}, ${line.indexOf(token) + 1}`;

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
