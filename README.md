<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Light Blue Theme with Scroll Effect</title>
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
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
        </div>
        <div class="search-container">
            <input type="text" id="searchInput" placeholder="Search...">
            <button onclick="searchContent()">Search</button>
        </div>
    </header>

    <!-- Main Content -->
    <div class="content" id="content">
        <h1>Welcome to the Light Blue Theme Website!</h1>
        <p>This is a simple, smooth light blue theme website with Arial font.</p>
        <img src="https://via.placeholder.com/600x400" alt="Placeholder Image">
        <button onclick="buttonAction()">Click Me</button>
    </div>

    <!-- Footer -->
    <footer>
        &copy; 2024 Your Website. All rights reserved.
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

        // Search Function
        function searchContent() {
            const searchInput = document.getElementById("searchInput").value.toLowerCase();
            const content = document.getElementById("content");
            const paragraphs = content.getElementsByTagName("p");

            let found = false;

            for (let p of paragraphs) {
                if (p.textContent.toLowerCase().includes(searchInput)) {
                    p.style.backgroundColor = "#ffff99"; // Highlight found text
                    found = true;
                } else {
                    p.style.backgroundColor = "transparent";
                }
            }

            if (!found) {
                alert("No matches found.");
            }
        }

        // Placeholder Button Action
        function buttonAction() {
            alert("Button clicked! Replace with your action.");
        }
    </script>

</body>
</html>
