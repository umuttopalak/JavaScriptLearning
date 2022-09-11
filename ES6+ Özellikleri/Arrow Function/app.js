const merhaba = function () {
  console.log("Merhaba");
};
merhaba();

//                        Arrow Function

const merhaba2 = () => {
  console.log("Merhaba2");
};

merhaba2();

const merhaba3 = (firstName) => {
  //Tek parametre alınıyorsa paranteze gerek yok
  console.log("Merhaba3", firstName);
};

merhaba3("Umut");

const cube = function (x) {
  return x * x * x;
};

console.log(cube(4));

