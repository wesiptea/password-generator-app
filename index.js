const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

// connect to html 2 divs, password fields (1 and 2)
// button click event and event listener (function)
// loop through the characters array
// generate 2 random paswords using the characters in the array
// create 15-character paswords
// zero password divs and generate a new set

let button = document.getElementById("btn");
let password1 = document.getElementById("password1");
let password2 = document.getElementById("password2");

function btnClick() {
    // console.log("button clicked");
    resetBtn()
    for (let i = 0; i < 15; i++) {
        let randomIndex = Math.floor( Math.random() * characters.length );        
        let randomPassword = characters[randomIndex];
        password1.textContent += randomPassword;
    }
    for (let i = 0; i < 15; i++) {
        let randomIndex = Math.floor( Math.random() * characters.length );        
        let randomPassword = characters[randomIndex];
        password2.textContent += randomPassword;
    }
}

function resetBtn() {
    console.log("clicked Reset")
    password1.textContent = 0;
    password2.textContent = 0;
    passwordWindow1 = 0;
    passwordWindow2 = 0;
}