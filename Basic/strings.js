//Stringler tek tırnak çift tırnak veya ters tırnakla tanımlanan tüm değerlerdir.
let space = ' '           // boş string
let firstName = 'Sefa'
let lastName = 'Palabıyık'
let country = 'Türkiye'
let language = 'JavaScript'
let quote = "Herzaman daha iyiye."
let quotWithBackTick = `Herzaman daha iyiye.`



let job='Student'
let age=23

let fullName = firstName + space + lastName; // iki string değeri birleştirme
console.log(fullName);


//farklı veri türlerini birleştirme

let personInfo=fullName+'. I am '+age+'. I live in ' + country;
console.log(personInfo)
