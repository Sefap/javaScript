//calculate button
const btn = document.querySelector('.calculate-btn');
//inputs
let inp_day = document.querySelector('#day');
let inp_month = document.querySelector('#month');
let inp_year = document.querySelector('#year');
//Outputs
let out_day = document.querySelector('.days-out')
let out_month = document.querySelector('.months-out')
let out_year = document.querySelector('.years-out')
//errors
const errorDay = document.querySelector('.error-message-day')
const errorMonth = document.querySelector('.error-message-month')
const errorYear = document.querySelector('.error-message-year')

let isValid = false;
//inputlara focus olduğunda ve focus bittiğinde bg renklerini değiştiriyoruz
//tüm inputları diziye aktarıyoruz foreach ile o dizihi dönüp her bir elemanına event verebiliyoruz
document.querySelectorAll('input[type="number"]').forEach(input => {
  input.addEventListener('blur', () => {
    btn.style.backgroundColor = 'var(--Purple)'; 
  })
  input.addEventListener('focus', () => {
    btn.style.backgroundColor = 'var(--Off-black)';
  })
})
//mouse butonun üstündeyken bg değiştiriyoruz
btn.addEventListener('mouseenter', () => {
  btn.style.backgroundColor = 'var(--Off-black)';
});

//mouse butonun üstünden ayrılınca eski rengine döndürüyoruz
btn.addEventListener('mouseleave', () => {
  btn.style.backgroundColor = 'var(--Purple)'; 
});






//Girilen gün kontrolü
inp_day.addEventListener('input',function(){
  if(inp_day.value < 0){
    isValid = false
    errorDay.textContent = "Gün değeri 0 dan küçük olamaz."
    return
  }else if(inp_day.value == 0) {
    isValid = false
    errorDay.textContent = "Gün değeri 0 olamaz."
    return;
  }else if(inp_day.value > 31) {
    isValid = false
    errorDay.textContent = "Gün değeri 31 den büyük olamaz."
    return;
  }
  else {
    isValid = true
    errorDay.textContent = "";
  }
})

//Girilen ay kontrolü
inp_month.addEventListener('input',function(){
  if (inp_month.value == 4 && inp_day.value == 31) {
    isValid = false;
    errorDay.textContent = "Lütfen geçerli bir gün girin.";
    return;
  }
  
  if(inp_month.value < 0){
    isValid = false
    errorMonth.textContent = "Ay değeri 0 dan küçük olamaz."
    return
  }else if(inp_month.value == 0) {
    isValid = false
    errorMonth.textContent = "Ay değeri 0 olamaz."
    return;
  }else if(inp_month.value > 12) {
    isValid = false
    errorMonth.textContent = "Ay değeri 12 den büyük olamaz."
  }else {
    isValid = true
    errorMonth.textContent = "";
  }
})

//Girilen yıl kontrolü
inp_year.addEventListener('input',function(){
  let d = new Date()
  let currentYear = d.getFullYear()
  if (inp_month.value == 2) {
    const isLeapYear = (inp_year.value % 4 == 0 && inp_year.value % 100 !== 0) || inp_year.value % 400 == 0;
    console.log(isLeapYear);
    if (inp_day.value> 29 || (inp_day.value == 29 && !isLeapYear)) {
      isValid = false;
      errorDay.textContent = "Lütfen geçerli bir gün girin.";
      return
    }
  }
  if(inp_year.value < 1900){
    isValid = false
    errorYear.textContent = "Yıl değeri 1900 dan küçük olamaz."
    return
  }else if(inp_year.value == 0) {
    isValid = false
    errorYear.textContent = "Yıl değeri 0 olamaz."
    return;
  }else if(inp_year.value > currentYear) {
    isValid = false
    errorYear.textContent = `Yıl değeri ${currentYear}'dan büyük olamaz.`
    return;
  }else {
    isValid = true
    errorYear.textContent = "";
  }
})

//Yaş Hesaplama
btn.addEventListener('click',()=>{
  if(isValid){
    let birthday = `${inp_year.value}/${inp_month.value}/${inp_day.value}`;
    let birthdayobj = new Date(birthday);
    // let ageDiffMill = new Date()  - birthdayobj;
    console.log( {birthdayobj});
    let millisecondsDiff  = new Date().getTime()  - birthdayobj.getTime();
    const diffDate = new Date(millisecondsDiff);

    const years = diffDate.getUTCFullYear() - 1970;
    const months = diffDate.getUTCMonth();
    const days = diffDate.getDate() - 1;

    out_day.textContent = days ;
    out_month.textContent = months;
    out_year.textContent = years;


  }else{
    return
  }
})
