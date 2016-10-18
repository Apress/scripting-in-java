// bindjavaobject.js

var trg = {};
var src = new java.util.HashSet();

// Try iterating src properties
print("Iterating over src properties:");
for (var propName in src) {
	print(propName); // Will not get here
}

// Bind properties of the java.util.HashSet object referenced by src to trg
Object.bindProperties(trg, src); 

// Try iterating src properties
print("Iterating over trg properties:");
for (var propName in trg) {
	print(propName); 
}
