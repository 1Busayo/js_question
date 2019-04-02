function sum() {
	var sum1 = 0;
	var i;
	for (i = 0; i < arguments.length; i++)
		sum1 += arguments[i];
	return sum1;
};

console.log("sum() = " + sum());
console.log("sum(1, 2, 4) = " + sum(1, 2, 4));
console.log("sum(1, 2, 4, 5, 5) = " + sum(1, 2, 4, 5, 5));
			
var j;
j = sum(1, 2, 4, '5', 5, 5, 5);
console.log("j = " + j);
