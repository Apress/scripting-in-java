// jlisttest.js 

// Create an ArrayList and add two elements to it
var ArrayList = Java.type("java.util.ArrayList");
var list = new ArrayList();
list.add("Ken");
list.add("Li");

// Convert the ArrayList into a Nashorn array
var names = jlist(list);
print("Accessing an ArrayList as a Nashorn array...");
for(var i = 0; i < names.length; i++) {
    printf("names[%d] = %s", i, names[i]);
}
