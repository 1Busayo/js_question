const obj = { b: 2, c: 3, d: 4 };

// 1. object destructuring assignment
const {a, b, c} = obj;

console.log(a + ' ' + b + ' ' + c); // undefined: there was no "a" in obj
//console.log(d); // reference error: "d" is not defined

const arr = [1, 2, 3];

// 2. array destructuring assignment
let [x, y] = arr;
console.log(x + ' ' + y); 		// 1 2

// 3. parameter destructuring - often used
let f = function ({firstName, lastName}) {
    console.log('Name is ' + firstName + ' ' + lastName);
}

let o = {
    firstName: 'John',
    lastName: 'Smith'
}

f(o);
