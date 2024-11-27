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
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .header-button:hover {
            background-color: #333;
            color: #fff;
        }

        /* Search Bar Section */
        .search-section {
            margin: 20px auto;
            text-align: center;
        }

        .search-bar {
            padding: 10px 15px;
            border: 2px solid #ddd;
            width: 250px;
            border-radius: 5px;
            font-family: 'Press Start 2P', cursive;
            font-size: 12px;
        }

        .search-button {
            padding: 10px 15px;
            border: none;
            background-color: #333;
            color: #fff;
            cursor: pointer;
            border-radius: 5px;
            transition: all 0.3s ease;
            font-family: 'Press Start 2P', cursive;
            font-size: 12px;
        }

        .search-button:hover {
            background-color: #555;
        }

        /* Search Results Section */
        .search-results {
            display: none;
            padding: 20px;
            background-color: #fff;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            margin: 20px auto;
            max-width: 600px;
            text-align: center;
        }

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
        <div class="logo">LOGO</div>
        <div class="header-buttons">
            <button class="header-button">Button 1</button>
            <button class="header-button">Button 2</button>
        </div>
    </header>

    <!-- Search Section -->
    <div class="search-section">
        <input type="text" id="searchInput" class="search-bar" placeholder="Type your keyword...">
        <button class="search-button" onclick="showSearchResults()">Search</button>
    </div>

    <!-- Search Results Section -->
    <div id="searchResults" class="search-results">
        <h2>Search Results</h2>
        <p>You searched for: <span id="keyword"></span></p>
    </div>

    <!-- Footer -->
    <footer class="footer">
        <a href="#" class="footer-button">Footer Button 1</a>
        <a href="#" class="footer-button">Footer Button 2</a>
    </footer>

    <script>
        function showSearchResults() {
            // Get the input value
            const keyword = document.getElementById('searchInput').value;

            // Update the search results content
            const resultsDiv = document.getElementById('searchResults');
            const keywordSpan = document.getElementById('keyword');

            keywordSpan.textContent = keyword;
            resultsDiv.style.display = 'block';
        }
    </script>
</body>
</html>
