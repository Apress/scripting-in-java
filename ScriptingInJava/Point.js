// Point.js

// Define the Point constructor
function Point(x, y) {
	this.x = x;
	this.y = y;
}

// Override the toString() method in Object.prototype
Point.prototype.toString = function() {
	return "Point(" + this.x + ", " + this.y + ")";
};

// Define a new method called distance()
Point.prototype.distance = function(otherPoint) {
	var dx = this.x - otherPoint.x;
	var dy = this.y - otherPoint.y;
	var dist = Math.sqrt(dx * dx + dy * dy);
	return dist;
};
