const myButton = document.getElementById("sub");
const myText = document.getElementById("numAge");
const dis = document.getElementById("output");

let age;

myButton.onclick = function(){

    if (myText.value.trim() === "") {
        dis.textContent = "Please enter your age.";
        return;
    }
    age = Number(myText.value);
    if (age > 70){
        dis.textContent = "Stay at home you are too Old"
    }else if(age <= 0){
        dis.textContent = "Stupid Check your age and enter again"
    }
    else if (age <= 16) {
        dis.textContent = "You are too young to drive"
    } else if (age <=70) {
        dis.textContent = "You are eligible to drive" 
    }else{
        dis.textContent = "check whether you have entered correctly"
    }
    
}