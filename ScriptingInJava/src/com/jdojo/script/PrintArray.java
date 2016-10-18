// PrintArray.java
package com.jdojo.script;

public class PrintArray {	
	public void print(String[] list) {
		System.out.println("Inside print(String[] list):" + list.length);
		for(String s : list) {
			System.out.println(s);
		}
	}
}
