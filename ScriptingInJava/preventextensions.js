// preventextensions.js

var point = {x:1, y:1};
print("isExtensible() = " + Object.isExtensible(point));

// Make point non-extensible
Object.preventExtensions(point);
print("isExtensible() = " + Object.isExtensible(point));

// Try adding a new property to point
point.z = 1; // Will throw an error in strict mode

// Check if the property z was added to point
print("point has property z = " + ("z" in point));

// point inherits from Object.prototype. Let us add a property 
// named z in Object.prototype
Object.prototype.z = 1;

// Check if the property z was added to point. Now point inherits 
// the proeprty named z from Object.prototype.
print("point has property z = " + ("z" in point));

// The following statement has no effect as the point object
// is still non-extensible.
point.z = 100;

print("z = " + point.z); // Reads the Object.prototype.z
