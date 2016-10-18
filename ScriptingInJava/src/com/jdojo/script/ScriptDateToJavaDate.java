// ScriptDateToJavaDate.java
package com.jdojo.script;

import java.time.Instant;
import java.time.ZoneId;
import java.time.ZonedDateTime;
import javax.script.ScriptEngine;
import javax.script.ScriptEngineManager;
import jdk.nashorn.api.scripting.ScriptObjectMirror;

public class ScriptDateToJavaDate {
	public static void main(String[] args) {
		// Get the Nashorn script engine	
		ScriptEngineManager manager = new ScriptEngineManager();
		ScriptEngine engine = manager.getEngineByName("JavaScript");

		try {
			// Create a Date object in script
			ScriptObjectMirror jsDt = (ScriptObjectMirror)engine.eval("new Date()");

			// Get the string representation of the script date
			String jsDtString = (String) jsDt.callMember("toString");

			System.out.println("JavaScript Date: " + jsDtString);

			// Get the epoch milliseconds from the script date
			long jsMillis = ((Number) jsDt.callMember("getTime")).longValue();

			// Convert the milliseconds from JavaScript date to Java Instant
			Instant instant = Instant.ofEpochMilli(jsMillis);

			// Get a ZonedDateTime for the system default zone id
			ZonedDateTime zdt = 
				ZonedDateTime.ofInstant(instant, ZoneId.systemDefault());
			System.out.println("Java ZonedDateTime: " + zdt);
		} 
		catch (Exception e) {
			e.printStackTrace();
		}
	}
}
