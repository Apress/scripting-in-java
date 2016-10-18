// prototype.js

var point = {x: 10,
             y: 20,
             print: function() {
             		printf("(%d, %d)", this.x, this.y);
            	    }
            };

var coloredPoint = {color: "red",
                    print: function() {
                   		printf("(%d, %d, %s)", this.x, this.y, this.color);
                           }
                   };

// Set the point object as the prototype of the coloredPoint object
// That is, the coloredPoint object inherits from the point object.
Object.setPrototypeOf(coloredPoint, point);

print("After setting the prototype for coloredPoint...");

// Call the print() methods of both objects
point.print();
coloredPoint.print();

// Change the x and y values in the point object. 
point.x = 100;
point.y = 200;

print("After setting the x and y properties for point...");

// Print the two points details again
point.print();
coloredPoint.print();

/* Call the toString() method that is defined in Object.prototype object and are 
   available in point and coloredPoint object through prototype chain.
*/
print(point.toString());
print(coloredPoint.toString());

// Print prototypes of objects
print("Object.getPrototypeOf(point) === Object.prototype is " + 
      (Object.getPrototypeOf(point) === Object.prototype));
print("Object.getPrototypeOf(colorPoint) === point is " + 
      (Object.getPrototypeOf(coloredPoint) === point));
print("Object.getPrototypeOf(colorPoint) === Object.prototype is " + 
      (Object.getPrototypeOf(coloredPoint) === Object.prototype));
