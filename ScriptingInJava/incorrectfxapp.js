// incorrectfxapp.js

var msg; 
var sp;

function init() {
    msg = new javafx.scene.control.Label("Hello JavaFX from Nashorn!");
    msg.font = javafx.scene.text.Font.font("Helvetica", 18);
    sp = new javafx.scene.layout.StackPane(msg);    
}

$STAGE.setTitle("Hello FX");		
$STAGE.setScene(new javafx.scene.Scene(sp, 300, 100));
$STAGE.sizeToScene();
