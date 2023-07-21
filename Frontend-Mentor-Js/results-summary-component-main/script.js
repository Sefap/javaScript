
const ul = document.querySelector('.summary-list-js')


fetch('data.json')
  .then(response => response.json())
  .then(data => {
    data.forEach(item => {
      const li = document.createElement('li');
      li.classList.add(item.category.toLowerCase())
      const html = `<div>
      <img src="${item.icon}" alt="">
      <span>${item.category}</span>
      </div>
      <div><span class="score-rate">${item.score} <span>/ 100</span></span></div>
      `
      li.innerHTML=html
      ul.appendChild(li);
    });
  })
  .catch(error => console.log(error));