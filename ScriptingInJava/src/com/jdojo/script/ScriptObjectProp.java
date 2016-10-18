// ScriptObjectProp.java
package com.jdojo.script;

import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import javax.script.ScriptEngine;
import javax.script.ScriptEngineManager;
import javax.script.ScriptException;
import jdk.nashorn.api.scripting.ScriptObjectMirror;

public class ScriptObjectProp {
	public static void main(String[] args) {
		// Construct the script file path		
		String scriptFileName = "scriptobjectprop.js";
		Path scriptPath = Paths.get(scriptFileName);

		// Make sure the script file exists. If not, print the full path of 
		// the script file and terminate the program.		
		if (!Files.exists(scriptPath)) {
			System.out.println(scriptPath.toAbsolutePath()
				+ " does not exist.");
			return;
		}

		// Create a scripting engine manager
		ScriptEngineManager manager = new ScriptEngineManager();

		// Obtain a Nashorn scripting engine from the manager
		ScriptEngine engine = manager.getEngineByName("JavaScript");

		try {
			// Execute the script that will call the propTest() and 
			// arrayTest() methods of this class
			engine.eval("load('" + scriptFileName + "')");
		} 
		catch (ScriptException e) {
			e.printStackTrace();
		}
	}

	public static void propTest(ScriptObjectMirror point) {
		// List all properties
		System.out.println("Properties of point received in Java...");
		for (String prop : point.keySet()) {
			Object value = point.getMember(prop);
			System.out.println(prop + " = " + value);
		}

		// Let us add a property named z
		System.out.println("Adding z = 30 to point in Java... ");
		point.setMember("z", 30);
	}

	public static void arrayTest(ScriptObjectMirror empIds) {
		if (!empIds.isArray()) {
			System.out.println("Passed in obejct is not an array.");
			return;
		}

		// Get the length proeprty of teh array
		int length = ((Number) empIds.getMember("length")).intValue();

		System.out.println("empIds received in Java...");
		for (int i = 0; i < length; i++) {
			int value = ((Number) empIds.getSlot(i)).intValue();
			System.out.printf("empIds[%d] = %d%n", i, value);
		}

		// Let us add an element to the array
		System.out.println("Adding empIds[2] = 103 in Java... ");
		empIds.setSlot(length, 103);
	}
}
