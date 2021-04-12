// function hello() {
//     console.log('hello');
//     hello();
//     // return;
// }

//  hello()

// function printMe(num) {
//     if(num===0) return;

//   console.log('hello');
//   printMe(num-1)
// }
// printMe(10);

// function print(num) {
//     num && print(--num);
//     console.log("hello");
// }
// print(5);
// 5 - hello
// 4 - hello
// 3 - hello
// 2 - hello
// 1 - hello
// 0 - hello

// 246 = 12 // 2+4+6

// 5 = 5*4*3*2*1 = 120 
// 4 = 4*3*2*1 = 24

// factorial
// let fact = 1;
// function factorial(n) {
//     if (n === 0) {
//         return;
//     }
//     fact *= n;
//     factorial(n - 1);
//     // console.log('hello');
//     return fact;
// }

// console.log(factorial(4))

// function factorial(num) {
//     if(num==0) return 1;
//     return num * factorial(num-1);
// }

// var res = factorial(4);
// console.log(res);

// 4567 

function sumOfDigits(num) {
    if(num === 0) return 0;

    return num%10 + sumOfDigits(parseInt(num/10));
};

var res = sumOfDigits(1002);
console.log(res);