<script setup>
import { useData } from 'vitepress';
import IconTag from '../Icons/Tag.vue';
const { lang, frontmatter } = useData()
let tags = frontmatter.value.tags
import { slugify } from '../../utils/slugify';
console.debug("tags", tags);
tags = typeof tags === 'string' ? tags.split(',').map(tag => tag.trim()) : [];
console.debug("tags", tags);
</script>

<template>
    <div class="inline-block">
        <span v-for="tag in tags"
            class="mr-2 mt-2 inline-flex items-center rounded-md bg-slate-50 dark:bg-slate-700 px-2 py-1 text-xs font-medium ring-1 ring-inset ring-gray-500/10 dark:ring-gray-500/20 text-slate-400 dark:text-slate-500">
            <IconTag class="mr-1 h-3 w-3 inline-block" />
            <a :href="`/tag/${lang}/${slugify(tag)}`" class="text-tt-link mr-1 tag" v-text="tag" />
        </span>
    </div>
</template>

<style scoped>
.tag:not(:last-child)::after {
    content: ",";
    @apply text-slate-700 dark:text-slate-400;
}
</style>