//Scope Kavramı

var value1 = 10;
let value2 = 20;
const value3 = 30;

function func() {
  var value1 = 40;
  let value2 = 50;
  const value3 = 360;
}

console.log(value1, value2, value3, "Global");

if (true) {
  var value1 = 10;
  let value2 = 20;
  const value3 = 30;
}

console.log(a);
console.log(b);
console.log(c);
