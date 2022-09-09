let value;

const programmer = {
    name : "Umut Topalak",
    age: 19,
    email: "umuttopalak@hotmail.com",
    langs: ["python" , "javascript" , "C"],
    adress: {
        city: "Trabzon",
        street: "Aydınlıkevler"
    },

    work: function(){
        console.log("Programcı Çalışıyor!")
    },

}

value = programmer

value = programmer.email;
value = programmer["email"]

value = programmer.langs;
value = programmer["langs"]

value = programmer.adress.city
value = programmer["adress"]

programmer.work()

const programmers = [
    {name : "Mustafa Murat Çoşkun", age: 25},
    {name : "Umut Topalak", age: 20}
]

value = programmers[1];


console.log(value);