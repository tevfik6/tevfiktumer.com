<script setup>
import { useData } from 'vitepress';
import Header from './Header/Main.vue';
import Footer from './Footer.vue';
import Blog from './Blog/Main.vue';
import NotFound from './NotFound.vue';
import About from './About.vue';
import Works from './Works.vue';
const { frontmatter, page } = useData()
</script>

<template>
    <div class="antialiased flex flex-col min-h-screen text-slate-700 dark:text-slate-400 bg-white dark:bg-slate-800">
        <Header></Header>
        <div class="flex-grow px-7 container">
            <NotFound v-if="page.isNotFound" />
            <Works v-else-if="'works' === frontmatter.layout" />
            <About v-else-if="'about' === frontmatter.layout" />
            <Blog v-else />
        </div>
        <Footer></Footer>
    </div>
</template>