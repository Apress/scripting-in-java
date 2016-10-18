// ArrayConversion.java
package com.jdojo.script;

import java.util.Arrays;
import java.util.List;
import java.util.Map;

public class ArrayConversion {
	public static void printInts(int[] ids) {
		System.out.print("Inside printInts():");
		System.out.println(Arrays.toString(ids));
	}
	
	public static void printDoubles(double[] salaries) {
		System.out.print("Inside printDoubles(double[]):");
		System.out.println(Arrays.toString(salaries));
	}
	
	public static void printList(List<Integer> idsList) {
		System.out.print("Inside printList():");
		System.out.println(idsList);
	}
	
	public static void printMap(Map<?,?> phoneMap) {
		System.out.println("Inside printMap():" );
		phoneMap.forEach((key, value) -> {
			System.out.println("key = " + key + ", value = " + value);
		});
	}
}
