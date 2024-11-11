<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pseudo Compilador Compilador - LyA II</title>
    <link rel="stylesheet" href="styles.css">
</head>

<body>
    <div class="header">
        <img src="./img/LOGO-VERTICAL-TECNM.png" alt="Imagen 1" class="image-left">
        <h1>Pseudo Compilador - Lenguajes y Automas II</h1>
        <img src="./img/LogoTecCelaya.png" alt="Imagen 2" class="image-right">
    </div>
    <br>
    <div class="container">
        <!-- Panel de código -->
        <div class="left-panel">
            <div class="editor-container">
                <div class="line-numbers" id="lineNumbers"></div>
                <textarea id="codeArea" placeholder="Escribe tu código aquí..."></textarea>
            </div>
            <div class="buttons">
                <button onclick="compilar()">Compilar</button>
                <button onclick="limpiar()">Nuevo</button>
                <button onclick="guardar()">Guardar</button>
                <button onclick="abrir()">Abrir</button>
            </div>
            <br><br><br>
            <div class="error-panel">
                <textarea id="ErrorArea" placeholder="Lista de errores"></textarea>
            </div>
        </div>
        <!-- Panel de tokens -->
        <div class="right-panel">
            <h2>Tabla de Tokens</h2>
            <div class="table-container">
                <table id="tokenTable">
                    <thead>
                        <tr>
                            <th>Componente Léxico</th>
                            <th>Lexema</th>
                            <th>Línea, Columna</th>
                        </tr>
                    </thead>
                    <tbody>
                        <!--<tr>
                            <td>Componente Léxico</td>
                            <td>Lexema</td>
                            <td>Línea, Columna</td>
                        </tr>-->


                    </tbody>
                </table>
            </div>
        </div>
    </div>
    <br><br><br>


    <script src="./scripts/buttons.js"></script>
</body>

</html>