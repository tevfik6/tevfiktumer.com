---
title: Localhost Indexer
lang: tr
short: "<div class=\"float-right\"> <img src=\"https://raw.githubusercontent.com/tevfik6/LocalhostIndexer/master/ScreenShot01.png\" alt=\"Localhost Indexer\" class=\"max-h-[100px]\"> </div> <p>Bir süredir evde ve iş yerinde birden fazla proje üzerinde çalışıyorum. Genelde localhost da çalışırken Directory Listingi açık bırakmak direk olarak bazı local sitelere ulaşmakta yardımcı oluyor. </p><p>Apachenin Directory Listing  özelliği oldukça eski durması ve bazı çoklu durumlarda yeterli gelmemesi, onu biraz editlememe sebep oldu. Sonuç olarak ortaya fena birşey çıkmayınca github'a koydum. </p>"
tags: Github, Projeler, Apache, Localhost
date: 2015-09-20 14:57:00
created_at:  "2016-08-21T22:42:43+0000"
published_at: "2015-09-20T12:57:27+0000"
---
Bir süredir evde ve iş yerinde birden fazla proje üzerinde çalışıyorum. Genelde localhost da çalışırken Directory Listingi açık bırakmak direk olarak bazı local sitelere ulaşmakta yardımcı oluyor. 

Apachenin Directory Listing  özelliği oldukça eski durması ve bazı çoklu durumlarda yeterli gelmemesi, onu biraz editlememe sebep oldu. Sonuç olarak ortaya fena birşey çıkmayınca github'a koydum. 

İlgilenir iseniz şöyle alayım: [https://github.com/tevfik6/LocalhostIndexer](https://github.com/tevfik6/LocalhostIndexer)

Github üzerine [İngilizce bilgilendirme](https://github.com/tevfik6/LocalhostIndexer#usage) koyduğum için her ne kadar yüklemesi kolay olsada burada Türkçe açıklamakta fayda var.
Repo'yu `git clone https://github.com/tevfik6/LocalhostIndexer` yaparak web server ana dizinine indirebilir yada zip dosyası olarak indirip, açabilirsiniz. 

Projeyi indirdikten sonra web server ana dizinine  [burdaki dosya içeriği ile](https://github.com/tevfik6/LocalhostIndexer#usage) `.htaccess` dosyasını oluşturmalısınız. Hepsi bu kadar!

**Ekran Görüntüsü**

<div class="pl-2 pb-2"> 
	<img src="https://raw.githubusercontent.com/tevfik6/LocalhostIndexer/master/ScreenShot01.png" alt="Localhost Indexer">
</div> 

**Bazı Notlar**;

- [mod_rewrite](http://httpd.apache.org/docs/current/mod/mod_rewrite.html), [AllowOverride](http://httpd.apache.org/docs/2.4/mod/core.html#allowoverride),  [DirectoryListings](https://wiki.apache.org/httpd/DirectoryListings) gibi terimleri bildiğinizi var sayıyorum.
- Projeyi Apple Macbook ve Apache/PHP ile geliştirip test ettim. Windows üzerinde bir test yapmadım. Mac üzerinde çalıştığı için sorun olmadan herhangi bir Linux dağıtımında da çalışması gerekir.
- Projede hata bulma ihtimalinize karşı Github kaydınız var ise [bu form](https://github.com/tevfik6/LocalhostIndexer/issues/new) ile eğer kaydınız yok ise bu post altına yorum yazarak bildirebilirsiniz. 