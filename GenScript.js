// General javascrip functions   

function navigation() {
    console.log("navigation function");
    var navlink = document.getElementById("select").value;
    console.log(navlink);
    location.href = navlink;
}

//check inputs

function checkInputs() {
    console.log('checkInput Function');
    // Search thru product array for a match with customer's entry.
    // If found, show price.  If not found indicate that to user.
    // Return true if found, false if not.
    var i = 0
    var incompleteForm = false;
    var requiredFields = document.getElementsByClassName('required');
    console.log(requiredFields);
    while (i < requiredFields.length) {
        if (requiredFields[i].value == "") {
            requiredFields[i].value = "REQUIRED";
            incompleteForm = true;
            console.log(document.getElementById('checkResults'));
            console.log(document.getElementById('checkPayment'));
        }
        i++;
    }
    if (incompleteForm == false) {
        return processOrder();

    } else {

        document.getElementById('checkResults').innerHTML = "<br><br>Order could not be completed as processed. Please fill in the Required Fields.";
    }
}

//shipping
function shippingButtons() {
    var buttons = document.getElementsByName('Shipping');
    console.log("Shipping Functions");
    var noneChosen = true;
    var strChoice;
    var hidden = document.getElementById('hidding');
    for (var i = 0; i < buttons.length; i++) {
        if (buttons[i].checked) {
            noneChosen = false;
            strChoice = buttons[i].value;
        }
    }
    if (noneChosen) {
        alert("Please choose a shipping type!");
    } else {
        alert("You chose $" + strChoice + "!");
        hidden.style.display = "block";
    }

    return strChoice;



}

//invlaid inputs 
function isValidPhoneNo() {
    console.log("isValidPhoneNo");
    var PhoneNumb = document.getElementById('phone').value.match(/^(\+\d{1})?\(?\d{3}\)?\d{3}\d{4}$/g);
    console.log("phone", PhoneNumb);
    if (PhoneNumb && PhoneNumb.length == 1) {
        document.getElementById('CheckPhone').innerHTML = " ";
        return true;
    } else {
        document.getElementById('CheckPhone').innerHTML = "<br>Please Enter a Valid Phone Number.";
        return false;
    }
}

function isValidFirstName() {
    console.log("isValidFirstName");
    var cusName = document.getElementById('fullname').value;
    console.log(cusName);

    cusName = cusName.trim();
    firstName = cusName.split(" ")[0];

    var ValidFN = firstName.match(/([A-Z])+/gi);
    if (ValidFN && ValidFN.length == 1) {
        document.getElementById('CheckName').innerHTML = " ";
        return true;

    } else {
        document.getElementById('CheckName').innerHTML = "<br>Please Enter a Valid Name.";
        return false;

    }

}

function isValidEmail() {
    console.log("isValidEmail");
    var email = document.getElementById('email').value;
    console.log(email);

    var ValidEmail = email.match(/^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gm);
    if (ValidEmail && ValidEmail.length == 1) {
        document.getElementById('CheckEmail').innerHTML = " ";
        return true;

    } else {
        document.getElementById('CheckEmail').innerHTML = "<br>Please Enter a Valid Email.";
        return false;

    }


}

function isValidCity() {
    console.log("isValidCity");
    var cityName = document.getElementById('city').value;
    console.log(cityName);

    var ValidCity = cityName.match(/^[A-Za-z]+/gi);
    if (ValidCity && ValidCity.length == 1) {
        document.getElementById('CheckCity').innerHTML = " ";
        return true;

    } else {
        document.getElementById('CheckCity').innerHTML = "<br>Please Enter a City.";
        return false;

    }


}

function isValidCountry() {
    console.log("isValidCountry");
    var countryName = document.getElementById('country').value;
    console.log(countryName);

    var ValidCountry = countryName.match(/^[A-Za-z]+/gi);
    if (ValidCountry && ValidCountry.length == 1) {
        document.getElementById('CheckCountry').innerHTML = " ";
        return true;

    } else {
        document.getElementById('CheckCountry').innerHTML = "<br>Please Enter a Country.";
        return false;

    }


}

function isValidStreetAddress() {
    console.log("isValidStreetAddress");
    var streetName = document.getElementById('street').value;
    console.log(streetName);

    var ValidStreet = streetName.match(/^(([A-Z])*(\d+)([A-Z])*)(-|\/|&)*(([A-Z])*(\d+)([A-Z])*)*((\/)*(([A-Z])*(\d+)([A-Z])*))*/gm);
    if (ValidStreet && ValidStreet.length == 1) {
        document.getElementById('CheckStreet').innerHTML = " ";
        return true;

    } else {
        document.getElementById('CheckStreet').innerHTML = "<br>Please Enter a Street.";
        return false;

    }


}

function isValidState() {
    console.log("isValidState");
    var stateName = document.getElementById('state').value;
    console.log(stateName);

    var ValidState = stateName.match(/[A-Za-z]{2,}$/);
    console.log(ValidState);
    if (ValidState && ValidState.length == 1) {
        document.getElementById('CheckState').innerHTML = " ";
        return true;

    } else {
        document.getElementById('CheckState').innerHTML = "<br>Please Enter a State.";
        return false;
    }


}


function isValidZip() {
    console.log("isValidZip");
    var zipCode = document.getElementById('zip').value;
    console.log(zipCode);

    var ValidZip = zipCode.match(/\d{5}(?:-?\d{4})?/);
    console.log(ValidZip);
    if (ValidZip && ValidZip.length == 1) {
        document.getElementById('CheckZip').innerHTML = " ";
        return true;

    } else {
        document.getElementById('CheckZip').innerHTML = "<br>Please Enter a Zip Code.";
        return false;

    }


}

function isValidCreditCardNumber() {
    console.log("isValidCreditCardNumber");

    var ccNum = document.getElementById("creditcard").value;
    console.log(ccNum);

    var visaRegEx = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
    var mastercardRegEx = /^(?:5[1-5][0-9]{14})$/;
    var amexpRegEx = /^(?:3[47][0-9]{13})$/;
    var discovRegEx = /^(?:6(?:011|5[0-9][0-9])[0-9]{12})$/;
    var isValid = false;

    if (visaRegEx.test(ccNum)) {
        isValid = true;
    } else if (mastercardRegEx.test(ccNum)) {
        isValid = true;
    } else if (amexpRegEx.test(ccNum)) {
        isValid = true;
    } else if (discovRegEx.test(ccNum)) {
        isValid = true;
    }

    if (isValid) {
        document.getElementById('CheckCreditCard').innerHTML = " ";
        return true;
    } else {
        document.getElementById('CheckCreditCard').innerHTML = "<br>Please Enter a Valid Credit Card. ";
        return false;
    }
}



//Function to process the entire order 
function processOrder() {
    console.log("processOrder Funtion");

    var i = 0;

    isValidPhoneNo();
    isValidFirstName();
    isValidCity();
    isValidStreetAddress();
    // console.log(isValidStreetAddress());
    isValidState();
    isValidCreditCardNumber();
    console.log(isValidCreditCardNumber());
    isValidZip();
    isValidEmail();


    //shipping buttons
    var shippingCosts = shippingButtons();
    document.getElementById('checkResults').innerHTML = "";



    if (
        isValidPhoneNo() && isValidFirstName() && isValidCity() && isValidCountry() && isValidStreetAddress() && isValidState() && isValidCreditCardNumber() && isValidZip() && isValidEmail()

    ) {
        console.log("Moving to new page");
        location.href = "thankyou.html";

    }

}


//Date
function date() {
    var datToday = new Date();
    var strDate = datToday.getMonth() + 1 + "/" + datToday.getDate() + "/" + datToday.getFullYear();
    document.write("<br>The current date is: ", strDate);
}
