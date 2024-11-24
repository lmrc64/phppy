<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Development Team</title>
    <link rel="stylesheet" href="./styles.css">
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f3f3f3;
            margin: 0;
            padding: 20px;
        }

        .team-container {
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
            justify-content: center;
            margin-top: 20px;
        }

        .card {
            background-color: white;
            border: 1px solid #ddd;
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            width: 250px;
            text-align: center;
            padding: 20px;
        }

        .card img {
            height: 265px;
            border-radius: 60%;
            object-fit: cover;
        }

        .card h3 {
            margin: 15px 0 10px;
            font-size: 20px;
            color: #333;
        }

        .card p {
            color: #777;
            font-size: 14px;
        }
        .button-container {
            text-align: center;
        }
    </style>
</head>
<body>
<h1 style="text-align: center;">Development Team</h1>
<div class="team-container">
    <div class="card">
        <img src="./resources/padrino.jpeg" alt="Member 1">
        <h3>Adrián Estrada Álvarez</h3>
        <p>21030975</p>
    </div>
    <div class="card">
        <img src="./resources/barrera.jpeg" alt="Member 2">
        <h3>José Luis Barrera López</h3>
        <p>21030020</p>
    </div>
    <div class="card">
        <img src="./resources/jon.jpeg" alt="Member 3">
        <h3>Jonathan Rodríguez Romero</h3>
        <p>21030021</p>
    </div>
    <div class="card">
        <img src="./resources/mane.png" alt="Member 4">
        <h3>Luis Manuel Rodríguez Castro</h3>
        <p>21030064</p>
    </div>


</div>
<br>
<div class="button-container">
    <button onclick="window.location.href='index.php'" class="menu-button">Volver al compilador</button>
</div>

</body>
</html>
