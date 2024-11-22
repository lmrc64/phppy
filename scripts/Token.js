class Token {
    constructor(type, value, line, column) {
        this.type = type || "";   // Tipo del token (por ejemplo, "Identificador", "Palabra Clave", etc.)
        this.value = value || ""; // Valor del token (el texto que representa)
        this.line = line || 0;    // Línea en la que aparece el token
        this.column = column || 0; // Columna en la que aparece el token
    }
}