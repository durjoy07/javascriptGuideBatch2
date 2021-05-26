// async await 

// function hello() {
//     return new Promise(function(resolve, reject){
//         setTimeout(function(){
//             resolve('hello all');
//         }, 3000)
//     })
// }

// async function execute() {
//     // hello().then(result=> console.log(result))
//     const result = await hello();
//     console.log(result);
// }
// execute();
function wakeUp() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      reject("wake up");
    }, 5000);
  });
}

function takeBreakfast() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("take your breakfast");
    }, 2000);
  });
}

async function execute() {
    // wakeUp().then(res=>console.log(res))
    // .then(takeBreakfast)
    // .then((res) => console.log(res));
    try {
           var res1 = await wakeUp();
           console.log(res1);

           var res2 = await takeBreakfast();
           console.log(res2);
    }
    catch(error) {
        console.log("my error is", error);
    }
}

execute();


//  async in arrow function
// const run = async() => {
//     try {
//           var res1 = await wakeUp();
//           console.log(res1);

//           var res2 = await takeBreakfast();
//           console.log(res2);
//     }
//     catch(error) {
//         console.log("Error is: ", error);
//     }
// }