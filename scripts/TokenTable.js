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

// Ejemplo de uso
const tablaSimbolos = new TokenTable();

// Agregar tokens
tablaSimbolos.addToken("Identificador", "x", 1, 5);
tablaSimbolos.addToken("Palabra Clave", "if", 2, 1);
tablaSimbolos.addToken("Número", "42", 3, 10);

// Leer tokens
tablaSimbolos.readToken(1); // Leer el primer token
tablaSimbolos.readToken(2); // Leer el segundo token

// Actualizar un token
tablaSimbolos.updateToken(1, "Identificador", "y", 1, 6);

// Limpiar la tabla
tablaSimbolos.clear();