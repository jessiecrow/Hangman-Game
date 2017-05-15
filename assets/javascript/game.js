var
	usedHeroes = ["genji", "mccree", "pharah", "reaper", "soldier", "sombra", "tracer", "bastion", "hanzo", "junkrat", "mei", "torbjorn", "widowmaker", "dva", "orisa", "reinhardt", "roadhog", "winston", "zarya", "ana", "lucio", "mercy", "symmetra", "zenyatta"];
	hero = "";
	blanks = [];
	userGuesses = "";
	message = "";
	guessesLeft = 0;
	lettersLeft = 0;

function randomWord(){
	hero = usedHeroes[Math.floor(Math.random() * usedHeroes.length)];
	return;
}
function setBlanks(){
	blanks = [];
	for (var i = 0; i < word.length; i++) {
		blanks = " _ ";
	}
	document.getElementById("blanks").innerHTML = blanks.join(" ");
	return;
}
function setBoard(){
	guessesLeft = 10;
	document.getElementById("remaining").innerHTML = "Lives Remaining: " + guessesLeft;
}
document.getElementById("start").onclick = function() {
	randomWord();
	setBlanks();
	setBoard();
	console.log(word);
}
document.onkeyup = function(event) {
	var inputKey = String.fromCharCode(event.keyCode).toLowerCase();
	for (var i = 0; i < ---.length; i++) {
		if (inputKey === ---.charAt(i)) {
			answer.splice(i, 1, inputKey);

			alert(answer);
		}
	}
}