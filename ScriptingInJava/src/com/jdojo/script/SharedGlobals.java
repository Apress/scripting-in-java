// SharedGlobals.java
package com.jdojo.script;

import javax.script.ScriptContext;
import javax.script.ScriptEngine;
import javax.script.SimpleScriptContext;
import jdk.nashorn.api.scripting.NashornScriptEngineFactory;

public class SharedGlobals {
	public static void main(String[] args) {
		// Get the Nashorn script engine using the --global-per_engine option	
		NashornScriptEngineFactory factory = new NashornScriptEngineFactory();				
		ScriptEngine engine = factory.getScriptEngine(new String[]{"--global-per-engine"});
		
		// The following will work in JDK8u40 
		//ScriptEngine engine = factory.getScriptEngine("--global-per-engine");
		
		try {
			// Add a variable named msg to the global scope of the script
			engine.eval("var msg = 'Hello globals'");

			// Print the value of the msg value
			engine.eval("print(this.msg);");

			// Execute the same script, but using a new ScriptContext.
			// Note that the script globals are shared and this script will
			// find the this.msg variable created by the first script execution
			ScriptContext ctx = new SimpleScriptContext();			
			engine.eval("print(this.msg);", ctx);
			
		}
		catch (Exception e) {
			e.printStackTrace();
		}
	}
}
