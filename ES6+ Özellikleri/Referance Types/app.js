//                        Referance Type's

let array1 = [1, 2, 3, 4];
let array2 = [1, 2, 3, 4];

if (array1 === array2) {
  console.log("Eşit");
}

const person1 = {
  name: "Umut",
  age: 15,
};
const person2 = {
  name: "Umut",
  age: 15,
};

if (person1 === person2) {
  console.log("Eşit");
}

const cities = new Map();

cities.set("Ankara", 5);
cities.set("İstanbul", 15);
cities.set([1, 2, 3], "Array");

console.log(cities.get("Ankara"));
console.log(cities.get([1,2,3]));
