
let btn = document.querySelector('.notify-btn')
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

btn.addEventListener('click',function(){
  let emailInput = document.querySelector('.emi')
  if(emailRegex.test(emailInput.value)){
    console.log("Gönderim başarılı");
    document.querySelector('.error').style.display="none"
    emailInput.classList.remove("emailerror")
    alert("Abone oldunuz.")
    emailInput.value = ""
  }else{
    document.querySelector('.error').style.display="inline"
    emailInput.placeholder = "example@email.com"
    emailInput.classList.add("emailerror")
  }
  
})