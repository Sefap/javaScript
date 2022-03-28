//Karşılaştrma Operatörleri

// ==
// ===
// !=
// !==
// >
// <
// >=
// <=

// console.log(2==2)//True
// console.log("js" == "Java")//True

// console.log(2 == "2")//bir tarafta string bir tarafta int varsa ikiside string olur yani true döner
// console.log(2 === "2")//Bu hem değerlere bakar hem tiplere yani false döner

// console.log(4>2) // true
// console.log(2>4)//false

// console.log(2!=4)//true

// console.log(2<4)//true
// console.log(4 < 2)// false

// console.log(4 >= 2)//true
// console.log(2>=4)//false
// console.log(2<=2)// true 


//Mantıksal Bağlaçlar

// Not Operatörü
// console.log(!(2 == 2))//false
// console.log(!(2 != 2))//true

//And Operatörü
// console.log((2 == 2) && ("Ahmet" == "Ahmet"))// true

// Or Operatörü

// console.log((4 == 2) || ("Ahmet" == "Ahmet"))


// const error=false;

// if(error == true){
//     console.log("Hata Oluştu");
// }
// else{
//     console.log("Hata oluşmadı")
// }

// const user="ttt";
// if(user === "mmc"){
//     console.log("Kullanıcı Bulundu")
// }

// else{
//     console.log("Kullanıcı bulunmadı...")
// }

// const process="1";
// if(process==="1"){
//     console.log("İşlem 1");
// }
// else if (process==="2"){
//     console.log("İşlem 2");
// }
// else if (process==="3"){
//     console.log("İşlem 3");
// }
// else if (process==="4"){
//     console.log("İşlem 4");
// }
// else{
//     console.log("Geçersiz İşlem");
// }

// const number =100;

// if(number==100){
//     console.log("Sayı 100'e Eşit")
// }
// else{
//     console.log("Sayı 100 e eşit değil")
// }

//Ternary Öperatör

// const number = 100;
// console.log(number === 100 ? "Sayı 100" : "Sayı 100 değil")

const number=100;

if(number===100)
    console.log("Sayı 100");
//--------------Switch Case

// const process="1";
// if(process==="1"){
//     console.log("İşlem 1");
// }
// else if (process==="2"){
//     console.log("İşlem 2");
// }
// else if (process==="3"){
//     console.log("İşlem 3");
// }
// else if (process==="4"){
//     console.log("İşlem 4");
// }
// else{
//     console.log("Geçersiz İşlem");
// }


const process = 2;
switch (process) {
    case 1: console.log("İşlem 1");
        break;
        case 2: console.log("İşlem 2");
        break;
        case 3: console.log("İşlem 3");
        break;
    default:console.log("Geçersiz işlem");
    
}
