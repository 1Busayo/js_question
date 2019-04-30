arr=[1,2,3,4];
for(var i = 0; i < arr.length; i++) {
    setTimeout(function() {
        console.log(arr[i])
     },1000)
}



for(var i = 0; i < arr.length; i++) {
    setTimeout(function() {
        console.log(arr[i])
     },1000)
}

// for(var i = 0; i < 6; i++) {
    
//         (function(i){
//     		setTimeout(function(){console.log(i);}, 1000);
//     	})(i)
//     }



    // var data = { one: 'first', two: 'second' };
    // var result = $.param(data);


    function flatten(arr) {
        return arr.reduce(function (flat, toFlatten) {
            return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
        }, []);
     }
     

     const queryCons = (input) => {
        let res = "?";
        for (let i in input) {
            res += i + "=" + inpu
       t[i] + "&";
        }
        return res.slice(0, -1);
       };
       
       


       // permutate a string
       const per = str =>{
           const res = []
           helper(str, res, "");
           return res;
       } 

       const helper = (str, res, cur) =>{
           if(str.length  === cur.length){
               res.push(cur);
               return;
           }
           for(let i = 0; i < str.length;i++){
               if(cur.includes(str[i])) continue;
               helper(str, res,cur+str[i])
           }
       }

       const shoes = {
        size:0,
        gender:"male",
        color:"blue" 
      }
      function process(obj){
        let res = []
        for(let ele in obj){
            res.push(ele + "=" +obj[ele]); 
        }
         return "?" + res.join("&");
      }
    
      let r = process(shoes)
      console.log(r) 

