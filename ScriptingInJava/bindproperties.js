// bindproperties.js

var trg = {};
var src = {x:100, y:200, z:300};

// Bind properties of sourceObject to targetObject
Object.bindProperties(trg, src); 

// Print properties using trg
printf("trg-1: x=%d, y=%d,z=%d", trg.x, trg.y, trg.z);

// Now change z using trg
trg.z = 30;  // Using src.z = 30 will have the same efect

// Print the properties using both objects and both 
// should have the new value of z as 30
printf("trg-2: x=%d, y=%d,z=%d", trg.x, trg.y, trg.z);
printf("src-2: x=%d, y=%d,z=%d", src.x, src.y, src.z);

// Now add a new property to trg
trg.u = 30;

// AT this point, trg has the property named u, but src does not.
printf("trg-3: x=%d, y=%d,z=%d, u=%d", trg.x, trg.y, trg.z, trg.u);
printf("src-3: x=%d, y=%d,z=%d, u=%s", src.x, src.y, src.z, src.u);

// Now add a new property to src
src.v = 30;
