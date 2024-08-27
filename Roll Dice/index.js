const roll = document.getElementById("roll");

roll.onclick = function(){

    const numberDisplay = document.getElementById("numberDisplay");
    const diceResult = document.getElementById("diceResult");
    const imageResult = document.getElementById("imageResult");
    const values = [];
    const images = [];
    
    for(let i=0; i < Number(numberDisplay.value); i++){
        
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push(`<img src="Images/${value}.png">`);

    }
    
    diceResult.textContent = `Dice: ${values.join(", ")}`;
    imageResult.innerHTML = images.join("");
}