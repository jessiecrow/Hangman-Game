var usedHeroes = ["genji", "mccree", "pharah", "reaper", "soldier", "sombra", "tracer", "bastion", "hanzo", "junkrat", "mei", "torbjorn", "widowmaker", "dva", "orisa", "reinhardt", "roadhog", "winston", "zarya", "ana", "lucio", "mercy", "symmetra", "zenyatta"];
var hero = "";
var blank = [];
var userGuesses = "";
var message = "";
var guessesLeft = 0;
var lettersLeft = 0;

function randomHero(){
	hero = usedHeroes[Math.floor(Math.random() * usedHeroes.length)];
	return;
}
function setBlank(){
	blank = [];
	for (var i = 0; i < hero.length; i++) {
		blank[i] = "_";
	}
	document.getElementById("blank").innerHTML = blank.join(" ");
	return;
}
function setBoard(){
	guessesLeft = 10;
	document.getElementById("guesses-left").innerHTML = "Guesses Remaining: " + guessesLeft;
	// document.getElementById("guesses-wrong").innerHTML = "Wrong Letters: " + 
	// document.getElementById("win-counter").innerHTML = 
	// document.getElementById("loss-counter").innerHTML = 
}
document.getElementById("start").onclick = function() {
	randomHero();
	setBlank();
	setBoard();
	console.log(hero);
};
document.onkeyup = function(event) {
	play();
};
function play() {
	userGuesses = String.fromCharCode(event.keyCode).toLowerCase();
	message = "";
}
	if (userGuesses.length !== 1) {
		alert = "Only one guess at a time!";
	}
		else {
			var i=0;
			for (i=0; i < hero.length; i++) {
				if (hero[i] === userGuesses) {
					blank[i] = userGuesses;
					message = "Nice! " + "Thats one letter down! " + userGuesses;
				}
			}
		}
		lettersLeft = blank.length;
		for (i = 0; i < blank.length; i++) {
			if (blank[i] !== '_') {
				lettersLeft -= 1;
			}
		}
		if (message === "") {
			message = "There's no " + userGuesses + "'s " + " here! " + guessesLeft--;
			// document.getElementById("guessesLeft").innerHTML = "Guesses Left: " + guessesLeft;
		}
		if (lettersLeft === 0) {
			message = "You guessed " + hero + ".";
			// document.getElementById("btn-name").innerHTML = "Play Again";
		}
		if (guessesLeft === 0) {
			message = "Defeat";
			// document.getElementById("btn-name").innerHTML = "Play Again";
		}
		document.getElementById("blank").innerHTML = blank.join(" ");
// document.getElementById("instruction").innerHTML = message;