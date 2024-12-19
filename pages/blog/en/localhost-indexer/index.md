---
title: Localhost Indexer
lang: en
short: "<p>I've been working on multiple projects at either work or home. Apache comes with its Directory Listing feature. It is quite handy to reach local sites that located in your localhost using Apache's Directory Listing. </p> <p>But! If you have multiple projects/websites in your localhost and these are increasing (all other test purposes projects), it's quite difficult to handle all these installations using directory listing.</p>"
tags: Github, Projects, Apache, Localhost
date: 2016-11-13 02:00:29
created_at: "2016-11-13T01:46:10+0000"
published_at: "2016-11-13T10:00:29+0000"
---

I've been working on multiple projects at either work or home. Apache comes with its Directory Listing feature. It is quite handy to reach local sites that located in your localhost using Apache's Directory Listing. 

But! If you have multiple projects/websites in your localhost and these are increasing (all other test purposes projects), it's quite difficult to handle all these installations using directory listing. 

Last year, on a random weekend, I had just started to modify around directory listing then I noticed that it isn't that much flexible. 

My requirements were;
- Search/filter in between the files on the list view
- Browse files and folders
- Be able to view/edit right in the browser, if it's a text-based file. (php, txt, log, etc.)
- Order by Size, Name and Last Modified
- Better look, at least proper fonts and color

After playing around I was able to easily built almost all the features I was looking for. I called it; [Localhost Indexer]

It is quite easy to use it. All you need to do follow [Usage] in GitHub.

**ScreenShot**
<div class="pl-2 pb-2"> 
	<img src="https://raw.githubusercontent.com/tevfik6/LocalhostIndexer/master/ScreenShot01.png" alt="Localhost Indexer">
</div> 

**Notes**;

- I assume that you have knowledge of [mod_rewrite](http://httpd.apache.org/docs/current/mod/mod_rewrite.html), [AllowOverride](http://httpd.apache.org/docs/2.4/mod/core.html#allowoverride),  [DirectoryListings](https://wiki.apache.org/httpd/DirectoryListings).
- I've built and tested this project with an Apple Macbook using Apache/PHP. __I did not do any testings on Windows__. Although I did not test on Linux, it should work as it works on Mac.
- If you find a bug, please file an issue using [this form](https://github.com/tevfik6/LocalhostIndexer/issues/new). If you don't have any access to GitHub, please leave a comment here. 

[Localhost Indexer]: https://github.com/tevfik6/LocalhostIndexer
[Usage]: https://github.com/tevfik6/LocalhostIndexer#usage