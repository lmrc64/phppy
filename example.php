<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Resaltado de sintaxis</title>
    <style>
        .editor {
            width: 100%;
            min-height: 100px;
            border: 1px solid #ddd;
            padding: 10px;
            font-family: monospace;
            white-space: pre-wrap;
            outline: none;
        }
        .keyword {
            color: #007bff; /* Color para las palabras reservadas */
            font-weight: bold;
        }
    </style>
</head>
<body>
<h2>Resaltado de sintaxis</h2>
<div id="editor" class="editor" contenteditable="true"></div>

<script>
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

    document.getElementById("editor").addEventListener("input", function() {
        let content = this.textContent;

        keywords.forEach(keyword => {
            const regex = new RegExp(`\\b${keyword}\\b`, "g");
            content = content.replace(regex, `<span class="keyword">${keyword}</span>`);
        });

        this.innerHTML = content;
        placeCaretAtEnd(this);
    });

    function placeCaretAtEnd(el) {
        el.focus();
        const range = document.createRange();
        range.selectNodeContents(el);
        range.collapse(false);
        const sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(range);
    }
</script>
</body>
</html>
