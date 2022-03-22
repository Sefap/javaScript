//Js Kodları Farklı şekillerde yazılabilir 
//Console.log çıktıları için web tarayıcının console'unu açmak gereklidir
//main.js yani ana javascript dosyasının çoklu js tanımlamalarında en altta olması gereklidir.


//Satır içi Js Komutları
<button onclick="alert('Satır içi JavaScript Komutları')">Click Me</button>

//Dahili js Komutları
<script>
      console.log('Dahili JavaScript Komutları')
    </script>
    
//Harici js komutları head içerisinde
//Allta görünen şekilde farklı bir js dosyasına html dosyasına bağlarız ve .js dosyasındaki kodlarımıza burada erişebiliriz
//Harici dosyayı head'ın içerisinde çağırabiliriz aşşağıda ki gibi ama mantıklı olan body içerisindeki çağırmamız
<!DOCTYPE html>
<html>
  <head>
    <script src="hariciJavaScript.js"></script>
  </head>
  <body></body>
</html>

//Harici js komutları doğru kullanımı bu şekildedir
<!DOCTYPE html>
<html>
  <head>
    
  </head>
  <body>
     <script src="hariciJavaScript.js"></script>
  </body>
</html>

///Birden çok harici js komut dosyası'da olabilir yine çalışacaktır ve bodynin en alt kısmında çağırmak en mantıklı olandır
// çünkü html sayfaları yukarıdan aşşağıya doğru yüklenir bu yüzden head'ın içinde olan veya body'nin en altına yazılmayan kodlar sayfanın geç açılmasına sebep olabilir
//main.js yani ana javascript dosyasının çoklu js tanımlamalarında en altta olması gereklidir
<!DOCTYPE html>
<html>
  <head>
    
  </head>
  <body>
     <script src="hariciJavaScript.js"></script>
     <script src="hariciJavaScriptikincidosya.js"></script>
  </body>
</html>



//Veya Hepsinin haricinde bir web sayfasına sağ tıklayıp incele seçeneğini seçip web console'da yazabiliriz
