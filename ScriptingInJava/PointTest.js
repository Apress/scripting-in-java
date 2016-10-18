// PointTest.js

load("Point.js");

// Create two Point object, compute the distnce between them, and print the results
var p1 = new Point(100, 200);
var p2 = new Point(-100, -200);
var dist = p1.distance(p2);
printf("Distance between %s and %s is %.2f.", p1.toString(), p2.toString(), dist);
