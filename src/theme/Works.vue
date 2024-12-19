<script setup>
import { withBase } from 'vitepress'
import { works } from "../data/works";
</script>

<template>
    <div class="m-6 border border-slate-200 rounded dark:border-slate-600" v-for="work in works">
        <div
            class="rounded-t p-3 px-4 border-b border-slate-200  dark:border-slate-600 bg-slate-50 dark:bg-slate-700 w-full">
            <a :href="work.link" v-text="work.name" class="text-tt-darker dark:text-tt" />
        </div>
        <div class="p-3">
            <span
                class="inline-flex items-center rounded-md bg-slate-50 px-2 py-1 text-xs font-medium text-slate-600 dark:bg-slate-700 dark:text-slate-400 ring-1 ring-inset ring-gray-500/10 m-1"
                v-for="tag in work.tags">
                <svg class="mr-1 h-5 w-5 flex-none stroke-slate-400" fill="none" viewBox="0 0 24 24" stroke-width="2"
                    stroke-linecap="round" stroke-linejoin="round">
                    <path
                        d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z">
                    </path>
                </svg> <span v-text="tag" />
            </span>
            <div class="flex justify-around mt-3">
                <div class="bg-white rounded-t-xl shadow-xl" :style="'max-width:' + work.maxWidth + 'px;'">
                    <div
                        class="py-2 px-3 rounded-t-xl h-10 flex justify-between bg-[#eae7ec] text-[#505050] border-b-[#ddddde] border-t-[#f9f8fb]">
                        <div class="flex space-x-2 items-center">
                            <a class="block bg-[#fc615d] w-3.5 h-3.5 rounded-full" href="#"></a>
                            <a class="block bg-[#fdba48] w-3.5 h-3.5 rounded-full" href="#"></a>
                            <a class="block bg-[#3cc54f] w-3.5 h-3.5 rounded-full" href="#"></a>
                        </div>
                        <div v-text="work.name" />
                        <div class="flex space-x-2 items-center invisible">
                            <a class="block bg-[#fc615d] w-3.5 h-3.5 rounded-full" href="#"></a>
                            <a class="block bg-[#fdba48] w-3.5 h-3.5 rounded-full" href="#"></a>
                            <a class="block bg-[#3cc54f] w-3.5 h-3.5 rounded-full" href="#"></a>
                        </div>
                    </div>
                    <div>
                        <img :src="withBase(work.img)">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>