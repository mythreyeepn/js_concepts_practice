const sub = new Promise((resolve, reject) => {
  setTimeout(() => {
    const result = true;
    if (result) resolve("yay");
    else reject("bad");
  }, 2000);
});
sub
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

// Other
function importantAction(day) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Hey there " + day);
    }, 1000);
  });
}
function sayHi(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Say Hi" + name);
    }, 1000);
  });
}
function sayBye(age) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Rejected Bye bye" + age);
    }, 1000);
  });
}

// This is promis hell or pyramid of dom
importantAction("Good Morning")
  .then((res) => {
    console.log(res);
    sayHi("Mythreyee ")
      .then((res) => {
        console.log(res);
        sayBye("20's")
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  })
  .catch((err) => {
    console.log(err);
  });

// YPromise chaining
importantAction("Good Morning")
  .then((res) => {
    console.log(res);
    return sayHi("Mythreyee ");
  })
  .then((res) => {
    console.log(res);
    return sayBye("20's");
  })
  .then((res) => {
    console.log(res);
  });

// Promise Combinatorts 1. Promise .all() It will execute al the promises in parllel and fails if even one fails
Promise.all([
  importantAction("Good Morning"),
  sayHi("Mythreyee "),
  sayBye("20's"),
])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.error("error : promise failed");
  });

  // Promise.race returns the first promise that gets fullfilled or rejected
  Promise.race([
    importantAction("Good Morning"),
    sayHi("Mythreyee "),
    sayBye("20's"),
  ])
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.error("error : promise failed");
    });
// Promise.all settled it executes all the promises even if any promise fails it returns all that are fullfilled
Promise.allSettled([
  importantAction("Good Morning"),
  sayHi("Mythreyee "),
  sayBye("20's"),
])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.error("error : promise failed");
  });

  // Promise.any it only returns the first fullfilled promise and ignores all the rejected
  Promise.any([
    importantAction("Good Morning"),
    sayHi("Mythreyee "),
    sayBye("20's"),
  ])
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.error("error : promise failed");
    });