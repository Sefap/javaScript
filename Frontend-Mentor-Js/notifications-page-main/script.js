let notifiCount = document.querySelector('.notifications span')
let unseen = document.querySelectorAll('.unseen')
let markAll = document.querySelector('.markall')




document.querySelectorAll('.unseen').forEach((item)=>{
  item.addEventListener('click',()=>{
    item.classList.remove('unseen')
    
    // item değişkeninin içindeki .circle class'ına sahip öğeyi seçerek stilini değiştirdik.
    const circleElement = item.querySelector('.circle');
    if (circleElement) {
      circleElement.style.display = "none";
    }
    // direkt unseen.length i atasayınca hata alıyoruz  o yüzden li.unseen leri tekrar seçip atama yapıyoruz
    const unseenList = document.querySelectorAll('li.unseen');
     notifiCount.textContent = unseenList.length;

  })

})


markAll.addEventListener('click', () => {
  unseen.forEach((item)=>{
      item.classList.remove('unseen')
      
      // item değişkeninin içindeki .circle class'ına sahip öğeyi seçerek stilini değiştirdik.
      const circleElement = item.querySelector('.circle');
      if (circleElement) {
        circleElement.style.display = "none";
      }
  })
  const unseenList = document.querySelectorAll('li.unseen');
  notifiCount.textContent = unseenList.length;
});