// rest parametre
// function sum(a, b, c, ...rest) {
//     var sum = 0;
//     for(var i=0; i<rest.length; i++) {
//         sum += rest[i]
//     }
//     console.log(sum);
// }

// sum(10, 20, 30, 40, 50)

//=====================================
//========= Array Destructuring ==============

// var arr = [10, 20, 30, 40, 50, 60];
// var [num1, num2, ...rest] = arr;
// console.log(num1, num2, rest);

//===================================
// var [a, , , b] = arr;    // skip any variable
// console.log(a, b);

// var firstElement = arr[0];
// console.log(firstElement);

//=============================================
//========= Object Destructuring ==============

// var student = {
//     name: 'next',
//     age: 10,
//     className: 'Five',
//     section: 'A',
//     roll: 1,
//     address: {
//         division: 'Dhaka',
//         district: 'Savar',
//         zipCode: 1205
//     },
//     phoneNumbers: ['012585', '0178655', '018856141']
// }

// let {division: myDivision, district: myDistrict, zipCode } = student.address;
// console.log(myDivision, myDistrict, zipCode);

// Alternative
// let { address: { division: myDivision, district: myDistrict, zipCode}, age } = student;
// console.log(myDivision, myDistrict, zipCode, age);


//============================================
//  =========== Optional chaining ============
// ===========================================

// if(student.hasOwnProperty('address'))  // old way
// console.log(student.address.division);
// else {
//     console.log(student.address);
// }

// optional chaining 
// var res = student?.address?.zipCode;
// console.log(res);