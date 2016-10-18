// beforehoisting.js

// Try accessing empId variable before declaring it
print("1. empId = " + empId);

// Declare and initialize empId now
var empId = 100;

function test() {
	if (empId === undefined) {
		var empId = 200;
	}
	print("2. empId = " + empId);
}

// Call the test function
test();

print("3. empId = " + empId);
