<script setup>
import { watchEffect, watch, ref } from 'vue';
import { useData } from 'vitepress';
import Icon from './Logo.vue';
import ColorMode from './ColorMode.vue';
import Language from './Language.vue';
import { $translate } from '../../data/translations';
import IconGithub from '../Icons/Github.vue';
import IconBluesky from '../Icons/Bluesky.vue';
const { page, site } = useData();
let navLinks = site.value.themeConfig.nav;
let openMobileMenu = ref(false);

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
// watch relative path to reset the mobile menu
watch(() => page.value.relativePath, () => {
    openMobileMenu.value = false;
})
const toggleMobileMenu = () => {
    openMobileMenu.value = !openMobileMenu.value;
}
</script>

<template>
    <div class="sticky top-0 z-40 w-full mb-16 sm:mb-0">
        <div class="absolute sm:static container p-0 sm:px-8 sm:py-3 flex items-center justify-between flex-col sm:flex-row border-b-0 sm:border-b border-slate-900/10 dark:border-slate-50/[0.06] backdrop-blur-md flex-none transition-colors bg-transparent"
            :class="{
                'backdrop-blur-2xl': openMobileMenu,
            }">
            <div
                class="flex justify-between w-full sm:w-auto py-3 px-8 sm:p-0 border-b border-slate-900/10 dark:border-slate-50/[0.06] ">
                <div class="flex items-center space-x-4">
                    <Icon></Icon>
                </div>
                <div class="flex items-center space-x-4 ml-auto sm:hidden">
                    <button class="space-y-1.5" @click="toggleMobileMenu">
                        <div class="w-6 h-0.5 bg-slate-500"></div>
                        <div class="w-6 h-0.5 bg-slate-500"></div>
                        <div class="w-6 h-0.5 bg-slate-500"></div>
                    </button>
                </div>
            </div>
            <div class="relative sm:flex items-center sm:ml-auto" :class="{
                'border-b sm:border-b-0 border-slate-900/10 dark:border-slate-50/[0.06]': openMobileMenu,
                'hidden': !openMobileMenu
            }">
                <nav class="text-sm leading-6 font-semibold">
                    <ul class="flex flex-col sm:flex-row" :class="{
                        'space-x-1': !openMobileMenu
                    }">
                        <li v-for=" nav of navLinks" :class="{
                            'text-tt-link/90 hover:text-tt-link': isActive(nav.link),
                            'hover:text-slate-500 dark:hover:text-slate-300': !isActive(nav.link)
                        }">
                            <a :href="nav.link" v-text="$translate(nav.key)"
                                class="dark:hover:bg-slate-700 px-9 py-4 sm:px-4 sm:py-2 rounded-none sm:rounded-lg border-b sm:border-none block sm:inline-block hover:bg-slate-100  border-slate-900/10 dark:border-slate-50/[0.06]"></a>
                        </li>
                    </ul>
                </nav>
                <div
                    class="flex items-center border-slate-900/10 dark:border-slate-50/[0.06] border-b sm:border-b-0 sm:border-l space-x-10 sm:space-x-8 px-10 sm:px-0 sm:pl-6 ml-0 sm:ml-2 justify-center">
                    <Language />
                    <ColorMode />
                    <a href="https://bsky.app/profile/tevfik6.bsky.social" target="_blank"
                        class="block text-slate-400 hover:text-slate-500 dark:hover:text-slate-300" :class="{
                            'p-4 sm:p-0': openMobileMenu
                        }">
                        <span class="sr-only">on Bluesky</span>
                        <IconBluesky class="w-5 h-5" />
                    </a>
                    <a href="https://github.com/tevfik6" target="_blank"
                        class="block text-slate-400 hover:text-slate-500 dark:hover:text-slate-300" :class="{
                            'p-4 sm:p-0': openMobileMenu
                        }">
                        <span class="sr-only">on GitHub</span>
                        <IconGithub class="w-5 h-5" />
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>