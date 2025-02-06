<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Minecraft UI</title>
    <style>
        @font-face {
            font-family: 'Minecraft';
            src: url('https://www.fontsaddict.com/fontface/minecraft-ten.font'); /* This loads Minecraft-like font */
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Minecraft', sans-serif;
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
            font-size: 30px;
            text-align: center;
        }

        /* FOOTER */
        .footer {
            width: 100%;
            background-color: #111;
            color: #888;
            padding: 10px 0;
            font-size: 14px;
            text-align: center;
            position: absolute;
            bottom: 0;
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

        /* MINECRAFT-STYLE BUTTON */
        .button {
            background: linear-gradient(to bottom, #00cc00, #007700);
            color: white;
            font-size: 20px;
            padding: 20px;
            border: 4px solid #004400;
            cursor: pointer;
            text-transform: uppercase;
            margin: 10px;
            width: 250px;
            height: 60px;
            display: flex;
            justify-content: center;
            align-items: center;
            box-shadow: 4px 4px 0px #002200;
            transition: all 0.1s;
        }

        .button:hover {
            background: linear-gradient(to bottom, #00ff00, #009900);
            box-shadow: 2px 2px 0px #001100;
            transform: translate(2px, 2px);
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
