// ColoredPointTest.js

load("Point.js");
load("ColoredPoint.js")

// Create a Point and a ColoredPoint objects
var p1 = new Point(100, 200);
var p2 = new ColoredPoint(25, 50, "blue");

// Compute the distance between two points
var p1Top2 = p1.distance(p2);
var p2Top1 = p2.distance(p1);
printf("Distance of %s from %s = %.2f", p1.toString(), p2.toString(), p1Top2);
printf("Distance of %s from %s = %.2f", p2.toString(), p1.toString(), p2Top1);
