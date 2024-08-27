const myButton = document.getElementById("rollButton");
const myLabel = document.getElementById("choice");
const min =1;
const max = 6;
let randNum;

myButton.onclick = function (){
    randNum = Math.floor(Math.random() * max) + min;
    myLabel.textContent = randNum;
}