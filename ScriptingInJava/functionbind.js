// functionbind.js

load("Point.js");

// Create a 2D origin
var origin = new Point(0, 0);

// Create a new method called distanceFromOrigin() by binding 
// the distance() method of the Point to the origin object
var distanceFromOrigin = Point.prototype.distance.bind(origin);

var dist = distanceFromOrigin(new Point(0, 10));
print(dist);

// The above distanceFromOrigin() is the same as follows
var dist2 = origin.distance(new Point(0, 10));
print(dist2);
