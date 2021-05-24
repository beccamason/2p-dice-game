//VARIABLES
const gameText = document.getElementById("gametext");
const buttonp1 = document.getElementById("roll1btn");
const buttonp2 = document.getElementById("roll2btn");
const dice = document.getElementsByTagName("img")[0];
const hold1 = document.getElementById("hold1");
const hold2 = document.getElementById("hold2");
let x = 0;
let y = 0;
let roll1;
let roll2;

//PLAYER 1 ROLL
buttonp1.addEventListener("click", rollp1);
function rollp1 () {
    roll1 = Math.floor((Math.random() * 6) + 1);
    if (roll1 == 1) {
        gameText.textContent = "Player 2 Wins!"
        x = 0;
        y = 0;
    }
    document.getElementById("roll1").innerHTML = roll1;
    document.getElementById("score1").innerHTML = x;
    const diceFace = "img/dice" + roll1 + ".png";
    dice.setAttribute("src", diceFace);
}
//PLAYER 1 HOLD
hold1.addEventListener("click", holdp1);
function holdp1 () {
    x += roll1;
    document.getElementById("score1").innerHTML = x;
    roll1 = 0;
    document.getElementById("roll1").innerHTML = roll1;
}

//PLAYER 2 ROLL
buttonp2.addEventListener("click", rollp2);
function rollp2 () {
    roll2 = Math.floor((Math.random() * 6) + 1);
    if (roll2 == 1) {
        gameText.textContent = "Player 1 Wins!"
        x = 0;
        y = 0;

    }
    document.getElementById("roll2").innerHTML = roll2;
    document.getElementById("score2").innerHTML = y;
    const diceFace = "img/dice" + roll2 + ".png";
    dice.setAttribute("src", diceFace);
}

//PLAYER 2 HOLD
hold2.addEventListener("click", holdp2);
function holdp2 () {
    y += roll2;
    document.getElementById("score2").innerHTML = y;
    roll2 = 0;
    document.getElementById("roll2").innerHTML = roll2;
}

// NEW GAME 
const button = document.getElementById("submit");
button.addEventListener("click", () =>{
    x = 0;
    y = 0;
    gameText.textContent = "";
    document.getElementById("score1").innerHTML = x;
    document.getElementById("score2").innerHTML = y;
    document.getElementById("roll1").innerHTML = "";
    document.getElementById("roll2").innerHTML = "";
    dice.src = "";
})
