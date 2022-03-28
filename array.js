let value;

const numbers=[43,56,33,23,44,35,5]

// const numbers2=new Array(1,2,3,4,5,6,7)// Böyle de array oluşturuluyor

const langs=["Python","Java","C++","Javascript"];

const a=["Merhaba",22,null,undefined,3.14]

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


//Baştan Değer Atma
//Baştaki değeri arraydan çıkartır
numbers.shift()
value=numbers


//Aralıkdaki değeri atma
//ilk değer dahil olur ikinci değer dahil olmaz
//0. index dahil 3. index dahil değil aradakileri atar
numbers.splice(0,3);
value=numbers;



//Reverse
//Arrayi ters çevirir
numbers.reverse()
value=numbers

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
