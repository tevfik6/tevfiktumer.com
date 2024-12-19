<script setup>
import { ref, watch, watchEffect } from 'vue'
import { useData } from 'vitepress';
const { lang, page } = useData()

const showDD = ref(false)
let section;

const redirectLang = newLang => {
    console.debug("redirectLang", newLang, lang.value, page.value, section);
    if (lang.value != newLang) {
        let section = page.value.relativePath.split('/')[0];
        if (['blog', 'about', 'works', 'tag'].includes(section)) {
            if (section === 'tag') {
                section = 'blog';
            }
            const paths = [section];
            if (newLang !== 'en' && !(section === 'about' || section === 'works')) {
                paths.push(newLang);
            }
            window.location.href = `/` + paths.join("/") + `/`;
        }
    }
}

// get from storage set the state of the button
const languageState = ref(lang.value);
// redirectLang(lang.value);
watch(() => languageState.value, newLang => {
    console.log('languageState', newLang);
    redirectLang(newLang);
})

let toggleDD = () => {
    showDD.value = !showDD.value
    if (showDD.value) {
        window.addEventListener('click', clickEvent)
    } else {
        window.removeEventListener('click', clickEvent)
    }
}
const clickEvent = (e) => {
    const button = e.target.closest('button');
    if (!button || !button.classList.contains("language")) {
        showDD.value = false;
        window.removeEventListener('click', clickEvent)
    }
}
const languages = [
    { short: 'en', label: "English", icon: "🇬🇧" },
    { short: 'tr', label: "Türkçe", icon: "🇹🇷" },
    // { short: 'de', label: "Deutsch", icon: "🇩🇪" },
];

const toggleDDbak = toggleDD;
const isClickable = ref(true);

let currentLang;
// temporarily fix the about and works section to english
watchEffect(() => {
    const relativePath = page.value.relativePath;
    const [section] = relativePath.split('/');
    if (!['blog', 'tag'].includes(section)) {
        languageState.value = 'en';
        toggleDD = e => { };
        languages.splice(1, 1);
        isClickable.value = false;
    } else if (languages.length === 1 && relativePath != 'index.md') {
        toggleDD = toggleDDbak;
        isClickable.value = true;
        languages.push({ short: 'tr', label: "Türkçe", icon: "🇹🇷" });
    }
    currentLang = languages.find(language => language.short === languageState.value);
})

</script>

<template>
    <button class="language text-2xl" :disabled="!isClickable" type="button" @click="toggleDD"
        v-text="currentLang.icon" />
    <ul v-if="showDD"
        class="absolute z-50 top-full border dark:border-slate-50/[0.06] right-16 bg-white rounded-lg ring-1 ring-slate-900/10 shadow-lg overflow-hidden w-30 py-1 text-sm text-slate-700 font-semibold dark:bg-slate-800 dark:ring-0 dark:highlight-white/5 dark:text-slate-300 mt-2">
        <li class="py-1 px-2 flex items-center hover:bg-slate-50 cursor-pointer hover:dark:bg-slate-600/30"
            v-for="language of languages" :class="{
                'tt-active': languageState === language.short
            }" role="option" tabindex="-1" aria-selected="false" @click="languageState = language.short">
            <span v-text="language.icon" class="text-xl" /> <span class="ml-2" v-text="language.label" />
        </li>
    </ul>
</template>

<style>
.tt-active {
    color: #ea6d62;
}
</style>