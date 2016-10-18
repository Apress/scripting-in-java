// greeter.js

// Load Nashorn predefined scripts to import JavaFX specific classes and packages
load("fx:base.js");
load("fx:controls.js");
load("fx:graphics.js");

// Define the start() method of the JavaFX application class
function start(stage) {
	var nameLbl = new Label("Enter your name:");
	var nameFld = new TextField();
	var msg = new Label();
	msg.style = "-fx-text-fill: blue;";

	// Create buttons 
	var sayHelloBtn = new Button("Say Hello");
	var exitBtn = new Button("Exit");

	// Add the event handler for the Say Hello button
	sayHelloBtn.onAction = sayHello;
        
        // Call the same fucntion sayHello() when the user 
        nameFld.onAction = sayHello;

	// Add the event handler for the Exit button
	exitBtn.onAction = function() {
		Platform.exit();
	};

	// Create the root node
	var root = new VBox();
        root.style = "-fx-padding: 10;" + 
		     "-fx-border-style: solid inside;" + 
                     "-fx-border-width: 2;" +
		     "-fx-border-insets: 5;" + 
		     "-fx-border-radius: 5;" + 
		     "-fx-border-color: blue;";

	// Set the vertical spacing between children to 5px
	root.spacing = 5;

	// Add children to the root node
	root.children.addAll(msg, new HBox(nameLbl, nameFld, sayHelloBtn, exitBtn));

	// Set the scene and title for the stage
	stage.scene = new Scene(root);
	stage.title = "Greeter";

	// Show the stage
	stage.show();
        
        // A nested function to say hello based on the entered name
        function sayHello(evt) {
		var name = nameFld.getText();
		if (name.trim().length() > 0) {
			msg.text = "Hello " + name;
		}
		else {
			msg.text = "Hello there";
		}
	}
}
