let value;

const numbers = [43,56,33,23,44,35,5]
// const numbers = new Array(1,2,3,4,5,6,7)

const langs = ["Python" , "Java" , "C++" , "Javascript"];

const a = ["Merhana" , 22 , null , undefined , 3.14]

//Uzunluk
value = numbers.length

//İndeksleme
value = numbers[0]
value = numbers[2]
value = numbers[numbers.length - 1 ]

//Herhangi Bir değeri Değiştirme
numbers[2] = 1000
value  = numbers

//index Of
value = numbers.indexOf(1000)

//Arrayin sonuna değer ekleme
numbers.push(1234)
value = numbers

//Arrayin başına değer ekleme
numbers.unshift(12)
value = numbers

//Arrayin sonundaki elemanı atma
numbers.pop()
value = numbers

//Arrayin başındaki elemanı atma
numbers.shift()
value = numbers

//Belli bir indexteki elemanı atma
numbers.splice(0,3) //0 dan 3 e kadar olanları atar
value = numbers

//Arrayi ters çevirme
numbers.reverse()
value = numbers

//Arrayi sıralama 
//SADECE İLK KARAKTERİNE BAKARAK 
numbers.sort()
value = numbers

value = numbers.sort(function(x,y){ //küçükten büyüğe sıralama
    return x - y
})

value = numbers.sort(function(x,y){ //büyükten küçüğe sıralama
    return y - x
})

console.log(value);