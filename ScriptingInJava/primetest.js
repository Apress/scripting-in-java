// primetest.js

function isPrime(n) {
	// Integers <= 2, floating-point numbers, and even numbers are not primes
	if (n <= 2 || Math.floor(n) !== n || n % 2 === 0) {
		return false;
	}

	// Check if n is divisible by any odd integers between 3 and sqrt(n).
	var sqrt = Math.sqrt(n);
	for (var i = 3; i <= sqrt; i += 2) {
		if (n % i === 0) {
			return false;
		}
	}
	return true; // If we get here, it is a prime number.
}

// Check few nubmers for being primes
var num = 8;
var isPrimeNum = isPrime(num);
print(num + " is a prime number: " + isPrimeNum);

debugger;
num = 37;
isPrimeNum = isPrime(num);
print(num + " is a prime number: " + isPrimeNum);
