// hellofx2.js

var msg = new javafx.scene.control.Label("Hello JavaFX from Nashorn!");
msg.font = javafx.scene.text.Font.font("Helvetica", 18);
var sp = new javafx.scene.layout.StackPane(msg);

function start(stage) {
	stage.setTitle("Hello FX");		
	stage.setScene(new javafx.scene.Scene(sp, 300, 100));
	stage.sizeToScene();
	stage.show();
}
