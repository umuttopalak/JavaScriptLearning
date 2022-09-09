//While Döngüleri

let i = 0;

while (i < 10) {
  console.log(i);
  i++;
}
console.log("****************************");

//Do While Döngüleri

let x = 0;
do {
  console.log(x);
  x++;
} while (x < 10);

console.log("********************************");

const langs = ["Python", "C", "Java", "C#"];

let index = 0;

while (index < langs.length) {
  console.log(langs[index]);
  index++;
}
console.log("***********************************");
for (index = 0; index < langs.length; index++) {
  console.log(langs[index]);
}
console.log("***********************************");

langs.forEach((element) => {
  console.log(element);
});

console.log("************************************");

langs.map((element) => {
  console.log(element);
});
console.log("************************************");

const users = [
  { name: "Umut", age: 19 },
  { name: "Muhammet", age: 9 },
  { name: "Mustafa", age: 32 },
];

const names = users.map(user => {
    return user.name
})
console.log(names);

const ages = users.map(user => {
    return user.age
})
console.log(ages);

console.log("************************************");

const user = {
    name: "Mustafa",
    age: 19
}

for(let key in user){
    console.log(key , user[key]);
}