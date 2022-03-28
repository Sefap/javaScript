//Math.PI değerini PI değişkenine aktardık ve ekrana yazdırdık
const PI=Math.PI
console.log(PI) //3.141592....

//****Sayı Yuvarlamaları***

//***if .5 ten büyükse yukarı küçükse aşağıya yuvarlamak
console.log(Math.round(PI))  //3 e yuvarlanır çünkün virgülden sonraki sayı 5 ten küçük
console.log(Math.round(9.81)) //10 a yuvarlanır

//***Virgülden sonrası fark etmeden tabana tavana yuvarlama***
console.log(Math.floor(PI)) //3 e yuvarlanır çünkü floor tabana yuvarlama için kullanılır
console.log(Math.ceil(PI)) //4 e yuvarlanır çünkü Ceil tavan değere yuvarlar

//**Max-Min bulma***
console.log(Math.min(-9,-3,2,6,15)) // -9 döner çünkü en düşük değer o
console.log(Math.max(-9,-3,2,6,15)) // 15 döner çünkü en büyük değer o

//***Random Sayı üretme***
 const randNum=Math.random() //0 ile 0.9999999 arasında random sayı üredir
 console.log(randNum) // üretilen sayıyı console yazar
//**0-10 arasında sayı üretmek istersek
const num=Math.floor(Math.random()*11) // 0 ila 10 arasında random bir sayı üretir
console.log(num) // sayıyı console yazar

//***Mutlak değer***
Console.log(Math.abs(-10)) //10 değeri döner çünkü Math.abs komutu ile mutlak değer işlemi yaptık

//**Karekök alma***
console.log(Math.sqrt(100)) // 10 değeri döner çünkü 100 sayısının karekökü 10 dur
console.log(Math.sqrt(4)) //2

//**Üs alma**
console.log(Math.pow(3,2)) //9 değeri döner 3ün 2. kuvvetini alır
                     
//**Trigonometry
Math.sin(0)
Math.sin(60)
Math.cos(0)
Math.cos(60)


