//Example Curryig
//f(a)(b)

function f(a) {
  return function () {
    return `${a} ${b}`;
  };
}
console.log(f(5)(6));

// 1. sum(2)(6)(1)
function sum(num) {
  return function (num1) {
    return function (num2) {
      return num + num1 + num2;
    };
  };
}

console.log(sum(2)(6)(1));

//2. Infinite currying in Js  sum(1)(2)(3)(4)......(n)()

function sum(a){
  return function (b) {
    if(b) return sum(a+b)
    return a
  }
}
console.log(sum(1)(2)(3)(4)())

// 3.Manipulated Dom
function updateElement(id){
  return function(content){
    document.querySelector("#"+id).textContent = content;
  }
}

const updateText =updateElement("heading");

updateText("My new heading");

// 4. convert f(a,b,c) inti f(a)(b)(c)

