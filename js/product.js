// VAR: Product
let product = products[pid];

// VAR: Product Properties
let productName = product["title"];
let productDesc = product["description"];
let productCategory = product["category"];
let productPrice = product["price"];
let productImg = product["img"];
let productRate = product["rating"];

// Function to generate the product page
function changeProperties(){
    // For the product itself
    document.getElementById("title").innerText = productName;
    document.getElementById("price").innerText = "$" + productPrice;
    document.getElementById("category").innerText = productCategory;
    document.getElementById("desc").innerText = productDesc;
    document.getElementById("rating").innerHTML = stars(productRate);
    document.getElementById("pimg").src = productImg;

    // For the related 3 products to display
    let randoms = random3();
    for(let rand in randoms){
        // VAR: Random product properties
        let p = products[randoms[rand]];
        let p_title = p["title"];
        let p_desc = p["description"];
        let p_img = p["img"];
        let p_id = p["id"];
        // Appending HTML
        document.getElementById("related").innerHTML +=
            "<div class='col-4 text-center'> " +
            "<div class='card'> " +
            "<img width='200' height='200' src='" + p_img + "' class='card-img-top'> " +
            "<div class='card-body'> " +
            "<h5 class='card-title'>" +
            "<a href='product.php?id=" + (p_id - 1) + "'>" + p_title + "</a></h5> " +
            "<p class='card-text'>" + p_desc + "</p> " +
            "</div> </div> </div>";
    }

}

// Creating the stars text
function stars(num){
    // 5 stars
    if (num == 5){
        return "&#9733; &#9733; &#9733; &#9733; &#9733;";
    }
    // 4 stars
    else if(num >= 4.0){
        return "&#9733; &#9733; &#9733; &#9733; &#9734;";
    }
    // 3 stars
    else if(num >= 3.0){
        return "&#9733; &#9733; &#9733; &#9734; &#9734;"
    }
    // 2 stars
    else if (num >= 2.0){
        return "&#9733; &#9733; &#9734; &#9734; &#9734;"
    }
    //1 star
    else if(num >= 1.0){
        return "&#9733; &#9734; &#9734; &#9734; &#9734;"
    }
    // 0 star
    return "&#9734; &#9734; &#9734; &#9734; &#9734;"
}

// Generate 3 random products
function random3(){
    let arr = [];
    for(let i = 0; i < 3; i++){
        // Random integer
        let rand = Math.floor(Math.random() * (products.length - 1));
        // While loop - product is either the current one or array includes it already
        while(rand == pid || arr.includes(rand)){
            rand = Math.floor(Math.random() * (products.length - 1));
        }
        // Add to array
        arr.push(rand);
    }
    return arr;
}


function visitTest(){
    window.location.href = "shoppar.php";
}