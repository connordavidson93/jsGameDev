var button = document.getElementById("button1");

var myFunction = function myFunctionHandler() {
    alert("Hello World");
}
button.addEventListener ("click", myFunction);

var startButton = document.getElementById("startGame");

var startGameHandler = function startMyGame() {
    prompt("Enter your name.");
}

startButton.addEventListener("click", startGameHandler);