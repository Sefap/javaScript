let emailRegex =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
let errorIcon = document.querySelector(".error");
let submitArrow = document.querySelector(".arrow")
let hero = document.querySelector('.hero')
let errorMsg = document.querySelector('.errorOut')
let email = document.getElementById('email');



window.addEventListener("load", () => {
  function updateImageSrc() {
    if (window.innerWidth < 968) {
      hero.src = "images/hero-mobile.jpg";
    } else {
      hero.src = "images/hero-desktop.jpg";
    }
  }
  // Sayfa yüklendiğinde ve pencere boyutu değiştiğinde resim src'sini güncelleyin
  window.addEventListener("resize", updateImageSrc);
  updateImageSrc();
});

submitArrow.addEventListener('click',function(event){
  event.preventDefault();
  if(emailRegex.test(email.value)){
    errorIcon.style.display = "none"
    errorMsg.style.display = "block"
    errorMsg.innerHTML = "Email Gönderildi"
    setTimeout(() => {
    errorMsg.style.display = "none"
    errorMsg.innerHTML = "Please provide a valid email"
    email.value = ""
    }, 3000);
  }else{
    errorIcon.style.display = "inline"
    errorMsg.style.display = "block"
  }
})
email.addEventListener('input',function(event){
    event.preventDefault();
    if(emailRegex.test(email.value)){
      errorIcon.style.display = "none"
      errorMsg.style.display = "none"
      console.log("gönderildi");
      
    }else{
      console.log("gönderilemedi");
      errorIcon.style.display = "inline"
      errorMsg.style.display = "block"
    }
  })
  