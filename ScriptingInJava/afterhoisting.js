// afterhoisting.js

var empId; // Hoisted

function test() {
	var empId; // Hoisted
	if (empId === undefined) {
		empId = 200; // Left after hoisting
	}
	print("2. empId = " + empId);
}

// Try accessing empId variable before declaring it
print("1. empId = " + empId);

// Declare and initialize empId now
empId = 100; // Left after hoisting


// Call the test function
test();

print("3. empId = " + empId);
