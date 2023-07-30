let form = document.querySelector('.form');
let firstNInput = document.querySelector('.fn>input');
let lastNInput = document.querySelector('.fl>input');
let emailInput = document.querySelector('.ei>input');
let passwordInput = document.querySelector('.pi>input');


let btn = document.querySelector('.sb-btn');

btn.onclick=(e)=>{
  e.preventDefault();
  if(firstNInput.value.trim() === ""){
    firstNInput.nextElementSibling.style.display = "inline";
  }
}