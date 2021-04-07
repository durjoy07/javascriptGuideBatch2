// Passing a function to another function


// function printSomething() {
//     return "I am from print something";
// }

// function something() {
//     return "hello something";
// }

// function findLength(func) {
//     var l = func().length;
//     console.log(l);
// }

// findLength(something)
// findLength(printSomething)

// convet inchi to cm
// function inchTocm(value) {
//     return value * 2.54;
// }
// // convet cm to inchi
// function cmToinchi(value) {
//     return value / 2.54;
// }

// // main converter 
// function converter(func, value) {
//     if(typeof func === "function") {
//         var res = func(value);
//         console.log(res);
//     }
//     else console.log("Please pass a valid function in your first parametre");
// }

// converter(inchTocm, 10);
// converter(cmToinchi, 25.4);


//================== Object ======================
//================================================

// var student = {
//     name: "Sakib",
//     age: "12",
//     class: "Three"
// }

// student.section = "A";
// student.class = "four";

// delete student.age;
// console.log(student);

// var allStudents = [
//     {
//         name: "Sakib",
//         age: "12",
//         class: "Three"
//     },
//     {
//         name: "Tamim",
//         age: "11",
//         class: "Three"
//     },
//     {
//         name: "Nasir",
//         age: "12",
//         class: "Three"
//     }
// ]
// var stuLength = allStudents.length;
// var total = 0;
// for(var i=0; i<stuLength; i++) {
//     total += +allStudents[i].age;
// }

// var averageAge = (total / stuLength).toFixed(3);
// console.log(+averageAge);

var student = {
    name: "hello",
    age: 12,
    class: "Three"
}

student.section = "A";
student.age = 10;

delete student.name;
console.log(student);