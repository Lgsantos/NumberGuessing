let computerGuess;
let userGuesses = [];
let attemps = 0;
let maxGuesses;
let low = 1;
let high = 100;

function updateRange() {
    const rangeOutput = document.getElementById('rangeOutput');
    rangeOutput.innerText = `${low} - ${high}`;
    rangeOutput.style.marginLeft = low + '%';
    rangeOutput.style.marginRight = 100 - high + '%';
    rangeOutput.classList.add('flash');

    const lowValue = document.getElementById("low");
    lowValue.style.flex = low + '%';
    lowValue.style.background = '#ef7b54';

    const space = document.getElementById("space");
    space.style.flex = high - low + '%';
    space.style.background = '#83e1d0';

    const highValue = document.getElementById("high");
    highValue.style.flex = 100 - high + '%';
    highValue.style.background = '#ef7b54';
}

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
            if (userGuess < high) high = userGuess;
        } else if (userGuess < computerGuess) {
            document.getElementById("textOutput").innerHTML = "Seu palpite foi muito baixo";
            document.getElementById("inputBox").value = "";
            if (userGuess > low) low = userGuess;
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
    updateRange();
}