// EvalTest.js

var x = 100;
var y = eval("var z = 300; x * 2;"); // Called from the global context
print(x, y, z);

function testEval() {
	var x = 300;
	var y = eval("var z = 900; x * 2;"); // Called from the function context
	print(x, y, z);
}

testEval();