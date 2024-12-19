<script setup>
import { useData } from 'vitepress';
import { onMounted, watchEffect } from 'vue';
import { $translate } from '../data/translations';
const { page } = useData()
onMounted(() => {
    watchEffect(() => {
        let pathName = window.location.pathname;
        //Forcing page path to end with /
        if (/\.html$/.test(pathName)) {
            page.value.title = "Redirected"
            window.location.pathname = pathName.replace(/\.html$/g, "/");
        }
        else if (!/\/$/.test(pathName)) {
            page.value.title = "Redirected"
            window.location.pathname += "/";
        } else {
            page.value.title = "404 Not Found";
        }
    })
})
</script>
<template>
    <div class="m-4 text-xl font-normal">{{ $translate('page-not-found') }}</div>
</template>