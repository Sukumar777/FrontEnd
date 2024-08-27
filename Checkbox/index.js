//.checked

const myCheckBox = document.getElementById("myCheckBox");
const visaButton = document.getElementById("visaButton");
const masterButton = document.getElementById("masterButton");
const PaypalButton = document.getElementById("PaypalButton");
const mySubmit = document.getElementById("mySubmit");
const submitResult = document.getElementById("submitResult");
const paymentResult = document.getElementById("paymentResult");

mySubmit.onclick = function() {
    
    if(myCheckBox.checked){
        submitResult.textContent = `You are Subscribed`;
    }
    else{
        submitResult.textContent = `You are NOT Subscribed`;
    }

    if(visaButton.checked){
        paymentResult.textContent = `You are paying with Visa`;
    }
    else if(masterButton.checked){
        paymentResult.textContent = `You are paying with MasterCard`;
    }
    else if(PaypalButton.checked){
        paymentResult.textContent = `You are paying with Paypal`;
    }else{
        paymentResult.textContent = `Check the payment card`
    }
}

/* const email = "SukumarBalagam@gmail.com"

let name = email.slice(0, email.indexOf("@"));
let extension = email.slice(email.indexOf('@'));
console.log(name);
console.log(extension); */