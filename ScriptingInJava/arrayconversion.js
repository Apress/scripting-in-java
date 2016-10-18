// arrayconversion.js

var ArrayConversion = Java.type("com.jdojo.script.ArrayConversion");

ArrayConversion.printInts([1, 2, 3]);
ArrayConversion.printInts([1, "Hello", 3]); // "hello" is converted to 0

// Non-integers will be converted to correposning integers per Nashorn rules
// when Nashorn array is converted to a Java array. true and false are converted 
// to 1 and 0, and 10.3 is converted to 10.
ArrayConversion.printInts([1, true, false, 10.3]);

// Nashorn array to Java double[] conversion
ArrayConversion.printDoubles([10.89, "Hello", 3]);

// Nashorn array to Java List conversion
ArrayConversion.printList([10.89, "Hello", 3]);

// Nashorn array to Java Map conversion
ArrayConversion.printMap([10.89, "Hello", 3]);
