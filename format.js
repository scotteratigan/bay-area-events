const minWhiteSpace = (stringToClean) => {
	// Expects a string, returns a string stripped of excess whitespace.
	if (!stringToClean) {
		return stringToClean; // for testing, much easier to just ignore empty strings.
	}
	if (typeof (stringToClean === 'string')) {
		return stringToClean.replace(/\s{1,}/, ' ');
	} else {
		throw new Error('format.js - minWhiteSpace called on non-string object');
	}
}

module.exports = {
	'minWhiteSpace': minWhiteSpace
}

// let test = minWhiteSpace('la  \n   la la');
// console.log(test);