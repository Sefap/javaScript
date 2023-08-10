const charList = document.querySelector('.chart>ul')
console.log(charList);


let html = `
`

{/* <li class="flex flex-col">
  <div class="w-8 h-48 bg-red-500"></div>
  <p>days</p>
</li> */}
console.log(new Date().toString().slice(0,3));
async function fetchData() {
  let currentDay = new Date().toString().slice(0,3).toLowerCase()
  let classlist = ['flex','w-8','md:w-12','justify-end','flex-col','relative','items-center']
  try {
    const response = await fetch('./data.json');
    const names = await response.json();
    console.log(names);
    names.forEach(name => {
      el = document.createElement('li');
      el.classList.add(...classlist)
      const heightClass = `${Math.floor(name.amount)}` * 4
      console.log(heightClass);
    el.innerHTML = `
    <span class='amountSpan bottom-[${heightClass+40}px] p-0 md:p-1  rounded '>$${name.amount}</span>
    <div class= 'w-full h-[${heightClass}px] bg-softred hover:opacity-50 rounded-md'></div>
    <p class='font-extralight'>${name.day}</p>
  `;
  console.log(typeof name.day);
  console.log(typeof currentDay);
  name.day == currentDay ? el.firstElementChild.nextElementSibling.classList.add('current') :''
      charList.appendChild(el)
     
    });
  } catch (error) {
    console.error('Veri alınırken bir hata oluştu:', error);
  }
}
fetchData();