// map.js 

// Create a Map instance
var HashMap = Java.type("java.util.HashMap");
var map = new HashMap();

// Add key-value pairs to the map using Java methods
map.put("Li", "999-11-0001");
map.put("Su", "999-11-0002");

// You can treat the Map as an object and add key-value pairs
// as if you are adding proeprties to the object
map["Yu"] = "999-11-0003";
map["Do"] = "999-11-0004";

// Access values using the Java Map.get() method and the bracket notation
var liPhone = map.get("Li");  // Java way
var suPhone = map.get("Su");  // Java way
var yuPhone = map["Yu"];      // Nashorn way
var doPhone = map["Do"];      // Nashorn way

print("Li's Phone: " + liPhone);
print("su's Phone: " + suPhone);
print("Yu's Phone: " + yuPhone);
print("Do's Phone: " + doPhone);
