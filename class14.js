// for(var i =0;i<9;i++)
// {
//     var str =""
//     for(var j=0;j<i;j++)
//     {
//        str+=" "
//     }
//     for(var j =i;j<9;j++)
//     {
//         str+="*"
//     }
//     console.log(str)
// }
// for (var i = 0; i < 9; i++) {
//     var str = ""

//     for (var j = i; j < 9; j++) {
//         str += " "
//     }
//     for (var j = 1; j <= ((2 * i) - 1); j++) {
//         str += "*"
//     }

//     console.log(str)
// }

// for(var i=0 ; i<10; i++) {
//     var str = ''
//     for(var k=0; k<i; k++) {
//         str += '  '  
//     }
//     for(var j=1; j<=10-i; j++) {
//         str += '* '
//     }
//     console.log(str);
// }
// var i = 0;
// while(i<100) {
//     i++
//     if(i%2 === 1) console.log(i);
// }



//==================================================
//=================== Array =======================
//==================================================

// var colors = ['blue', 'black', 'white']
// var l = colors.length;

// for(var i=0; i<l; i++) {
//     console.log(colors[i]);
// }

// var numbers = [4, 8, 12, 1];
// numbers.push(1000, 2000, 3000, 4000)
// console.log(numbers);

var numbers = [4, 8, 12, 1];
var recycle = [];
// var l = numbers.length;

//  for(var i=0; i<l; i++) {
//      var b = numbers.pop();
//      recycle.push(b)
//  }

 while(numbers.length!=0) {
     var b = numbers.pop();
     recycle.push(b)
 }

// console.log('second Removed', b);
console.log('current array',numbers);
console.log('recycle bin',recycle);
