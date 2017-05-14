var
	usedLetters = [abcdefghijklmnopqrstuvwxyz];
	answer;

document.onkeyup = function(event) {
	var inputKey = String.fromCharCode(event.keyCode).toLowerCase();
	for (var i = 0; i < ---.length; i++) {
		if (inputKey === ---.charAt(i)) {
			answer.splice(i, 1, inputKey);

			alert(answer);
		}
	}
}