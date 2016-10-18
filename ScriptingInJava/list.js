// list.js

var ArrayList = Java.type("java.util.ArrayList");
var nameList = new ArrayList();

// Add few names using List.add() Java method
nameList.add("Lu");
nameList.add("Do");
nameList.add("Yu");

// Print the List
print("After adding names:");
for(var i = 0, len = nameList.size(); i < len; i++) {	
	print(nameList.get(i));
}

// Update names using array indexes
nameList[0] = "Su";
nameList[1] = "So";
nameList[2] = "Bo";

// The following statement will throw an IndexOutOfBoundsException because it is 
// trying to add a new element using array syntax. You can only update an element, 
// not add a new element, using the array syntax.
//nameList[3] = "An"; 

print("After updating names:");
for(var i = 0, len = nameList.length; i < len; i++) {	
	print(nameList[i]);
}

// Sort the list in natural order
nameList.sort(null);

// Use tha Array.prototype.forEach() method to print the list
print("After sorting names:");
Array.prototype.forEach.call(nameList, function (value, index, data) {
	print(value);
});
