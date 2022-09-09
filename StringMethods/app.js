let value;

const firstName = "Louis";
const lastName = "Armstrong";

const langs = "Java, Python C++";

value = firstName + lastName

value = "Umut";
value = value + " Topalak"

value = firstName.length;


value = firstName.concat(" " , lastName , " " , "Caz");

value = firstName.toLowerCase();
value = firstName.toUpperCase();

value = firstName[0];
value = firstName[2];
value = firstName[4];
value = firstName[firstName.length - 1]

//Index Of 
//İçine girilen karakterin kaçındı indexte olduğunu döner

value = firstName.indexOf("L")
value = firstName.indexOf("l") // değer içinde yoksa -1 döner

//Char At
//verilen indexteki karakteri döner
value = firstName.charAt(firstName.length-1)

//Split
//Ayrılmış elemanları tek tek alma
//içine nasıl ayrıldıklarını belirtme

value = langs.split(",")

//Replace
//bulunan indexteki değeri değiştirme

value = langs.replace("Python" , "CSS")

//Includes
//İçerip içermediğini kontrol eder varsa true yoksa false

value = langs.includes("asfsdg") //false döner
value = langs.includes("Python") //true döner




console.log(value);