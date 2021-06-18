// JavaScript Document

function updateName() { //    ----------
    // Set the new customer's name into local or session storage
    console.log("updateName");
    var strCustomer = document.getElementById("custname").value;
    sessionStorage.setItem("customerName", strCustomer);
    WelcomeCust();


}


function clearName() { //    ---------
    // Reset the customer's name to nothing in local/session storage

    console.log("clearName");
    sessionStorage.setItem("customerName", null);
    // and redisplay the guest area using "set Guest" function
    WelcomeGuest();
}


function setGuest() { //    --------
    // If the customer is not currrently signed in, call them "guest" 
    console.log("setGuest");

    console.log("customerName" + sessionStorage.getItem("customerName"));
    console.log("customerName" + typeof sessionStorage.getItem("customerName"));
    // var strCustomer = document.getElementById('divGuestArea').value;

    if (sessionStorage.getItem("customerName") !== "null" && sessionStorage.getItem("customerName") !== null) {
        WelcomeCust();
    } else {
        WelcomeGuest();
    }

}

function WelcomeGuest() {

    console.log("WelcomeGuest");
    // and give them a blank text box and a "sign in" button to use.

    var strHTML = "<h1>Welcome Guest</h1>";
    strHTML += "<p><label for='custname'>Customer Name:</label><input id='custname' type='text'></p><p><input type='button' value='Sign In' id='SignInbutton' onclick='updateName();'></p>";

    document.getElementById('divGuestArea').innerHTML = strHTML;
}

function WelcomeCust() {
    console.log("WelcomeCust");
    // If instead the customer already signed in earlier, welcome them by name 
    var strCustomer = sessionStorage.getItem("customerName");
    var strHTML = "<h1>Welcome " + strCustomer + "</h1>";
    // and give them a "sign out" buttom in case they want to use it. 
    strHTML += "<p><input type='button' value='Sign Out' id='SignOutbutton' onclick='clearName();'></p>";

    console.log("checking the WelcomeCust return");
    document.getElementById('divGuestArea').innerHTML = strHTML;
    console.log("checking the WelcomeCust 2");
}


// Place the above mentioned items within the given "guest area" div.
