.trim()
" Hello World ".trim();  // "Hello World" yani sağdaki soldaki boşlukları temizler

.trimStart()
" Hello World ".trimStart();  // "Hello World " başlangıçtaki yani soldaki boşlukları temizler.


.trimEnd()
" Hello World ".trimEnd();  // " Hello World" sondaki yani sağdaki boşlukları temizler.

.length
"Hello World".length; // 11 Kaç eleman varsa gösterir 1 den başlar

.charAt()
"Hello World".charAt(1);  //e  1. index numarasında olan elemanı göster

.startsWith();
"Hello World".startsWith("Hello") //true başlangıç parantez içinde yazılan değer mi değil mi kontrol eder true false döner

.endsWith();
"Hello World".endsWith("d"); //true     bitiş parantez içinde yazılan değer mi değil mi kontrol eder true false döner

.includes()  
"Hello World".includes("World")  //true parantez içindeki değer metinden var mı yok mu kontrol eder true false döner

.indexOf("World")
"Hello World".indexOf("World") //6 string indexof() metodu parametre olarak gönderdiğimiz karakterin ilgili string dizisi içinde ilk geçtiği index bilgisini gönderir.
 Eğer aranan ifade bulunamazsa -1 değeri gelir. Karakter dizilerinin ilk karakteri 0' dan başlar.

.lastIndexOf()
"Hello World".LastIndexOf("o") //7 parametre olarak gönderilen değerin dizide en son kullanıldığı yerin index değerini döner.

.repeat()
"Hello World".repeat(2); //"Hello WorldHello World" string nesneyi belirtilen sayı kadar tekrarlar

.replace()
"Hello World".replace("World","Earth");  //Hello Earth  replace metodu yanlızca ilk eşleşen karakteri değiştirir. mesela ilk parametre o verseydik ilk o değişir ikinci değişmez

.slice()
"Hello World".slice(6,10); //"Worl"  belirtilen iki adet index noktası arasındaki ifadeleri kesip alır diyebiliriz. 
İlk kısım başlangıç konumu, ikinci kısım ise bitiş konumudur ve bu konum kesime dahil değildir, eğer negatif ise sondan itibaren kesme yapılır.

.substring()
"Hello World".substring(6,12) //"World"

.substr()
"Hello World".substr(7,4) //"orld" substr(), slice() ve substring() gibi string parçalama işlemlerinde kullanılır 
ancak diğer metotlardan farkı ikinci parametre başlangıçtan itibaren alınacak karakter sayısını temsil eder.


split();
"Hello World".split(" ") //["Hello", "World"]  Boşluktan itibaren metni böldürttük ve dizi olarak döndü
"Hello World".split("o") //["Hell","W","rld"] parametre o almış olsaydı bu şekilde dönerdi

.toLowerCase()
"Hello World".toLowerCase() //"hello world" Tüm metni küçük harfe çevirdi


.toUpperCase()
"Hello World".toUpperCase() //"HELLO WORLD" Tüm metni büyük harfe çevirdi
