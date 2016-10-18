// HelloFX.java
package com.jdojo.script;

import javafx.application.Application;
import javafx.scene.Scene;
import javafx.scene.layout.StackPane;
import javafx.scene.text.Font;
import javafx.scene.text.Text;
import javafx.stage.Stage;

public class HelloFX extends Application {
	private Text msg; 
	private StackPane sp;
		
	public static void main(String[] args) {
		Application.launch(HelloFX.class);
	}
	
	@Override
	public void init() {
		msg = new Text("Hello JavaFX from Nashorn!");
		msg.setFont(Font.font("Helvetica", 18));
		sp = new StackPane(msg);
	}
	
	@Override
	public void start(Stage stage) throws Exception {
		stage.setTitle("Hello FX");		
		stage.setScene(new Scene(sp, 300, 100));
		stage.sizeToScene();
		stage.show();
	}	
	
	@Override
	public void stop() {
		System.out.println("Hello FX application is stopped.");
	}
}
