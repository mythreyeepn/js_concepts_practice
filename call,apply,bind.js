// 1. what is call

var obj = {
  name: "My3",
};
function sayHello(age) {
  return "Hello " + this.name + " is " + age;
}
console.log(sayHello(31)); // you don't get the name here as this.name looks for global window and name is in obj
// To address this we can use call
console.log(sayHello.call(obj, 31));

// 2.what is apply
var obj = {
  name: "My3",
};
function sayHello(age, job) {
  return "Hello " + this.name + " is " + age + " is a " + job;
}
console.log(sayHello(31)); //
console.log(sayHello.apply(obj, [31, "s/w"])); // apply you pass args as an array

//3. what is bind
var bindFunc = sayHello.bind(obj);
console.log(bindFunc(31, "s/w"));

//4. what is the o/p
const name1 = {
  name: "My3",
};
function sayHi(age, job) {
  return "Hello " + this.name + " is " + age;
  console.log(sayHello.call(name1, 31)); // prints the o/p
  console.log((sayHello.bind = (name1, 20))); // it returns a  function
}

//5. whats the o/p
const age = 10;
var person1 = {
  name: "my3",
  age: 20,
  getAge: function () {
    return this.age;
  },
};

var person2 = { age: 24 };
console.log(person1.getAge.call(person2)); // as with call you are providing the object to whose reference it should take

//6. whats the o/p
var status = "smile";
setTimeout(() => {
  const status = "love";
  const data = {
    status: "avacado",
    getStatus() {
      return this.status;
    },
  };
  console.log(data.getStatus()); //  avacado as it refers to the item in its object
  console.log(data.getStatus.call(this)); // Smile as it refers to the global scope window
}, 0);

//7.  call print animals such that it prints all animals in object
const animals = [
  { species: "Lion", name: "king" },
  { species: "whale", name: "queen" },
];

function printAnimals(i) {
  this.print = function () {
    console.log("#" + i + " " + this.species + " : " + this.name);
  };
  this.print();
}

for (var i = 0; i < animals.length; i++) {
  printAnimals.call(animals[i], i);
}

//8. Append an array to another array without using concat
const array = ["a", "b"];
const elements = [0, 1, 2];

array.push.apply(array, elements);
console.log(array);

//9 find the min/max number in an array using apply to enhance built in function

const numbers = [5, 6, 2, 3, 7, 9];

console.log(Math.max.apply(null, numbers)); //9,  when there is no object context you can pass null
console.log(Math.min.apply(null, numbers));

// 10. what is the o/p
function f() {
  console.log(this); // this will give window object there is no context being passed with the bind function
}

let user = {
  g: f.bind(null),
};

user.g();

//11. What is the o/p bind chaining

function f() {
  console.log(this.name); // John
}

f = f.bind({ name: "john" }).bind({ name: "Ann" }); // Bind chaining doesn't exsist once a function is bound it will remain the same
f();

//12 fix the checkPassword function call at the last to make this code work
function checkPassword(success, failed) {
  let password = prompt("password?", "");
  if (password == " text") success();
  else failed();
}

let user3 = {
  name: "My3",

  loginSuccessful() {
    console.log(`${this.name} logged in`);
  },
  loginFailed() {
    console.log(`${this.name} failed in`);
  },
};

checkPassword(user3.loginSuccessful.bind(user3), user3.loginFailed.bind(user3));

//13. Partial application for login Function

function checkPassword(ok, fail) {
  let password = prompt("Password?", "");
  if (password == "text") ok();
  else fail();
}

let user5 = {
  name: "my3",

  login(result) {
    console.log(this.name + (result ? "login successful" : "login failed"));
  },
};
checkPassword(user5.login.bind(user5, true), user5.login.bind(user5, false));

//14 Explicit Binding with arrowfunction
const ag1 = 10;
var person = {
  name: "chinn",
  ag1: 28,
  getAgeArrow: () => {
    console.log(this.ag1);
  },
  getAge: function () {
    console.log(this.ag1);
  },
};

var persn = { age: 24 };
person.getAgeArrow.call(persn); // undefined
person.getAge.call(persn); // 24
