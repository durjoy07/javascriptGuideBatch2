//reverse
// var arr = [1, 5, 7, 8, 4, 2];
// var res = arr.reverse();
// console.log(res);
// console.log(arr);

//push
// var arr = [1, 5, 7, 8, 4, 2];
// var res = arr.push(10, 12)  // return length
// console.log(arr, res);

// pop
// var arr = [1, 5, 7, 8, 4, 2];
// var res = arr.pop() //
// arr.pop()
// console.log(arr, res);

//shift 
// var arr = [1, 5, 7, 8, 4, 2];
// arr.shift();
// var res = arr.shift();
// console.log(arr, res);

//unshift 
// var arr = [1, 5, 7, 8, 4, 2];
// var arr2 = [10, 20, 30]
// var length = arr.unshift(...arr2)
// arr.unshift(40, 50)
// console.log(arr, "new length: ", length);

// slice
// var arr = [1, 5, 7, 8, 4, 2]
// var res = arr.slice(3);
// var res1 = arr.slice(2, 4);  // (startIndex, endIndex)

//task
// var arr = [1, 5, 7, 8, 4, 2]
// arr.push(10, 20);
// arr.unshift(30,40);
// var res = arr.slice(1,9)
// console.log(res);

//splice
// var arr = [1, 5, 7, 8, 4, 2];
// delete elements
// var res = arr.splice(3, 3) ;    // splice(startIndex, deleteCount, elements1, elements2, ...)
// console.log(arr, res);

// insert elements 
// var res = arr.splice(2, 0, 10, 20);  // insert 10, 20 from index 2 
// console.log(res);

// 1st task 
// arr.splice(3, 2);
// arr.splice(1, 0, 10, 20);
// console.log(arr);

// replace 
// arr.splice(2, 2);
// arr.splice(2, 0, 10 ,20);

// arr.splice(2 , 2, 10, 20)
// console.log(arr);

//2nd task 
// arr.splice(3, 2, true, false);
// console.log(arr);


// some method
// var arr = [1, 5, 7, 8, 4, 2];
// var res = arr.some(ele => ele%2 === 0);
// var res = arr.some(ele => typeof ele === 'string');
// console.log(res);

// sort 

// var arr = [1, 5, 16, 7, 8, 22, 4, 2];
// var arr1 = [1, 5, 16, 7, 8, 22, 4, 2];
// arr.sort((a,b) => a-b); // ascending order
// arr1.sort((a,b) => b-a); //descending order
// console.log(arr, arr1);