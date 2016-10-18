// avg.js
function avg() {
	// Make sure at least two arguments are passed
	if(arguments.length < 2) {
		throw new Error("Minimum 2 arguments are required to compute average.");
	}
 
	// Compute the sum of all arguments
	var sum = 0;
	for each (var arg in arguments) {
		if (!(typeof arg === "number" || arg instanceof Number)) {
			throw new Error("Not a number: " + arg);
		}

		sum += arg;
	}
	
	// Compute and return the average
	return sum / arguments.length;
}
