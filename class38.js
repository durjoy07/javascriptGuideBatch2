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

    get animalAge() {
        return this.age;
    }

    set animalAge(a) {
        this.age = a;
    }
    showAge() {
        console.log(this.age);
    }

    details() {
        const {name} = this;
        // let name = "cat", age=4;
        console.log("Animal Name: ", name);
    }

    eat(food) {
        console.log(this.name, "eats", food);
    }
}

let animal1 = new Animal('Dog', 10);
animal1.animalAge = 30;
console.log(animal1.animalAge);

// class Tommus extends Animal {
//     constructor(name, color) {
//         super(name);
//         this.color = color;
//     }
//     run(speed) {
//         console.log(this.name, 'runs with', speed, 'km per hour', this.color );
//     }
// }

// let tommus = new Tommus('Tom', 'Black');
// tommus.run(10);