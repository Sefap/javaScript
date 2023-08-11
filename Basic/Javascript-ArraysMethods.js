.push()
[1,2,3].push(4) //4 : [1,2,3,4]  -> Dizinin sonuna eleman eklemek için kullanılır

.pop()
[1,2,3].pop() //3 :[1,2] -> Dizinin sonundan eleman silmek için kullanılır

.shift()
[1,2,3].shift() //1 [2,3] -> Dizinin başından eleman silmek için kullanılır

.unshift()
[1,2,3].unshift() //3  unshift metodu, dizinin başına yeni değerler eklemek için kullanılır. İşlem sonucunda ise, dizinin yeni uzunluğunu geriye döner.


.concat()
['a','b'].concat('c) //['a','b','c'] Concat() metodu, dizileri birleştirmek için kullanılır. Birden fazla diziyi tek bir dizi haline getirir yani birleştirir.
Birleştirmek için dizi sınırı yoktur ancak en az 1 dizi diğer bir dizi ile birleştirilebilir

.join()
['a','b','c'].join('-') //a-b-c  join() metodu bir array içerisinde yer alan bütün elemanları birleştirerek string bir ifade olarak geri döndürür. 
(veya array benzeri bir obje olarak) Elemanlar varsayılan olarak virgül ile ayıracı ile ayrılır.
 İsteğe bağlı olarak elementleri birbirinden ayırmak için farklı ayıraçlar da kullanılabilir.

.slice()
['a','b','c'].slice(1) //['b','c'] Javascript slice() metodu, kendisine parametre olarak verilen dizi aralığında bulunan değerleri kopyalar ve yeni bir dizi oluşturarak geri döndürür.
//kendisine parametre olarak verilecek olan dizi aralığında bulunan değerleri kopyalayarak yeni bir dizi oluşturur. // Oluşturduğu diziyi geri döndürür

.indexOf()
['a','b','c'].indexOf('b') //1 parametre olarak verilen değerin index numarasını döner

.includes()
['a','b','c'].includes('c') //true ->includes() metodu bir dizinin belirli bir elemanı içerip içermediğini belirler, içeriyorsa true içermiyorsa false değeri döndürür.

.find()
[3,5,6,8].find((n)=>n%2===0)//6  -> bir dizi içerisinde belirttiğimiz özelliklerde bir elemanı döndürmeye yaramaktadır n her bir elemanı karşılamaktadır.

.findIndex()
[4,3,5].findIndex((n)=>n%2 !== 0) //1  ->dizi arama işlemi yaparak, bulunan değerin indis değerini döndürür. Aranan değer bulunmadıysa -1 değeri döner.
 Parametre olarak callback fonskiyon alır. Orjinal dizi üzerinde değişiklik olmaz.

.map()
[3,4,8,6].map((n)=> n * 2) //[6,8,16,12] -> kendisine parametre olarak gönderilen dizinin her bir elemanını belirlenen bir işleme tabi tutup, yeni bir dizi meydana getirir.
 Örneğin; elimizdeki dizinin tüm elemanlarının iki katını almak istediğimiz zaman kullanabiliriz.

.filter()
[1,4,7,8].filter((n)=>n%2===0) //[4,8] -> parametre olarak verilen dizi içerisinde bulunan eleman ile işlem yapar ve true dönen tüm değerleri yeni dizi oluşturarak geri döndürür.
Bu sayede çeşitli filtrelemeler yapmanıza olanak sağlar

.reduce()
[2,4,3,7].reduce((acc,cur)=>acc+cur,baslangıcdegeri) //16 ->dizinin her değeri için bir işlev yürütür ve sonunda diziyi tek bir değere düşürür.acc dönüş değer curr her eleman tek tek
Metodun dönüş değeri ilk parametresi olan accumulator parametresinde saklanır. baslangıcdegerine ne verirsek toplamaya oradan başlar

.every()
[3,4,5].every((x)=> x<6) // true dizi elemanlarını bir döngüye alıp sırasıyla her bir dizi elemanını belirlediğimiz bir koşula tabi tutabiliriz.
Eğer tüm dizi elemanları koşulu sağlarsa geriye true değeri döndürülür. Eğer bir tane bile koşulu sağlamayan dizi elemanı olursa geriye false değeri döndürülür

.some()
[3,5,6,8].some((n)=>n>6) // true -< bir array içerisinde belirtilen koşullara uygun bir eleman varsa, sonucumuz true dönecektir. Eğer yoksa da false değeri dönecektir

.reverse()
[1,2,3,4].reverse() [4,3,2,1] -> Diziyi tersine çevirir

.at()
[3,5,7,8].at(-2) //7
