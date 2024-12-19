<script setup>
import { watchEffect } from 'vue';
import { $translate, $replaceVariables } from '../../data/translations';
// const range = (start, end) => Array.from({ length: end - start }, (_, i) => start + i);
const getPagination = (currentPage, totalPages) => {
    const maxVisibleAround = 1; // Pages visible around the current page
    const result = [];
    const seperator = "...";

    // Always include the first page
    result.push(1);

    // Add leading ellipsis if necessary
    if (currentPage > maxVisibleAround + 2) {
        result.push(seperator);
    }

    // Add the range of pages around the current page
    const start = Math.max(2, currentPage - maxVisibleAround);
    const end = Math.min(totalPages - 1, currentPage + maxVisibleAround);

    for (let i = start; i <= end; i++) {
        result.push(i);
    }

    // Add trailing ellipsis if necessary
    if (currentPage < totalPages - maxVisibleAround - 1) {
        result.push(seperator);
    }

    // Always include the last page
    if (totalPages > 1) {
        result.push(totalPages);
    }

    return result;
}

const props = defineProps(['total', 'perPage', 'page', 'lang', 'activeTag']);
let currPageNumber, lang, readyToPaginate;
let total, totalPage, pageNumbers, perPage;
let fromPage, toPage, hasPrev, hasNext, prevNum, nextNum, prevPageUrl, nextPageUrl;
let resultVars, activeTag;

const isActive = pageNumber => pageNumber === currPageNumber;
const getPageUrl = (pageNumber) => {
    const section = activeTag ? `tag/${lang}/${activeTag}` : `blog/${lang}`;
    return `/${section}/page/${pageNumber}`;
}
const goTo = (url) => {
    window.location.href = url;
}
const goPrev = (e) => hasPrev ? goTo(prevPageUrl) : e.preventDefault();
const goNext = (e) => hasNext ? goTo(nextPageUrl) : e.preventDefault();

watchEffect(() => {
    activeTag = props.activeTag || '';
    currPageNumber = props.page || 1;
    lang = props.lang || 'en';
    perPage = props.perPage || 0;
    total = props.total || 0;
    readyToPaginate = total > perPage;
    if (readyToPaginate) {
        totalPage = Math.ceil(total / perPage);
        pageNumbers = getPagination(currPageNumber, totalPage);

        fromPage = ((currPageNumber - 1) * perPage) + 1;
        toPage = currPageNumber * perPage;
        if (toPage > total) {
            toPage = total;
        }

        hasPrev = currPageNumber - 1 > 0;
        hasNext = currPageNumber + 1 <= totalPage;

        prevNum = hasPrev ? currPageNumber - 1 : 1;
        nextNum = hasNext ? currPageNumber + 1 : totalPage;

        // prevPageUrl = `/blog/${lang}/page/${prevNum}`;
        prevPageUrl = getPageUrl(prevNum);
        // nextPageUrl = `/blog/${lang}/page/${nextNum}`;
        nextPageUrl = getPageUrl(nextNum);

        resultVars = {
            fromPage: '<span class=" font-medium">' + fromPage + '</span>',
            toPage: '<span class="font-medium">' + toPage + '</span>',
            totalResults: '<span class="font-medium">' + total + '</span>'
        };
    }
    activeTag = props.activeTag;
});

</script>

<template>
    <div v-if="readyToPaginate" class="flex flex-1 justify-between sm:hidden">
        <button @click="goPrev" :disabled="!hasPrev" class="go-button prev" v-text="$translate('previous-page')" />
        <button @click="goNext" :disabled="!hasNext" class="go-button next" v-text="$translate('next-page')" />
    </div>
    <div v-if="readyToPaginate" class="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
            <p class="text-sm" v-html="$replaceVariables($translate('pagination-results'), resultVars)" />
        </div>
        <div>
            <nav class="isolate inline-flex -space-x-px rounded-md shadow-sm pagination" aria-label="Pagination">
                <button @click="goPrev" :disabled="!hasPrev" class="go-arrow prev">
                    <span class="sr-only" v-text="$translate('previous-page')" />
                    <svg class="size-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                        <path fill-rule="evenodd"
                            d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z"
                            clip-rule="evenodd" />
                    </svg>
                </button>
                <template v-for="pageNumber in pageNumbers">
                    <a v-if="typeof pageNumber === 'number'" v-text="pageNumber"
                        :class="{ active: isActive(pageNumber) }" :href="getPageUrl(pageNumber)" />
                    <span v-else v-text="pageNumber" />
                </template>
                <button @click="goNext" :disabled="!hasNext" class="go-arrow next">
                    <span class="sr-only" v-text="$translate('next-page')" />
                    <svg class="size-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                        <path fill-rule="evenodd"
                            d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                            clip-rule="evenodd" />
                    </svg>
                </button>
            </nav>
        </div>
    </div>
</template>

<style lang="scss">
.go-button {
    @apply relative inline-flex items-center rounded-md border border-slate-300 dark:border-slate-700 px-4 py-2 text-sm font-medium hover:bg-slate-50 disabled:bg-slate-100 dark:hover:bg-slate-700 disabled:dark:bg-slate-700;

    &.prev {
        @apply ml-3;
    }
}


.pagination {

    .go-arrow,
    >span,
    a:not(.active) {
        @apply dark:bg-slate-800 ring-1 ring-inset focus:z-20 focus:outline-offset-0 ring-slate-900/10 dark:ring-slate-50/[0.06];
    }

    .go-arrow,
    a:not(.active) {
        @apply text-tt-light hover:text-tt-lighter dark:text-tt-dark dark:hover:text-tt-darker dark:hover:bg-slate-700 dark:disabled:bg-slate-700 dark:disabled:text-slate-500 hover:bg-slate-50;
    }

    .go-arrow {
        @apply inline-flex items-center px-2 py-2 disabled:bg-slate-100;

        &.prev {
            @apply rounded-l-md;
        }

        &.next {
            @apply rounded-r-md;
        }
    }

    a,
    >span {
        @apply relative z-10 inline-flex items-center px-4 py-2 text-sm font-semibold;

        &.active {
            @apply bg-tt hover:bg-tt-lighter text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-800;
        }
    }
}
</style>