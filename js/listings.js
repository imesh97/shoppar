// GLOBAL: the selected sort method and product category
var sort_type;
var check_category = "All";


// FUNCTION: Appending every product to the listings directory
function appendProducts(arr){

    // Loop through every product in the products array
    for(let elem in arr){
        // Specific product variable from index
        let prod = arr[elem];
        // Check whether the product matches the selected category or belongs to All
        let category = prod["category"];
        if(category == check_category || check_category == "All") {

            // Variables for each product property
            let id = prod["id"];
            let name = prod["title"];
            let desc = prod["description"];
            let rating = prod["rating"];
            let price = prod["price"];
            let img = prod["img"];
            // Default image in case of null
            if (img == null || img == "") {
                img = "http://www.stonyelectrical.com/wp-content/uploads/2018/04/Product_Icon.png";
            }

            // Appending the product's HTML to the directory
            // Lots of string concatenation!
            document.getElementById("listings").innerHTML +=
                "<li class='list-group-item'> " +
                "<div class='media align-items-lg-center flex-column flex-lg-row p-3'> " +
                "<div class='media-body order-2 order-lg-1'> " +
                "<h5 class='mt-0 font-weight-bold mb-2'><a href='product.php?id=" + (id - 1) + "'> " + name + "</a></h5> " +
                "<p class='font-italic text-muted mb-0 small'><b>" + category + "</b> - " + desc + "</p> " +
                "<div class='d-flex align-items-center justify-content-between mt-1'> " +
                "<h6 class='font-weight-bold my-2'>$" + price + "</h6> <ul class='list-inline small'> " +
                "<li class='list-inline-item m-0'><i class='fa fa-star text-warning'> " + rating + "</i></li> " +
                "</ul> </div> </div>" +
                "<img src='" + img + "' height='150px' width='150px' class='ml-lg-5 order-1 order-lg-2'> </div> </li>";
        }
    }

}


// FUNCTION: Sorting the directory based on method
function sortProducts(type){

    // Reset the category HTML to blank
    document.getElementById("listings").innerHTML = "";
    // Access the sorting method and display it to the user
    sort_type = type;
    document.getElementById("sortDrop").innerText = type;

    // Access the selected sort method's products array
    let prods = sorted_products[type];
    // Append it!
    appendProducts(prods);

}


// FUNCTION: Changing the directory's category listings
function changeCategory(cat){

    // Setting the global category variable
    check_category = cat;
    // Run through the sort procedure
    sortProducts(sort_type);

}


// On page load --> sort All products based on Latest entry
sortProducts("Latest");
