<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Simple Full-Screen Page</title>
    <style>
        /* Load Custom Font */
        @font-face {
            font-family: 'CustomFont';
            src: url('https://05staff.github.io/MinecraftRegular-Bmg3.otf') format('opentype');
        }

        /* Reset */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        /* Full-Screen Body */
        body {
            font-family: 'CustomFont', sans-serif;
            background-color: black;
            color: white;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            height: 100vh;
            text-align: center;
            padding: 20px;
        }

        /* Header */
        .header {
            width: 100%;
            background-color: #222;
            color: white;
            padding: 20px;
            font-size: 24px;
            font-weight: bold;
            display: flex;
            justify-content: center;
            gap: 20px;
        }

        /* Header Buttons */
        .header-button {
            background: linear-gradient(to bottom, #444, #222);
            color: white;
            font-size: 18px;
            padding: 10px 15px;
            border: 3px solid #111;
            cursor: pointer;
            text-transform: uppercase;
            text-decoration: none;
            box-shadow: 3px 3px 0px #000;
            transition: all 0.1s;
        }

        .header-button:hover {
            background: linear-gradient(to bottom, #666, #333);
            box-shadow: 2px 2px 0px #000;
            transform: translate(2px, 2px);
        }

        /* Full-Screen Content */
        .content {
            flex-grow: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 100%;
            max-width: 800px;
            text-align: center;
        }

        /* Text */
        .content p {
            font-size: 22px;
            color: white;
            margin-bottom: 20px;
        }

        /* Blue Button */
        .blue-button {
            background: linear-gradient(to bottom, #0000ff, #000088);
            color: white;
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

    <!-- MAIN CONTENT (NO IMAGE, JUST TEXT & BUTTON) -->
    <div class="content">
        <p>Welcome to the Full-Screen UI!</p>
        <a href="#" class="blue-button">Click Me</a>
    </div>

    <!-- FOOTER -->
    <div class="footer">
        © 2025 Full-Screen UI. All Rights Reserved.
    </div>

</body>
</html>
