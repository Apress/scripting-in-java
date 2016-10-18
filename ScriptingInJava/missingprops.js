// missingprops.js

var point = {x:10, y:20};

// Add no such property and no such method hooks
Object.prototype.__noSuchProperty__ = function (prop) {
	throw Error("No such property: " + prop);
};

Object.prototype.__noSuchMethod__ = function () {
	var desc = arguments[0] + "(";
	if (arguments.length > 1) {
		desc += arguments[1];
	}
	
	for (var i = 2; i < arguments.length; i++) { 
		desc += ", " + arguments[i];
	}
	
	desc += ")";	
	throw Error("No matching method found: " + desc);
};

// Try accessing point.z. Will throw an Error.
try {
	var z = point.z;
}
catch(e) {
	print(e.message);
}

// try calling a ono-existent method named dustance
try {
	point.distance(10, 20);
}
catch(e) {
	print(e.message);
}
