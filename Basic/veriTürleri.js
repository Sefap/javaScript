Veri Türleri Primitive(ilkel) ve Non-Primitive(İlkel olmayan/reference) olarak ikiye ayrılır.


Primitive(ilkel) Veri Tipleri:İlkel veri tipleri belleğin(ram) stack bölgesinde tutulmaktadır ve sadece verdiğimiz değer üzerinden işlem yapılmaktadır.
  Numbers(Integers/float)
  Strings=Tek tırnak,çift tırnak veya ters tırnak içerisine yazılan tüm veriler stringstir
  Boolens(Herhangi bir karşılaştırma True/False değer döndürür.Boolen veri türü doğru veya yanlış bir değerdir.)
  Null(Boş değerler veya değeri olmayan veriler)
  Undefined(Tanımsız/Tanımlanmayan değerler)
  
Non-Primitive(ilkel olmayan/Reference) veri tipleri:Reference veri tiplerinin değerleri belleğin stack bölgesinde tutulmaz, heap bölgesinde tutulur. 
Belleğin stack bölgesinde ise heap'te var olan değerlerin adreslerini tutar. Bundan dolayı bu veri tipleri üzerinden işlem yaparken değerleri değil adreslerin üzerinden işlem yaparız
  Objects
  Functions
  Arrays
  
  
  
Integers=-3,-2,-1,0,1,2,3////Float=-3.9, -2.64, -1.0, 0.0, 1.3, 2.7, 4.2

Strings='Sefa', "Palabıyık", `Terstırnak`

Booleans=  true//eğer ışık açıksa, değer doğrudur yani true  --faose// eğer ışık kapalıysa, değer yanlıştır yani false

Undefined=Değişkene değer atanmazsa tanımsızdır.Ve bir işlev döndürmüyorsa tanımsız döndürür.
let firstName
console.log(firstName)//Tanımsız, Çünkü firstName'ye değer tanımlanmadı

Null=Boş değer anlamına gelir.Tipi object 'tir
let bosdeger=null

*****Veri Tiplerinin Kontrolü*****
typeof komutuyla yapılır
console.log(typeof 'Sefa') // string
console.log(typeof 7) // number
console.log(typeof true) // boolean
console.log(typeof null) // object type
console.log(typeof undefined) // undefined



*****Değişkenler(Variables)*****

let(Farklı zamanda değişen veri türleri için let kullanılır)
let firstName='Sefa'
let country='Türkiye'
let age=100
let isMarried=False
veya
let firstName='Sefa',
     country='Türkiye',
     age=100,
     isMarried=False
 şeklinde de tanımlanabilir
 console yazdırmak için console.log(firstName, country, age, isMarried) şeklinde kullanılır.
 const içinde aynısı geçerli

//Const ile sadece o satırda değer verilebilir sonradan verilemez
const(Veriler hiç değişmeyecekse const kullanılır)
const gravity=9.81
const PI=3.14
const sukaynamaderecesi=100

Değişkenler alt çizgi ve dolar işareti harici özel karakterle başlayamaz.
Numarayla başlayamaz ve kelimeler arası  boşluk olamaz.



