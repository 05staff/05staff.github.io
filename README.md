<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>SCP UIU Fan Website</title>
  <!-- Favicon -->
  <link rel="icon" type="image/png" href="https://05staff.github.io/SCPocalypse%20Logo.png">
  <style>
    /* Define Bauhaus Demi font */
    @font-face {
      font-family: 'Bauhaus Demi';
      src: url('https://05staff.github.io/Bauhaus%20Demi.otf') format('opentype');
      font-weight: normal;
      font-style: normal;
    }

    body {
      margin: 0;
      font-family: 'Bauhaus Demi', Arial, sans-serif;
      background-color: #1a1a1a;
      color: #e0e0e0;
    }

    header {
      display: flex;
      align-items: center;
      padding: 10px 20px;
      background-color: #111;
      border-bottom: 2px solid #444;
    }

    header img {
      height: 50px;
      margin-right: 20px;
    }

    nav {
      display: flex;
      gap: 15px;
    }

    nav a {
      text-decoration: none;
      color: #e0e0e0;
      padding: 10px;
      border-radius: 5px;
      background-color: #333;
      transition: background-color 0.3s;
    }

    nav a:hover {
      background-color: #555;
    }

    main {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      padding: 50px 20px;
    }

    main img {
      max-width: 80%;
      border-radius: 10px;
      margin-top: 20px;
    }

    .editable-text {
      margin: 20px 0;
      font-size: 1.5rem;
    }
  </style>
</head>
<body>
  <header>
    <!-- Logo -->
    <img src="https://05staff.github.io/SCPocalypse%20Logo.png" alt="SCPocalypse Logo">
    <nav>
      <a href="index.html">Home</a>
      <!-- Add more links for additional pages -->
      <a href="#about">About</a>
      <a href="#contact">Contact</a>
    </nav>
  </header>
  <main>
    <!-- Editable Text Section -->
    <div class="editable-text">
      <h1>Welcome to the SCP UIU Fan Website</h1>
      <p>This is a fan-made website dedicated to the SCP Foundation's UIU. Feel free to explore and learn more!</p>
    </div>
    <!-- Image -->
    <img src="https://05staff.github.io/uiu.png" alt="UIU Image">
  </main>
</body>
</html>
