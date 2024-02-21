let user = {
  name: "my3",
  age: 30,
  childObj: {
    othername: "chin",
    getDetails() {
      console.log(this.name, this.othername); // name is undefine and othername is chin as normal function
      //always points to the immediate parent obj only
    },
  },
  getArrow: () => {
    console.log(this.name);
  },
  getChecked() {
    const nested = () => {
      console.log(this.name); // this will give the name as it is pointing to the immedaite parent object
      nested();
    };
  },
};
user.childObj.getDetails();
user.getArrow();

class user1 {
  constructor(n) {
    this.name = n;
  }
  getName() {
    console.log(this.name);
  }
}

const user2 = new user1("My3");
user2.getName();

//1. whats the o/p
const user3 = {
  firstName: "Chinn",
  getName() {
    const firstName = "chinni!";
    return this.firstName;
  },
};

console.log(user3.getName()); // chinn this always refers to the parent object

//2. whats the o/p of accessing the ref
function makeUser() {
  return {
    name: "John",
    ref: this,
  };
}

let user4 = makeUser();
console.log(user4.ref.name); // this will refer to the global window object
// to acheieve the above one we do this.
function makeUser() {
  return {
    name: "John",
    ref() {
      return this;
    },
  };
}
let user44 = makeUser();
console.log(user44.ref().name);

// 3 set timeout and this
const user5 = {
  name: "Chinni",
  logMessage() {
    console.log(this.name);
  },
};

setTimeout(user5.logMessage, 1000); // This will not log anything as the timeout here expects log messages a s a
// call back and this will point out to window object to fix that

setTimeout(function () {
  user5.logMessage();
}, 1000);

//4.What is the o/p
const user6 = {
  name: "texthere",
  greet() {
    return `hello ${this.name}`;
  },
  hey: () => {
    return `bye ${this.name}`;
  },
};
console.log(user6.greet()); // textthere will be prnted
console.log(user6.hey()); // window object

//5. create an object calculator
let calculator = {
  read() {
    (this.a = +prompt("a = ", 0)), // Added a plus befor to consider it as an int
      (this.b = +prompt("b = ", 0));
  },
  sum() {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  },
};
calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());

//6. what will be the output
var len = 6;
function callback() {
  console.log(this.len); //6
}
const obj1 = {
  len: 5,
  method(fn) {
    console.log(this.len); //5
    fn();
  },
};
obj1.method(callback);
// Now if teh same methods arguments are passed like

var length = 6;
function callback() {
  console.log(this.length); // The output here is 4
}
const obj11 = {
  len: 5,
  method() {
    arguments[0](); // when the arguments are passed here the this in the function access the
    // length from the arguments object which has length which is inbuilt function
  },
};
obj1.method(callback, 2, 3, 4);

// 7 Implement this
const result = calc.add(10).mul(5).sub(3).add(10);
console.log(result.val);

let calc = {
  val: 0,
  add(num) {
    this.val += num;
    return this;
  },
  mul(num) {
    this.val *= num;
    return this;
  },
  sub(num) {
    this.val -= num;
    return this;
  },
};
const result1 = calc.add(10).mul(5).sub(3).add(10);
console.log(result1.val);
