<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>05staff's Website</title>
    <style>
        @font-face {
            font-family: 'Minecraft';
            src: url('https://www.fontsaddict.com/fontface/minecraft-ten.font');
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

        /* FOOTER */
        .footer {
            width: 100%;
            background-color: #111;
            color: #888;
            padding: 10px 0;
            font-size: 14px;
            text-align: center;
            position: fixed;
            bottom: 0;
            left: 0;
        }

        /* PURPLE FLAME DISCORD BUTTON */
        .discord-button {
            background: linear-gradient(to bottom, #aa00ff, #5500aa);
            color: white;
            font-size: 20px;
            padding: 20px;
            border: 4px solid #330066;
            cursor: pointer;
            text-transform: uppercase;
            margin: 20px;
            width: 250px;
            height: 60px;
            display: flex;
            justify-content: center;
            align-items: center;
            box-shadow: 4px 4px 0px #220044;
            transition: all 0.1s;
            text-decoration: none;
        }

        .discord-button:hover {
            background: linear-gradient(to bottom, #cc00ff, #7700cc);
            box-shadow: 2px 2px 0px #330066;
            transform: translate(2px, 2px);
        }
    </style>
</head>
<body>

    <!-- MAIN CONTENT -->
    <div class="content">
        <h1>Join Our Discord</h1>
        <a href="https://discord.gg/NsqEmNtQyn" class="discord-button">Join Now</a>
    </div>

    <!-- FOOTER -->
    <div class="footer">
        © 2025 Minecraft UI. Not affiliated with Mojang or Microsoft.
    </div>

</body>
</html>
