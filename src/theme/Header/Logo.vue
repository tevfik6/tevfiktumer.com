<script setup>
// import { useData } from 'vitepress';
// import { watchEffect } from 'vue';
// const { lang } = useData()
let href = "/";
// watchEffect(() => {
//     href = "/" + (lang.value !== 'en' ? lang.value : '');
// })
</script>
<template>
    <a id="logo-container" class="bg-tt inline-block text-white rounded-sm" :href="href">
        <div
            class="border border-1 border-dashed border-white inline-block py-0.5 px-[0.3rem] m-0.5 rounded-sm font-bold text-xl font-serif">
            t<span class="inline-block rotate-180 pr-1">t</span>
        </div>
    </a>
</template>