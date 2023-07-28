
let share_icon = document.querySelector('.share-icon');
let icons_g = document.querySelector('.icons');

// share_icon.onclick = () => {
//   icons_g.style.display == "flex" ? icons_g.style.display = "none" : icons_g.style.display = "flex"
// }
function clickHandle() {
  icons_g.style.display == "flex" ? icons_g.style.display = "none" : icons_g.style.display = "flex"
}

const addOrRemoveClickHandler = () => {
  if (window.innerWidth < 600) {
    share_icon.removeEventListener('click', clickHandle);

  } else {
    share_icon.addEventListener('click', clickHandle);
  }
}

// Sayfa yüklendiğinde ve pencere boyutu değiştiğinde kontrol edelim
window.addEventListener('load', addOrRemoveClickHandler);
window.addEventListener('resize', addOrRemoveClickHandler);