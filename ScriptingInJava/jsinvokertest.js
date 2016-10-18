// jsinvokertest.js
var calcDelegate = { invoke: function(name, args) {                                              
                       if (args.length !== 2) {
                           throw new Error("Must pass 2 arguments to " + name);
                       }
                       
                       var value = 0;
                       if (name === "add") 
                           value = args[0] + args[1];
                       else if (name === "subtract") 
                           value = args[0] - args[1];
                       else if (name === "multiply") 
                           value = args[0] * args[1];
                       else if (name === "divide") 
                           value = args[0] / args[1];
                       else 
                           throw new Error("Operation " + name + " not supported.");
                       
                       return value;
                    }
          };

var calc = new JSInvoker(calcDelegate);
var x = 20.44, y = 30.56;
var addResult = calc.add(x, y); // Will call calcDelegate.invoke("add", [x, y])
var subResult = calc.subtract(x, y);
var mulResult = calc.multiply(x, y);
var divResult = calc.divide(x, y);
printf("calc.add(%.2f, %.2f) = %.2f%n", x, y, addResult);
printf("calc.sub(%.2f, %.2f) = %.2f%n", x, y, subResult);
printf("calc.mul(%.2f, %.2f) = %.2f%n", x, y, mulResult);
printf("calc.div(%.2f, %.2f) = %.2f", x, y, divResult);
