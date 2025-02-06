<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Minecraft UI</title>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Press Start 2P', cursive;
            background-color: black;
            color: #00ff00;
            text-align: center;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            height: 100vh;
        }

        /* HEADER */
        .header {
            width: 100%;
            background-color: #008000;
            color: white;
            padding: 15px 0;
            font-size: 20px;
            text-align: center;
        }

        /* FOOTER */
        .footer {
            width: 100%;
            background-color: #111;
            color: #888;
            padding: 10px 0;
            font-size: 12px;
            text-align: center;
            position: absolute;
            bottom: 0;
        }

        /* BUTTON STYLE */
        .button {
            background-color: #00aa00;
            color: white;
            font-size: 16px;
            padding: 20px;
            border: 4px solid #006600;
            cursor: pointer;
            text-transform: uppercase;
            margin: 10px;
            width: 200px;
            height: 50px;
            display: flex;
            justify-content: center;
            align-items: center;
            box-shadow: 4px 4px 0px #003300;
            transition: all 0.1s;
        }

        .button:hover {
            background-color: #00dd00;
            box-shadow: 2px 2px 0px #003300;
            transform: translate(2px, 2px);
        }

        /* MAIN CONTENT */
        .content {
            flex-grow: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 100%;
        }
    </style>
</head>
<body>

    <!-- HEADER -->
    <div class="header">
        Minecraft UI
    </div>

    <!-- MAIN CONTENT -->
    <div class="content">
        <h1>Welcome to Minecraft UI</h1>
        <button class="button">Start Game</button>
        <button class="button">Settings</button>
        <button class="button">Exit</button>
    </div>

    <!-- FOOTER -->
    <div class="footer">
        © 2025 Minecraft UI. Not affiliated with Mojang or Microsoft.
    </div>

</body>
</html>
