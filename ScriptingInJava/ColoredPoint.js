// ColoredPoint.js

load("Point.js");

function ColoredPoint(x, y, color) {
	// Call the Point constructor function binding this, which is the 
        // current ColoredPoint object context as this for the Point invocation, 
        // so the x and y properties will be added to the current ColoredPoint object
	Point.call(this, x, y);
	
	// Add a color property to the new object
	this.color = color;
};


// Set a new object whose prototype is Point.prototype as the prototype for the
// ColoredPoint function
ColoredPoint.prototype = Object.create(Point.prototype);

// Set the constructor property of the prototype
ColoredPoint.prototype.constructor = ColoredPoint;

// Override the toString() method of the Point.prototype object
ColoredPoint.prototype.toString = function() {
	return "ColoredPoint(" + this.x + ", " + this.y + ", " + this.color + ")";
};
