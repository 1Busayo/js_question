function multiplyByTwo(a, b, c) {
	var i, ar = [];
	for (i = 0; i < 3; i++) {
		ar[i] = arguments[i] * 2;
	}
	return ar;
}

function addOne(a) {
	return a + 1;
	}

console.log("multiplyByTwo(1,2,3) =" + multiplyByTwo(1, 2, 3));
console.log("addOne(100) = " + addOne(100));

var myarr = [];
myarr = multiplyByTwo(10, 20, 30);
console.log("myarr = " + myarr);

for (var i = 0; i < 3; i++) {
	myarr[i] = addOne(myarr[i]);
}
console.log("myarr = " + myarr);

function multiplyByTwo1(a, b, c, callback) {
	var i, ar = [];
	for (i = 0; i < 3; i++) {
		ar[i] = callback(arguments[i] * 2);
	}
	return ar;
}
console.log("multiplyByTwo1(1, 2, 3, addOne) = " + multiplyByTwo1(1, 2, 3, addOne))

myarr = multiplyByTwo1(1, 2, 3, function (a) {
									return a + 1;
								}
					  );
console.log("myarr = " + myarr);