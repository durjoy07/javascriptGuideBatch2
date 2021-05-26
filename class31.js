// var isLoggedin = true;
// var num = 7;
// var myPromise = new Promise(function(resolve, reject) {
//     if(num==5) {
//         resolve('Welcome to you!')
//     }
//     else {
//         reject('You are not authenticate user')
//     }
// });

// myPromise.then((result) => console.log(result))
// .catch(error=> console.log(error));

// state -> pending
// result -> undefined

// resolve : state-> 'fulfilled', result -> value
// reject: state-> 'rejected', result-> error
// console.log('hello promise');
// var promise1 = new Promise(function(resolve, reject) {
//     setTimeout(() => {
//       resolve("resolved from promise 1");
//     }, 2000);
// });

// var promise2 = new Promise(function(resolve, reject) {
//     resolve("resolved from promise 2");
// });
// promise1.then((result) => console.log(result));
// promise2.then((result) => console.log(result));


// console.log('Bye promise');



// Promise.all([promise1, promise2]).then(result=>console.log(result));

function promise1() {
    return new Promise(function(resolve, reject) {
       setTimeout(() => {
      resolve("resolved from promise 1");
    }, 2000);
    })
}

function promise2() {
    return new Promise(function(resolve, reject) {
      resolve("resolved from promise 2");
    })
}

promise1()
  .then((res) => console.log(res))
  .then(promise2)
  .then(res=> console.log(res))
  .catch()
