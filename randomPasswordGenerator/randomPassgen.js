function randomPasswordGenerator(length, includelowerCaseChar, includeupperCaseChar, includenumberChar, includesymbolChar){
    const lowerCaseChar = "abcdefghijklmnopqrstuvwxyz";
    const upperCaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChar = "0123456789";
    const symbolChar = "~!@#$%^&*()";

    let allowedChar = "";
    let password = "";

    allowedChar += includelowerCaseChar ? lowerCaseChar : "";
    allowedChar += includeupperCaseChar ? upperCaseChar : "";
    allowedChar += includenumberChar ? numberChar : "";
    allowedChar += includesymbolChar ? symbolChar : "";

    if(length <= 0){
        return "Password should contain desired length";
    } else if(allowedChar.length === 0){
        return "You need to allowed the desired characters";
    }
    else{
        for(let i=0; i < length; i++){
            let randindex = Math.floor(Math.random() * allowedChar.length);
            password += allowedChar[randindex];
        }   
        return password;
    }
}

const passlength = 12;
const includelowerCaseChar = true;
const includeupperCaseChar = true;
const includenumberChar = true;
const includesymbolChar = true;

password = randomPasswordGenerator(passlength, includelowerCaseChar, includeupperCaseChar, includenumberChar, includesymbolChar);

console.log(`Generated Password: ${password}`)