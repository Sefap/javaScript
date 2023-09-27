tailwind.config = {
  theme: {
    extend: {
      colors: {
        'almost-white': 'hsl(0, 0%, 98%)',
        'medium-gray': 'hsl(0, 0%, 41%)',
        'almost-black': 'hsl(0, 0%, 8%)',
      }
    }
  }
}

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
const whiteSide = document.querySelector('.white-side')
menuBtn.addEventListener('click',()=>{
  menu.classList.toggle('active')
  menu.classList.add('block')
  overlay.style.display = menu.classList.contains('active') ? 'block' : 'none'; // Menü açıldığında overlay'ı görünür yaparız
  whiteSide.style.display = menu.classList.contains('active') ? 'block' : 'none';
  if(menu.classList.contains('active')){
    menuImg.attributes.src.value = 'images/icon-close-menu.svg'
    document.body.style.overflow = 'hidden'
    menu.classList.remove('hidden')
    menu.classList.add('block')

  }else{
  menuImg.attributes.src.value = 'images/icon-menu.svg'
  document.body.style.overflow = 'auto'
  menu.classList.remove('block')
  menu.classList.add('hidden')
  }

})
overlay.addEventListener('click', function() {
  menu.classList.remove('active'); // Menü dışında bir yere tıklanınca menüyü kapatmak için
  menu.classList.remove('block')
  menu.classList.add('hidden')
  overlay.style.display = 'none';
  whiteSide.style.display = 'none';
  menuImg.attributes.src.value = 'images/icon-menu.svg'
  document.body.style.overflow = 'auto'

});
const imageElement = document.querySelector('.right img');
  
  function updateImage() {
    if (window.innerWidth < 768) {
      imageElement.src = "images/image-hero-mobile.png"; 
    } else {
      imageElement.src = "images/image-hero-desktop.png"; 
    }
  }
  
  
  window.addEventListener('load', updateImage);
  window.addEventListener('resize', updateImage);
