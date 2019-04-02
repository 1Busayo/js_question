function factorial(num){
	if (num <= 1){
		return 1;
	} else {
		return num * factorial(num-1);
	}
}

var anotherFactorial = factorial;

console.log(anotherFactorial(4));

factorial = null;
	
//console.log(anotherFactorial(1));

console.log(anotherFactorial(4)); //error!
