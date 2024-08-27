const textBox = document.getElementById("textBox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelcius = document.getElementById("toCelcius");
const submitButton = document.getElementById("submitButton");
const finalDisplay = document.getElementById("finalDisplay");
let temp;

submitButton.onclick = function convert(){
    event.preventDefault();
    temp = Number(textBox.value)
    if(toFahrenheit.checked){
        temp = (temp * 9/5) + 32;
        finalDisplay.textContent = temp.toFixed(1) + "°F";
    }
    else if(toCelcius.checked){
        temp = (temp - 32) * 5/9;
        finalDisplay.textContent = temp.toFixed(1) + "°C";
    }
    else{
        finalDisplay.textContent = "Select a Unit";
    }
}