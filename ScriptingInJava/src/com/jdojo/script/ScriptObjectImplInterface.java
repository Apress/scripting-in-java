// ScriptObjectImplInterface.java
package com.jdojo.script;

import javax.script.Invocable;
import javax.script.ScriptEngine;
import javax.script.ScriptEngineManager;
import javax.script.ScriptException;

public class ScriptObjectImplInterface {
	public static void main(String[] args) {
		// Get the Nashorn engine
		ScriptEngineManager manager = new ScriptEngineManager();
		ScriptEngine engine = manager.getEngineByName("JavaScript");
	
		// Make sure the engine implements the Invocable interface
		if (!(engine instanceof Invocable)) {
			System.out.println("Interface implementation in " + 
			                   "script is not supported.");
			return;
		}
	
		// Cast the engine reference to the Invocable type
		Invocable inv = (Invocable)engine;
		
		String scriptPath  = "calculator.js";

		try {
			// Compile and store the script in the engine
			engine.eval("load('" + scriptPath + "')");

			// Get the reference of the global script object calc
			Object scriptCalc = engine.get("calculator");
				  
			// Get the implementation of the Calculator interface
			Calculator calc = inv.getInterface(scriptCalc, Calculator.class);
			if (calc == null) {
				System.err.println("Calculator interface " + 
				                   "implementation not found.");
				return;
			}

			double x = 15.0;
			double y = 10.0;
			double addResult = calc.add(x, y);
			double subResult = calc.subtract(x, y);
			double mulResult = calc.multiply(x, y);
			double divResult = calc.divide(x, y);
			
			System.out.printf("calc.add(%.2f, %.2f) = %.2f%n", x, y, addResult);
			System.out.printf("calc.subtract(%.2f, %.2f) = %.2f%n", x, y, subResult);
			System.out.printf("calc.multiply(%.2f, %.2f) = %.2f%n", x, y, mulResult);
			System.out.printf("calc.divide(%.2f, %.2f) = %.2f%n", x, y, divResult);
		}
		catch (ScriptException e) {
				e.printStackTrace();
		}
	}
}
