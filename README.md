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

        .search-results span.highlight {
            background-color: yellow;
            color: black;
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
            <a href="about-me.html" class="header-button">Abou Me</a>
        </div>
    </header>

    <!-- Search Section -->
    <div class="search-section">
        <input type="text" id="searchInput" class="search-bar" placeholder="Type your keyword...">
        <button class="search-button" onclick="performSearch()">Search</button>
    </div>

    <!-- Search Results Section -->
    <div id="searchResults" class="search-results">
        <h2>Search Results</h2>
        <ul id="resultsList"></ul>
    </div>

    <!-- Footer -->
    <footer class="footer">
        <a href="termsofcondition.html" class="footer-button">Terms Of Condition</a>
         <a href="dsc.gg/gtd-invite" class="footer-button">Terms Of Condition</a>
        
    </footer>

    <script>
        const pages = [
            { name: "Home", link: "05staff.github.io" },
            { name: "About Me", link: "05staff.github.io/about-me.html" }
            { name: "Terms Of Condition", link: "termsofcondition.html" },
        ];

        function performSearch() {
            const input = document.getElementById("searchInput").value.toLowerCase();
            const resultsList = document.getElementById("resultsList");
            const resultsDiv = document.getElementById("searchResults");

            resultsList.innerHTML = ""; // Clear previous results
            if (input.trim() === "") {
                resultsDiv.style.display = "none";
                return;
            }

            const matchingPages = pages.filter(page =>
                page.name.toLowerCase().includes(input)
            );

            if (matchingPages.length === 0) {
                resultsList.innerHTML = "<li>No results found.</li>";
            } else {
                matchingPages.forEach(page => {
                    const highlightedName = page.name.replace(
                        new RegExp(input, "gi"),
                        match => `<span class="highlight">${match}</span>`
                    );
                    resultsList.innerHTML += `<li><a href="${page.link}">${highlightedName}</a></li>`;
                });
            }

            resultsDiv.style.display = "block";
        }
    </script>
</body>
</html>
