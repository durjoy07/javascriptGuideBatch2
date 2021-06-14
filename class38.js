// function Student(name, roll) {
//     this.name = name;
//     this.roll = roll;
// }

// let stu1 = new Student('Next', 12)

// console.log(stu1);

// var obj = {
//     name: "dhfjdl",
//     protoType: {},
//     hello: function() {}
// }

// obj.age = 12;
// console.log(obj);

// obj.protoType.color = "red";
// console.log(obj);
// obj.__proto__.color = "Red";
// console.log(obj.color);

// var arr = [1, 2, 3];
// arr.__proto__.sum = function() {
//     return this[0] + this[this.length-1];
// }


// console.log(arr.sum());

class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    static details(animal) {
        const {name, age} = animal;
        // let name = "cat", age=4;
        console.log("Animal Name: ", name, "Age: ", age);
    }
}

let cat = new Animal('Cat', 5);

Animal.details(cat);