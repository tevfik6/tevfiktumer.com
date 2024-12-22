<script setup>
import { ref, onMounted, watch, watchEffect, nextTick } from 'vue'
import { useData } from 'vitepress';
import IconSun from '../Icons/Sun.vue';
import IconMoon from '../Icons/Moon.vue';
import IconSystem from '../Icons/System.vue';
import { $translate } from '../../data/translations';
const APPEARANCE_KEY = 'tt-color-mode';
const isDark = ref(false)
const isMediaDark = ref(false)
const showDD = ref(false)
// get from storage set the state of the button
const buttonState = ref()
watch(buttonState, (state) => {
    // store the state in the storage
    if (state === "system") {
        localStorage.removeItem(APPEARANCE_KEY)
    } else {
        localStorage.setItem(APPEARANCE_KEY, state)
    }
})

onMounted(() => {
    isMediaDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches;
    buttonState.value = localStorage.getItem(APPEARANCE_KEY) || "system";
    window.matchMedia('(prefers-color-scheme: dark)').onchange = (e) => isMediaDark.value = e.matches;
    watchEffect(() => {
        // Adding relative path to trigger watchEffect in general to update dark class. 
        const relativePath = page.value.relativePath;
        // update the theme based on choice
        if (buttonState.value === 'dark' || (buttonState.value === 'system' && isMediaDark.value)) {
            nextTick(() => {
                document.documentElement.classList.add('dark')
                isDark.value = true;
            })
        } else {
            nextTick(() => {
                document.documentElement.classList.remove('dark')
                isDark.value = false;
            })
        }
    })
})
const { page } = useData();

const toggleDD = () => {
    showDD.value = !showDD.value
    if (showDD.value) {
        window.addEventListener('click', clickEvent)
    } else {
        window.removeEventListener('click', clickEvent)
    }
}
const clickEvent = (e) => {
    const button = e.target.closest('button');
    if (!button || !button.classList.contains("color-scheme")) {
        showDD.value = false;
        window.removeEventListener('click', clickEvent)
    }
}

const buttons = [
    { type: 'light', label: $translate('dark_mode.light'), iconComponent: IconSun },
    { type: 'dark', label: $translate('dark_mode.dark'), iconComponent: IconMoon },
    { type: 'system', label: $translate('dark_mode.system'), iconComponent: IconSystem }
];
</script>

<template>
    <button type="button" class="px-4 sm:px-0 color-scheme ml-6 hover:text-slate-500 dark:hover:text-slate-300"
        @click="toggleDD">
        <IconMoon v-if="isDark" :isActive="buttonState === 'dark'" />
        <IconSun v-else :isActive="buttonState === 'light'" />
    </button>
    <ul v-if="showDD"
        class="absolute z-50 top-full border dark:border-slate-50/[0.06] right-2.5 sm:right-10 bg-white sm:rounded-lg sm:ring-1 ring-slate-900/10 shadow-lg overflow-hidden sm:w-30 py-1 text-sm text-slate-700 font-semibold dark:bg-slate-800 dark:ring-0 dark:highlight-white/5 dark:text-slate-300 mt-[-1px] sm:mt-2 flex sm:block sm:ml-0">
        <li class="py-1 px-2 flex items-center cursor-pointer hover:bg-slate-50 hover:dark:bg-slate-600/30"
            v-for="button of buttons" :class="{
                'tt-active': buttonState === button.type
            }" role="option" tabindex="-1" aria-selected="false" @click="buttonState = button.type">
            <component :is="button.iconComponent" class="mr-2" :isActive="buttonState === button.type" /> {{
                $translate('dark_mode.' + button.type) }}
        </li>
    </ul>
</template>

<style>
.tt-active {
    color: #ea6d62;
}
</style>