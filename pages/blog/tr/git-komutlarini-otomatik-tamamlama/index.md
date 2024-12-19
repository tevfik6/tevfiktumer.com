---
title: Git Komutlarını Otomatik Tamamlama
lang: tr
short: "<p>Git'e yeni başlayan bir çok kullanıcının ilk aşamada git komutlarını hafızada tutması pek kolay olmuyor. Git komutlarını konsol üzerinde <code>tab</code> tuşu ile tamamlama özelliğini nasıl aktive edilebileceğini ve bazı çok kullanılan komutları nasıl kısayol oluşturabilir ve kullanabilirsiniz bilgim sınırlarında anlatmaya çalışacağım.</p>"
created_at: "2016-08-21T22:37:38+0000"
published_at: "2013-05-23T22:17:05+0000"
tags: Git, GitHub
---

Git kullanmaya ilk başlandığında, büyük problemlerden birisi git komutlarına alışmak oluyor. Bu alışma sürecinde git komutlarını terminal üzerinde ``tab`` tuşu ile tamamlamanız mümkün olmuyor. Ama bunu bash üzerinde bir kaç işlem yaptıkdan sonra mümkün kılmak oldukça kolaydır.

Git bu konuda hazırladığı repository üzerinden edinerek terminal üzerinde ``tab`` tuşunu kullanarak git komutlarını otomatik olarak tamamlamayı aktive edebiliriz.
	
## Git Komutlarını Terminal Üzerinde Otomatik Tamamlama

Git komutlarını otomatik olarak tamamlamak için ilk olarak [Git Completion] sayfasında bazı dosyaları locale indirilip, çalıştırılmalıdır. 

Bunu için Terminalde;

```bash
curl "https://raw.github.com/git/git/master/contrib/completion/git-completion.bash" -o ~/.git-completion.bash
```
kod satırını çalıştırarak pratik bir şekilde indirebilirsiniz. Yada bir diğer yol olan, [Git Completion] sayfasından ``git-completion.bash`` dosyasını locale'de user dosyanızın içine kayıt edip, dosya adını başına nokta koyarak değiştirip, gizleyebilirsiniz.

Daha sonra ``git-completion.bash`` dosyasını çalıştırmak için Terminale;
```bash
export ~/.git-completion.bash
```
kod satırını çalıştırarak, git komutlarını ``tab`` tuşu ile listelenebilir hale getirebilirsiniz. Denemek için bu kod satırını çalıştırdıktan sonra Terminalde git yazdıktan sonra iki kere ``tab`` tuşuna bastığınızda git komutlarının listesi önünüze gelecektir.

Bu noktada, Terminal penceresini kapattığınızda bir sonraki açtığınız Terminal penceresi için tekrar bu bash dosyasını export etmeniz gerekecektir. Her seferinde bunu yapmamak için, gene user dosyası içerisinde ``.bash_profile`` dosyası bulunmaktadır. Bu noktada başka bir bilgi vermeliyim. Bazen bu dosya default olarak oluşturulmuyor. Bunu anlamak için terminalde 

```bash
ls -a ~/.bash_*
```
kod satırını çalıştırdığınızda listelenmesi gerekir. Eğer bu satırı çalıştırdığınızda göremiyorsanız basit bir şekilde;

```bash
touch ~/.bash_profile
```
kod satırını çalıştırarak ``.bash_profile`` dosyasını oluşturmuş olursunuz.

``.bash_profile`` dosyası her bir terminal penceresi açıldığında çalıştırılması istenen kod satırlarını çalıştırmak için kullanılır. Bu dosyayı her hangi bir text editörü ile açarıp içerisinde export satırını yazarak, Terminal penceresi her açıldığında git komutlarıda terminal tarafından export edilmiş olur.

[Git Completion]:https://github.com/git/git/tree/master/contrib/completion