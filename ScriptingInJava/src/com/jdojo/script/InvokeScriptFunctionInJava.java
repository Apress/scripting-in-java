// InvokeScriptFunctionInJava.java
package com.jdojo.script;

import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import javax.script.ScriptEngine;
import javax.script.ScriptEngineManager;
import jdk.nashorn.api.scripting.ScriptObjectMirror;

public class InvokeScriptFunctionInJava {
	public static void main(String[] args) {
		// Construct the script file path		
		String scriptFileName = "factorial.js";
		Path scriptPath = Paths.get(scriptFileName);

		// Make sure the script file exists. If not, print the full path of 
		// the script file and terminate the program.		
		if (!Files.exists(scriptPath)) {
			System.out.println(scriptPath.toAbsolutePath()
				+ " does not exist.");
			return;
		}

		// Get the Nashorn script engine	
		ScriptEngineManager manager = new ScriptEngineManager();
		ScriptEngine engine = manager.getEngineByName("JavaScript");

		try {
			// Execute the script in the file, so teh factorial() function is loaded			
			engine.eval("load('" + scriptFileName + "');");

			// Get the reference of the factorial() script function
			ScriptObjectMirror factorialFunc = 
				(ScriptObjectMirror)engine.get("factorial");

			// Invoke the factorial function and print the result
			Object result = factorialFunc.call(null, 5);
			double factorial = ((Number) result).doubleValue();
			System.out.println("Factorial of 5 is " + factorial);
			
			/* Call the Array.prototype.join() function on a String object */

			// Get the reference of the Array.prototype.join method
			ScriptObjectMirror arrayObject = 
			 	(ScriptObjectMirror)engine.eval("Array.prototype");
			ScriptObjectMirror joinFunc = 
			 	(ScriptObjectMirror)arrayObject.getMember("join");
			
			// Call the join() function of Array.prototype on a String object 
			// passing a hyphen as a separator
			String thisObject = "Hello";
			String separator = "-";
			String joinResult = (String)joinFunc.call(thisObject, separator);
			System.out.println(joinResult);
		} 
		catch (Exception e) {
			e.printStackTrace();
		}
	}
}
