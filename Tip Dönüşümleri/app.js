let value;

//Veritiplerini String'E Çevirme

value = 123;

console.log(value);
console.log(typeof value);

value = String(123);

console.log(value);
console.log(typeof value);

//Veritiplerini Sayıya Çevirme

value = Number(null)
console.log(value);
console.log(typeof value);

value = Number(undefined)
console.log(value);
console.log(typeof value);

value = Number("123")
console.log(value);
console.log(typeof value);

value = Number("Hello World")
console.log(value);
console.log(typeof value);

value = Number([1,2,3,4,5])
console.log(value);
console.log(typeof value);

const a = "hello" + 34

console.log(a);
console.log(typeof a);