// hellofx3.js

var msg = new javafx.scene.control.Label("Hello JavaFX from Nashorn!");
msg.font = javafx.scene.text.Font.font("Helvetica", 18);
var sp = new javafx.scene.layout.StackPane(msg);
$STAGE.setTitle("Hello FX");		
$STAGE.setScene(new javafx.scene.Scene(sp, 300, 100));
$STAGE.sizeToScene();
// $STAGE.show(); // No need to show the primary stage. Nashorn will automatically show it.
