// loadglobals.js

// Create a function obejct using a function expression
var Logger = function () {
        var LOG_FILE = new java.io.File("nashorn_app.log");
	var printer = new java.io.PrintWriter(
            new java.io.FileWriter(LOG_FILE, true /*append*/), true /*autoflush*/);

	this.log = function (msg) {
		printer["println(String)"](java.time.LocalDateTime.now() + ": " + msg);
	};

	// Print the path for the log file
	print("Logs using the log(msg) global function will be written to " +
			LOG_FILE.absolutePath);
};

// Bind a Logger object to the global object.
// Here, this refers to the global object
Object.bindProperties(this, new Logger());
