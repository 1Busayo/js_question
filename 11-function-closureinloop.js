function F() {
	var arr = [], i;
	for (i = 0; i < 3; i++) {
		arr[i] = function () {
					return i;
				};
	}
	return arr;
}
var MyArr = F();
console.log("MyArr[0] = " + MyArr[0]());
console.log("MyArr[1] = " + MyArr[1]());
console.log("MyArr[2] = " + MyArr[2]());
console.log(" ");

function F1() {
	var arr = [], i;
	for (i = 0; i < 3; i++) {
		arr[i] = function (x) {
					return function () {
									return x;
							};
					}(i);
	}
	return arr;
}
//console.log("before calling F1");
var MyArr1 = F1();
//console.log("after calling F1");
console.log("MyArr1[0] = " + MyArr1[0]());
console.log("MyArr1[1] = " + MyArr1[1]());
console.log("MyArr1[2] = " + MyArr1[2]());
console.log(" ");

// ----------------
// let in function
function F2() {
	let arr = [], i;
	for (i = 0; i < 3; i++) {
		arr[i] = function () {
					return i;
				};
	}
	return arr;
}
var MyArr2 = F2();
console.log("MyArr2[0] = " + MyArr2[0]());
console.log("MyArr2[1] = " + MyArr2[1]());
console.log("MyArr2[2] = " + MyArr2[2]());
console.log(" ");

// ----------------
// let in loop
function F3() {
	var arr = [], i;
	for (i = 0; i < 3; i++) {
		let j = i;
		arr[j] = function () {
					return j;
				};
	}
	return arr;
}
var MyArr3 = F3();
console.log("MyArr3[0] = " + MyArr3[0]());
console.log("MyArr3[1] = " + MyArr3[1]());
console.log("MyArr3[2] = " + MyArr3[2]());
console.log(" ");

// ----------------
// let in loop top
function F4() {
	var arr = [];
	for (let i = 0; i < 3; i++) {
		arr[i] = function () {
					return i;
				};
	}
	return arr;
}
var MyArr4 = F4();
console.log("MyArr4[0] = " + MyArr4[0]());
console.log("MyArr4[1] = " + MyArr4[1]());
console.log("MyArr4[2] = " + MyArr4[2]());