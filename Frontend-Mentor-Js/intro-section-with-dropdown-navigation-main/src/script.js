console.log('helo')

let dropDowns = document.querySelectorAll('.dropdown')
console.log(dropDowns)
dropDowns.forEach((item, index) =>
  item.addEventListener('click', () => {
    console.log('sa')
    item.lastElementChild.classList.toggle('hidden')
  }),
)
let menuBtn = document.querySelector('.mobil-menu')
let menuImg = document.querySelector('.mobil-menu > img')
console.log(menuImg.attributes.src.value);
let menu = document.querySelector('.menu')
const overlay = document.getElementById('overlay');
menuBtn.addEventListener('click',()=>{
  menu.classList.toggle('active')
  menu.style.display = "inline"
  overlay.style.display = menu.classList.contains('active') ? 'block' : 'none'; // Menü açıldığında overlay'ı görünür yaparız
  if(menu.classList.contains('active')){
    menuImg.attributes.src.value = '/images/icon-menu-close.svg'
    document.body.style.overflow = 'hidden'
  }else{
  menuImg.attributes.src.value = '/images/icon-menu.svg'
  document.body.style.overflow = 'auto'
  }

})
overlay.addEventListener('click', function() {
  menu.classList.remove('active'); // Menü dışında bir yere tıklanınca menüyü kapatmak için
  overlay.style.display = 'none';
  menuImg.attributes.src.value = '/images/icon-menu.svg'
  document.body.style.overflow = 'auto'

});