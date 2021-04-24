// var obj = {
//     message: "hello everybody!!",
//     name: "Next topper",
//     printName: function() {
//         console.log(this.name);
//     }
// }
// obj.printName()

// var obj1 = {
//     age: 12
// }

// var saySomething = function(name, n1, n2, n3) {
//     console.log('My name is:',name, 'and age is: ', this.age);
//     console.log(n1, n2, n3);
// }

// var myParams = ["Next Topper", 10, 20, 30]
// saySomething.call(obj1, "Next Topper", 10, 20, 30)
//saySomething.apply(obj1, myParams)

// var newSomething = saySomething.bind(obj1, "Next Topper", 10, 20, 30);
// newSomething();


// const myColors = {
//     message: "I like",
//     colors: ['blue', 'black', 'white'],
//     printColors() {
//         // console.log(this.message);
//         var myThis = this
//         this.colors.map(function(ele, index) {
//             console.log(myThis.message , ele);
//         })
//     }
// }
// myColors.printColors()


const myColors = {
    message: "I like",
    colors: ['blue', 'black', 'white'],
    printColors() {
        this.colors.map((ele, index) => {
            console.log(this.message, ele, "color");
        })
    }
}
myColors.printColors()

// var colors = ['blue', 'black', 'white'];
// colors.map((ele, index)=> {
//     console.log(index, ": ", ele);
// })
