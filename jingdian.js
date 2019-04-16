//经典题目

//add() =0 add(2)()=2 add(2)(2)(3)=7
// function add(a,b){
//         var ddd = function (b){return a+b;};
//         if(typeof b =='undefined'){
//             return ddd;
//         }else{
//             return ddd(b);
//         }
//     }

// add(2)(3) // 5
// add(2,3) // 5


//use reduce to combine these objects
// var arrObj = [{a:1, b:2},{c:3, d:4},{e:5, f:6}]; 
// let res = arrObj.reduce(( (r,c)=>Object.assign(r,c) ),{});
// console.log(res);


// const euros = [29.76, 41.85, 46.5];
// const sum = euros.reduce((total, amount) => total + amount); 
// console.log(sum) // 118.11


// How to add ele in the end of arr   use push()
// How to delete the first ele in an arr 
// var fruits = ['a', 'b', 'c', 'd' ];
// fruits.shift();
// console.log(fruits)

//backpack question



// console.log(typeof(null)) 输出是object
//typeof(array) -- object




//recursive 
// function fibonacci(num) {
//   if (num <= 1) return 1;

//   return fibonacci(num - 1) + fibonacci(num - 2);
// }


var findLengthOfLCIS = function(nums) {
    let lo = 0
    let hi = 0
    let longest = []
    if(!nums.length) return 0
    while(lo<nums.length){
        if(nums[hi+1] > nums[hi]){
            hi++
        }else{
            if((hi+1)-lo>longest.length){
                longest = nums.slice(lo,hi+1)
            }
            lo = hi + 1
            hi = lo
        }
    }
    console.log(longest)
    return longest.length || 1
};
// 计算一个 该数组的长度  并且打印最长的递增
console.log(findLengthOfLCIS([2,4,1,3,6,7,8,5,9]))

// 计算某一个数字的频率
// const countoccur = (arr, val)=> arr.reduce((a,v)=>(v===val?a+1:a+0),0)
// let t = [1,1,3,4,1,2,3,4,1]

// let f = countoccur(t,1);

//[1,2,3].double()=[2,4,6]
// Array.prototype.double = function(){
//     return this.Map((item) =>(item*2))
// }

const findpairs = function(arry){
    let l = arry.length;
    let map={};
    for(let i = 0; i<l ; i++){
        for(let j = i+1 ;j<l; j++){
          let sum = arry[i] +arry[j];
          if(!map.hasOwnProperty(sum)){
              let cointer = [];
              let cur = [arry[i], arry[j]]
              cointer.push(cur);
              map[sum] = cur;
          }
          else{
              let c = map[sum];
              //console.log(c);
              //console.log([arry[i],arry[j]])
              return;
          }
        }
    } 
}

let input = [3,4,7,1,2,9,8]
//findpairs(input)




//permutation in leetcode

function swap(list, a, b){
    var temp = list[a];
    list[a] = list[b];
    list[b] = temp;
}

function permutate(result, list,left){
    if(left >=list.length-1){
         result.push(list.slice());
    }
    else{
       for(var i =left;i<list.length;i++){
        swap(list, i, left);
        permuteHelper(result, list, left + 1);
        swap(list, i, left);
       }
    }
}



function arrange(sentence) {
    sentence = sentence.substring(0,sentence.length-1);
    let map = new Map();
    let arr = sentence.split(" ");
    for(let word of arr){
      let len = word.length;
      // console.log(len);
      if(map.get(len)===undefined){
        map.set(len,[word])
      }else{
        map.set(len,[...map.get(len),word]);
      }
    }
    let new_arr = [...map];
    new_arr.sort((a,b)=>a[0]-b[0]);

    
    let result = "";
    
    new_arr[0][1][0] = new_arr[0][1][0].charAt(0).toUpperCase()+new_arr[0][1][0].slice(1);
    for(let i = 0; i < new_arr.length; i++){
      for(let j = 0; j < new_arr[i][1].length;j++){
        result+=new_arr[i][1][j];
        if(new_arr.length-1===i&&j===new_arr[i][1].length-1){
          result+='.';
        }else{
          result+=' ';
        }
      } 
    }
    return(result);
}

//console.log(arrange("djioasj fajsofjaso jfsdfio fnisdjfsd fdsjooi fsd."))




// Skype with walmart:
// 1. Write a function (getEvenAndSort) that can be called on any array, and it returns the subarray of only the even numbers, but sorted.
// [12,3,2,1,7,6].getEvenAndSort()

// Array.prototype.getEvenAndSort = function(){
//       let new_arr = [...this];
//       new_arr.sort((a,b)=>a-b);
//       return new_arr.filter(num=>num%2===0);
// }


//Array.map(elem => elem*elem);






// setTimeout(function() {
//     console.log(1)
//   }, 0)
//   setTimeout(function() {
//     console.log(2)
//   }, 0)
//   setTimeout(function() {
//     console.log(3)
//   }, 100)
//   setTimeout(function() {
//     console.log(4)
//   }, 100)
//   setTimeout(function() {
//     console.log(5)
//   }, 0)
  //1 2 5 3 4

  var Person = {
    name: "Jon Snow&",
    getName: function() {
      return this.name
    }
  }
  var P = Person.getName; 




  function LinkedList () {
    this.head = null;
}

LinkedList.prototype.deleteNode = function (val) {

    if (this.head.data === val) {
        this.head = this.head.next;
    } else {
        var previousNode = this.head;
        var currentNode = previousNode.next;
        while (currentNode) {
            if (currentNode.data === val) {
                previousNode.next = currentNode.next;
                currentNode = currentNode.next;
                break;
            } else {
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
        }
    }
};

// Create an instance of a LinkedList class
// var L1 = new LinkedList();

// // Create a linked list with six elements
// var testData = [5,6,7,8,9,10];
// testData.forEach(el => L1.insertNodeAtTail(el));
// console.log(L1);

// // Delete a head and a tail node
// L1.deleteNode(5);



// let objectarray = [{name:'cat',id:0},
//                    {name:'dog',id:1},
//                    {name:'bird',id:2},
//                    {name:'dolphin',id:3}
//                   ]
// let res=[]
// for(let i=0;i<objectarray.length;i++){
//       res.push(objectarray[i].name)
// }
//console.log(res)


//clousure
// for(var i = 0; i < 6; i++) {
    
//     (function(i){
// 		setTimeout(function(){console.log(i);}, 1000);
// 	})(i)
// }

//flat()方法

var arr = [1,[2,3],4,5,[7,[8,9]]];
let f = arr.flat(2);

// var arr1 = [1, 2, [3, 4]];
// let f = arr1.flat();
//onsole.log(f)
const flatten_deconstruction = (arr) => {
    while (arr.some(item => Array.isArray(item))) {
        arr = [].concat(...arr)
    }
    return arr
}

//对于空数组的任何条件 返回false 
// some() 方法 是否会返回一个元素 
var arr = [1, 2, 3, 4, [1, [1, [32, 3], 23], 2]]
//console.log(flatten_deconstruction(arr))



//to flat single level array


console.log(0.1+0.2)




//filter 删除 重复的数字 
//过滤掉非唯一的数值
// const filteresult = arr => arr.filter(i => arr.indexOf(i) === arr.lastIndexOf(i));


// var source_arr = ['a', 'b', 'a', 'c', 'a', 'd', '1',1,'1'];
// var array_unique = source_arr.filter(function (element, index, array) {
//     return array.indexOf(element) === index;
// });
// console.log(array_unique);
// console.log(source_arr);
// iu = [1,2,3,4,5]
// const s = iu.reduce((a,b)=>(a+b))
// console.log(s)



//flatten binary tree to linkedlist

const flatten = root =>{
    if(!root) return null;
    let stack = [root], pre = null;
    while(stack.length){
      let node = stack.pop();
      if(node.right) {stack.push(node.right)}
      if(node.left){stack.push(node.left)}
      if(pre){
        pre.left = null;
        pre.right = node;
      }
      pre = node;

    }
}

// var obj = {
//    name : "Tom",
//    age: 20
// }
// var dup = obj
// obj.age = 45

// console.log(dup.age)
// console.log(obj.age)
// 都是 45 


test();
var n = 9;
function test(){
  console.log(n)
}
//console.log(n)
// undefined 因为 hoisting把n提前了 但是没有赋值 
// 9

// var inString = "I love apple"
// var t = inString.split(" ").reverse().join(" ")
// console.log(t)





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

// let input = [-2,1,-3,4,-1,2,1,-5,4]
// let out = findarray(input);
// console.log(out)

//2. what is prototype
//This prototype property is an object 
//(called as prototype object) which has a constructor property by default. 
//Only modify your own prototypes. 
//Never modify the prototypes of standard JavaScript objects.


//3. How to design the Object-Oriented Paradigm?

//Objects contain data and perform some logic based on their data. 
//As a result, OOP code is very easy to understand. 
// It is easy deciding how to break an application into these small objects in the first place.
//  4 key points :
// Class as Template, compare it to the real world
// Encapsulation protects data from uncontrolled access.
// Objects have functions that operate on the data the objects contain.
// Classes are the templates used to instantiate objects.
// Inheritance is a powerful tool for avoiding redundancy.



//how to communicate between parent and child component
//https://medium.com/@ruthmpardee/passing-data-between-react-components-103ad82ebd17



// level order to binary tree
var levelOrderBottom = function(root) {
   if(!root) return [];
   let arr = [];
   search(root, 0);
   function search(root, level) {
       if(!root) return;
       if(arr.length <= level) arr.push([]);
       let arrLevel = arr[level];
       arrLevel.push(root.val);
       search(root.left, level + 1);
       search(root.right, level + 1);
   }
   return arr.reverse();
};



// find first and last appear
// var searchRange = function(nums, target) {
//     if (nums.length == 0) return [-1,-1]
      
//    return [getFisrtIndexOfk(nums, target), getLastIndexOfk(nums, target)]
// };


// function getFisrtIndexOfk(nums, k) {
//  let low = 0;
//  let high = nums.length - 1;
//  let mid = Math.floor(low + (high - low) / 2);
//  while (low <= high) {
//    if (nums[mid] < k) {
//      low = mid + 1;
//    } else {
//      high = mid - 1;
//    }
//    mid = Math.floor(low + (high - low) / 2);
//  }
//  if (low < nums.length && nums[low] == k) {
//    return low;
//  } else {
//    return -1;
//  }
// }

// function getLastIndexOfk(nums, k) {
//  let low = 0;
//  let high = nums.length - 1;
//  let mid;
//  while (low <= high) {
//    mid = Math.floor(low + (high - low) / 2);
//    if (nums[mid] <= k) {
//      low = mid + 1;
//    } else {
//      high = mid - 1;
//    }
//  }
//  if (high > -1 && nums[high] == k) {
//    return high;
//  } else {
//    return -1;
//  }
// }


//终止函数为()
const Sum = a => b => b ? Sum( a + b ) : a;

console.log(Sum(1)(2)(3)())
console.log(Sum(1)(2)(3)(4)())
console.log(Sum(1)(2)(3)(4)(5)())

// 终止函数不为（）
let total = 0;
const add = (n) => {
if (n) {
   total += n;
   return add;
}
}

add(1)(2)(3)(9);
console.log(total);


//merge two BST
const mergeTrees= function(root1, root2){
    let list1 = storeInorder(root1,[]);
    let list2 = storeInorder(root1,[]);
    let curlist = mergelist(list1, list2, list1.length, list2.length)
    let res = listtoBST(curlist, 0 , curlist.length-1);
    return res;
}
const storeInorder = function(node,list){
   if(node  == null) return list;
   storeInorder(node.left, list);
   list.push(node.value);
   storeInorder(node.right, list);
   return list;
}

const mergelist = function(list1, list2,m,n){
   let list3 = [];
   var i=0;
   var j=0;
   while( i<m && j<n) 
   { 
       if(list1[i] < list2[j]) 
       { 
           list3.push(list1[i]); 
           i++; 
       } 
       else
       { 
           list3.push(list2[j]); 
           j++; 
       } 
   } 
   while(i<m) 
   { 
       list3.push(list1[i]); 
       i++; 
   } 
   while(j<n) 
   { 
       list3.push(list2[j]); 
       j++; 
   } 
   return list3; 
}

const listtoBST = function(list, start, end){
   if(start > end) return null;
   let mid = Math.floor((start+end)/2);
   let node = new Node(list[mid])
   node.left = listtoBST(list, start, mid-1);
   node.right = listtoBST(list,mid+1, end)
   return node;
}



//HTML canvans
//The HTML <canvas> element is used to draw graphics,
// on the fly, via JavaScript.

// The <canvas> element is only a container for graphics.
// You must use JavaScript to actually draw the graphics.


//Responsive design 
//we use 
// @media screeb and(max-width:800px){
//     width:100px;

// }


//How to do async calls in js?
// 1. Promises, Promises
// 2. async function getUserQuote() {

//what is the render() do in React?
// rendering is the process of transforming your 
// react components into DOM (Document Object Model) nodes 
// that your browser can understand and display on the screen.




//handle event function 
// there are two ways to do that
// <button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>
// <button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>

// function ActionLink() {
//     function handleClick(e) {
//       e.preventDefault();
//       console.log('The link was clicked.');
//     }
 
//     return (
//       <a href="#" onClick={handleClick}>
//         Click me
//       </a>
//     );
//   }

//How do you detect memory leak in js
// use Chrome in memory tab there is a
// option called Record Allocation Timeline
// Memory management

// tool in Chrome named: Heap Snapshots

//setState() is Async call in React life cycle



//replacement to the final String
var changeWord = function(input){
    let y = input.search("ab")
    while(input.search("ab") !== -1 ||
          input.search("ba") !== -1 ||
          input.search("ca") !== -1 ||
          input.search("ac") !== -1 ||
          input.search("bc") !== -1 ||
          input.search("cb") !== -1 ){

         //设置一个最小值
           let postion = [], cur = input.length;
           postion[0] = input.search("ab")
           postion[1] = input.search("ba")
           postion[2] = input.search("ca")
           postion[3] = input.search("ac")
           postion[4] = input.search("bc")
           postion[5] = input.search("cb")
           for(let i=0;i<postion.length;i++){
               if(postion[i]  == -1) continue;
               else{
                   cur = Math.min(postion[i], cur)
               }
           }
              if(input.search("ab") == cur){
                  input = input.replace("ab","c")
              }
               else if(input.search("ba") == cur){
               input = input.replace("ba","c")
           }
             else if(input.search("bc") ==cur){
               input = input.replace("bc","a")
           }
           else if(input.search("cb") ==cur){
               input = input.replace("cb","a")
           }
           else if(input.search("ac") ==cur ){
               input = input.replace("ac","b")
           }
           else if(input.search("ca") == cur){
              input = input.replace("ca","b")
           }
          
       
       
       
       }
       return input;

}

let chout = changeWord("ccabc")
console.log(chout)




// classic clousure
//  function Adder(x) {
//     return function(y) {
//       return x + y;
//     };
//   }
 
//   var add5 = Adder(5);
//   var add10 = Adder(10);
 
//   console.log(add5(2));  // 7
//   console.log(add10(2));



// var permute = function(nums) {
//     // backtrack
//     var list = [];
//     permuteHelper(list, nums, 0);
//     return list;
// };

// function permuteHelper(result, list, left){
//     if(left >= list.length - 1){
//         // shallow copy array
//         result.push(list.slice());
//     }else{
//         for(var i = left; i < list.length; i++){
//             swap(list, i, left);
//             permuteHelper(result, list, left + 1);
//             swap(list, i, left);
//         }
//     }
// }

// function swap(list, a, b){
//     var temp = list[a];
//     list[a] = list[b];
//     list[b] = temp;
// }




const items = [
  { id: 1, type: "retail", cost: 1 },
  { id: 2, type: "retail", cost: 2 },
  { id: 3, type: "retail", cost: 5 },
  { id: 4, type: "retail", cost: 10 },
  { id: 5, type: "inventory", cost: 1 },
  { id: 6, type: "inventory", cost: 2 },
  { id: 7, type: "inventory", cost: 5 },
  { id: 8, type: "inventory", cost: 10 },
];
const filtitem1 = items.filter(item=>item.cost<5)
const filtitem2 = items.filter(item=>(item.cost<5&& item.type==='retail'))
console.log(filtitem1)








