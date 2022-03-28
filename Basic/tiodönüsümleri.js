let value;
//Veritiplerini String'e Çevirme

value=String(123);
value=String(3.14);
value=String(true);
value=String(false);
value=String(function(){console.log()})
value=String([1,2,3,4]);

value=(10).toString();
value=(3.14).toString();

//Veritiplerini Sayılara Çevirme
value=Number("123");
value=Number(null);
value=Number(undefined);//undefined tanımsız olduğu için sayıya çevrilmiyor
value=Number("Hello World");//Bunun içinde herhangi bir sayı olmadığı için sayıya çevrilmiyor
value=Number(function(){console.log()})//functionlarda sayıya çevrilemiyor
value=Number([1,2,3,4]);//Array lerde sayıya çevrilmiyor
//Kısacası sadece string içinde sayı varsa ve null değeri çevrilebiliyor
value=Number("3.14")//Böyle oluyor
value=parseFloat("3.14");//Kayan sayılar böylede olur
value=parseInt("3")// Bu şekilde de sayıya çevirebiliriz






const a="Hello" + 34;//Bir string ve sayı varsa direkt stringe çevirir
console.log(a)
console.log(typeof a)

console.log(value)
console.log(typeof value)
