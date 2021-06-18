// The product array below is held in memory as an array of items available to all pages
// For example, you can access a price like this:  products[2].price
// But the current cart quantities for each product must be held in local or session storage
// in order to be shared by each page of the application.

// =============================================================================
// YOU REWRITE THE NAMES, DESCRIPIONS & PRICES TO MATCH YOUR OWN PRODUCTS BELOW!
// =============================================================================

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
    for (var i = 1; i <= 4; i++) {
        q = parseInt(localStorage.getItem("q" + i));
        if (isNaN(q)) {
            q = 0;
        }
        qTot += q;
    }

    // ===================================================================
    // YOU WRITE CODE TO DISPLAY THE CART's TOTAL ITEMS ON THE PAGE BELOW!
    // ===================================================================
    var strHTML = "<p>You cart is currently <b>empty!</b></p><p><img src='streamline-icon-shopping-bag-empty@140x140' width='72' height='72' alt='empty cart icon'></p>";


    document.getElementById('divCartSummary').innerHTML = strHTML;
}


function add2Cart(product) { //   -----------------
    //  Given the "id" of the product, add the desired quantity
    //  to the existing cart quantity (if any) in storage and 
    //  redisplay the cart summary info on the page.
    console.log("add2Cart");
    var quantity = parseInt(document.getElementById(product).value);
    if (isNaN(quantity)) {
        quantity = 1
    };
    if (isNaN(parseInt(localStorage.getItem(product)))) {
        localStorage.setItem(product, quantity);
    } else {
        // =========================================================================
        // YOU WRITE CODE TO UPDATE STORAGE WITH PROPER PRODUCT CART QUANTITY BELOW!
        // =========================================================================     


    }
    updateCartTotalQ();
}


function clearCart() { //   -----------
    //  Set the cart's quantities to zero in storage
    //  and redisplay the cart summary info on the page.
    console.log("clearCart");
    localStorage.setItem('q1', '0');

    // ====================================================================
    // YOU WRITE CODE TO CLEAR THE OTHER 3 PRODUCTS' CART QUANTITIES BELOW!
    // ====================================================================

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
        // ==================================================================
        // YOU REPLACE THE ALERT CODE WITH DOCUMENT.WRITE AS INDICATED BELOW!
        // ==================================================================

        alert("The Cart is empty, but this alert should be replaced with document.write to display this in the page's table along with a link and suggestion to go to the shopping page!");

    } else {
        var grandTotal;
        var tax;

        // ============================================================================
        // YOU CALCULATE THE TAX AND GRAND TOTAL SO IT CAN BE DISPLAYED PROPERLY BELOW!
        // ============================================================================      

        document.write('<tr><td style="text-align:right" colspan="3" >Subtotal: </td><td style="text-align:right">$' + noTaxTotal.toFixed(2) + '</td></tr><tr><td style="text-align:right" colspan="3" >Tax: </td><td style="text-align:right">$' + tax.toFixed(2) + '</td></tr><tr><td style="text-align:right" colspan="3" ><strong>Grand total:</strong></td><td style="text-align:right"><strong>$' + grandTotal.toFixed(2) + '</strong></td></tr>');
    }
}
