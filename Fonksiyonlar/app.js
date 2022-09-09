//Fonksiyon Tanımlama

function merhaba(name = "Bilgi Yok", age = "Bilgi Yok") {
  console.log(`İsim: ${name} Yaş: ${age}`);

  //if(typeof name == undefined)    name = "Bilgi Yok"
  //if(typeof age == undefined)    age = "Bilgi Yok"
}

merhaba("Umut", 19); //Fonksiyon Çağrısı (Function Call)
merhaba("Umut");
merhaba();

function square(x) {
  return x * x;
}

function cube(x) {
  return x * x * x;
}

let a = cube(square(12));
console.log(a);

function merhaba2() {
  return "Merhaba";
}

console.log(merhaba2());

//Function Expressions

const merhaba3 = function (name) {
  console.log("Merhaba " + name);
};

merhaba3("Umut");

//Immediately Invoked Function Expression   (IIFE) (Tanımlandığı yerde çalışan fonksiyon)
(function (name) {
  console.log("Merhaba" + name + "bu fonksiyon çağırılmadan kullanılıyor");
})("Umut");

const dataBase =  {

    host: "localhost",
    add: function(){
        console.log("Eklendi");
    },
    get: function(){
        console.log("Elde Edildi!");
    },
    update: function(id){
        console.log(`Id: ${id} Güncellendi`);
    },
    delete: function(id){
        console.log(`Id: ${id} Silindi`);
    }
}

console.log(dataBase.host);
dataBase.add();
dataBase.delete(10);