// var t=[1,2,3,4,5,6];



// t.shift()   //左删掉一个
// var a=Boolean(10>9)
// console.log(a)


// //21
// var array=[1,2,3,4,5,6];
// var res=0;
// for(var i=0;i<array.length;i++){
//      res=res+array[i];
// }

// var is_array=function(input){
//     if(toString.call(input) === "[object Array]") return true;
//     return false;
// };
// console.log(is_array('w3school'));
// console.log(is_array([1,2,4,0]));


// console.log(res);


var t2=[1,2,3,4,5,6,7,8];
t3=t2.slice(2);  //从左面开始切割的
console.log(t3)



// function maxDifference(a) {
//     if (a == null) return 0;
//     var n = a.length;
//     var diff=new Array();
//     for (var i = 0; i < n - 1; i++)
//     diff[i] = a[i + 1] - a[i];

//     var max_diff = diff[0];
//     // var history = max_diff;
//     for (var i = 1; i < n - 1; i++)
//     {
//         if (diff[i - 1] > 0)
//             diff[i] += diff[i - 1];
//         if (max_diff < diff[i])
//             max_diff = diff[i];
//     }
//     if (max_diff <= 0) return -1;
    
//     return max_diff; 

// }


// function countDuplicates(numbers) {
//     if (numbers.length == 0 || numbers.length == 1) return 0;

//     var res = [];
//     numbers.sort(function (a, b) {
//         return parseInt(a) - parseInt(b);
//     });
//     var cur = numbers[0];
//     for (var i = 1; i < numbers.length; i++) {
//         if (numbers[i] == cur) {
//             if (!res[0] || res[res.length - 1] != numbers[i]) {
//                 res.push(numbers[i]);
//             } else {
//                 continue;
//             };
//         } else {
//             cur = numbers[i];
//         };
//     };

//     return res.length;
// }


// function mergeString(a,b){
//     var m1=a.split("");
//     var m2=b.split("");
//     var res="";
//     var i=0,j=0,c=0;
//     while(i<m1.length && j<m2.length){
         
//          if(c%2 == 0){
//            res=res+m1[i];
//            c++;
//            i++;
//          }else{
//             res=res+m2[j];
//             c++;
//             j++;
//          }

//     }
//     var t1=i,t2=j;
//     while(t1<m1.length){
//         res=res+m1[t1];
//         t1++;
//     }
//     while(t2<m2.length){
//         res=res+m2[t2];
//         t2++;
//     }
//     return res;
// }

// //var r=mergeString("abc","stuvwx");

// function waitingTime(tickets, p) {
//     var times = 0;
//     var temp = [].concat(tickets);
//     for(var i = 0; i < tickets.length; i++ ) {
//        temp[i] = tickets[i] - tickets[p];
//     }
//     for(var i = 0; i < tickets.length; i++ ) {
//        if(temp[i] < 0) times += tickets[i];
//        else {
//           if(i <= p) times += tickets[p];
//           else times += tickets[p] - 1;
//        }
//     }
//     return times;

// }
// var res=waitingTime([5,5,2,3],3)

// function chi(a,b){
//     while(a!=b){
//         if(a>b){
//           a=a-b;
//         }else{
//           b=b-a;
//         }

//     }
// }

// chi(2437,875);


//react feature javascript基础好 算法好
//STRING 经常用双引号
a="tcc"
b="ss"
console.log(`${b}hello${a}`);




//false的几种 6个 0,false,null,undefined,NaN,""
// let arr=[[]] arr[1][1]会报错


console.log(NaN === NaN);
console.log(0.1 + 0.2);
console.log(0.1 + 0.2 == 0.3);
var math = require('mathjs')
console.log(math.add(0.1,0.2))//0.30000000000000004
// number epsilon
console.log(math.format((math.add(math.bignumber(0.1),math.bignumber(0.2)))))//'0.3'

//console.log(testcur);
console.log(1 +  "2" + "2");

console.log(1 +  +"2" + "2");
console.log(1 +  -"1" + "2");

console.log(+"1" +  "1" + "2");
console.log( "A" - "B" + "2");
console.log( "A" - "B" + 2); //nan是number 
console.log("0 || 1 = "+(0 || 1));  //直接会放置值 要看后面
console.log("1 || 2 = "+(1 || 2));
console.log("0 && 1 = "+(0 && 1)); // 要看前面 等同于if else
console.log("1 && 2 = "+(1 && 2));



//



console.log(false == '0')
console.log(false === '0')


