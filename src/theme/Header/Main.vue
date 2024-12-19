<script setup>
import { watchEffect } from 'vue';
import { useData } from 'vitepress';
import Icon from './Logo.vue';
import ColorMode from './ColorMode.vue';
import Language from './Language.vue';
import { $translate } from '../../data/translations';
import IconGithub from '../Icons/Github.vue';
import IconBluesky from '../Icons/Bluesky.vue';
const { page, site } = useData();
let navLinks = site.value.themeConfig.nav;

const isActive = (link) => {
    const sections = page.value.relativePath.split("/");
    const linkSections = link.split("/").filter(i => i != "");
    return linkSections.length > 0 && sections[0] != "index.md"
        ? sections[0].toLowerCase() === linkSections[0].toLowerCase()
        : linkSections[0] === "about";
}
watchEffect(() => {
    navLinks = site.value.themeConfig.nav.reduce((acc, nav) => {
        const copyNav = JSON.parse(JSON.stringify(nav));
        if (site.value.lang != "en") {
            copyNav.link += site.value.lang + "/";
        }
        acc.push(copyNav);
        return acc;
    }, []);
})
</script>

<template>
    <div class="sticky top-0 z-40 w-full backdrop-blur-md flex-none transition-colors bg-white/30 dark:bg-transparent">
        <div
            class="container border-b border-slate-900/10 dark:border-slate-50/[0.06] px-8 py-3 flex items-center justify-between">
            <div class="flex items-center space-x-4">
                <Icon></Icon>
            </div>
            <div class="relative hidden sm:flex items-center ml-auto">
                <nav class="text-sm leading-6 font-semibold">
                    <ul class="flex space-x-1">
                        <li v-for="nav of navLinks" :class="{
                            'text-tt-link/90 hover:text-tt-link': isActive(nav.link),
                            'hover:text-slate-500 dark:hover:text-slate-300': !isActive(nav.link)
                        }">
                            <a :href="nav.link" v-text="$translate(nav.key)"
                                class="px-4 py-2 dark:hover:bg-slate-700 rounded-lg"></a>
                        </li>
                    </ul>
                </nav>
                <div class="flex items-center border-l ml-6 pl-6 border-slate-900/10 dark:border-slate-50/[0.06]">
                    <Language />
                    <ColorMode />
                    <a href="https://bsky.app/profile/tevfik6.bsky.social" target="_blank"
                        class="ml-6 block text-slate-400 hover:text-slate-500 dark:hover:text-slate-300">
                        <span class="sr-only">on Bluesky</span>
                        <IconBluesky class="w-5 h-5" />
                    </a>
                    <a href="https://github.com/tevfik6" target="_blank"
                        class="ml-4 block text-slate-400 hover:text-slate-500 dark:hover:text-slate-300">
                        <span class="sr-only">on GitHub</span>
                        <IconGithub class="w-5 h-5" />
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>