// object methods 

//assing 
// var target = {name: "Next", age: 12, color: 'black'};
// var source = {age: 15, weight: '50kg'};

// var obj = Object.assign(target, source);
// console.log(obj);

// create method 

// var obj = { 
//     name: "Next", 
//     age: 12, 
//     color: 'black' 
// };

// var newObj = Object.create(obj);
// newObj.height = "5.8";

// console.log(newObj.name);

// entries
//  var obj = { 
//     name: "Next",
//     age: 12, 
//     color: 'black' 
// };

// var res = Object.entries(obj);
// console.log(res);

// for(var [key, value] of Object.entries(obj)) {
//     if(key=='age') {
//         obj[key] = 15;
//     }
//     // console.log(key, value);
// }
// console.log(obj);


// freeze 
// var obj = {
//     name: "Next",
//     age: 12,
//     color: 'black'
// };

// Object.freeze(obj);
// obj.weight = "35kg";
// delete obj.name;

// console.log(obj);

// fromEntries
// var arr = [['name', "topper"], ['age', 10]];
// var obj = Object.fromEntries(arr);
// console.log(obj);



// hasOwnProperty

// var obj = {
//     name: "Next",
//     age: 12,
//     color: 'black'
// };

// if (obj.hasOwnProperty('weight')) {
//     console.log(obj.weight);
// }
// else {
//     obj.weight = "35kg"
// }
// // var res = obj.hasOwnProperty('hello');
// console.log(obj);


// isFrozen 

// var obj = {
//     name: "Next",
//     age: 12,
//     color: 'black'
// };
// Object.freeze(obj)

// var res = Object.isFrozen(obj);
// console.log(res);

// keys 
// var obj = {
//     name: "Next",
//     age: 12,
//     color: 'black'
// };

// var keys = Object.keys(obj);
// console.log(keys);

// var values = Object.values(obj);
// console.log(values);

// var arr = [1, 2, 3];

// var res = Array.isArray(arr)
// console.log(res);

// var arr = new Array()