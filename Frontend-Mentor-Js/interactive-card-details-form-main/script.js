// INPUTS
let cardNumber = document.querySelector('.card-number input')
let name = document.querySelector('.name input')
let mmInput = document.querySelector('.mmInput')
let yyInput = document.querySelector('.yyInput')
let cvcInput = document.querySelector('.cvc input')
// OUTPUTS
let cardNumberOut = document.querySelector('.cardNumberOut')
let cardNameOut = document.querySelector('.cardNameOut')
let mmOut = document.querySelector('.mmOut')
let yyOut = document.querySelector('.yyOut')
let cvcOut = document.querySelector('.cvcOut')
// BUTTONS
let submitBtn = document.querySelector('.submitBtn')

let isRemovingSpace = false;
let formReq = false;
console.log(formReq);
cardNumber.addEventListener('input', () => {
  let value = cardNumber.value;

  let cardNumberError = document.querySelector('.cartNumberError');
  if (value.length < 19) {
    cardNumberError.innerHTML = "Card information must be 16 digits";
    cardNumber.style.borderColor = "red";
    formReq = false;
  } else if (!/^[0-9 ]*$/.test(value)) {
    cardNumberError.innerHTML = "Wrong format, numbers only";
    cardNumber.style.borderColor = "red " ;
    formReq = false;
  } else {
    cardNumberError.innerHTML = "";
    cardNumber.style.borderColor = "initial";
    formReq = true
  }

  //value = value.replace(/\s/g, ''); ifadesi ile dize içindeki tüm boşlukları kaldırırız. Kredi kartı numarasının içindeki boşlukları temizlemek istediğimiz için bunu yapıyoruz. \s 1 boşluğu temsil ediyor/g global demek her boşluğu '' ile siliyoruz
  value = value.replace(/\s/g, '');
  // value = value.replace(/(.{4})/g, '$1 '); ifadesi ile her 4 karakterde bir boşluk ekliyoruz. Yani, "1234567890123456" gibi bir dizeyi "1234 5678 9012 3456" şeklinde düzenliyoruz.
  value = value.replace(/(.{4})/g, '$1 ');
  // Boşluğu siliyorsak, otomatik olarak boşluğu kaldır
  if (isRemovingSpace) {
    value = value.slice(0, -1);
    isRemovingSpace = false;
  }
  cardNumber.value = value; // Düzenlenmiş değeri input alanına yazın
  cardNumberOut.innerHTML= value;
});

// Kullanıcının tuşa basımını dinleyerek boşluğun sonrasını kontrol et
cardNumber.addEventListener('keydown', (event) => {
  if (event.key === 'Backspace' && cardNumber.value.endsWith(' ')) {
    isRemovingSpace = true;
  }
});

name.addEventListener("input",()=>{
  cardNameOut.innerHTML = name.value.toUpperCase();
  const nameRegex = /^[A-Za-zğüşıöçĞÜŞİÖÇ\s'-]{3,}$/;
  if (nameRegex.test(name.value.trim())) {
    console.log("Geçerli isim veya soyisim");
    document.querySelector('.cartNameError').innerHTML = ""
    formReq = true
  } else {
    console.log("Geçersiz isim veya soyisim");
    document.querySelector('.cartNameError').innerHTML = "Wrong name"
    formReq = false
  }
  formReq = false
})
mmInput.addEventListener("input",()=>{
  mmOut.innerHTML = mmInput.value
  if(mmInput.value < 12){
    formReq = true
    document.querySelector('.cartMmError').innerHTML = ""
  }else if(mmInput.value > 12 || mmInput.value.trim() === ""){
    document.querySelector('.cartMmError').innerHTML = "Can't be blank"
    formReq = false
  }
   
    
})
yyInput.addEventListener("input",()=>{
  if (yyInput.value < 0) {
    yyInput.value = "";
    formReq = false
    return;
  }
  yyOut.innerHTML = yyInput.value
 
  let year = new Date().getFullYear().toString()
  if(parseInt(yyInput.value.trim()) < year.slice(2)){
    document.querySelector(".cartYyError").innerHTML = "Can't be blank"
    formReq = false

  } else if(yyInput.value.trim() === ""){
    document.querySelector(".cartYyError").innerHTML = "Can't be blank"
    formReq = false
  } else if(parseInt(yyInput.value.trim()) >= year.slice(2)){
    document.querySelector(".cartYyError").innerHTML = ""
    formReq = false
    
  }

})
cvcInput.addEventListener('input',()=>{
  if (cvcInput.value < 0) {
    cvcInput.value = "";
    formReq = false
    document.querySelector(".cartCvcError").innerHTML = "Can't be blank"
    return;
  }else{
    document.querySelector(".cartCvcError").innerHTML = ""
  }
  cvcOut.innerHTML = cvcInput.value
})
submitBtn.addEventListener('click',(event)=>{
  if(name.value.trim() === ""|| cardNumber.value.trim() ==="" ||mmInput.value.trim() === "" || yyInput.value.trim() === "" || cvcInput.value.trim() === ""){
    formReq=false
    return
  }else {
    formReq = true;
  }

  if (formReq) {
    event.preventDefault();
    // document.querySelector('form').submit();
    document.querySelector('.complateState').style.display = "inline"
    document.querySelector('form').style.display = "none"
  } else {
    // Koşul sağlanmazsa submit işlemini engelleyin
    event.preventDefault();
    console.log('Koşul sağlanmadı, submit işlemi engellendi');
  }
  if (!formReq) {
    // Koşul sağlanmazsa submit işlemini engelleyin
    event.preventDefault();
    console.log('Validation failed, form submission prevented.');
  }
})