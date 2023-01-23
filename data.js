// let ar = [2,4,6,7,8,9,10,3]
// function isPrime(val) {
// // arr.map(val=>{
//     for (let i = 2; i < val; i++) {

//       if (val % i === 0) return false;
//     }
//     return val > 1
  
// // })
// }
// console.log(isPrime(4))

var person = {
    name : "John"
  };
  
  function printName()
  {
    return this.name
  }
  
  // printName()
  var dta = printName.call(person);                         //returns a new function, but nothing is using it so it's useless
  // printName();  
  console.log(dta())