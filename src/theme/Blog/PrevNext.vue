<script setup>
import { watchEffect } from 'vue';
import { $translate, $replaceVariables } from '../../data/translations';

</script>

<template>
    <div v-if="readyToPaginate" class="flex flex-1 justify-between sm:hidden">
        <button @click="goPrev" :disabled="!hasPrev" class="go-button prev" v-text="$translate('previous-page')" />
        <button @click="goNext" :disabled="!hasNext" class="go-button next" v-text="$translate('next-page')" />
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