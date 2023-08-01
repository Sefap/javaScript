let form = document.querySelector('.form');
let firstNInput = document.querySelector('.fn>input');
let lastNInput = document.querySelector('.fl>input');
let emailInput = document.querySelector('.ei>input');
let passwordInput = document.querySelector('.pi>input');
let elements = document.querySelectorAll('.form>div>input')

let btn = document.querySelector('.sb-btn');
form.addEventListener('submit', (event) => {
  event.preventDefault();

  // Diğer inputların kontrolü
  let hasEmptyInput = false;
  elements.forEach((input) => {
    if (input.value.trim() === "") {
      input.nextElementSibling.style.display = "inline";
      input.style.borderColor = "red";
      hasEmptyInput = true;
    } else {
      input.nextElementSibling.style.display = "none";
      input.style.borderColor = "var(--grayish-blue)";
    }
  });

  // Email doğrulaması
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  const isValidEmail = emailRegex.test(emailInput.value);

  if (hasEmptyInput) {
    return; // Form gönderimini engeller, çünkü boş input var
  }

  if (!isValidEmail) {
    emailInput.nextElementSibling.style.display = "inline";
    emailInput.placeholder = "email@example.com";
    emailInput.style.borderColor = "red";
    emailInput.classList.add("empl");
    return; // Form gönderimini engeller, çünkü email doğrulanmadı
  }

  form.submit(); // Formu gönder
});