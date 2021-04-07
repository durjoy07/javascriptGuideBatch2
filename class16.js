// function sum() {
//     var l = arguments.length;
//     var total = 0;
//     for(var i=0; i<l; i++) {
//         total += arguments[i]
//     }
//     return total;
// }
// var res = sum(45, 10, 20);
// console.log(res);

// function evenOrOdd(num) {
//   return num%2 === 0
// }

// if (evenOrOdd(9)) {
//     console.log("even");
// }
// else {
//     console.log("odd");
// }


// storing function in variables

// function add(a,b) {
//     return a+b;
// }

// var myFunc = add;
// var res = myFunc(10, 20);
// console.log(res);

// function converter(inchi) {
//     return inchi * 2.54;
// }

// var anotherConverter = converter;
// var res = anotherConverter(10);
// console.log(res);

// var a = String.fromCharCode(68);
// console.log(a);

// return a function from a function;

function add (a, b) {
    return function() {
        console.log(a+b);
    }
}

// add(10, 20)()
// var res = add(10, 20);
// res()
