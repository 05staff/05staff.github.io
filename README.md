<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Light Blue Theme with Search</title>
    <style>
        /* General Page Styles */
        body {
            font-family: Arial, sans-serif;
            background-color: #e0f7fa;
            color: #333;
            margin: 0;
            padding: 0;
        }

        /* Header Section */
        header {
            background-color: #0288d1; /* Dark blue */
            color: white;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            padding: 15px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            transition: transform 0.3s ease; /* Smooth transition */
            z-index: 1000;
        }

        header.hidden {
            transform: translateY(-100%); /* Hide header when scrolled down */
        }

        .nav-buttons a {
            text-decoration: none;
            color: white;
            background-color: #81d4fa;
            padding: 10px 15px;
            margin: 0 5px;
            border: none;
            display: inline-block;
        }

        .nav-buttons a:hover {
            background-color: #4fc3f7;
        }

        /* Search Bar */
        .search-container {
            display: flex;
        }

        .search-container input {
            padding: 8px;
            border: none;
            font-size: 14px;
        }

        .search-container button {
            background-color: #81d4fa;
            border: none;
            padding: 8px 15px;
            color: white;
            cursor: pointer;
        }

        .search-container button:hover {
            background-color: #4fc3f7;
        }

        /* Main Content */
        .content {
            padding: 80px 20px; /* Add padding to avoid overlap with fixed header */
            text-align: center;
        }

        .content img {
            max-width: 100%;
            height: auto;
            margin: 20px 0;
        }

        .content button {
            background-color: #0288d1;
            color: white;
            border: none;
            padding: 10px 20px;
            cursor: pointer;
            font-size: 16px;
        }

        .content button:hover {
            background-color: #0277bd;
        }

        /* Search Results Section */
        .results-frame {
            background-color: white;
            border: 1px solid #ddd;
            padding: 20px;
            margin: 20px auto;
            width: 80%;
            max-height: 400px;
            overflow-y: auto;
            box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
        }

        .highlight {
            background-color: yellow;
            font-weight: bold;
        }

        /* Footer Section */
        footer {
            background-color: #0288d1;
            color: white;
            text-align: center;
            padding: 10px;
            position: fixed;
            bottom: 0;
            width: 100%;
        }
    </style>
</head>
<body>

    <!-- Header -->
    <header id="main-header">
        <div class="nav-buttons">
            <a href="#home">Home</a>
            <a href="about-me.html">About</a>
        </div>
        <div class="search-container">
            <input type="text" id="searchInput" placeholder="Search...">
            <button onclick="performSearch()">Search</button>
        </div>
    </header>

    <!-- Main Content -->
    <div class="content" id="content">
        <h1>05staff's Website</h1>
        <p>Welcome to the Official 05staff's Website</p>
        <img src="https://via.placeholder.com/600x400" alt="Placeholder Image">
        <button onclick="buttonAction()">Click Me</button>
    </div>

    <!-- Search Results -->
    <div class="results-frame" id="resultsFrame">
        <h3>Search Results:</h3>
        <div id="resultsContainer"></div>
    </div>

    <!-- Footer -->
    <footer>
    &copy;2024 05staff's Official Webbsite. All rights reserved.
    </footer>

    <script>
        let lastScrollTop = 0;
        const header = document.getElementById("main-header");

        // Hide header on scroll down and show on scroll up
        window.addEventListener("scroll", () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

            if (scrollTop > lastScrollTop) {
                // User scrolled down
                header.classList.add("hidden");
            } else {
                // User scrolled up
                header.classList.remove("hidden");
            }

            lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For mobile or negative scroll
        });

        // Search Functionality
        function performSearch() {
            const query = document.getElementById("searchInput").value.toLowerCase();
            const content = document.getElementById("content").innerHTML;
            const resultsFrame = document.getElementById("resultsContainer");

            if (!query) {
                resultsFrame.innerHTML = `<p>Please enter a search term.</p>`;
                return;
            }

            // Highlight matches
            const highlightedContent = content.replace(
                new RegExp(query, "gi"),
                match => `<span class="highlight">${match}</span>`
            );

            resultsFrame.innerHTML = highlightedContent;
        }

        // Placeholder Button Action
        function buttonAction() {
            alert("Button clicked! Replace with your action.");
        }
    </script>

</body>
</html>
