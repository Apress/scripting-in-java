// InvokeFunction.java
package com.jdojo.script;

import javax.script.Invocable;
import javax.script.ScriptEngine;
import javax.script.ScriptEngineManager;
import javax.script.ScriptException;

public class InvokeFunction {
	public static void main(String[] args) {
		ScriptEngineManager manager = new ScriptEngineManager();
		ScriptEngine engine = manager.getEngineByName("JavaScript");

		// Make sure the script engine implements the Invocable interface
		if (!(engine instanceof Invocable)) {
			System.out.println("Invoking procedures is not supported.");
			return;
		}

		// Cast the engine reference to the Invocable type
		Invocable inv = (Invocable) engine;

		try {
			String scriptPath1 = "factorial.js";
			String scriptPath2 = "avg.js";

			// Evaluate the scripts first, so teh factorial(0 and 
			// avg() functions are compiled and are availabled to be invoked
			engine.eval("load('" + scriptPath1 + "');");
			engine.eval("load('" + scriptPath2 + "');");

			// Invoke the add function	twice
			Object result1 = inv.invokeFunction("factorial", 10);
			System.out.println("factorial(10) = " + result1);

			Object result2 = inv.invokeFunction("avg", 10, 20, 30);
			System.out.println("avg(10, 20, 30) = " + result2);
		} 
		catch (ScriptException | NoSuchMethodException e) {
			e.printStackTrace();
		}
	}
}
