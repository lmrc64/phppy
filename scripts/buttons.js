
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

function lexico() {
    //Alfabeto permitido
    const alfabeto = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, '+', '*', '/', '=', '$', '%', '&', '!', '"', '|', '<', '>', '(', ')', '[', ']', '{', '}', ';', '.', ',', ' '];


    //Solo el de arriba y yo abemos como funciona el automata y de donde salio cada cosas (chiste)
    const automata = [
        [41, 26, 41, 41, 3, 12, 41, 41, 1, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 7, 41, 41, 41/*Letras*/, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31/*Digitos*/, 31, 31, 31, 31, 39, 31, 34, 31, 40, 36, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31 /*Caracteres Especiales*/, 0], //estado 0
        [41, 41, 41, 41, 41, 2, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41/*Letras*/, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41 /*Digitos*/, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41/*Caracteres Especiales*/, 0], //estado 1
        [41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41/*Letras*/, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41/*Digitos*/, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41/*Caracteres Especiales*/, 48], //estado 2
        [41, 41, 19, 41, 41, 41, 41, 41, 41, 41, 41, 4, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41/*Letras*/, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41/*Digitos*/, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41/*Caracteres Especiales*/, 0], //estado 3
        [41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 5, 41, 41, 41, 41, 41, 41, 41/*Letras*/, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41/*Digitos*/, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41/*Caracteres Especiales*/, 0], //estado 4
        [41, 41, 41, 41, 6, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41/*Letras*/, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41/*Digitos*/, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41/*Caracteres Especiales*/, 0], //estado 5
        [41, 41, 41, 41, 41, 41, 41, 41, 1, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41/*Letras*/, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41/*Digitos*/, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41/*Caracteres Especiales*/, 48], //estado 6
        [41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 8, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41/*Letras*/, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41/*Digitos*/, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41/*Caracteres Especiales*/, 0], //estado 7
        [41, 41, 41, 41, 41, 41, 41, 41, 9, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41/*Letras*/, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41/*Digitos*/, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41/*Caracteres Especiales*/, 0], //estado 8
        [41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 10, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41/*Letras*/, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41/*Digitos*/, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41/*Caracteres Especiales*/, 0], //estado 9
        [41, 41, 41, 41, 11, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41/*Letras*/, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41/*Digitos*/, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41/*Caracteres Especiales*/, 0], //estado 10
        [41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41/*Letras*/, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41/*Digitos*/, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41/*Caracteres Especiales*/, 48], //estado 11
        [41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 13, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41/*Letras*/, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41/*Digitos*/, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41/*Caracteres Especiales*/, 0], //estado 12
        [41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 48, 41, 41, 41, 41, 41, 41, 41, 41/*Letras*/, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41/*Digitos*/, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41/*Caracteres Especiales*/, 0], //estado 13
        [41, 41, 41, 41, 5, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41/*Letras*/, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41/*Digitos*/, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41/*Caracteres Especiales*/, 48], //estado 14
        [16, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41/*Letras*/, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41/*Digitos*/, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41/*Caracteres Especiales*/, 0], //estado 15
        [41, 41, 17, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41/*Letras*/, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41/*Digitos*/, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41/*Caracteres Especiales*/, 0], //estado 16
        [41, 41, 41, 41, 41, 41, 41, 18, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41/*Letras*/, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41/*Digitos*/, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41/*Caracteres Especiales*/, 0], //estado 17
        [41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41/*Letras*/, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41/*Digitos*/, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41/*Caracteres Especiales*/, 48], //estado 18
        [41, 41, 41, 41, 41, 41, 41, 20, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41/*Letras*/, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41/*Digitos*/, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41/*Caracteres Especiales*/, 0], //estado 19
        [41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 21, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41/*Letras*/, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41/*Digitos*/, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41/*Caracteres Especiales*/, 0], //estado 20
        [41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41/*Letras*/, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41/*Digitos*/, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41/*Caracteres Especiales*/, 48], //estado 21
        [41, 41, 23, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41/*Letras*/, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41/*Digitos*/, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41/*Caracteres Especiales*/, 0], //estado 22
        [24, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41/*Letras*/, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41/*Digitos*/, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41/*Caracteres Especiales*/, 0], //estado 23
        [41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 25, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41/*Letras*/, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41/*Digitos*/, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41/*Caracteres Especiales*/, 0], //estado 24
        [41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41/*Letras*/, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41/*Digitos*/, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41/*Caracteres Especiales*/, 48], //estado 25
        [41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 27, 41, 41, 41, 41, 41, 41, 41, 41/*Letras*/, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41/*Digitos*/, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41/*Caracteres Especiales*/, 0], //estado 26
        [41, 41, 41, 41, 28, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41/*Letras*/, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41/*Digitos*/, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41/*Caracteres Especiales*/, 0], //estado 27
        [29, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41/*Letras*/, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41/*Digitos*/, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41/*Caracteres Especiales*/, 0], //estado 28
        [41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 30, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41/*Letras*/, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41/*Digitos*/, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41/*Caracteres Especiales*/, 0], //estado 29
        [41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41/*Letras*/, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41/*Digitos*/, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41/*Caracteres Especiales*/, 48], //estado 30
        [48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48/*Letras*/, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31/*Digitos*/, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 48, 32, 48/*Caracteres Especiales*/, 44], //estado 31
        [47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47/*Letras*/, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33/*Digitos*/, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47/*Caracteres Especiales*/, 47], //estado 32
        [47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47/*Letras*/, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33/*Digitos*/, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47/*Caracteres Especiales*/, 44], //estado 33
        [47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47/*Letras*/, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47/*Digitos*/, 47, 47, 47, 47, 47, 47, 35, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47/*Caracteres Especiales*/, 0], //estado 34
        [47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47/*Letras*/, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47/*Digitos*/, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47/*Caracteres Especiales*/, 42], //estado 35
        [47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47/*Letras*/, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47/*Digitos*/, 47, 47, 47, 47, 47, 47, 47, 47, 47, 37, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47/*Caracteres Especiales*/, 0], //estado 36
        [47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47/*Letras*/, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47/*Digitos*/, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47/*Caracteres Especiales*/, 42], //estado 37
        [47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47/*Letras*/, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47/*Digitos*/, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47, 47/*Caracteres Especiales*/, 43], //estado 38
        [39, 39, 39, 39, 39, 39, 39, 39, 39, 39, 39, 39, 39, 39, 39, 39, 39, 39, 39, 39, 39, 39, 39, 39, 39, 39/*Letras*/, 39, 39, 39, 39, 39, 39, 39, 39, 39, 39/*Digitos*/, 39, 39, 39, 39, 39, 39, 39, 39, 39, 39, 39, 39, 39, 39, 39, 39, 39, 39, 39, 39, 39, 39/*Caracteres Especiales*/, 46], //estado 39
        [40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40/*Letras*/, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40/*Digitos*/, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40/*Caracteres Especiales*/, 45], //estado 40
        [41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41/*Letras*/, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41/*Digitos*/, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41/*Caracteres Especiales*/, 47], //estado 41
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0/*Letras*/, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0/*Digitos*/, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0/*Caracteres Especiales*/, 0], //estado 42
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0/*Letras*/, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0/*Digitos*/, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0/*Caracteres Especiales*/, 0], //estado 43
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0/*Letras*/, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0/*Digitos*/, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0/*Caracteres Especiales*/, 0], //estado 44
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0/*Letras*/, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0/*Digitos*/, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0/*Caracteres Especiales*/, 0], //estado 45
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0/*Letras*/, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0/*Digitos*/, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0/*Caracteres Especiales*/, 0], //estado 46
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0/*Letras*/, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0/*Digitos*/, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0/*Caracteres Especiales*/, 0], //estado 47
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0/*Letras*/, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0/*Digitos*/, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0/*Caracteres Especiales*/, 0] //estado 48
    ];
    let v_analizar = [];
    let v_contador = 0;
    let v_estado = 0;
    let v_resultado = '';
    let v_line;

    const code = document.getElementById("codeArea").value;
    const lines = code.split("\n");
    v_analizar = Array.from(lines);

    //v_analizar = lines.map(string => string.split(" "))
    //v_analizar.forEach((subArray, index) => {})
    
    while (v_contador < v_analizar.length) {
        let v_letrita = Array.from(v_analizar[v_contador]); // Caracteres de la línea actual
        let v_cont2 = 0; // Reiniciar índice de caracteres
        v_resultado = ''; // Reiniciar el resultado

        while (v_cont2 < v_letrita.length) {
            const currentChar = v_letrita[v_cont2];
            const charIndex = alfabeto.indexOf(currentChar);

            console.log(charIndex + "," +v_estado)
            //console.log(v_estado)
            if (charIndex !== -1) { // Verificar si el carácter está en el alfabeto
                v_resultado += currentChar;
                v_estado = automata[v_estado][charIndex];
            } else {
                v_estado = -1; // Estado inválido si el carácter no pertenece al alfabeto
                break;
            }

            v_cont2++;
        }

        // Clasificación del token según el estado alcanzado
        switch (v_estado) {
            case 48:
                console.log(v_resultado + ' Es palabra reservada');
                break;
            case 45:
                console.log(v_resultado + ' Es cadena');
                break;
            case 43:
            case 42:
                console.log(v_resultado + ' Es operador');
                break;
            case 44:
                console.log(v_resultado + ' Es constante numérica');
                break;
            case 46:
                console.log(v_resultado + ' Es identificador');
                break;
            default:
                console.log(v_resultado + ' Es inválido');
        }

        v_contador++;
    }
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