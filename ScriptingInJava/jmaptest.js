// jmaptest.js 

// Create an HashMap and add two elements to it
var HashMap = Java.type("java.util.HashMap");
var map = new HashMap();
map.put("Ken", "(999) 777-3331");
map.put("Li", "(888) 444-1111");

// Convert the HashMap into a Nashorn object
var phoneDir = jmap(map);

print("Accessing a HashMap as a Nashorn object...");
for(var prop in phoneDir) {
    printf("phoneDir['%s'] = %s", prop, phoneDir[prop]);
}

// Use dot notation to access the proeprty
var kenPhone = phoneDir.Ken; // Same as phoneDir["Ken"]
printf("phoneDir.Ken = %s", kenPhone)
