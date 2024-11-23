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