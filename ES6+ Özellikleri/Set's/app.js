//                        Setler - Kümeler

const myset = new Set();

myset.add(100);
myset.add(100);
myset.add("Mustafa");
myset.add(true);
myset.add([1, 2, 3]);
myset.add({ a: 1, b: 2 });

const myset2 = new Set([100, 3.14, "Umut"]);

console.log(myset);
console.log(myset2);

// Size
console.log(myset.size);

// Delete
myset.delete("Mustafa");
console.log(myset);

// Has
console.log(myset.has("Mustafa"));
console.log(myset.has(true));
console.log(myset.has(myset.has[(1, 2, 3)]));

// For Each
myset.forEach((value) => {
  console.log(value);
});

// For of
for (let value of myset) {
  console.log(value);
}

// Setlerden dizi oluşturma
const array = Array.from(myset);
console.log(array);