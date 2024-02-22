const readlineSync = require('readline-sync');

function groupWords(){
	const groupedWords = {};
	// Hey, tui ten Teo, ban cung ten teo ah?
	const userInput = readlineSync.question('Your sentence: ');
	const words = userInput.split(' ');
	words.forEach( words => {
		if(groupedWords[words]) {
			groupedWords[words]++;
		} else {
			groupedWords[words] = 1;
		}
	});
	console.log(groupedWords);
}

groupWords();

