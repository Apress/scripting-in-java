// json.js
var point = {x: 10, y: 20};

function replacer (key, value) { 
	if (key === "x" || key === "y") {
		// Multiply the value by 2
		return value * 2;
	}
	else {
		// Simply return the value
		return value;
	}	
}

function reviver (key, value) {
	if (key === "x" || key === "y") {
		// Divide the value by 2
		return value / 2;
	}
	else {		
		return value;
	}	
}

var pointString = JSON.stringify(point, replacer, "  ");
print("Stringified object is");
print(pointString);

var obj = JSON.parse(pointString, reviver);

print("Parsed object proeprties are");
for(var prop in obj) {
	print("obj[" + prop + "] =  " + obj[prop]);
}
