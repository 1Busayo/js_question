

// var test_first = [1,2,3,4,5]
// let t = Object.prototype.toString.call(test_first)
// console.log(t)

 //判断是不是 object Array



// Array.prototype.double = function(){
//     return this.map((item) =>(item*2))
// }
// let cur = [1,2,3].double()
// console.log(cur)

// com
// componentWillMount will be deprecated and replaced with UNSAFE_componentWillMount
// because it is not safe for async rendering.

// function x(){
//     let t = 5+3+"6" 
//     console.log(t);
// }
// x()

// x = new Array();
// x[0] = 12;
// x[1] = false;
// x[2] = "text";
// x[3] = a;


//const add = a=>b=>a+b;
// let yui = add(2)(4)
// let h = add(3)(1)
// console.log(yui)
// console.log(h)

//arrow 函数会把this 指向外面那个变量
// var adder = {
//     base : 1,
      
//     add : function(a) {
//       var f = v => v + this.base;
//       return f(a);
//     },
  
//     addThruCall: function(a) {
//       var f = v => v + this.base;
//       var b = {
//         base : 2
//       };
              
//       return f.call(b, a);
//     }
//   };
  
//   console.log(adder.add(1));         // 输出 2
//   console.log(adder.addThruCall(1));

//   //map会产生一个新的数组

//   function a(){
//       var i =1;
//       return function b(){
//            ++i;
//            return i
//       }
//   }
//   let t = a()
//   console.log(t())
//   console.log(t())
//   console.log(t())




//   function foo(){
//       bam ="baz"
//   }
//   foo()
//   console.log(bam)




var magic = [2,4,5,2]
var dist =[4,3,1,3]
var  r = optimalPoint(magic,dist);
console.log(r)

function optimalPoint(magic, dist) {
    
    for (let start = 0; start < magic.length; start++){
        var cur = magic[start];
        var twice = 0 
        for (let next = start; next < dist.length; next++){
            // arrive to next point
            if(twice === 1){
                return start; 
            }
            if (cur - dist[next] > 0) {
                if (next + 1 < dist.length) {
                    cur = cur - dist[next] + magic[next+1]            
                } else {
                    if (next+1 === start) return next;
                    else{
                        cur = cur - dist[next]
                        next = 0;
                        cur = cur + magic[next]
                        if(next + 1 === start ){
                            twice = 1;
                        } 
                    } 
                }       
            }
            else {
                break;
            }
        }  
    }
    return -1;

}

//node js in javascripts
const reverse=function(str){
     let r = str.split("").reverse().join("")
     return r;
}

console.log(reverse("eert"))


function factorialize(num) {
    if (num < 0) 
          return -1;
    else if (num == 0) 
        return 1;
    else {
        return (num * factorialize(num - 1));
    }
}

function factor(nums){
    if(nums < 0) return -1;
    else if(num == 0) return 1;
    else{
        var res = 1;
        for(let i=1 ;i<nums;i++ ){
             res= res*i;
        }
        return res;
    }
}

  console.log(factorialize(5))



  enhancedReverseStr = (str) => {
    let splitStr = str.split('');
    for(var i = 0; i < splitStr.length; i= i + 4) {
        switch(splitStr.slice(i, i + 4).length) {
            case 1:
            break;
            case 2:
                [splitStr[i], splitStr[i + 1]] = [splitStr[i + 1], splitStr[i]];
            break;
            case 3:
                [splitStr[i], splitStr[i + 2]] = [splitStr[i + 2], splitStr[i]];
            break;
            case 4:
                [splitStr[i], splitStr[i + 2]] = [splitStr[i + 2], splitStr[i]];
                [splitStr[i + 1], splitStr[i + 3]] = [splitStr[i + 3], splitStr[i + 1]];
            break;
        }
    };
    var outputStr = splitStr.join('');
    return outputStr;
 }

 
// console.log(enhancedReverseStr('ab'));//output: ba
// console.log(enhancedReverseStr('red'));//output: der
// console.log(enhancedReverseStr('tree'));//output: eetr
// console.log(enhancedReverseStr('abcde'));//output: cdabe
// console.log(enhancedReverseStr('abcdef'));//output: cdabfe
// console.log(enhancedReverseStr('abcdefg'));//output: cdabgfe
// console.log(enhancedReverseStr('abcdefgh'));//output: cdabghef


Array.prototype.max = function(){
    return Math.max.apply(null, this);
}
Array.prototype.min = function(){
    return Math.min.apply(null, this)
}

// let atest = [100,1,2,3,5,-8,-11,23,12,45,89,61]

// let t = Math.max(...atest)
// console.log(t)
// console.log(atest.min())
// console.log(atest.max())


// function flatten(arr) {
//     return arr.reduce(function (flat, toFlatten) {
//         return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
//     }, []);
// } 

var circle = {
    pi:3.14,
    area : function(radius){
        return radius*radius*this.pi;
    }
}

console.log(circle.area.call({pi:3.1415926},2))
let cur = circle.area.bind({pi:3.1415926})
console.log(cur(2))