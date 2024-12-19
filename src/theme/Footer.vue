<script setup>
const year = new Date().getFullYear();
</script>

<template>
    <div class="container text-center text-xs my-5">
        Copyright © 2010-{{ year }} Tevfik Tümer<br>
        Powered by <a href="https://vitepress.dev/" target="_blank">VitePress</a> ❤️
    </div>
</template>