// The pattern like:
// 1
// 22
// 333
// 4444

// for(var i=1 ; i<=4; i++) {
//     var str = ''
//     for(var j=1; j<=i; j++) {
//         str += i
//     }
//     console.log(str);
// }


// var sum = 0;
// for(var i=1; i<=50; i++) {
//     sum+=i; // NaN
// }

// console.log(sum);
// var input = 5;
// while(input--) {
//   console.log("hello");
// }

// var input=5;
// do {
//     console.log("hello");
// }
// while(input--)

// function sum() {
//     var total;
//     total = 10+ 20;
//     console.log("Total sum is:",total);
// }
// console.log('after function');

// sum();


 // "sub", "sum", "mul"

function calculator(num1, num2, operator) {
    var res;
    if(operator === "sum") res = num1+num2;
    else if(operator === "sub") res = num1-num2;
    else if(operator === "mul") res = num1*num2;
    else if(operator === "div") res = num1/num2;
    else res = "Invalid operator";
    // console.log("Rsult: ", res);
    console.log("hello");
    return res;
}

var res = calculator(20, 10, "sum")
console.log(res);