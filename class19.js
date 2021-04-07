// arrow function 

// function hello() {
//     console.log('hello');
// }

// hello1 = () => {
//     return "hello 1";
// }

// hello2 = () => "hello 2";
// var res = hello2();
// console.log(res);
// var res = hello1();
// console.log(res);


// hello2 = num1 => {
//     var sum = num1 + 10;
//     return sum + sum;
// }
// var res = hello2(10);
// console.log(res);

//  isEven = num => num%2 === 0;
//  if(isEven(7)) console.log('hello');

//  isEven(7) && console.log('hi');

// isEven(4) // true  => 16
// isEven(5) // false => 5
// var num = 8;
// if(isEven(num)) console.log(num*num);
// else console.log(num);

// isEven(num) ? console.log(num*num) 
// : console.log(num);

// short circuit operator 

// isEven(7) && console.log('welocme');

//=========================================
// callback function ======================

// var numbers = [5, 6, 17, 1, 3, 2, 10, 15, 14, 18];

// // isEven = num => num%2 === 0;

// var res = numbers.filter(num => num % 2 === 0);
// console.log(res);



//===================================
//================OBJECT=============

var person = {
    name: 'next',
    weight: '72kg',
    color: 'white',
    speak() {
        console.log(this.name);
        // var name = 'hello'
        // console.log('my name is:', this.name);
    },
    draw() {
        return 'I can draw';
    }
}

person.speak();