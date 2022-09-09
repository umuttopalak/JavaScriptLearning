let value;

const now = new Date(); //şu anki zamanı almamızı sağlar..

const date1 = new Date("4-7-2003 06:48:00");
const date2 = new Date("April 7 2003");
const date3 = new Date("4/7/2003");

value = date1;

value = date1.getMonth(); //0 dan başlıyor
value = date1.getDate(); //1 den başlıyor
value = date1.getDay(); //pazardan başlar (0) başlar

value = date1.getHours(); //saati yazdırır
value = date1.getMinutes(); //dakikayı yazdırır
value = date1.getSeconds(); //saniyeyi yazdırır
value = date1.getMilliseconds(); //milisaniyyi yazdırır

date1.setMonth(7);
date1.setDate(15);
date1.setFullYear(1584);
date1.setHours(0);
date1.setMinutes(45);
date1.setSeconds(30);

value = date1;
console.log(value);
