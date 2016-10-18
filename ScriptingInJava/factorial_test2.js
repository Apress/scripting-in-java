// factorial_test2.js
load("factorial.js");

try {
	//throw new TypeError("A type error occurred.");
	var fact3 = factorial(3);
	print("Factorial of 3 is", fact3);
	
	var factHello = factorial("Hello");
	print("Factorial of 3 is", factHello);
} 
catch (e) {
	printf("Line %d, column %d, file %s. %s", 
       e.lineNumber, e.columnNumber, e.fileName, e.message);
    
}
