// stacktest.js

load("stack.js");

// Create a Stack with initial 2 elements
var stack = new Stack(10, 20);

print("Stack = " + stack);

// Push an element 
stack.push(40);

print("After push(40), Stack = " + stack);

// Pop two elements
stack.pop();
stack.pop();

print("After 2 pops, Stack = " + stack);

print("stack.peek() = " + stack.peek());
print("stack.isEmpty() = " + stack.isEmpty());

// Pop the last element
stack.pop();
print("After another pop(), stack.isEmpty() = " + stack.isEmpty());
