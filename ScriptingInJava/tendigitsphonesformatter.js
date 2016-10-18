// tendigitsphonesformatter.js

var pattern = /\b(\d{3})(\d{3})(\d{4})\b/g;
var text = "3342449999, 2229822, and 6152534734";
var replacement = "($1) $2-$3";
var formattedPhones = text.replace(pattern, replacement);
print("Phones: " + text);
print("Formatted Phones: " + formattedPhones);
