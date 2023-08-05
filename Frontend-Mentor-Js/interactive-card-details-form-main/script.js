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

let isRemovingSpace = false;
cardNumber.addEventListener('input', () => {
  let value = cardNumber.value;
  //value = value.replace(/\s/g, ''); ifadesi ile dize içindeki tüm boşlukları kaldırırız. Kredi kartı numarasının içindeki boşlukları temizlemek istediğimiz için bunu yapıyoruz.
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
})
mmInput.addEventListener("input",()=>{
  mmOut.innerHTML = mmInput.value
})
yyInput.addEventListener("input",()=>{
  yyOut.innerHTML = yyInput.value
})
cvcInput.addEventListener('input',()=>{
  cvcOut.innerHTML = cvcInput.value
})