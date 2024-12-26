---
title: Hosting My Pages from GitHub
lang: en
short: "<p>It has been quite some time since I wrote a new blog post. Over the past couple of years, various ongoing issues kept me from writing. irst of all, I’ve been targeted...</p>"
tags: Github, Vitepress, Vite
date: 2016-11-04 02:00:40
created_at: "2024-12-26T22:03:00+0200"
published_at: "2024-12-26T23:00:00+0200"
---

# Hosting My Pages from GitHub

It has been quite some time since I wrote a new blog post. Over the past couple of years, various ongoing issues kept me from writing.

First of all, I’ve been targeted by some kind of Brazilian hackers launching DDoS attacks on sites and comment sections of blogs. Additionally, life has been quite demanding. Balancing various responsibilities, coupled with global events, added to the challenges.

Long story short, I couldn't continue working on my Laravel projects for the blog and eventually decided to focus on more generic solutions.

## GitHub Pages

For some time, [GitHub Pages] had been on my mind. My first idea was to use the [GitHub] API to create a base page where I could pull content from a repository I’d created and build personal pages and relatively static blogs. Of course, it required much more effort than I initially anticipated.

While researching how to build such pages, I discovered (unsurprisingly) a multitude of existing projects in various languages like Rust, Go, and JavaScript designed for static page generation tailored to [GitHub Pages].

## Vitepress

I love those coincidences where you’re looking for something, and around the same time, something new emerges that aligns with your needs. During this period, Evan announced a release candidate for [Vitepress]. At first, I found it far more complex than expected. However, as I delved deeper into the documentation, things started making sense, and I became excited to start building.

Life, however, got in the way. We had to move to a new apartment, which delayed my plans. As you might guess, moving always takes more time than anticipated.

Over time, I kept track of [Vitepress]’s development and started experimenting with it locally. [Vitepress] is truly impressive—it allowed me to create custom themes, offered light/dark theme support (although I built my own variation), multilingual support, and simple rewrites/redirections. It had more features than I initially needed.

Since [Vitepress] is designed for fully static websites, incorporating tags and pagination posed additional challenges. It’s still an area for improvement, but I managed to make it work for now.

Just before the start of the new year, I found a spare week to focus on this project and finally completed it. This is the first blog post I’m writing using my new setup.

## Details on the Current Setup

Previously, I used [Laravel] hosted on [DigitalOcean]. [Laravel]’s PHP capabilities made certain tasks faster and easier. However, it came with its own costs and challenges. By transitioning to [Vitepress] and [GitHub], I’ve reduced costs significantly while benefiting from GitHub’s built-in features.

In my previous setup, I had built a custom photo/image manager and markdown editor as a fun weekend project. While I initially wanted similar tools here, I realized I rarely used the photo/image manager. This functionality could now be handled manually.

In this project, each post resides in a folder named after its slug. The content starts with frontmatter, followed by markdown. This setup enables me to use GitHub’s editing interface directly or create posts in my preferred editor, VSCode. The only slight inconvenience is handling new images, but I’ve found manual updates manageable. With [GitHub Workflows], publishing pages is straightforward.

## Challenges and Future Improvements

As mentioned earlier, implementing tags and pagination presented challenges. I explored various approaches used by other developers but aimed for a clean structure like `/blog/language/page/1`. Similarly, for tags: `/tag/<tagname>` and `/tag/<tagname>/page/1`. I created a script that generates this folder structure with minimal frontmatter to keep track of navigation.

I should also mention my love for [Tailwindcss]. It allowed me to quickly build most of the layout. However, since I was working under time constraints, some aspects could be refined.

1. Over time, managing all these posts might become cumbersome. I may need a more efficient metadata structure to reduce space usage and improve loading times.
2. The layout could use refactoring for better organization and clarity.
3. My initial implementation of [Tailwindcss] grouped styles wherever possible but could benefit from cleaner, more maintainable code.

Despite these areas for improvement, the current setup works seamlessly—hopefully. 🤞🏼

## Summary

I’m thrilled to be building with [Vitepress] and [Vue.js] again. I’m also glad that I can stick to my favorite editor to create content. Hopefully, this new setup will encourage me to log more progress over time.

[GitHub]:https://github.com
[GitHub Pages]:https://pages.github.com
[GitHub Workflows]:https://docs.github.com/en/actions/writing-workflows/quickstart
[Tailwindcss]:https://tailwindcss.com
[Vitepress]:https://vitepress.dev/guide/what-is-vitepress
[Vue.js]:https://vuejs.org
[Laravel]:https:/laravel.com
[DigitalOcean]:https://digitalocean.com