// Logger.js

// Declare a function object named Logger
function Logger() {
	// A private method
	function getLogger() {
		if (!Logger.logger) {
			// Create a new logger and store its reference in 
			// the looger pproperty of the Logger function
			Logger.logger = {log: function(msg) {
                                                    print(msg);          
                         			}
                         		};
		}

return Logger.logger;
	}

return getLogger();
}

// Create two logger objects
var logger1 = new Logger(); // A constructor call
var logger2 = new Logger(); // A constructor call
var logger3 = Logger();     // A function call

// Check if the logger is cached
print("logger1 === logger2 is " + (logger1 === logger2));
print("logger1 === logger3 is " + (logger1 === logger3));

logger1.log("Hello 1");
logger2.log("Hello 2");
logger3.log("Hello 3");
