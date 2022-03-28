//Fonksiyon Tanımlama
// function merhaba(name="Bilgi yok", age="Bilgi Yok") {//Değeri burda verirsek varsayılan değer olur

//     // if (typeof name === "undefined") name = "Bilgi Yok";
//     // if (typeof age === "undefined") age = "Bilgi yok";

//     console.log(`İsim: ${name} Yaş:${age}`);
// }
// merhaba("Murat", 25);//Fonksiyon Çağrısı (Function Call)
// merhaba("Ali", 30);
// merhaba();
// merhaba("Kadir");


// function square(x){
//     return x*x;//return çalıştıktan sonra returnun altındaki hiçbirşey çalışmaz
//     console.log("Naber");//Hiçbir zaman Çalıştırılmaz
// }
// function cube(x){
//     return x*x*x;
// }
// let a =cube(square(12))
// console.log(a);

// function merhaba(){
//     return "Merhaba";
// }
// console.log(merhaba());

// Function Expression

// const merhaba=function(){
//     console.log("Merhaba" + name);
// }
// merhaba("Murat");


//Immediately Invoked Function Expression(IIFE)
//Tanımlandığı yerde çalışan fonksiyon demek

// (function(name){
//     console.log("Merhaba " + name)
// })("Murat");



const database = {
    host:"localhost",
    add:function(){
        console.log("Eklendi")
    },
    get:function(){
        console.log("Elde edildi")
    },
    update:function(id){
        console.log(`Id : ${id} Güncellendi`)
    },
    delete:function(id){
        console.log(`Id : ${id} Silindi`)
    }
}
console.log(database.host)
database.add();
database.delete(10);