<script setup>
import { useData } from 'vitepress';
const { lang, page } = useData()
import { getBlogDateString, formatReadingTime } from '../../utils/date';
import { $translate } from '../../data/translations';
import { data } from "../../data/blog.data";

import Breadcrumb from './Breadcrumb.vue';
import Tags from './Tags.vue';
import IconClock from '../Icons/Clock.vue';
import IconBook from '../Icons/Book.vue';

const { blogs } = data;
const frontmatter = page.value.frontmatter;
const postDate = getBlogDateString(frontmatter, lang.value);

const blog = blogs.find(item => {
    return ("/" + page.value.relativePath).includes(item.url)
});
</script>

<template>
    <article>
        <Breadcrumb />
        <h2 class="text-3xl mb-6 dark:text-slate-300 font-medium" v-text="page.title" />
        <div class="block text-sm text-slate-500 mr-2 mt-[-16px] mb-[16px]">
            <span class="inline-block mr-6">
                <IconClock class="w-4 h-4 inline-block align-text-bottom" />
                {{ postDate }}
            </span>
            <span class="inline-block mr-6 text-slate-500">
                <IconBook class="w-5 h-5 inline-block align-bottom" />
                {{ blog.readingTime.words }} {{ $translate('words') }} · {{ formatReadingTime(blog.readingTime.time,
                    lang) }}
            </span>
            <Tags />
        </div>
        <Content />
    </article>
</template>
