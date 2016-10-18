// factorial.js
// 
// Returns true if n is an integer. Otherwise, returns false.
function isInteger(n) {
	return typeof n === "number" && isFinite(n) && n%1 === 0;  
}

// Define a function that computes and returns the factorial of an integer
function factorial(n) {
	if (!isInteger(n)) {
		throw new TypeError("The number must be an integer. Found:" + n);
	}
	
	if(n < 0) {
		throw new RangeError("The number must be greater than 0. Found: " + n);
	}
	
	var fact = 1;
	for(var counter = n; counter > 1; fact *= counter--);
	
	return fact;
}
