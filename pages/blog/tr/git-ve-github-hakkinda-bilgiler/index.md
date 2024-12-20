---
title: Git ve GitHub Hakkında Bilgiler
lang: tr
short: "<div class=\"float-left mr-[1rem] mt-[1rem] dark:bg-slate-700\"> <img src=\"/images/blogs/git-ve-github-hakkinda-bilgiler/Git-logo.png\" alt=\"Git Logo\" class=\"max-h-[60px]\"></div><p><strong>Git</strong>, dosya ve klasörlerinizi takip eden bir <strong>Kaynak Kod Yönetim (Source Code Managment)</strong> programıdır. Daha çok metin belgesi/döküman değişikliklerini takip etmek için kullanılır. </p> <p>Git'i kullanarak bir grup içinde birbirinden bağımsız bir şekilde kod yazabilir, sadece bir komut ile yapılan değişiklikleri lokal sisteminize indirebilir, değişikliklere bakabilir, dosya ve değişiklikleri birbirleri arasında karşılaştırabilir ve belirli tarihlerdeki versiyonları kendi aralarında kıyaslama yapmanızı sağlayabilirsiniz. Bu sadece yapabileceklerinizin bir kısmıdır. Kısacası yapabileceklerinizin listesi oldukça uzun ve alışkanlık edindikten sonra asla bırakamayacağınız bir araçtır.
<a href=\"https://github.com\">GitHub</a>, üzerinden Git kullanabileceğiniz servis sağlayıcıdır. Git'i kendi bilgisayarınızda...</p>"
created_at: "2016-08-21T01:02:08+0000"
published_at: "2013-02-22T10:15:34+0000"
tags: Git, GitHub
---
<script setup>
import { withBase } from 'vitepress'
</script>

## Git nedir? ve Ne için kullanılır? 

<div class="float-left mr-[1rem] mt-[1rem] dark:bg-slate-700"> 
    <img :src="withBase('/images/blogs/git-ve-github-hakkinda-bilgiler/Git-logo.png')" alt="Git Logo" class="max-h-[60px]">
</div>

**Git**, dosya ve klasörlerinizi takip eden bir **Kaynak Kod Yönetim (Source Code Managment)** programıdır. Daha çok metin belgesi/döküman değişikliklerini takip etmek için kullanılır.

Varsayalım ki üç programcı birlikte kod geliştirmeye karar verdiler. Projeleri boyunca birbirlerinin kodlarından haberdar olmaları ve kimin hangi kod bölümünü yazdıklarından haberdar olmaları gerekmektedir. Projelerin boyutları büyüdükçe hata düzenlemeleri, yeni eklentiler ve modüller eklendikçe bu tarz kaynak kod kontrolünü yapmak neredeyse imkansıza ulaşıyor.

İşte tam bu noktada **Git** devreye giriyor. Git'i kullanarak bir grup içinde birbirinden bağımsız bir şekilde kod yazabilir, sadece bir komut ile yapılan değişiklikleri lokal sisteminize indirebilir, değişikliklere bakabilir, dosya ve değişiklikleri birbirleri arasında karşılaştırabilir ve belirli tarihlerdeki versiyonları kendi aralarında kıyaslama yapmanızı sağlayabilirsiniz. Bu sadece yapabileceklerinizin bir kısmıdır. Kısacası yapabileceklerinizin listesi oldukça uzun ve alışkanlık edindikten sonra asla bırakamayacağınız bir araçtır.

## Git'in Ani ve Başarılı Ortaya Çıkışı
	
Git geliştirilmeye başlanana kadar daha önce bir çok kaynak kod kontrol sistemi bulunmaktaydı. 1972'den bu yana gelişerek ilerleyen kaynak kod kontrol sistemleri; 2005'in başında ilginç bir olayla Git'in doğmasına sebep olmuştur. 2000'lere kadar bir çok değişikliklere uğrayan Kaynak Kod Kontrol sistemleri 2000 lerde çok fazla da popüler olmayan dağınık/parçalı(Distributed) versiyon kontrol sistemi olan BitKeeper'in bir politika değişikliği sebebiyle Git doğmuştur.

BitKeeper kapalı bir kaynak kod kontrol sistemi olsada, topluluk(Community) olarak kullanımlarda bedava kullanıma sahipti. En vurucu özelliği olan dağınık/parçalı(Distributed) versiyon kontrol olması nedeniyle 2002-2005'e kadar Linux kaynak kodları burada geliştirilmeye başlanmıştı. Bu süreçte bir çok zıt durumlar da mevcuttu. Linux, bir açık kaynak sistem olmasına rağmen, kapalı kaynak bir serviste geliştiriliyordu. Aynı zamanda BitKeeper aniden bedava olan, topluluk(Community) versiyonunu işletmeyi durmasıydı. Malesef ki, korkulan başlarına geldi. 2005'e BitKeeper artık ücretsiz servis vermeyi durdurdu. Bunun üzerine Linux kendi Kaynak Kod Kontrol sistemini geliştirmeye başladı. Kısacası **Git** doğdu.

Git, 2005 yılının Nisan ayında [Linus Torvalds] tarafından geliştirilmeye başlanmıştır. Linus Torvalds bildiğiniz üzere aynı zamanda Linux'un kurucusu ve baş geliştiricisidir. 2005 den bu yana Git çok başarılı işler başarıp daha önceki versiyon kontrol sistemlerine kıyasla bazı durumlarda 100 katdan fazla daha hızlı olmuştur. Bilinen büyük şirketlerden Google, Facebook, Microsoft, Twitter gibi ve daha bir çok [ünlü şirketler] Git kullanarak günümüzde kullandığımız mükemmel projeleri ortaya çıkarıyor ve kodlarını hızlı bir şekilde kontrol ediyorlar. 

[Linus Torvalds]: http://tr.wikipedia.org/wiki/Linus_Torvalds
[ünlü şirketler]: http://git-scm.com/#companies-projects

## GitHub nedir?

<div class="float-right ml-[1rem] mt-[1rem]"> 
    <img :src="withBase('/images/blogs/git-ve-github-hakkinda-bilgiler/GitHub-Logo.png')" alt="GitHub Logo" class="max-h-[60px]">
</div>

[GitHub], üzerinden Git kullanabileceğiniz servis sağlayıcıdır. Git'i kendi bilgisayarınızda kendi başınıza kullanabildiğiniz gibi, kendi server'inizida kurarak dünyanın öbür ucundaki arkadaşlarınızla projenizi geliştirebilirsiniz. GitHub, bu noktada kendi sistemlerini kurabilecek bütçesi olmayan insanlara mükemmel bir servis sağlayan sistemdir. 	

[GitHub] adresini takip ederseniz, açık kaynak kullanımda sınırsız bir şekilde sistemi kullanabiliyorsunuz. Ama şirket olarak çalışmak yada projelerinizin kodlarını diğer insanlarla paylaşmak istemiyorsanız çok düşük fiyatlara kapalı kaynak projelerde oluşturabiliyorsunuz.

<div class="float-left pr-[1rem] pb-[0.5rem]"> 
    <img :src="withBase('/images/blogs/git-ve-github-hakkinda-bilgiler/octodex-original.jpg')" alt="GitHub Octodex Logo" class="max-h-[60px]">
</div>

Aslında bu servisin en güzel yanlarından birisi; sadece bir proje hedefi olan insanlar için olmadığı gibi hiç bir proje hedefi olmayan kişiler için kendilerine yeni projeler bulmalarına yardımcı olmalası da şahsi olarak çok sevdiğim yönlerinden birisidir. GitHub'da kod üreterek yeni insanlar tanıyabilir, bildiğiniz dilleri geliştirebilir, yeni algoritmik yapıları keşif edebilir, belkide iş imkanı bile bulabilirsiniz. Bunun için yapmanız gereken GitHub'a üye olduktan sonra var olan açık kaynak projelerde gezinip bildiğiniz diller çerçevesinde projelere göz atabilir, beğendiğiniz bir projeyi kendi projeleriniz arasına alabilir (forking), o projeden bağımsız devam edebilir yada yaptığınız yenilikleri birleştirilmesi için proje sahiplerine gönderme talebinde bulunabilirsiniz.

[GitHub]: http://github.com
