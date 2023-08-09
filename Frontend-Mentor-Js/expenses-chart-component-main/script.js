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
  let classlist = ['flex','flex-col','items-center']
  try {
    const response = await fetch('./data.json');
    const names = await response.json();
    console.log(names);
    names.forEach(name => {
      el = document.createElement('li');
      el.classList.add(...classlist)
      const heightClass = `${Math.floor(name.amount)}`
      console.log(heightClass);
    el.innerHTML = `
    <div class= 'w-8 h-[${heightClass}px] bg-red-500 hover:opacity-50'></div>
    <p>${name.day}</p>
  `;
  name.day === currentDay ? el.firstElementChild.classList.add('current') :''
      charList.appendChild(el)
    });
  } catch (error) {
    console.error('Veri alınırken bir hata oluştu:', error);
  }
}
fetchData();