// regexexec.js

var pattern = /Java/g;
var text = "Java and JavaScript are not the same";

var result;
while((result = pattern.exec(text)) !== null) {	
	var msg = "Matched '" + result[0] + "'" + " at " + result.index +
	          ". Next match will begin at " + pattern.lastIndex;
	print(msg);
}

print("After the search finishes, lastIndex = " + pattern.lastIndex);
