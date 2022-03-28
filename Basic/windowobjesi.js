//Javascripte en genel obje window objesidir this dediğimiz için onun özelliklerini çıktı olarak verir
//console.log(this)

// alert("Merhaba")


// console.log(cevap);
//Confirm
// if(confirm("Eminmisiniz")){
//     console.log("Silin Gitsin")
// }
// else{
//     console.log("Silmeyin")
// }
//----------Prompt----------
// const cevap = prompt("2 + 2 = ?")
// if(cevap == "4"){
//     console.log("Doğru")
// }
// else{
//     console.log("Yanlış")
// }

let value
value = window
value = window.location
value=window.location.host
value=window.location.hostname
value=window.location.port
value=window.location.href

// if(confirm("Sayfa Yenilensin mi?")){//Confirm penceresi çıkar ok dersek aşağıdaki satıor çalışır
//     window.location.reload();//window.location.reload sayfayı yeniler
// }
// else{
//     console.log("Sayfa Yenilenmedi")
// }

value=window.outerHeight//Sayfanın uzunluğunu tüm herşey dahil alır çubukları sayar pencerenin tamamını
value=window.outerWidth//Sayfanın genişliğini tüm herşey dahil alır çubukları sayar pencerenin tamamını

value=window.innerHeight//sayfanın uzunluğunu iç ekrandaki uzunluğa göre alır çubukları saymaz
value=window.innerWidth//sayfanın genişliğini iç ekrandaki uzunluğa göre alır çubukları saymaz


value=window.scrollX//Scroll çubuğunun x ekseninde ne kadar sağ tarafa kaydırılmış onu görüyoruz
value=window.scrollY// üsttekinin y ekseni hali


console.log(value)

