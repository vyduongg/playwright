const readlineSync = require('readline-sync');

function groupWords(){
	const groupedWords = {};
	// Hello toi ten teo ban co phai ten teo khong
	const userInput = readlineSync.question('Your sentence: ');
	const words = userInput.split(' ');
	words.forEach( words => {
		// .hasOwnProperty
		if(groupedWords[words]) {
			groupedWords[words]++;
		} else {
			groupedWords[words] = 1;
		}
	});
	console.log(groupedWords);
}

groupWords();

