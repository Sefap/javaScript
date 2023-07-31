let form = document.querySelector('.form');
let firstNInput = document.querySelector('.fn>input');
let lastNInput = document.querySelector('.fl>input');
let emailInput = document.querySelector('.ei>input');
let passwordInput = document.querySelector('.pi>input');

let elements = document.querySelectorAll('.form>div>input')

let btn = document.querySelector('.sb-btn');

btn.onclick=(e)=>{
  e.preventDefault();
  elements.forEach((input)=>{
    if (input.value.trim() === ""){
      input.nextElementSibling.style.display = "inline"
    }else {
      input.nextElementSibling.style.display = "none"
      return;
    }
  })
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const isValidEmail = emailRegex.test(emailInput.value);

  if (isValidEmail) {
    emailInput.nextElementSibling.style.display = "none"

    console.log('Valid email address');
  } else {
    emailInput.nextElementSibling.style.display = "inline"

    console.log('Invalid email address');
  }
console.log("object");
}