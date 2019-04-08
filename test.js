// let con = [1,2,3,4,5]
// con.push(2);  //頭節點刪掉
// console.log(con)


var arr = []
for (var i = 0; i < 10; i++) {
	setTimeout(() => arr[i] = i, 0);
}
//console.log(arr)


//print root to leaf

var printpath = function(root, list = [], depth = 0){
    if(root == null ) return ;
    list[depth++] = root.val;
    if(root.left == null && root.right == null){
        list = list.slice(0, depth);
    } 
    printpath(root.left, list, depth);
    printpath(root.right, list, depth);
}


var findlongest = function(input){
    let maxl = 0;
    let res = '';
    for(let i=0;i<input.length;i++){
            if(input[i].length > maxl){
                maxl = input[i].length;
                res = input[i]
            }
    }
    return res;
}


// var reverseWords = function(s) {
//     return s.split(' ').filter(word => word !== '').reverse().join(' ').trim();
// };

// let r = reverseWords("I love electrical art")
// console.log(r)


// function getCombinations(array) {

//     function fork(i, t) {
//         if (i === array.length) {
//             result.push(t);
//             return;
//         }
//         fork(i + 1, t.concat([array[i]]));
//         fork(i + 1, t);
//     }

//     var result = [];
//     fork(0, []);
//     return result;
// }

// var data = [1,2,3]
//     result = getCombinations(data);
// console.log(result)



//old moneyundefined
//new money200
// t is not defined

// var money = 100;
// function see(){
//     console.log('old money'+ money);
//     var money=200;
//     console.log('new money'+ money);
//     var t = 10;
// }
// see()
// console.log(t) 



// function add(x) {
//     if(typeof x =='undefined') return 0;
//     return function(y) {
//         if (typeof y !== 'undefined') {
//             x = x + y;
//             return arguments.callee;
//         } else {
//             return x;
//         }
//     };
// }

// console.log(add());
// console.log(add(2)());
// console.log(add(2)(2)());
// console.log(add(2)(3)(4)(5)())         


//two sum
const twosum = (nums, target) =>{
      const map = {}
      for(let i = 0; i < nums.length; i++  ){
          const another = target - nums[i];
          if( anothe in map ){
              return [map[another], i];
          }
          map[nums[i]] = i;
        }
}



//lcs

// const lcs = (X,Y) =>{
//     var l1 = X.length;
//     var l2 = Y.length;
//     var Matrix = [];

//     for(let i = 0; i <= l1; i++){
//         for(let j = 0; j <= l2; j++){
//             if(i == 0 || j==0){
//                 Matrix[i][j] = 0;
//             }
//             else if(X[i-1] ==Y[j-1]){
//                 Matrix[i][j] = Matrix[i-1][j-1]+1
//             }
//             else{
//                 Matrix[i][j] = Math.max(Matrix[i-1][j], Matrix[i][j-1])
//             }
//         }
//     }
//     return Matrix[l1][l2];
// }

// console.log(a);
// var a;
// console.log(a);
// var a =5;
// console.log(a)


//找重複數最巧妙的方法
// function findDuplicate(arr) {
//     var set = new Set();
//     var duplicates = new Set();
//       for (let i = 0; i< arr.length; i++) {
//          var size = set.size;
//          set.add(arr[i]);
//          if (set.size === size) {
//              duplicates.add(arr[i]);
//          }
//       }
//      return duplicates;
//     }

function sum(a){
    return function(b){
      return a+b;
    }
  }
  console.log(sum(2)(3))



//   public static void mergeArrays(int[] arr1, int[] arr2, int n1, 
//     int n2, int[] arr3) 
// { 
// int i = 0, j = 0, k = 0; 

// // Traverse both array 
// while (i<n1 && j <n2) 
// { 
// // Check if current element of first 
// // array is smaller than current element 
// // of second array. If yes, store first 
// // array element and increment first array 
// // index. Otherwise do same with second array 
// if (arr1[i] < arr2[j]) 
// arr3[k++] = arr1[i++]; 
// else
// arr3[k++] = arr2[j++]; 
// } 

// // Store remaining elements of first array 
// while (i < n1) 
// arr3[k++] = arr1[i++]; 

// // Store remaining elements of second array 
// while (j < n2) 
// arr3[k++] = arr2[j++]; 
// }  //idea for merger sort



//find second large element in array


// var findsec=function()
// { var first = myArray[0];
//   var second = myArray[0];
//     for(var i=0;i<myArray.length;i++){
//         if(myArray[i] > first){
//             second = first;
//             first = myArray[i];
//         }
//         else if(myArray[i]>second && myArray[i]!=first)
//             second = myArray[i];
//     }
// return second;
// }



//lcs algorithm
// int lcs( char[] X, char[] Y, int m, int n ) 
//   { 
//     int L[][] = new int[m+1][n+1]; 
  
//     /* Following steps build L[m+1][n+1] in bottom up fashion. Note 
//          that L[i][j] contains length of LCS of X[0..i-1] and Y[0..j-1] */
//     for (int i=0; i<=m; i++) 
//     { 
//       for (int j=0; j<=n; j++) 
//       { 
//         if (i == 0 || j == 0) 
//             L[i][j] = 0; 
//         else if (X[i-1] == Y[j-1]) 
//             L[i][j] = L[i-1][j-1] + 1; 
//         else
//             L[i][j] = max(L[i-1][j], L[i][j-1]); 
//       } 
//     } 
//   return L[m][n]; 
//   } 
    
