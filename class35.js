// javascript execution context 

let num = 5;

function multiply(a) {
    return a * 20;
}

let total = multiply(num);

console.log(total);

//1. assign 5 to the num variable
//2. declare a function that rturns num * 20
//3. call multiply with num=5 and then assing it to the total variable 
//4. log the variable total

// each execution context has two phases 
//1. creation phase
//2. execution phase