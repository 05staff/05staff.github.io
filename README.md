<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Modern Square Theme</title>
    <!-- Google Font -->
    <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet">
    <style>
        /* General Reset */
        body {
            margin: 0;
            font-family: 'Press Start 2P', cursive;
            background-color: #f4f4f9;
            color: #333;
        }

        /* Header Styling */
        header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 15px 30px;
            background-color: #ffffff;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .logo {
            font-size: 18px;
            font-weight: bold;
            color: #555;
        }

        .header-buttons {
            display: flex;
            gap: 10px;
        }

        .header-button {
            padding: 10px 15px;
            border: 2px solid #333;
            background-color: #fff;
            color: #333;
            border-radius: 5px;
            text-decoration: none;
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .header-button:hover {
            background-color: #333;
            color: #fff;
        }

        /* Content Body */
        .content {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 20px;
            padding: 40px;
            background-color: #f4f4f9;
        }

        .content-item {
            background-color: #fff;
            border: 2px solid #ddd;
            border-radius: 10px;
            padding: 20px;
            text-align: center;
            width: 300px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .content-item img {
            max-width: 100%;
            border-radius: 10px;
            margin-bottom: 10px;
        }

        .content-button {
            padding: 10px 15px;
            border: 2px solid #333;
            background-color: #333;
            color: #fff;
            border-radius: 5px;
            text-decoration: none;
            cursor: pointer;
            transition: all 0.3s ease;
            font-size: 12px;
        }

        .content-button:hover {
            background-color: #555;
        }

        /* Footer Styling */
        .footer {
            text-align: center;
            padding: 20px;
            background-color: #333;
            color: #fff;
            margin-top: 40px;
        }

        .footer-button {
            display: inline-block;
            padding: 10px 15px;
            margin: 5px;
            border: 2px solid #fff;
            background-color: #333;
            color: #fff;
            text-decoration: none;
            cursor: pointer;
            font-family: 'Press Start 2P', cursive;
            font-size: 10px;
        }

        .footer-button:hover {
            background-color: #555;
        }
    </style>
</head>
<body>
    <!-- Header -->
    <header>
        <div class="logo">05staff</div>
        <div class="header-buttons">
            <a href="05staff.github.io" class="header-button">Home</a>
            <a href="about-me.html" class="header-button">About Me</a>
        </div>
    </header>

    <!-- Content Body -->
    <div class="content">
        <div class="content-item">
            <img src="https://via.placeholder.com/300x200" alt="Placeholder Image">
            <p>Sample Text for Item 1</p>
            <a href="#" class="content-button">Learn More</a>
        </div>
        <div class="content-item">
            <img src="https://via.placeholder.com/300x200" alt="Placeholder Image">
            <p>Sample Text for Item 2</p>
            <a href="#" class="content-button">Learn More</a>
        </div>
        <div class="content-item">
            <img src="https://via.placeholder.com/300x200" alt="Placeholder Image">
            <p>Sample Text for Item 3</p>
            <a href="#" class="content-button">Learn More</a>
        </div>
    </div>

    <!-- Footer -->
    <footer class="footer">
        <a href="termsofcondition.html" class="footer-button">Terms Of Condition</a>
        <a href="https://dsc.gg/gtd-invite" class="footer-button">Discord Server</a>
    </footer>
</body>
</html>
