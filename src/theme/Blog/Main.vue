<script setup>
import BlogList from './List.vue';
import BlogDetails from './Detail.vue';
</script>

<template>
    <BlogDetails v-if="!$frontmatter.index && !$frontmatter.pagination" />
    <BlogList v-else />
</template>

<style lang="scss">
article {
    p {
        @apply mb-4 text-justify;
    }

    h1 {
        @apply text-3xl font-normal my-6;
    }

    h2 {
        @apply text-2xl font-normal my-5 pb-1;
    }

    h3 {
        @apply text-xl font-normal my-3;
    }

    h4 {
        @apply text-lg font-normal my-2;
    }

    h1,
    h2 {
        @apply border-b pb-1 border-slate-900/10 dark:border-slate-50/[0.06]
    }

    ul {
        @apply list-inside list-[revert];

        ul {
            @apply list-inside ml-4;
        }
    }

    ol {
        @apply list-inside list-[revert];

        ol {
            @apply list-inside list-[lower-roman] ml-4;

            ol {
                @apply list-inside list-[lower-alpha] ml-4;
            }
        }
    }

    blockquote {
        @apply px-4 border-l-[0.25rem] border-slate-900/10 dark:border-slate-50/[0.06] italic rounded-tl-md rounded-bl-md;
    }

    hr {
        @apply border-slate-900/10 dark:border-slate-50/[0.06] border-[.175rem];
    }

    table {
        @apply border-collapse border border-slate-900/10 dark:border-slate-50/[0.06];

        td,
        th {
            @apply border-collapse border border-slate-900/10 dark:border-slate-50/[0.06] px-2;
        }
    }

    a {
        @apply text-tt-light hover:text-tt-lighter cursor-pointer dark:text-tt-dark dark:hover:text-tt-darker;
    }

    p {
        code {
            @apply bg-code-bg dark:bg-code-bg-dark;
        }
    }

    h1,
    h2,
    h3,
    h4 {
        &:hover a::before {
            @apply text-slate-500 text-[85%] align-top;
            content: "#";
        }
    }

}
</style>