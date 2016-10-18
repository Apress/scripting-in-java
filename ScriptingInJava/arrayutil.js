// arrayutil.js

var UPPER_ARRAY_INDEX = Math.pow(2, 32) - 2;
Object.defineProperty(this, "UPPER_ARRAY_INDEX", {writable: false});

function isValidArrayIndex(prop) {
	// Convert the prop to a Number
	var numericProp = Number(prop);
	
	// Check if prop is a number	
	if (String(numericProp) === prop) {
		// Check if is an integer
		if (Math.floor(numericProp) === numericProp) {
			// Check if it is in the valid array index range
			if (numericProp >= 0 && numericProp <= UPPER_ARRAY_INDEX) {
				return true;
			}
		}
	}

	return false;
}
