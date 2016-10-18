// MultiGlobals.java
package com.jdojo.script;

import javax.script.ScriptContext;
import javax.script.ScriptEngine;
import javax.script.ScriptEngineManager;
import javax.script.SimpleScriptContext;

public class MultiGlobals {
public static void main(String[] args) {
		// Get the Nashorn script engine	
		ScriptEngineManager manager = new ScriptEngineManager();
		ScriptEngine engine = manager.getEngineByName("JavaScript");	
  
		try {			
			// Add a variable named msg to the script globals
			engine.eval("var msg = 'Hello globals'");
			
			// Print the value of the msg variable
			engine.eval("print(this.msg);");
			
			// Execute the same script as above, but using a new ScriptContext 
			// object. The engine will use a fresh copy of the globals and will not 
			// find this.msg that was created and associated with the default script 
			// context of the engine previously.
			ScriptContext ctx = new SimpleScriptContext();
			engine.eval("print(this.msg);", ctx);

		}		
		catch (Exception e) {
			e.printStackTrace(); 
		}
	}
}
