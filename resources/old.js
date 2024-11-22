

function alexico() {
    const code = document.getElementById("codeArea").value;
    const tokenTable = document.getElementById("tokenTable");

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
        "[",
        "]",
        "{",
        "}"
    ];

    //'+', '*', '/', '=', '$', '%', '&', '!', '"', '|', '<', '>', '(', ')', '[', ']', '{', '}', ';', '.', ',', ' '];
    //const regex = /\b(\w+)\b/g;
    const regex = /\b(\W{0,2}\w+)\b/g;

    lines.forEach((line, lineIndex) => {

        const tokens = line.split(" ");

        tokens.forEach((token)=>{
            let tipo = "No reconocido por el lenguaje";

            if (token[0] === '$') tipo = "Identificador";
            if (keywords.includes(token)) tipo = "Palabra Clave";
            if (!isNaN(token)) tipo = "Número";
            if (token[0] === '"' && token[token.length-1] === '"') tipo = "Cadena de texto"
            if (operators.includes(token)) tipo = "Operador";
            if (groupSigns.includes(token)) tipo = "Signo de agrupación";


            const newRow = tokenTable.insertRow();
            newRow.insertCell(0).textContent = tipo;
            newRow.insertCell(1).textContent = token;
            newRow.insertCell(2).textContent = `${lineIndex + 1}, ${line.indexOf(token) + 1}`;

        })

    });
}
