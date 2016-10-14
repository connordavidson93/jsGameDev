//Introduction to set up the game
alert("Welcome to the mystical land of Altara! One realm, six kings, adventure and danger over every hill. You have come from lands unkown to seek glory and riches from King Aric Sunborn of Dawncrest. He has tasked you with three challenging quests. Should you prove capable and strong, your name will go down through the annals of history. Are you prepared?")

var userName;
var chooseClass;
var button = document.getElementById("begin");
var intro = function myFunctionHandler(){
    userName = prompt("What is your name, adventurer?")
    chooseClass = prompt("Well, " + userName + ", this world can be a dangerous place. What skillset do you have to face the challenges ahead? (Choose from Warrior, Wizard, or Rogue.)").toLowerCase

};
button.addEventListener("click", intro);

//The player object's stats
var player = function player() {
    attack = Math.round(Math.random()*3),
    health = 4
};

//Player class determines changes in stats

if (chooseClass === "warrior") {
    console.log("The warrior has a sword.")
};
if (chooseClass === "wizard"){
    player.magic = 5
    console.log("The wizard has a staff.")
};
if (chooseClass === "rogue"){
    player.speed = 5
    console.log("The rogue has a bow.")
};

//The  quest
var enemy = function enemy(){
    attack = 3,
    health = 3
};

var weapon;
var questScenario = ["You have traversed the treacherous Whitesong mountains, searching for the ruins of an ancient city. Untold treasure is said to lie within, if you can find it. A noise makes you look up the jagged cliffside...", "While wandering the wide open plains, making your way to the next inn to regail others of your adventures, you suddenly find yourself ambushed!", "King Aric has tasked you with stopping a mysterious cult from summoning a terrible Demon Lord. While attempting to sneak into their sanctum, you are accosted by one of the guards."];

function randomNumber(range){
    "use strict"
    if(typeof range === "number"){
        return Math.roud(Math.random()*range);
    }
}

alert(questScenario[randomNumber(questScenario.length-1)]);

var foe = ["Barbarian", "Black Knight", "Ninja"];

alert("You are attacked by a vicious " + foe[randomNumber(foe.length-1)] + 
".");

weapon = prompt("What do you have to defend yourself?");
alert("You attack your foe with a " + weapon + ".");

do{
    player.health--
} while (player.attack < enemy.attack);
do{
    enemy.health--
} while (player.attack >= enemy.attack);

if (player.health === 0) {
    outcome = "lose";
} else if (enemy.health === 0){
    outcome = "win";
};

if (outcome = "lose"){
    alert()
}