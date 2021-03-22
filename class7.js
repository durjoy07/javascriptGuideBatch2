//logical operator 

// &&    ||   ! 

// true = 1
// false = 0

// true && true = true
// true && false = false 
// false && true = false
// false && false = false

// true || true  = true
// true || false = true 
// false || true = true 
// false || false = false 


// !true = false
// !false = true

// var num1, num2, res;
// num1 = 10, num2 = 5;

// res = (num1 > num2)  && (num1 === num2);
// //  true && false  = false
// console.log(res);

// res = (num2 < num1) || (num1 < num2) || (num1 != num2)
// // true || false || true = true
// console.log(res);

// res = (num2 < num1) || ((num1 < num2) && (num1 != num2))
// true || (false && true)
// true || false
// true || false && true
// true && true
// console.log(res);



// var a, b, c, res;
// a = 5, b = '5', c = 10;

// a!==b = true

// var res = (a!==b) || (b<c) && (c<a)
// // true || true && false
// // true || false
// console.log(res);

// var res = (a*b) > c || !(a!==b) && (b+c)>(a+b) ;    

// true || false && false
// console.log((a * b) > c || !(a !== b) && (b + c) > (a + b));

// 
// console.log('550' > '55');  

//Raju Molla
// var a = 10, b = '20', res;
// res = !(a < (b / 5)) && ((b / a) < a);

// //mubasshir 
// var a, b, c, res;
// a = 5, b = '5', c = 10;
// var res = (a > c) && (a && c) > (a || c) && (a || b)

// // Atkiya Fairuz
// var x, y, z, res;
// x = 10, y = '5', z = 'ghh';
// res = (x > y) || (y === x) && (!(z > y));

// // farjana urmi
// var a, b, c, res;
// a = 3, b = 5, c = '8';
// res = (a + b < b) && (a - c !== b) || (c > b / a)

// // Abul kalam azad
// var d, e, f, res;
// d = 10, e = '5', f = 20;
// res = (d * f) || !(e !== f) && (d > f)

// //MD. Abdul Goni
// var a = 3;
// var b = -2;
// var res = (a > b || b > a) && (b !== a);

// // Hasan mahmud
// var res, a, b, c;
// a = 10, b = 'z', c = 5;
// (a + b) == (c + a) && (a > c) || (a < c);

// // Golam Rabbani
// var a, b, c, result;
// a = 10, b = false, c = true;
// result = !((a * c) < b) && (c < b) || (a > b);


// ternary operator 

// var age = 28;
// var message;

//  age<18 ? message = 'You are a child' : message = 'You are an adult';

//  console.log(message);

// var a, b, c, res;
// a = 3, b = 5, c = '8';
// // res = (a + b < b) && (a - c !== b) || (c > b / a)

// console.log(a || b || c );

// //mubasshir 
// var a, b, c, res;
// a = 5, b = '5', c = 10;
// var res = (a > c) && (a && c) > (a || c) && (a || b) 
// //  true && 10 > 5 && 5
// // true && true && 5

// console.log(res);

// 01001010
var d, e, f, res;
d = 10, e = '5', f = 20;
res = (d * f) || !(e !== f) && (d > f);

console.log(res);