<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Minecraft UI</title>
    <style>
        /* Load Minecraft Font */
        @font-face {
            font-family: 'Minecraft';
            src: url('https://05staff.github.io/MinecraftRegular-Bmg3.otf') format('opentype');
        }

        /* Reset */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        /* Body */
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

        /* Header */
        .header {
            width: 100%;
            background-color: #006600;
            color: white;
            padding: 15px;
            font-size: 20px;
            font-weight: bold;
            display: flex;
            justify-content: center;
            gap: 20px;
        }

        /* Header Buttons */
        .header-button {
            background: linear-gradient(to bottom, #008800, #004400);
            color: white;
            font-size: 18px;
            padding: 10px 15px;
            border: 3px solid #002200;
            cursor: pointer;
            text-transform: uppercase;
            text-decoration: none;
            box-shadow: 3px 3px 0px #002200;
            transition: all 0.1s;
        }

        .header-button:hover {
            background: linear-gradient(to bottom, #00cc00, #006600);
            box-shadow: 2px 2px 0px #003300;
            transform: translate(2px, 2px);
        }

        /* Main Content */
        .content {
            flex-grow: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            max-width: 800px;
            margin: 0 auto;
            text-align: center;
        }

        /* Image */
        .content img {
            width: 100%;
            max-width: 500px;
            border: 5px solid #00ff00;
            margin-bottom: 15px;
        }

        /* Text */
        .content p {
            font-size: 22px;
            color: #00ff00;
            margin-bottom: 15px;
        }

        /* Blue Button */
        .blue-button {
            background: linear-gradient(to bottom, #0000ff, #000088);
            color: #ffffff;
            font-size: 20px;
            padding: 15px 20px;
            border: 4px solid #000044;
            cursor: pointer;
            text-transform: uppercase;
            text-decoration: none;
            box-shadow: 4px 4px 0px #000033;
            transition: all 0.1s;
        }

        .blue-button:hover {
            background: linear-gradient(to bottom, #0000cc, #000066);
            box-shadow: 2px 2px 0px #000044;
            transform: translate(2px, 2px);
        }

        /* Footer */
        .footer {
            width: 100%;
            background-color: #111;
            color: #888;
            padding: 10px;
            font-size: 14px;
            text-align: center;
        }
    </style>
</head>
<body>

    <!-- HEADER WITH PAGE BUTTONS -->
    <div class="header">
        <a href="#" class="header-button">Home</a>
        <a href="#" class="header-button">About</a>
        <a href="#" class="header-button">Contact</a>
    </div>

    <!-- MAIN CONTENT -->
    <div class="content">
        <img src="https://upload.wikimedia.org/wikipedia/en/5/51/Minecraft_cover.png" alt="Minecraft Image">
        <p>Welcome to the Minecraft UI Clone!</p>
        <a href="#" class="blue-button">Play Now</a>
    </div>

    <!-- FOOTER -->
    <div class="footer">
        © 2025 Minecraft UI. Not affiliated with Mojang or Microsoft.
    </div>

</body>
</html>
