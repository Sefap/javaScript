let emailRegex =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
let emailError = document.getElementById("emailError");
let form = document.querySelector('.form-div');
let succes = document.querySelector('.succes')


emailError.style.display = "none"
succes.style.display = "none"
document.querySelector('.subscribe-button').addEventListener('click',function(event){
let email = document.getElementById('email');

  event.preventDefault();
  if(emailRegex.test(email.value)){
    
    console.log("geçerliemail");
    emailError.style.display = "none"
    form.style.display = "none";
    succes.style.display = "block"
    document.querySelector('.succes-inf').innerHTML = `A confirmation email has been sent to <b>${email.value}</b>. 
    Please open it and click the button inside to confirm your subscription.`
  }else{
    emailError.style.display = "block"
    email.style.backgroundColor = "rgb(239 177 173)";
    email.style.color = "red";
    console.log("geçersiz email");
  }
})
document.querySelector('.dismiss-btn').addEventListener('click',()=>{
  form.style.display = "flex";
  succes.style.display = "none"
  email.value="";
})