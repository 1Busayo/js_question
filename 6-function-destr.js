
// destructuring parameters - default
let today = new Date();

function makeDate(day, month=today.getMonth(), year=today.getFullYear()) {
	return new Date(year, month, day).toDateString();
}

console.log(makeDate(16, 3, 1961)); 	// Sun Apr 16 1961
console.log(makeDate(16, 3)); 		    // Mon Apr 16 2018, run on 1/24/18
console.log(makeDate(16)); 		        // Tue Jan 16 2018

// destructuring parameters - rest
function report(firstName, lastName, ...colors) {
	let phrase = colors.length === 0 ? 'no colors' :
		colors.length === 1 ? 'the color ' + colors[0]:
		'the colors ' + colors.join(' and ');
	console.log(firstName, lastName, 'likes', phrase + '.');
}

report('John', 'Doe');			// John Doe likes no colors.
report('Mark', 'Volkmann', 'yellow');	// Mark Volkmann likes the color yellow.
report('Tami', 'Volkmann', 'pink', 'blue');	// Tami Volkmann likes the colors pink and blue.

