
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

const codeArea = document.getElementById("codeArea");
const lineNumbers = document.getElementById("lineNumbers");

// Actualiza los números de línea cuando el contenido del textarea cambia
codeArea.addEventListener("input", function () {
    const lines = codeArea.value.split('\n');
    lineNumbers.innerHTML = ""; // Limpiar los números de línea previos

    lines.forEach((_, index) => {
        const lineNumber = document.createElement("div");
        lineNumber.textContent = index + 1;
        lineNumbers.appendChild(lineNumber);
    });
});

function prueba(){
  const lines = codeArea.value.split('\n');
    lineNumbers.innerHTML = ""; // Limpiar los números de línea previos

    lines.forEach((_, index) => {
        const lineNumber = document.createElement("div");
        lineNumber.textContent = index + 1;
        lineNumbers.appendChild(lineNumber);
    });
}

function compilar() {
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
      "int"
  ];
  //const regex = /\b(\w+)\b/g;
    const regex = /\b(\W{0,2}\w+)\b/g;

  lines.forEach((line, lineIndex) => {
    let match;
    while ((match = regex.exec(line)) !== null) {
      const token = match[0];
      console.log(match)
      let tipo = "error";

      if (token.trim()[0] === '$') tipo = "Identificador";
      if (keywords.includes(token)) tipo = "Palabra Clave";
      if (!isNaN(token)) tipo = "Número";

      const newRow = tokenTable.insertRow();
      newRow.insertCell(0).textContent = tipo;
      newRow.insertCell(1).textContent = token;
      newRow.insertCell(2).textContent = `${lineIndex + 1}, ${match.index + 1}`;
    }
  });
}

function limpiar() {
  document.getElementById("codeArea").value = "";
  document.getElementById("codeText").innerHTML = "";
  const tokenTable = document.getElementById("tokenTable");
  while (tokenTable.rows.length > 1) {
    tokenTable.deleteRow(1);
  }
  const lines = codeArea.value.split('\n');
    lines.forEach((_, index) => {
        const lineNumber = document.createElement("div");
        lineNumber.textContent = index + 1;
        lineNumbers.appendChild(lineNumber);
        const lines = codeArea.value.split('\n');
        lineNumbers.innerHTML = "1";
    });
}

function guardar() {
  const code = document.getElementById("codeArea").value;
  const blob = new Blob([code], {
    type: "text/plain",
  });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "codigo.txt";
  a.click();
}

function abrir() {
  const input = document.createElement("input");
  input.type = "file";
  input.accept = ".txt";
  input.onchange = function (event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = function (e) {
      document.getElementById("codeArea").value = e.target.result;
      document.getElementById("codeText").innerHTML = e.target.result;
      prueba();
      highlightText();
    };
    reader.readAsText(file);
  };
  input.click();
}



window.onload = function () {
    const lines = codeArea.value.split('\n');
    lines.forEach((_, index) => {
        const lineNumber = document.createElement("div");
        lineNumber.textContent = index + 1;
        lineNumbers.appendChild(lineNumber);
    });
};