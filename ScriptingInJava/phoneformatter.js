// phoneformatter.js

// Formats 10-diguts and 7-digits phone numbers
function phoneFormatter(macthedText, group1, group2, group3, startIndex, inputText) {	
	if (group1 === undefined) {
		// Matched a 7-digit phone number
		return group2 + "-" + group3;
	}
	else {
		// Matched a 10-digit phone number
		return "(" + group1 + ") " + group2 + "-" + group3;
	}
}

// Make the first group of 3-digits optional using the ? metacharacter
var pattern = /\b(\d{3})?(\d{3})(\d{4})\b/g;

var text = "3342449999, 2229822, and 6152534734";

// Use the phoneFormatter() function as the replacement in the replace() method
var formattedPhones = text.replace(pattern, phoneFormatter);
print("Phones: " + text);
print("Formatted Phones: " + formattedPhones);
