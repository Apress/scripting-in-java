// supermethod.js

var Person = Java.type("com.jdojo.script.Person");
var PersonExtender = Java.extend(Person);

// Extend the Person class and override the getFullName() method
var john = new PersonExtender("John", "Jacobs") {    
getFullName: function () {
        	// You can use the variable john here that is declared outside.
        var _super_ = Java.super(john);
        	var fullName = _super_.getFullName();
        return fullName.toUpperCase();        
    }
}

// Get john's full name using the extended class implementation
var johnFullName = john.getFullName() ;

// Get the reference of john's super
var johnSuper = Java.super(john);

// Get john's full name from the Person class
var johnSuperFullName = johnSuper.getFullName();

// Print Names
print("Extended full name:", johnFullName);
print("Super full name:", johnSuperFullName);
