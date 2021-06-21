// var arr1 = [10, 5, 6, 1, 8]
// var arr2 = [6, 9, 1, 10, 12]

// // Output: 5, 8, 9, 12 

// function differentValues(arr1, arr2) {
//     var ans = [];
//     for (var i in arr1) {
//         if(arr2.indexOf(arr1[i]) === -1) ans.push(arr1[i]);
//     }

//     for (var i in arr2) {
//         if(arr1.indexOf(arr2[i]) === -1) ans.push(arr2[i]);
//     }
//     return ans;
// }

// var ans = differentValues(arr1, arr2);
// console.log(ans);

// var arr1 = [10, 5, 6, 1, 8]
// var arr2 = [6, 9, 1, 10, 12]

// // Output: 5, 8, 9, 12 

// function commonValues(arr1, arr2) {
//     var ans = [];
//     for (var i in arr1) {
//         if(arr2.indexOf(arr1[i]) !== -1) ans.push(arr1[i]);
//     }
//     return ans;
// }

// var ans = commonValues(arr1, arr2);
// console.log(ans);


let arr = [
{
  color: "brown",
   permission: true,
   age: 27,
   numbers: {
       num : [2, 7, 3 ,9]
   }
},
{
  color: "brown",
   permission: true,
   age: 20
},
{
  color: "brown",
   permission: true,
   age: 21
},
{
  color: "blue",
   permission: true,
   age: 16,
   numbers: {
       num : [11, 10, 3 ,9]
   }
},
{
  color: "brown",
   permission: true,
   age: 15,
    numbers: {
       num : [2, 5, 3 ,1]
   }
},
]

//1
// var a = arr.filter(ele => ele.color === "brown");
// var total = a.length;
// var totalAge = a.reduce((a,b) => a + b.age, 0);
// var averageAge = totalAge / total;
// console.log("Total age: ", totalAge, "Average: ", averageAge);


//2 
// var allValues = [];
// arr.map(ele=> {
//     if(ele.numbers?.num) {
//         allValues.push(ele.numbers.num)
//     }
// })

// var values = allValues.flat();

// var res = [...new Set(values)]

// var num = new Set();
// for (let i = 0; i < values.length; i++) {
//     num.add(values[i])
// }
// console.log(res);

// var obj = {
//     name: "Next",
//     age: 14
// }

// var anotherObj = {
//     ...obj,
//     roll: 10,
//     section: 'A'
// }

// console.log(anotherObj);

// var arr2 = [10, 20, 30]
// var arr1 = [...arr2, 50, 60, 70]
// console.log(arr1);
//3

arr.map(ele=> {
    if(ele.color === "blue") 
    ele.permission = false;
})

console.log(arr);