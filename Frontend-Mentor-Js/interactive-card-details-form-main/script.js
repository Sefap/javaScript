let cardNumber = document.querySelector('.card-number input')

cardNumber.addEventListener('input',()=>{
  console.log(typeof cardNumber.value);
  let value = cardNumber.value.replace(/\s/g, ''); // Boşlukları temizle
    let formattedValue = "";

    for (let i = 0; i < value.length; i++) {
        formattedValue += value[i];
        if ((i + 1) % 4 === 0 && i !== value.length - 1) {
            formattedValue += " ";
        }
    }

    cardNumber.value = formattedValue;
})

