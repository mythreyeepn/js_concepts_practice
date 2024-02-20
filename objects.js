// o/p
const obj = {
  a: "Abc",
  b: "cdf",
  c: "hj",
  a: "test",
};
console.log(obj);
// //O/p {
//   a: "test",
//   b: "cdf",
//   c: "hj"
// }

//2. create a function that multiplies all numeric value of the object by 2
let nums = {
  a: 100,
  b: 200,
  c: "test",
};

function multply(obj) {
  for (x in obj) {
    if (typeof obj[x] === "number") {
      obj[x] = obj[x] * 2;
    }
  }
}
multply(nums);
console.log(nums);

// 3. whats the o/p
const a = {};
const b = { key: "b" };
const c = { key: "c" };

a[b] = 123;
a[c] = 320;
console.log(a[b]); // 320
// as when it is saving in a it saves as a["[object,object]"]=123  , a["[object,object]"]=320

//4 whats the o/p
console.log([..."lyida"]); //["l", "y", "d", "i", "a"]

//5 whats the o/p
const user = { name: "lyida", age: 21 };
const admin = { admin: true, ...user };
console.log(admin);
// {
//   admin: true,
//   age: 21,
//   name: "lyida"
// }

// 6 whats the o/p
const settings = {
  name: "My3",
  level: 30,
  health: 90,
};
const data = JSON.stringify(settings, ["level", "health"]);
console.log(data); // "{\"level\":30,\"health\":90}"  when you specify any val in [] after the object only they will be stringified

//7 whats the o/p
const shape = {
  radius: 10,
  diameter() {
    return this.radius * 2;
  },
  perimeter: () => 2 * Math.PI * this.radius,
};
console.log(shape.diameter()); // 20
console.log(shape.perimeter()); //  NAN This will not consider the value inside object t will always erefer to window.

// 8 what is destructuring
let user1 = {
  name: "My3",
  age: 30,
};
const { name, age } = user; // you can write only what ever you want from the object instead the entire object
// You can as well rename with
const { name: myName } = user;
console.log(myName);

// 9  Destructing nested Object
let user2 = {
  name: "test",
  age: 20,
  school: {
    title: "xyz",
    year: 1990,
  },
};
let user3 = {
  name: "test",
  age: 20,
  school: {
    elementary: {
      title1: "xyz",
      year: 1990,
    },
  },
};
const {
  school: {
    elementary: { title },
  },
} = user2;
const {
  school: {
    elementary: { title1 },
  },
} = user3; // destructured nested obj

// 10 whats the o/p
function getItems(fruitsList, favouriteFruit, ...args) {
  return [...fruitsList, ...args, favouriteFruit];
}
console.log(getItems(["banana", "apple"], "pear", "pineapple"));

//11. whats the o/p
let a1 = { greeting: "hey" };
let a2;
a2 = a1;
a1.greeting = "hello";
console.log(a2.greeting); //"Hello"

// 12 whats the  o/p

console.log({ 1: "test" } == { 1: "test" }); // false their memory locations are different
console.log({ 1: "test" } === { 1: "test" }); // false their memory locations are different

// 13 whats the o/p
let xyz = { name: "abc" };
const mem = [xyz];
xyz = null;
console.log(mem); // will return the object {name:'abc} this will not effect as the value is assigned to the arry
// if person.name = null; that wil change the array value

//14 whats the o/p
const val = { num: 10 };
const multply = (x = { ...val }) => {
  console.log((x.num *= 20));
};
multply(); //20
multply(); //20
multply(val); //20
multply(val); //40

//15 whats the o/p

function changeAgeval(person) {
  person.age = 25;
  person = {
    name: " John",
    age: 50,
  };
  return person;
}

const person1 = {
  name: "alex",
  age: "30",
};
const person2 = changeAgeval(person1);
console.log(person1); // name alex age 25 age of the object is changed
console.log(person2); // name john age 50 as entire new object is being created it is being returned

//16 Object .clone
let userx = {
  name: "my3",
  age: 30,
};
const newuserx = Object.assign({}, userx);
const newuser2 = JSON.parse(JSON.stringify(userx));
const newuser3 = { ...userx };
console.log(newuserx);
console.log(newuser2);
console.log(newuser3);
