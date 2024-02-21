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
      resolve("Rejected Bye bye" + age);
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

// Async-Await

const results = async () => {
  try {
    const msg1 = await importantAction("Good Morning");
    const msg2 = await sayHi("Mythreyee ");
    const msg3 = await sayBye("20's");

    console.log(msg1, msg2, msg3);
  } catch (error) {
    console.error("New Error");
  }
};
results();
console.log(results);

//1. whats the o/p
console.log("start");

const promise1 = new Promise((resolve, reject) => {
  console.log(1);
  resolve(2);
});

promise1.then((res) => {
  console.log(res);
});
console.log("end"); // o/p order start,1,end,2

//2. whats the o/p
console.log("start");

const promise2 = new Promise((resolve, reject) => {
  console.log(1);
  resolve(2);
  console.log(3);
});

promise2.then((res) => {
  console.log(res);
});
console.log("end");
// o/p order start,1,3,end,2

// Promise chaining
const firstPromise = new Promise((resolve, reject) => {
  resolve("First");
});
const secondPromise = new Promise((resolve, reject) => {
  resolve(firstPromise);
});

secondPromise
  .then((res) => {
    return res;
  })
  .then((res) => console.log(res));

//Promise recursion

function promRecurse(funcPromises) {
  if (funcPromises.length === 0) return;

  const currPromise = funcPromises.shift();
  currPromise.then((res) => console.log(res)).catch((err) => console.log(err));
  promRecurse(funcPromises);
}

promRecurse([
  importantAction("Good Morning"),
  sayHi("Mythreyee "),
  sayBye("20's"),
]);
