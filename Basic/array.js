//Type Of Array Bir array'in veri tipi object'dir. typeof aylar = object
let value;

const numbers=[43,56,33,23,44,35,5]

// const numbers2=new Array(1,2,3,4,5,6,7)// Böyle de array oluşturuluyor

const langs=["Python","Java","C++","Javascript"];

const a=["Merhaba",22,null,undefined,3.14]
// Array içerisine array ekleme
const first = [1, 2, 3]
const second = [4, 5, 6]
const third = [-2, -1, 0]
first.push(second)//first isimli arrayin sonuna second isimli arrayi ekler
first.unshift(third)//first isimli arrayin basina third isimli arrayi ekler

// İçerisinde fonksiyon tanımlanan ve bu fonksiyonlarla dizideki elemanları manipüle edebileceğimiz metotlar;
//forEach()
//diziismi.forEach(fonksiyon => {
    //Birşeyler yap
//});
dizi.forEach(function(diziElemanınınKendisi, diziElemanınınIndeksi, dizininKendisi) {
// Bir şeyler yap.
}); //İhtiyacımıza göre bu parametrelerden hepsini veya aralarından birkaçını kullanabiliriz.
// Malzemeler dizisindeki her bir malzemeyi ve onun indeksini konsola yazdıran bir kod yazalım:
const malzemeler = ["yumurta", "un", "süt"];
malzemeler.forEach(function(malzeme, malzemeIndeksi) {
    console.log(malzeme, malzemeIndeksi);
});
// console.log() fonksiyonu her bir malzeme için ayrı ayrı çalışacağından çıktı olarak tüm malzemeleri (ve indekslerini) alt alta görürüz
//yumurta 0
//un 1
//süt 2
//map() Map metodu da forEach gibi kendisine verilen fonksiyonu dizinin her elemanı için uygular fakat forEach'ten farklı olarak sonucu yeni bir dizide tutar. Orijinal dizi olduğu gibi kalır.
// Bir dizideki sayıların 5 katından oluşan başka bir dizi oluşturalım:
const sayilar = [1,2,3];
let sayilarin5kati = sayilar.map(function(sayi) {
    return sayi*5;
});
console.log(sayilarin5kati);
// Çıktı olarak [5,10,15] görmeyi bekleriz.
console.log(sayilar);
// Çıktı olarak [1,2,3] görmeyi bekleriz. Orijinal dizimiz aynı kalır.

//filter()
//filter metodu bir dizi içerisindeki belirli bir koşulu sağlayan elemanlar ile yeni bir dizi oluşturmamıza dolayısıyla dizi elemanlarını filtrelememize yarıyor.
//Yeni oluşacak diziyi bir değişkende saklıyoruz.
//Orijinal dizi bozulmuyor.
const sayilar = [1,2,3,4,5];
const filtrelenmisSayilar = sayilar.filter(function(sayi) {
    return sayi >3;
});
console.log(filtrelenmisSayilar);
// Orijinal diziyi 3'ten büyük olan sayılar için filtrelediğimizde yeni oluşacak dizi [4,5] olacaktır.
console.log(sayilar);
// Orijinal dizi bozulmayacağından çıktıda [1,2,3,4,5] olarak görürüz.

//Sıralama
//Sort
value=numbers.sort()//Sadece ilk rakama göre sıralama yapar
value=numbers.sort(function(x,y){//Sırayla iki elemanı tek tek yapar
    //Küçükten büyüğe
    return x-y
})
value=numbers.sort(function(x,y){
    //Büyükten küçüğe
    return y-x
})

console.log(value);

//find()
//Bu metot belirtilen koşula uyum sağlayan dizi elemanını bulmamızı sağlar.
//Diğer metotların aksine find metodu elemanın kendisini döner.
//Koşulu sağlayan birden fazla eleman varsa, bulduğu ilk elemanı döner.
//Koşulu sağlayan bir eleman bulamazsa undefined döner.
const sayilar = [4,5,6,7];
const bulunacakEleman1 = sayilar.find(function(sayi) {
    return sayi === 5;
});
console.log(bulunacakEleman1);
// Dizi içerisinde 5 eleman olarak bulunduğu için çıktıda elemanın kendisini yani 5 görmeyi bekleriz.
const bulunacakEleman2 = sayilar.find(function(sayi) {
    return sayi > 5;
});
console.log(bulunacakEleman2);
// Dizi içerisinde 5'ten büyük birden fazla eleman olduğu için koşula uyan ilk elemanı yani 6'yı görmeyi bekleriz.
const bulunacakEleman3 = sayilar.find(function(sayi) {
    return sayi < 3;
});
console.log(bulunacakEleman3);
// Dizi içerisinde 3'ten küçük bir eleman olmadığı için çıktıda undefined görmeyi bekleriz.

//.reduce()
//Bu metot dizimizi yalnızca bir değere indirger.
//Parantez içerisine parametre olarak bir fonksiyon ve accumulator'ün (toplayıcının) başlangıç değeri girilir.
//Bu metot orijinal diziyi değiştirmez. (Mutate etmez.)
//Tam olarak ne yaptığını anlamak için örnekleri inceleyelim.
const sayilar = [10,20,30];
// Dizi içindeki sayıları toplayarak indirgeyecek bir fonksiyon yazalım:
function indirgeyici (akumulator, sayi) {
    return akumulator + sayi;
}
// Bu fonksiyonu ve toplamaya 0'dan başlayacağımızı belirten 0 sayısını metodumuza parametre olarak girelim ve sonucu bir değişkende tutalım:
const sonuc1 = sayilar.reduce(indirgeyici,0);
console.log(sonuc1);
//0 + 10 + 20 + 30 = 60 olacağından çıktı olarak 60 bekleriz.
// Eğer akümülatorümüzü 0 yerine 5'den başlatsaydık çıkabilecek sonucu görelim:
const sonuc2 = sayilar.reduce(indirgeyici, 5);
console.log(sonuc2);
// 5 + 10 + 20 + 30 = 65 olacağından çıktı olarak 65 bekleriz.

//Uzunluk
value=numbers.length

//Indexleme
value=numbers[0]
value=numbers[2]
value=numbers[numbers.length-1]

//Herhangi bir indexteki değeri değiştirme

numbers[2]=1000;
value=numbers;

//Index Of
//değerin hangi index numarasında olduğunu buluruz
value=numbers.indexOf(1000);

//Arrayın sonuna değer ekleme
numbers.push(2000)
value=numbers


//Arrayın başına değer ekleme
numbers.unshift(3000)
value=numbers

//Sondan Değer Atma
//sondaki değeri arraydan çıkartır
numbers.pop()
value=numbers;

//Baştan Değer Atma-> array.shift()
//Baştaki değeri arraydan çıkartır
numbers.shift()
value=numbers

//Aralıkdaki değeri atma -> array.splice
//ilk değer dahil olur ikinci değer dahil olmaz
//0. index dahil 3. index dahil değil aradakileri atar
numbers.splice(0,3);
value=numbers;
//istediiğimiz index bilgisine ögede ekleyebiliriz
  let sports = ['basketball', 'football', 'tennis' ];
  console.log(sports); // basketball, football, tennis
  sports.splice(1,0,'baseball'); //0 değeri silinecek eleman sayısını temsil eder
  console.log(sports); // basketball, baseball, football, tennis

//includes() metodu bir elemanın dizi içerisinde bulunup bulunmadığını kontrol eder. Boolean (true/false) olarak çıktı alınır.
const s = [1, 2, 3]
console.log(s.includes(3))//true

//slice() Slice (dilimleme) metodu bir dizinin bir kısmının kopyasıyla yeni bir dizi oluşturmamıza olanak sağlıyor.
//Parantez içerisine ise kopyalamak istediğimiz elemanların aralığını başlangıç ve bitiş indeksleri olacak şekilde iki parametre olarak giriyoruz. Bitiş indeksindeki değerin aralığa dahil olmadığını unutmayalım.
//Bu metot uygulandığı dizinin orijinal halini değiştirmiyor bu yüzden yeni oluşacak diziyi farklı bir değişkende saklıyoruz.
const alisverisListem = ["elma", "ekmek", "süt"];
const yeniAlisverisListem = alisverisListem.slice(0,2);
// "elma"dan başlayıp "süt"e kadar olan elemanları kopyala."süt" dahil değil.
console.log(yeniAlisverisListem);
// ["elma", "ekmek"] görmeyi bekleriz.

//join() Bazen Dizi içerisinde topladığınız verileri, string (sözdizimi) olarak yazdırmak isteyebilirsiniz. Join metodu bu konuda yardıma yetişiyor.
//Parantez içerisine dizi elemanları arasına koymak istediğimiz string'i parametre olarak girebiliriz. Eğer bir parametre vermezsek virgül bastırır.
const alisverisListem = ["elma", "ekmek", "süt"];
const stringAlisverisListem =  alisverisListem.join();
console.log(stringAlisverisListem);
// Çıktıda "elma,ekmek,süt" bekleriz.
const stringAlisverisListem2 = alisverisListem.join(" - ");
console.log(stringAlisverisListem2);
// Çıktıda "elma - ekmek - süt" bekleriz.
//Reverse
//Arrayi ters çevirir
numbers.reverse()
value=numbers

//concat()-> Bu metod farklı dizileri birleştirip tek bir diziye çevirmemizi sağliyor
const yiyecekler = ["pasta", "baklava", "puding"];
const icecekler = ["su", "kahve"];
const menu = yiyecekler.concat(icecekler);
console.log(menu);
// Çıktıda ["pasta", "baklava", "puding", "su", "kahve"] bekleriz.



