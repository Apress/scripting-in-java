// factorial_test.js

// Load the factorial.js file that contains the factorial() function
load("factorial.js");

try {
	var fact3 = factorial(3);
	print("Factorial of 3 is", fact3);
	
	var factHello = factorial("Hello");
	print("Factorial of 3 is", factHello);
} 
catch (e if e instanceof RangeError) { 
	print("A RangeError has occurred.", e.message);
	print("Error:", e.message);
}
catch (e if e instanceof TypeError) { 
	print("A TypeError has occurred.", e.message);
}
catch (e) {
	print(e.message);
}
