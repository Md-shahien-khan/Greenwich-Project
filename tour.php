<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <link rel="stylesheet" href="tour.css">
    <style>
    body {
        margin: 0;
        padding: 0;
        font-family: Arial, sans-serif;
    }

    .back-button {
        position: fixed;
        top: 20px;
        left: 20px;
        padding: 10px 20px;
        background-color: #2A1C55;
        color: #fff;
        text-decoration: none;
        border-radius: 5px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        z-index: 9999;
    }

    .back-button i {
        margin-right: 5px;
    }
    </style>
    <title>Virtual Campus Tour</title>
</head>

<body>
    <a href="index.php" class="back-button"><i class="fas fa-arrow-left"></i> Back to Home Page</a>
    

    <div class="tour-container">
        <img id="current-image" src="home.jpg" alt="Campus Tour">
        <h2 id="place-name">Home</h2>
        <div class="nav-buttons">
            <div class="button-row">
                <button id="up-button"><i class="fas fa-chevron-up"></i> Up</button>
            </div>
            <div class="button-row horizontal">
                <button id="left-button"><i class="fas fa-chevron-left"></i> Left</button>
                <button id="right-button"><i class="fas fa-chevron-right"></i> Right</button>
            </div>
            <div class="button-row">
                <button id="down-button"><i class="fas fa-chevron-down"></i> Down</button>
            </div>
        </div>
        
    </div>
    <script src="tour.js"></script>
</body>

</html>