<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejemplo de CodeMirror</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.5/codemirror.min.css">
</head>
<body>
<textarea id="codeEditor">SELECT * FROM users;</textarea>

<script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.5/codemirror.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.5/mode/sql/sql.min.js"></script>
<script>
    const editor = CodeMirror.fromTextArea(document.getElementById("codeEditor"), {
        mode: "sql",
        theme: "default",
        lineNumbers: true
    });
</script>
</body>
</html>
