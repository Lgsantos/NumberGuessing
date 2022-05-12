let computerGuess;
let userGuesses = [];
let attemps = 0;
let maxGuesses;

function gameEnded() {
    document.getElementById("newGameButton").style.display = "inline";
    document.getElementById("inputBox").setAttribute("readonly", "readonly");
}

function newGame() {
    window.location.reload();
}

function init() {
    computerGuess = Math.floor(Math.random() * 100 + 1);
    // console.log(computerGuess);
    document.getElementById("newGameButton").style.display = "none";
    document.getElementById("gameArea").style.display = "none";
}

function startGameView() {
    document.getElementById("welcomeScreen").style.display = "none";
    document.getElementById("gameArea").style.display = "block";
}

function easyMode() {
    maxGuesses = 10;
    startGameView();
}

function hardMode() {
    maxGuesses = 5;
    startGameView();
}

function compareGuess() {
    const userGuess = Number(document.getElementById("inputBox").value);
    userGuesses.push(" " + userGuess);
    document.getElementById("guesses").innerHTML = userGuesses;
    attemps++;
    document.getElementById("attempts").innerHTML = attemps;
    if (attemps < maxGuesses) {
        if (userGuess > computerGuess) {
            document.getElementById("textOutput").innerHTML = "Seu palpite foi muito alto";
            document.getElementById("inputBox").value = "";
        } else if (userGuess < computerGuess) {
            document.getElementById("textOutput").innerHTML = "Seu palpite foi muito baixo";
            document.getElementById("inputBox").value = "";
        } else {
            document.getElementById("textOutput").innerHTML = "Correto! Você acertou em " + attemps + " tentativa(s)!";
            gameEnded();
        }
    } else {
        if (userGuess > computerGuess) {
            document.getElementById("textOutput").innerHTML = "VOCÊ PERDEU! O número secreto era " + computerGuess;
            gameEnded();
        } else if (userGuess < computerGuess) {
            document.getElementById("textOutput").innerHTML = "VOCÊ PERDEU! O número secreto era " + computerGuess;
            gameEnded();
        } else {
            document.getElementById("textOutput").innerHTML = "Correto! Você acertou em " + attemps + " tentativa(s)!";
            gameEnded();
        }
    }
    
}