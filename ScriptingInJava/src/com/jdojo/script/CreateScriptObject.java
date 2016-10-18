// CreateScriptObject.java
package com.jdojo.script;

import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import javax.script.ScriptEngine;
import javax.script.ScriptEngineManager;
import jdk.nashorn.api.scripting.ScriptObjectMirror;

public class CreateScriptObject {
	public static void main(String[] args) {	
		
		// Construct the script file path		
		String scriptFileName = "point.js";		
		Path scriptPath = Paths.get(scriptFileName);
		
		// Make sure the script file exists. If not, print the full path of 
		// the script file and terminate the program.		
		if (! Files.exists(scriptPath) ) {
			System.out.println(scriptPath.toAbsolutePath() + 
				" does not exist.");
			return;
		}
		
		// Get the Nashorn script engine	
		ScriptEngineManager manager = new ScriptEngineManager();
		ScriptEngine engine = manager.getEngineByName("JavaScript");
		  		
		try {
			
			// Execute the script in the file			
			engine.eval("load('" + scriptFileName + "');");

			// Get the Point constructor as a ScriptObjectMirror object
			ScriptObjectMirror pointFunc = (ScriptObjectMirror)engine.get("Point");
			
			// Create two Point objects. The following statement are the same as
			// var p1 = new Point(10, 20); and var p2 = new Point(13, 24);
			// in a Nashorn script
			ScriptObjectMirror p1 = (ScriptObjectMirror)pointFunc.newObject(10, 20);
			ScriptObjectMirror p2 = (ScriptObjectMirror)pointFunc.newObject(13, 24);
			
			// Compute the distnace between p1 and p2 calling the distance() 
			// method of the Point object
			Object result = p1.callMember("distance", p2);
			double dist = ((Number)result).doubleValue();
			
			// Get the string forms of p1 and p2 by calling their toString() method
			String p1Str = (String)p1.callMember("toString");
			String p2Str = (String)p2.callMember("toString");
			System.out.printf("The distance between %s and %s is %.2f.%n", 
			                   p1Str, p2Str, dist);
		}		
		catch (Exception e) {
			e.printStackTrace(); 
		}
	}
}
