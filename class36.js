//call stack

// function multiply (num1, num2) {
//     return num1 * num2;
// }


// function sum (x, y) {
//     return multiply(x, y) + 20;
// }

// let result = sum(5, 10);

// console.log(result);


// JavaScript Event loop

//  function  download() {
//      let limit = 10000000000;
//      while(limit > 0) {
//          limit--;
//      }
//      console.log('downloaded')
//  }

//  console.log("start download............");
//  download();
//  console.log("Download complete............");
// function hello(word) {
//     console.log(word);
// }
// console.log('start ...................');
// setTimeout(()=> {
//     hello('hello')
// }, 1000);
// console.log('Download complete............');



// let purchaseProduct = [
//     { title: 'aaa', qty: 500, p_rate: '250', sales_rate: '500', return_qty: '' },
//     { title: 'ccc', qty: 470, p_rate: '350', sales_rate: '530', return_qty: '' },
//     { title: 'ddd', qty: 200, p_rate: '400', sales_rate: '750', return_qty: '' },
//     { title: 'bbb', qty: 550, p_rate: '400', sales_rate: '550', return_qty: '' }
// ]

// let purchaseProductReturn = [
// { title: 'aaa', return_qty: '10' },
// { title: 'bbb', return_qty: '0' }
// ]

// purchaseProductReturn.map(ele=> {
//     purchaseProduct.map(ele1=> {
//         if(ele.title === ele1.title) {
//             ele1.return_qty = ele.return_qty;
//         }
//     })
// })

//  console.log(a);

var arr = [
    {
      a: '766615896935-5',
      b: ["766615896935-5","766615896935-4","766615896935-3","766615896935-2","766615896935-1"]
    },
    {
      a: '616963230364-3',
      b: ["616963230364-3","616963230364-2","616963230364-1"]
    },
    {
      a: '443943344546-3',
      b: ["443943344546-3","443943344546-2","443943344546-1"]
    }
   ]

   let valueOfA = [], valueOfB = [];
   arr.map(ele => {
     if(ele.a) valueOfA.push(ele.a);
     if(ele.b) valueOfB.push(ele.b);
   });

   console.log(valueOfA);


// 10 9 8 7 6 5 4 3 2 1 3 4 5 6 7 8 9 10

// for(var i in purchaseProductReturn)
// {
//     if(purchaseProduct[i].title === purchaseProductReturn[i].title){
//         purchaseProduct[i].return_qty = purchaseProductReturn[i].return_qty;
//     }
// }
// console.log(purchaseProduct);

// var {add, multiplication} = require('./class37.js');

// add(10,20);
// multiplication(10,10);

// let arr1 = arr.map((item) => {
//   return item.a;
// });
// let arr2 = arr.map((item) => {
//   return item.b;
// });

// console.log(arr1);
// console.log(arr2.flat());