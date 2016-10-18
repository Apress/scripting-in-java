// CopyingGlobals.java
package com.jdojo.script;

import javax.script.Bindings;
import javax.script.ScriptContext;
import static javax.script.ScriptContext.ENGINE_SCOPE;
import javax.script.ScriptEngine;
import javax.script.ScriptEngineManager;
import javax.script.SimpleScriptContext;

public class CopyingGlobals {
	public static void main(String[] args) {
		// Get the Nashorn script engine	
		ScriptEngineManager manager = new ScriptEngineManager();
		ScriptEngine engine = manager.getEngineByName("JavaScript");

		try {
			// Add a variable named msg to the global scope of the script
			engine.eval("var msg = 'Hello globals'");

			// Print the value of the msg value
			engine.eval("print(this.msg);");

			// Create a ScriptContext and copy the ENGINE_SCOPE Bindings of 
			// the default script context to the new ScriptContext 
			ScriptContext ctx = new SimpleScriptContext();
			ScriptContext defaultCtx = engine.getContext();
			Bindings engineBindings = defaultCtx.getBindings(ENGINE_SCOPE);
			ctx.setBindings(engineBindings, ENGINE_SCOPE);

			// Use the new ScriptContext to execute the script
			engine.eval("print(this.msg);", ctx);
		} 
		catch (Exception e) {
			e.printStackTrace();
		}
	}
}
