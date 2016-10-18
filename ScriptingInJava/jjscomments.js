# This script will run in scripting mode by the jjs tool
# because it starts with a number sign

// Set the current directory to C:\kishori
$ENV.PWD = "C:\\kishori";

// Get the list of files and directories in the current directory
var str = `ls -F`;

print(str);
