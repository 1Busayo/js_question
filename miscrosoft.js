// 1. maximum sum subarray , return subarray
var findarray = function(A){
   let maximun =Number.MIN_SAFE_INTEGER;
   let valuesofar = 0;
   let res =[], curMax = [];
   A.forEach(a => {
       if(valuesofar > 0){
           valuesofar += a;
            res.push(a);
       }else{
           valuesofar = a;
           res = []
           res.push(a)
       }       
       if(valuesofar > maximun){
           maximun = valuesofar;
           curMax = res.slice();
       }
   });
   return curMax;
} 

let input = [-2,1,-3,4,-1,2,1,-5,4]
let out = findarray(input);
console.log(out)

//2. what is prototype
//All JavaScript objects inherit properties and methods from a prototype.,
//in protype, you can add your own attribute and method
//Only modify your own prototypes. Never modify the prototypes of standard JavaScript objects.


//3. How to design the Object-Oriented Paradigm?
//You will find three different programming paradigms used to 
//create JavaScript applications. 
//They are Prototype-Based Programming, Object-Oriented Programming and Functional-Oriented Programming.

//Objects contain data and perform some logic based on their data. 
//As a result, OOP code is very easy to understand. 
// It is easy deciding how to break an application into these small objects in the first place.
//  4 key points :
// Class as Template, compare it to the real world
// Encapsulation protects data from uncontrolled access.
// Objects have functions that operate on the data the objects contain.
// Classes are the templates used to instantiate objects.
// Inheritance is a powerful tool for avoiding redundancy.

