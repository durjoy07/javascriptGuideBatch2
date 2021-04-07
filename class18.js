// var student = {
//     firstName: "Next",
//     age: 10
// }

// if(student.hasOwnProperty('firstName')) {
//     delete student.firstName;
// }

// if('age' in student) {
//     student.age = 12;
// }

// if(!student.hasOwnProperty('section')) {
//     student.section = 'B'
// }
// console.log(student);
// if('myAge' in student) {
//     console.log('your age is:', student.age);
// }
// console.log('section' in student);


// var student = {
//     firstName: "Next",
//     age: 10,
//     rollNumber: 1,
//     section: 'A'
// }
// // for..in loop
// for(var k in student) {
//     console.log('key:', k,'value:',student[k]);
// }


//======================================
// method in object
//======================================

// var person = {
//     name: 'next',
//     weight: '72kg',
//     color: 'white',
//     speak: function(myName) {
//         console.log('my name is: ', myName);
//     }
// }

// // console.log(person.name);
// person.speak('Topper');

// var person = {
//     name: 'next',
//     weight: '72kg',
//     color: 'white',
//     speak(myName) {
//         console.log('my name is: ');
//     },
//     draw() {
//         return 'I can draw';
//     }
// }

// // console.log(person.name);
// // person.speak('Topper');
// var res = person.draw();
// console.log(res);


//  iife   imediately invoked function expression 

// (function hello () {
//     console.log('hello Next Topper');
// })()

// Task 
// Create a funtion that takes an ascii code
// and convert it character, digits or special character.

function converter(ascii) {
    console.log(String.fromCharCode(ascii));
}
converter(12);