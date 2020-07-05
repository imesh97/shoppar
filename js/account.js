// Setting the user account details
document.getElementById("welcome").innerHTML = "Welcome back, <i>" + user["username"] + "</i>";
document.getElementById("username").innerText = "Username: " + user["username"];
document.getElementById("email").innerText = "Email: " + user["email"];
document.getElementById("password").innerText = "Password: " + toAsterisk(user["password"]);

// Make text to asterisks
function toAsterisk(word){
    return Array(word.length+1).join("*");
}

// Put the user order account
document.getElementById("order-count").innerText += " (" + orders.length + ")";
// If they dont have any orders
if(orders.length == 0 || orders == null){
    document.getElementById("orders").innerHTML =
        "<p>Looks like you don't have any orders. <a class='font-weight-bold' href='listings.php'>Let's change that!</a></p>"
}
else {
    for (let ID in orders) {
        // Access the specific order
        let index = orders[ID];
        let product = products[index];
        // Product details
        let product_name = product["title"];
        let product_price = product["price"];
        let product_img = product["img"];
        // Insert HTML to div
        document.getElementById("orders").innerHTML +=
            "<li class='list-group-item'> " +
            "<img src='" + product_img + "' height='150' width='150' class='ml-lg-5 mt-2'> " +
            "<div class='media align-items-lg-center p-2'> " +
            "<div class='media-body '> " +
            "<h5 style='font-size: 16px;' class='font-weight-bold'><a href='product.php?id=" + ID + "'>" + product_name + "</a></h5> " +
            "<h6 class='font-weight-bold'>$" + product_price + " / day</h6> " +
            "</div> </div> </li>"
    }
}