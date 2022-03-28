//Scope Kavramı


var value1 = 10;
let value2 = 20;
const value3 = 30;

// function Func() {
//     var value1 = 40
//     let value2 = 50
//     const value3 = 60
//     console.log(value1,value2,value3)
// }
// Func();//Fonksiyon çağırıldığında çalışıyor value1,value2,value3 sonra diğer valueler çalışıyor

//Var block element içinde kullanılsa bile dışarıdada çağırılıyor ama let ve const çalışmıyor
if(true){
    var value1=40;
    let value2=50
    const value3=60
    console.log(value1,value2,value3)
}//Var dışarıdaki tanımlanan değişkeni de değiştiriyor ama let ve const dışarıdaki değişkenlere karışmaz
console.log(value1,value2,value3)
// console.log(value1, value2, value3)
let a="123456"
if(true){
    let a="23343536"//bu a ile yukarıdaki a karışmıyor çünkü block eleman ama var ile tanımlasak karışırdı
}
