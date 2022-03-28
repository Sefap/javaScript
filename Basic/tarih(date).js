let value;


const now = new Date() //Şuan ki zamanı almamızı sağlar..

const date1=new Date("5-13-1999 11:11:11")

const date2=new Date("May 13 1999")

const date3=new Date("5/13/1999")

value=date1
//Ocak ayı 0 dan başlar getMonth() metodu kaçıncı ay olduunu alır
value=date1.getMonth();

value=date1.getDate();

//Günün haftanın kaçıncı günü olduğunu belirtir pazar 0 dan başlar
value=date1.getDay();


value=date1.getHours();
value=date1.getMinutes();
value=date1.getSeconds();
value=date1.getMilliseconds();

date1.setMonth(7) //Ağustos döner çünkü ocak 0 dan başlar
date1.setDate(15)
date1.setFullYear(1994)
date1.setHours(0);
date1.setMinutes(15);
date1.setSeconds(30);
value=date1;

console.log(value)
