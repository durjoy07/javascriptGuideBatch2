// var arr1, arr2;
// arr1 = [1, 2, 3];
// arr2 = arr1;

// var obj1, obj2;
// obj1 = {name: "topper"};
// obj2 = obj1;

// console.log(obj1 === obj2);

// if(arr1 === arr2) {
//     console.log(arr1[0]);
// }
// else {
//     console.log(arr1[1]);
// }

// var arr1, arr2;
// arr1 = [1, 2, 3];
// arr2 = [1, 2, 3];

// var res = JSON.stringify(arr1);
// if (JSON.stringify(arr1) === JSON.stringify(arr2)) {
//     console.log(arr1[0]);
// }
// else {
//     console.log(arr1[1]);
// }

// var age = 10;
// var copyAge = age;
// age = 20;

// console.log(copyAge, age);

// var arr1 = [5, 6, 10];
// var copyArr = new Array().concat(arr1)
// arr1.push(20, 30);
// console.log('copy array', copyArr, 'main array', arr1);


//=================================================
//================== spread operator ==============
//=================================================

// var arr = [1, 2, 3];
// var arr1 = [...arr];
// arr.push(10, 20);

// console.log(arr, arr1);

// var arr1 = [1, 2, 3];
// var arr2 = [4, 5, 6];

// var res = arr1.concat(arr2);
// console.log(res);

// using spread operator

// var arr1 = [1, 2, 3];
// var arr2 = [4, 5, 6];

// var res = [...arr1, ...arr2];
// console.log(res);

// let colors = ["black", "pink", "blue", "red"];
// let copyColors = [...colors];
// colors.pop();
// console.log(colors, copyColors);


// copy an object ======================
// var obj1 = {
//     name: 'next',
//     age: 12
// }

// var obj2 = {
//     color: 'white',
//     weight: '32kg'
// }

// var obj3 = {...obj1};
//  obj1.color = 'white'
// console.log(obj1, obj3);


// concat two object 

// var obj1 = {
//     name: 'next',
//     age: 12
// }

// var obj2 = {
//     color: 'white',
//     weight: '32kg'
// }

// var newObj = {
//     ...obj1,
//     ...obj2
// }
// console.log(newObj);

// alternative concat object
// var concatObj = Object.assign(obj1, obj2)
// console.log(concatObj);


// let employee = { company: 'xyz' };
// let emp1 = Object.create(employee);

// delete emp1.company;
// console.log(emp1.company);