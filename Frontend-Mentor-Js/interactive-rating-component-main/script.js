
let rating = document.querySelector(".rating")
let btn = document.querySelector(".submit-btn")
let firstsc = document.querySelector(".firstsc")
let secondsc = document.querySelector('.secondsc')
let selectedp = document.querySelector('.selectedp')
let selectedRate 
let rate = [1,2,3,4,5]
secondsc.style.display = "none";
firstsc.style.display = "inline";

// selectedRate ? btn.disabled = false:btn.disabled = true


rating.innerHTML = rate.map((x)=>(
  `<button class="rate">${x}</button>`
)).join('');

document.querySelectorAll('.rate').forEach((item)=>(
  item.addEventListener('click',returnRating)
))
function returnRating(e){
  selectedRate=e.target.textContent;
  selectedp.textContent = `You selected ${selectedRate} out of 5`
}



const thankYouState = () => {
  if(selectedRate){
    firstsc.style.display = "none"
    secondsc.style.display = "inline"
  }
  console.log("sa");
}

btn.addEventListener("click",thankYouState)

