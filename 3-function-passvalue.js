
function changeStuff(a, b, c) {
	// var a, b, c
	a = a * 10;
	b.item = "changed";
	c = {item: "changed"};
}

var num = 10;
var obj1 = {item: "unchanged"};
var obj2 = {item: "unchanged"};

changeStuff(num, obj1, obj2);

console.log('num = ' + num);
console.log('obj1.item = ' + obj1.item);     //refernce
console.log('obj2.item = ' + obj2.item);    // 新建了一个object 所以不变 解决方式如下
		
// function passing value
var object = { a: 1, b: 2 } ;
function fn( ob )  {
	ob = { c: 3, d: 4 } ;
}
fn( object ) ; 
console.log( object ) ; 

// function returning value
function fn1() {
	return { c: 3, d: 4 } ;
}
object = fn1();		
console.log( object ) ; 

// not passing a value
function f(x) {
	return `in f: x=${x}`;
	// return 'in f: x=' + x;
	}
let v2 = f(); // "in f: x=undefined"
console.log(v2);
