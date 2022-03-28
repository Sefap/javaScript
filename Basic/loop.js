//  While Döngüleri

// let i = 0;
// while (i < 10) {
//     console.log(i);
//     i++; //i++//i=i+1
// }

// let i = 10;

// while (i > 0) {
//     console.log(i);

// //    i--;
//     i-=2
// }

//Break Ve Continue

// let i = 0;

// while (i < 10) {
//     console.log(i);
//     if (i == 5) {
//         break;//break direk döngüyü bitirir ve döngüden çıkar
//     }
//     i++;
// }

// let i = 0;
// while (i < 10) {    //Sonsuz Döngü
//     if (i == 3 || i == 5) {
//         i++;
//         continue;// Continue'den sonra direk koşulunun başına gider alttakiler çalışmaz
//     }
//     console.log(i);
//     i++;
// }

//Do While

// let i = 0;

// do {//ilk başta koşul kontrol edilmez yani program en az 1 kere çalışır sonra while göre devam eder
//     console.log(i);
//     i++;


// } while (i < 10);



// For Döngüleri

const langs = ["Python", "Javascript", "Java"];
//while ile yapılışı
// let index=0;
// while(index<langs.length){
//     console.log(langs[index])
//     index++;
// }
//For ile yapılışı
// for (let index = 0; index < langs.length; index++){
//     console.log(langs[index]);
// }
//ForEach Tüm elemanları tek tek dolaşıyor lang
// langs.forEach(function(lang,index){
//     console.log(lang,index);
// });
// const users =[
//     {name:"Mustafa",age:25},
//     {name:"Zeynep",age:12},
//     {name:"Ali",age:12}
// ];
// //map fonksiyonu--- java script 
// const names=users.map(function(user){//names diye yeni dizi oluşturuyoruz
//     //map fonksiyonu ile dizi parametrelerine belirli işlemler yapıp onu yeni diziye aktarıyoruz
//     //eski dizideki elemanlar değişmeden duruyor
//     return user.name;
// });
// const ages=users.map(function(user){
//     return user.age;
// })
// console.log(names.toString())//toString() dizi elemanlarının arasına virgül koyarak döner
// console.log(ages)

//for in döngüsü
const user = {
    name: "Mehmet",
    age: 25
}
for (let key in user) {
    console.log(key, user[key]);
}
