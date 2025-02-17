<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Full Page Layout</title>
    <style>
        /* Reset */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        /* Full Page Layout */
        body {
            background-color: black;
            color: white;
            text-align: center;
            font-family: Arial, sans-serif;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            height: 100vh;
            width: 100vw;
        }

        /* Header */
        .header {
            width: 100%;
            background-color: #222;
            padding: 15px;
            font-size: 20px;
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
            border: 2px solid #111;
            cursor: pointer;
            text-decoration: none;
            box-shadow: 2px 2px 0px #111;
            transition: all 0.1s;
        }

        .header-button:hover {
            background: linear-gradient(to bottom, #666, #333);
            box-shadow: 1px 1px 0px #111;
            transform: translate(1px, 1px);
        }

        /* Main Content - Full Page */
        .content {
            flex-grow: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 100%;
        }

        /* Text */
        .content p {
            font-size: 28px;
            margin-bottom: 20px;
        }

        /* Blue Button */
        .blue-button {
            background: linear-gradient(to bottom, #0000ff, #000088);
            color: #ffffff;
            font-size: 20px;
            padding: 15px 20px;
            border: 3px solid #000044;
            cursor: pointer;
            text-decoration: none;
            box-shadow: 3px 3px 0px #000033;
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
            background-color: #222;
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

    <!-- MAIN CONTENT (COVERS FULL PAGE) -->
    <div class="content">
        <p>Welcome to My Website</p>
        <a href="#" class="blue-button">Click Me</a>
    </div>

    <!-- FOOTER -->
    <div class="footer">
        © 2025 My Website. All rights reserved.
    </div>

</body>
</html>
