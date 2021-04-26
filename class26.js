// Array methods in js
// concat 

// var arr1 = [10, 20, 30];
// var arr2 = [40, 50, 60];
// var newArr = arr1.concat(arr2);
// var newArr = [...arr1, ...arr2]
// console.log(newArr);

//every 
// var arr1 = [10, 20, 30, "hello", 50, 60];
// var res = arr1.every(ele => !isNaN(ele));
// console.log(res);

// var arr1 = [10, 12, 14, 16, 18, 21, 22];
// var res = arr1.every( ele => ele%2 === 0 )
// console.log(res);

//fill
// var arr1 = [10, 12, 14, 16, 18, 21, 22];
// arr1.fill(false, 4, 6);
// console.log(arr1);

// var arr = new Array(10).fill(0)
// arr.fill(1, 0, 3)
// console.log(arr);

// find 

// var arr1 = [10, 12, 14, 16, 18, 21, 22];
// var res = arr1.find(ele => ele < 16);
// console.log(res);


// flat
// var arr1 = [10, 12, 14,[true, false,['a',[0, 0, 0], 'b', 'c'], undefined], 16, 18, ['blue', 'red'], 21, 22];
// var res = arr1.flat(3);  // flat takses level number
// console.log(res);

// join
// var arr = [10, 20, 30, 40] // 10203040
// var res = arr.join('');
// console.log(res);



// Array.prototype.myMethod = function() {
//     return this[0] + this[this.length-1];
// }

// var arr = [10, 20, 30, 40];
// var res = arr.myMethod();
// console.log(res);







