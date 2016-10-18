// InvokeMethod.java
package com.jdojo.script;

import javax.script.Invocable;
import javax.script.ScriptEngine;
import javax.script.ScriptEngineManager;
import javax.script.ScriptException;

public class InvokeMethod {
	public static void main(String[] args) {
		// Get the Nashorn engine
		ScriptEngineManager manager = new ScriptEngineManager();
		ScriptEngine engine = manager.getEngineByName("JavaScript");

		// Make sure the script engine implements the Invocable interface
		if (!(engine instanceof Invocable)) {
			System.out.println("Invoking methods is not supported.");
			return;
		}

		// Cast the engine reference to the Invocable type
		Invocable inv = (Invocable) engine;

		try {
			// Declare a global object with an add() method
			String scriptPath = "calculator.js";

			// Evaluate the script first
			engine.eval("load('" + scriptPath + "')");

			// Get the calculator object reference that was created in the script
			Object calculator = engine.get("calculator");

			// Invoke the methods on the calculator object
			int x = 30;
			int y = 40;
			Object addResult = inv.invokeMethod(calculator, "add", x, y);
			Object subResult = inv.invokeMethod(calculator, "subtract", x, y);
			Object mulResult = inv.invokeMethod(calculator, "multiply", x, y);
			Object divResult = inv.invokeMethod(calculator, "divide", x, y);
			
			System.out.printf("calculator.add(%d, %d) = %s%n", x, y, addResult);
			System.out.printf("calculator.subtract(%d, %d) = %s%n", x, y, subResult);
			System.out.printf("calculator.multiply(%d, %d) = %s%n", x, y, mulResult);
			System.out.printf("calculator.divide(%d, %d) = %s%n", x, y, divResult);
		} 
		catch (ScriptException | NoSuchMethodException e) {
			e.printStackTrace();
		}
	}
}
