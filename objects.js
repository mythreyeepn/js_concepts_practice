// o/p
const obj ={
  a:'Abc',
  b:'cdf',
  c:'hj',
  a:'test'
}
console.log(obj)
// //O/p {
//   a: "test",
//   b: "cdf",
//   c: "hj"
// }

//2. create a function that multiplies all numeric value of the object by 2
let nums={
  a:100,
  b:200,
  c:"test"
}

function multply (obj){
  for (x in obj){
    if(typeof obj[x] === 'number'){
      obj[x]=obj[x]*2
    }
  }
}
multply(nums)
console.log(nums)

// 3. whats the o/p
const a={};
const b ={key:"b"}
const c ={key:"c"}

a[b]= 123;
a[c]=320;
console.log(a[b]) // 320 
// as when it is saving in a it saves as a["[object,object]"]=123  , a["[object,object]"]=320

//4 whats the o/p
console.log([..."lyida"])  //["l", "y", "d", "i", "a"]

//5 whats the o/p
const user = {name:'lyida',age:21}
const admin ={admin :true, ...user}
console.log(admin) 
// {
//   admin: true,
//   age: 21,
//   name: "lyida"
// }


// 6 whats the o/p
const settings ={
  name:'My3',
  level:30,
  health :90
}
const data = JSON.stringify(settings,['level','health'])
console.log(data) // "{\"level\":30,\"health\":90}"  when you specify any val in [] after the object only they will be stringified

//7 whats the o/p
const shape = {
  radius: 10,
  diameter (){
    return this.radius *2
  },
  perimeter :()=> 2 * Math.PI * this.radius
}
console.log(shape.diameter())  // 20
console.log(shape.perimeter()) //  NAN This will not consider the value inside object t will always erefer to window.

// 8 what is destructuring