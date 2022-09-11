//              Mapler - Key(Anahtar) - Value(Değer)

let myMap = new Map(); //Oluşturma

const key1 = "Umut";
const key2 = { a: 10, b: 20 };
const key3 = () => 2;

//set
myMap.set(key1, "String Değeri");
myMap.set(key2, "Object Literal Değer");
myMap.set(key3, "function değer");

//get
console.log(myMap.get(key1));
console.log(myMap.get(key2));
console.log(myMap.get(key3));

//Map Boyutu
console.log(myMap.size);

const cities = new Map();

cities.set("Ankara", 5);
cities.set("İstanbul", 15);
cities.set("İzmir", 4);

console.log(myMap);

//foreach ile mapte gezinme
cities.forEach(function (value, key) {
  console.log(key, value);
});

//for of ile mapte gezme
for (let [key, value] of cities) {
  console.log(key, value);
}

//Map keys
for (let key of cities.keys()) {
  console.log(key);
}

//Map values
for (let value of cities.values()) {
  console.log(value);
}

const array = [
  ["key1", "value1"],
  ["key2", "value2"],
  ["key3", "value3"],
];

const lastMap = new Map(array)
console.log(lastMap);

const arr = Array.from(cities)
console.log(arr);

