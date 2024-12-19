<script setup>
import { $translate } from '../../data/translations';
import { useData } from 'vitepress';
import { data } from "../../data/blog.data";
import BlogPagination from './Pagination.vue';
import { watchEffect } from 'vue';
import { formatReadingTime } from '../../utils/date';

const { blogs, postsPerPage } = data;
const { lang, frontmatter } = useData()
const perPage = postsPerPage;
// Full Post
let blogPosts;
let index, pageNumber, activeTag, total;

import { getBlogDateString } from "../../utils/date";
import IconClock from '../Icons/Clock.vue';
import IconBook from '../Icons/Book.vue';

const hasTag = (tags, tag) => tags && Object.keys(tags).includes(tag);

watchEffect(() => {
    activeTag = frontmatter.value.tag;
    index = frontmatter.value.index === true;
    pageNumber = frontmatter.value.pagination || 1;
    console.debug({ index, pageNumber });
    blogPosts = blogs.filter(item =>
        (item.lang == lang.value)
        && (activeTag == 'personal' || !hasTag(item.tags, 'personal'))
        && (!activeTag || hasTag(item.tags, activeTag))
    );
    total = blogPosts.length;
    blogPosts = blogPosts.splice((pageNumber - 1) * perPage, perPage);
})
</script>

<template>
    <section v-for="blog in blogPosts" class="mt-9 pt-9 border-t first:border-t-0 first:mt-0 dark:border-slate-600">
        <h2 class="text-3xl mb-6 dark:text-slate-300 font-medium">
            <a :href="blog.url" v-text="blog.title" />
        </h2>
        <div v-html="blog.short" />
        <div class="flex items-center justify-between mt-4">
            <a :href="blog.url" v-text="$translate('read-more') + ' →'" class="text-tt-link" />
            <div class="ml-4 text-sm">
                <span class="text-gray-500 dark:text-slate-400 mr-6">
                    <IconBook class="w-5 h-5 inline-block align-bottom" />
                    {{ blog.readingTime.words }} {{ $translate('words') }} · {{ formatReadingTime(blog.readingTime.time,
                        lang)
                    }}
                </span>
                <span class="text-gray-500 dark:text-slate-400">
                    <IconClock class="w-4 h-4 inline-block align-text-bottom" />
                    {{ getBlogDateString(blog, lang) }}
                </span>
            </div>
        </div>
    </section>
    <div
        class="flex items-center justify-between border-t border-gray-200 py-3 px-4 sm:px-4 mt-9 dark:border-slate-600">
        <BlogPagination :page="pageNumber" :lang :activeTag :perPage :total />
    </div>

</template>
