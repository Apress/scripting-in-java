// functioncapture.js

var empId = 100; // Global

function createFunction1() {
	var empId = 200;  // Local 
	var test = new Function("print(empId)");  // Does not capture local empId
	return test;
}

function createFunction2() {
	var empId = 200; // Local
	
	function test () {
		print(empId); // Captures local empId
	}
	// The new function wil not capture
	return test; 
}

createFunction1()(); // Prints 100 (the global empId)
createFunction2()(); // Prints 200 (the local empId)
