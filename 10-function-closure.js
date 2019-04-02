var firstf = function () {
				var counter = 0;
				return function () {
					console.log("counter = " + counter);
					return counter += 1;
					}
			};

var add = firstf();
add();
add();
add();
			
firstf()();
firstf()();
firstf()();




// function a(){
// 	console.log('A');
// 	a = function (){
// 		console.log('B');
// 	} 
// }
// a() //A
// a()  //B
// a()	  //B


function a(){
	console.log('A');
	var a=function(){
		console.log('B');
	}
}
a()
a();	
