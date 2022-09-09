//var
//var istediğimiz kadar tanımlanabilir
var a;
console.log(a);

var name = "Umut";
console.log(name);

var name = "Ensar";
console.log(name);

//let
//Let sadece bir kere tanımlanabilir

let name2 = "Umut";
console.log(name2);

name2 = 123;
console.log(name2);

//Const
//DEĞİŞTİRİLEMEZ
//Dizilerde tekrar değer ataması yapılamaz fakat değer eklenebilir veya azaltılabilir!

const name3 = "umut"
console.log(name3);

const abc = [1,2,3,4,5,6]
//abc = [12,56,454,15,151,55] HATA VERİR

abc.push(6)
console.log(abc);

abc.pop()
console.log(abc);
