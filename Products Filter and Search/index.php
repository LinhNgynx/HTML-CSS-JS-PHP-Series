<?php
include("connection.php");
$sql = 'SELECT * FROM products';
$result = $conn->query($sql);
if ($result->num_rows <= 0) {
    echo "Failed fetching";
}
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Products</title>
    <script src="script.js"></script>
    <link href="style.css" rel="stylesheet">
</head>

<body>
    <div class="container">
        <form id="form">
            <input type="text" name="search" id="search" placeholder="Search here...">
            <button type="submit"> Search</button>
        </form>
        <div>
            <button class="category-selector">All</button>
            <button class="category-selector">Topwear</button>
            <button class="category-selector">Bottomwear</button>
            <button class="category-selector">Jacket</button>
            <button class="category-selector">Watch</button>
        </div>
        <div class="product-section">
            <?php
            if ($result->num_rows > 0) {
                while ($row = $result->fetch_assoc()) {
                    echo '<div>
                         <img src="' . $row['image'] . '">
                         <h3 class="category">' . $row['category'] . '</h3>
                         <h3 class="name">' . $row['name'] . '</h3>
                         <h3>' . $row['price'] . '$</h3>
                        </div>';
                }
            }
            ?>
        </div>
    </div>
</body>

</html>