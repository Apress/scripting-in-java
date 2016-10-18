// stack.js

// Define the constructor for the Stack object
function Stack(/*varargs*/) {
	// Define a private array to keep the stack elements
	var data = new Array();

	// If any arguments were passed to the constructor, add them to the stack
	for (var i in arguments) {
		data.push(arguments[i]);		
	}
		
	// Define methods
	this.isEmpty = function () {
		return (data.length === 0);
	};
	this.pop = function () {
		if (this.isEmpty()) {
			throw new Error("Stack is empty.");
		}
		
		return data.pop();
	};
	this.push = function (arg) {
		data.push(arg);
		return arg;
	};
	this.peek = function () {
		if (this.isEmpty()) {
			throw new Error("Stack is empty.");
		}
		else {
			return data[data.length - 1];
		}
	};
	this.toString = function () {
		return data.toString();
	};
}
