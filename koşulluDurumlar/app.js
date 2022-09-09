//Karşılaştırma Operatörleri

// ==
// ===
// !=
// !==
// <
// >
// >=
// <=

console.log(2 == 2);
console.log("js" == "java");

console.log(2 == "2");
console.log(2 === "2");

console.log(2 != 2);

console.log(2 < 4);
console.log(4 < 2);

console.log(2 >= 4);

console.log(4 <= 2);

//Mantıksal Bağlaçlar

//not Operatörü
console.log(!(2 == 2));

//and Operatörü
console.log(2 == 2 && "ahmet" == "ahmet");

//Or operatörü
console.log(4 == 2 || "ahmet" == "ahmet");

const error = false;

if (error) {
  console.log("Hata Oluştu");
} else {
  console.log("Hata Oluşmadı");
}

const user = "ut";

if (user == "ut") {
  console.log("Kullanıcı bulundu");
} else {
  console.log("Kullanıcı bulunamadı");
}

const process = 1;

if (process == 1) {
  console.log("İşlem 1");
} else if (process == 2) {
  console.log("İşlem 2");
} else if (process == 3) {
  console.log("İşlem 3");
} else {
  console.log("Geçersiz İşlem");
}

const number = 100;

if (number == 100) {
  console.log("Sayı 100'e eşit");
} else {
  console.log("Sayı 100'e eşit değil!");
}

//Ternary Operator
console.log(number === 100 ? "Sayı : 100" : "Sayı 100 değil!");

if (number === 100) console.log("Sayı : 100");
else console.log("Sayı 100 değil!");


//Switch Case

switch (process) {
    case 1:
        console.log("İşlem 1");
        break;
    case 2:
        console.log("İşlem 2");
        break;
    case 3:
        console.log("İşlem 3");
        break;
    
    default:
        console.log("Geçersiz İşlem!");
        break;
}
