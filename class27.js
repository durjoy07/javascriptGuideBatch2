// filter 
//var arr = [2, 4, 5, 7, 8, 10, 12, 'hello', 'hi'];

// var res = arr.filter(ele=> typeof ele === 'string');
// var res = arr.filter(ele=> typeof ele === 'number');
//var res = arr.filter(ele=> ele%2 === 0);
//console.log(res);

var products = [
    {
        name: 'banana',
        price: 100
    },
    {
        name: 'orange',
        price: 120
    },
    {
        name: 'apple',
        price: 120
    },
    {
        name: 'lichi',
        price: 100
    }
]

// var res = products.filter(ele => ele.price === 100);
// console.log(res);

// findIndex
// var arr = [2, 4, 5, 7, 8, 10, 7, 12, 'hello', 'hi'];
// var res = arr.findIndex(ele => ele===7);  // 3
// var res = arr.findIndex(ele => ele===13); // -1
// console.log(res);

// forEach 
// var arr = [2, 4, 5, 7, 8, 10, 7, 12, 'hello', 'hi'];

// arr.forEach((ele, index) => {
//     var a = ele + 2;
//     // if(index == 6) console.log(index,': ', ele);
//     console.log(a);
// });

// includes

// var arr = [2, 4, 5, 7, 8, 10, 7, 12, 'hello', 'hi'];

// var res = arr.includes(4, 3); // second parameter index number
// var res = arr.includes(7); // first parameter search value
// console.log(res);

// indexOf
// var arr = [2, 4, 5, 7, 8, 10, 7, 12, 'hello', 'hi'];
// var  res = arr.indexOf(4, 2);
// var  res = arr.indexOf(5);
// console.log(res);

//isArray
// var arr = [1, 2];
// var res = Array.isArray({name: 'h'});
// var res = Array.isArray(arr);
// console.log(res);

// map 
// var arr = [2, 4, 5, 7, 8, 10, 7, 12, 'hello', 'hi'];
//  var res = arr.map((ele, ind)=> {
//      return ele+2;
//      //console.log(ind, ' : ', ele);
//  })
//  console.log(res);

// reduce 
//  var arr = [2, 4, 5, 7, 8, 10, 7, 12];

// // var add = (sum, currentValue) => sum + currentValue;
// var res = arr.reduce((sum, currentValue) => sum + currentValue);
// console.log(res);

// var res = products.reduce((sum, currentValue) => sum + currentValue.price, 0);
// console.log(res);

// var res = products.filter(ele => ele.price === 100)
// .reduce((sum, currentValue) => sum + currentValue.price, 0);
// console.log(res);