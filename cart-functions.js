// This version of the cart-functions uses parallel arrays, minimizes use of objects


//var productNames = ["Lily", "Sunflower", "Wishes", "Rose"];
//var productDescriptions = ["Pink Rose Lily", "Sunflower Mason", "Best Wishes", "Orange Rose"];
//var productPrices = [40.00, 50.00, 35.00, 39.00];
//var productIds = ["q1", "q2", "q3", "q4"];
var products = [];
products[0] = {
    id: "q1",
    name: "Lily",
    description: "Pink Rose Lily",
    price: "40.00"
};
products[1] = {
    id: "q2",
    name: "Sunflower",
    description: "Sunflower Mason",
    price: "50.00"
};
products[2] = {
    id: "q3",
    name: "Wishes",
    description: "Best Wishes",
    price: "35.00"
};
products[3] = {
    id: "q4",
    name: "Rose",
    description: "Orange Rose",
    price: "39.00"
};

const TAXRATE = 0.085; // USE THIS IN TAX CALCULATIONS


function updateCartTotalQ() { //   ----------------
    //  Get the current cart quantities from local/session storage
    //  Display the total # of items currently in the cart
    //  Display this info in the cart summary div area on the page
    console.log("updateCartTotalQ");
    var qTot = 0;
    var q;
    var strHTML;
    for (var i = 0; i <= 3; i++) {
        q = parseInt(localStorage.getItem(products[i].id));
        if (isNaN(q)) {
            q = 0;
        }
        qTot += q;
    }
    if (qTot == 0) {
        strHTML = "<p>You cart is currently <b>empty!</b></p><p><img src='streamline-icon-shopping-bag-empty@140x140.png' width='72' height='72' alt='empty cart icon'></p>";
    } else {
        strHTML = "<p>You cart has currenlty has <b>" + qTot + "</b> items</p><p><img src='streamline-icon-shopping-bag-add-2-1@150x150.png' width='72' height='72' alt='full cart icon'></p>";

    }



    document.getElementById('divCartSummary').innerHTML = strHTML;

    // ===================================================================
    // YOU WRITE CODE TO DISPLAY THE CART's TOTAL ITEMS ON THE PAGE BELOW!
    // ===================================================================
}


function add2Cart(product) { //   -----------------
    //  Given the "id" of the product (such as "q1", add the desired 
    //  quantity to the existing cart quantity (if any) in storage 
    //  and redisplay the cart summary info on the page. 
    //  Default to adding 1 to the cart if quantity is not specified.
    console.log("add2Cart");
    console.log(product);

    var quantity = parseInt(document.getElementById(product).value);
    console.log(quantity);
    if (isNaN(quantity)) {
        quantity = 1
        console.log("Check if not given we set quanity to 1");

    };
    if (quantity >= 0) {
        console.log("Check is positive return");
        document.getElementById("Quat" + product[1]).innerHTML = " ";
        if (isNaN(parseInt(localStorage.getItem(product)))) {
            localStorage.setItem(product, quantity);
        } else {
            var updatedQuantity = parseInt(localStorage.getItem(product)) + quantity;
            localStorage.setItem(product, updatedQuantity);

            // =========================================================================
            // YOU WRITE CODE TO UPDATE STORAGE WITH PROPER PRODUCT CART QUANTITY BELOW!
            // =========================================================================     


        }
        updateCartTotalQ();
    } else {
        console.log("Quat" + product[1]);
        document.getElementById("Quat" + product[1]).innerHTML = "<br>Please Enter a Valid Number.";
    }
}

function clearCart() { //   -----------
    //  Set the cart's quantities to zero in storage
    //  and redisplay the cart summary info on the page.

    // ====================================================================
    // YOU WRITE CODE TO CLEAR THE OTHER 3 PRODUCTS' CART QUANTITIES BELOW!
    // Better yet, use a FOR LOOP to go through all 4 products instead!
    // ====================================================================
    console.log("clearCart");
    for (var i = 0; i <= 3; i++) {
        localStorage.setItem(products[i].id, '0');
    }
    updateCartTotalQ();
}


function showCart() { //   ----------
    //  Display the full contents of the cart onto the page using a table.
    //  To do so, get each product's current cart quantity from storage and
    //  if its quantity is non-zero, write a table row into page showing
    //  that product's details. Include subtotals, tax, and grand totals for cart.
    console.log("showCart");


    var cartIsEmpty = true;
    var noTaxTotal = 0;
    for (var i = 0; i < products.length; i++) // produce a table row for each item in the cart currently
    {
        var quantity = parseInt(localStorage.getItem(products[i].id));
        if (!isNaN(quantity) && quantity > 0) {
            if (cartIsEmpty) {
                document.write('<tr><th class="numericCol">Quantity</th><th>Description</th><th class="numericCol">Price</th><th class="numericCol">Product Total</th></tr>');
            }
            document.write('<tr><td class="numericCol">' + quantity + '</td><td>' + products[i].description + '</td><td class="numericCol">$' + products[i].price + '</td><td class="numericCol">$' + (quantity * products[i].price).toFixed(2) + '</td></tr>');
            noTaxTotal += (quantity * products[i].price);
            cartIsEmpty = false;
        }
    }

    if (cartIsEmpty) {


        document.write("The cart is empty. To countine shoping please navigate to the <input type='button' value='Shop Page' id='Shopbutton' onclick='MovetoShop();'><p><img src='streamline-icon-empty-wallet-2@140x140.png' width='140' height='140' alt='empty cart icon'></p>");

    } else {
        var grandTotal = 0;
        var tax = 0;

        console.log(noTaxTotal);

        tax = TAXRATE * noTaxTotal;
        console.log(tax);
        grandTotal = tax + noTaxTotal;
        console.log(grandTotal);

    }


    // ============================================================================
    // YOU CALCULATE THE TAX AND GRAND TOTAL SO IT CAN BE DISPLAYED PROPERLY BELOW!
    // ============================================================================      

    document.write('<tr><td style="text-align:right" colspan="3" >Subtotal: </td><td style="text-align:right">$' + noTaxTotal.toFixed(2) + '</td></tr><tr><td style="text-align:right" colspan="3" >Tax: </td><td style="text-align:right">$' + tax.toFixed(2) + '</td></tr><tr><td style="text-align:right" colspan="3" ><strong>Grand total:</strong></td><td style="text-align:right"><strong>$' + grandTotal.toFixed(2) + '</strong></td></tr>');
}



function MovetoShop() {
    location.href = "shop.html";
}
