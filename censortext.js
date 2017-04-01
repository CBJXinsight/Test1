var censoredWords = ['sad', 'bad', 'mad'];
var customCensoredWords = [];

function censor(inStr){
	for (var i in censoredWords) {
		inStr = inStr.replace(censoredWords[i], "****");
	}
	for(var i in customCensoredWords){
		inStr = inStr.replace(customCensoredWords[i], "****");
	}
	return inStr;
}
function addCensoredWords(word){
	customCensoredWords.push(word);
}

function getCensoredWords(){
	return censoredWords.concat(customCensoredWords);
}

exports.censor = censor;
exports.addCensoredWords = addCensoredWords;
exports.getCensoredWords = getCensoredWords;