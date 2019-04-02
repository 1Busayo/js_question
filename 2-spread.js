let arr1 = [1, 2];
let arr2 = [3, 4];
arr1.push(...arr2); // [1, 2, 3, 4]

let dateParts = [1961, 3, 16];
let birthday = new Date(...dateParts);
console.log(birthday.toDateString()); 	// Sun Apr 16, 1961

let arr3 = ['bar', 'baz'];
let arr4 = ['foo', ...arr3, 'qux'];
console.log(arr4); // ['foo', 'bar', 'baz', 'qux']

// duplicate an array
let arr5 = [...arr1];
console.log(arr5);
