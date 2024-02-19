// 1.What will be the o/p

let count = 0;
(function printCount() {
  if (count === 0) {
    let count = 1;
    console.log(count); // 1 .  (Block scoped)
  }
  console.log(count); // 0 . (global scope)
})();

//2.Write a function that would allow the below
var addSix = createBase(6);
console.log(addSix(10));
console.log(addSix(21));

function createBase(num) {
  return function (num1) {
    return num + num1;
  };
}

// 3.Time Optimization. Optimize the below function to improve time complexity
function find(index) {
  let a = [];
  for (let i = 0; i < 10000000; i++) {
    a[i] = i * i;
  }
  console.log(a[index]);
}
console.time("6");
find(6);
console.timeEnd("6"); // 6:326.4899

console.time("12");
find(12);
console.timeEnd("12"); // 12 : 461.804192

// Here the catch is t take this a lot of time every time it computes the entire calculation.
//if a closure is used the closure function calculates it for the first time and uses the value from the next time
function find1() {
  let a = [];
  for (let i = 0; i < 10000000; i++) {
    a[i] = i * i;
  }
  return function (index) {
    console.log(a[index]);
  };
}
const closure = find1();
console.time("6");
closure(6);
//find1()(6);
console.timeEnd("6"); // 6:326.4899

console.time("12");
closure(12);
//find1()(12);
console.timeEnd("12");

console.time("50");
closure(50);
//find1()(50);
console.timeEnd("50");

// 4. what is the o/p
function a() {
  for (var i = 0; i < 3; i++) {
    setTimeout(function log() {
      console.log(i);
    }, 1000);
  }
}
a();
// To solve this there are 2 approaches 1. through closure, 2. through iife
//1. through closure
function a() {
  for (var i = 0; i < 3; i++) {
    function inner(i) {
      setTimeout(function log() {
        console.log(i);
      }, 1000);
    }
    inner(i);
  }
}
a();

//2. through Immediately invoked function

function a() {
  for (var i = 0; i < 3; i++) {
    (function (i) {
      setTimeout(function log() {
        console.log(i);
      }, 1000);
    })(i);
  }
}
a();

//5. Use a closure to create a private counter

function Counter() {
  var _counter = 0;

  function add(val) {
    _counter += val;
  }
  function retrieve() {
    return "counter is " + _counter;
  }
  return {
    add,
    retrieve,
  };
}

const check = Counter();
check.add(6);
check.add(20);
console.log(check.retrieve());
