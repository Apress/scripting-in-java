// Sequence.js

// This object generates strictly increasing sequence numbers
function Sequence() {
var currentValue = 0;

// Using Nashorn extension syntax to define one-liner functions
this.nextValue = function () ++currentValue; 
this.curValue = function () currentValue;
}

// Create a Sequence object
var empId = new Sequence();

print("empId sequence...");
printf("Current Value = %d, next Value = %d", empId.curValue(), empId.nextValue());
printf("Current Value = %d, next Value = %d", empId.curValue(), empId.nextValue());
printf("Current Value = %d, next Value = %d", empId.curValue(), empId.nextValue());

// Create a Sequence object
var deptId = new Sequence();

print("deptId sequence...");
printf("Current Value = %d, next Value = %d", deptId.curValue(), deptId.nextValue());
printf("Current Value = %d, next Value = %d", deptId.curValue(), deptId.nextValue());
printf("Current Value = %d, next Value = %d", deptId.curValue(), deptId.nextValue());
