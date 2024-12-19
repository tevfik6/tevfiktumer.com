<script setup>
import { useData } from 'vitepress'
import { $translate } from '../../data/translations'
const { site, page } = useData()
let hidePanel = false;
const lang = site.value.lang;
const relativePath = page.value.relativePath;
let [section] = relativePath.split('/');
const paths = [];
switch (section) {
    case 'blog': {
        paths.push({
            label: "Blogs",
            key: "blogs",
            link: "/blog/" + (lang !== "en" ? lang + "/" : '')
        });
        paths.push({ label: '/' });

        // paths.push({
        //     label: langLabels[lang],
        //     link: "/blog/" + lang + "/"
        // });

        // paths.push({ label: '/' });

        paths.push({
            label: page.value.title,
        });
        break;
    }
    default: {
        hidePanel = true;
        break;
    }
}

</script>
<template>
    <div v-if="!hidePanel"
        class="container border sticky border-slate-900/10 dark:border-slate-50/[0.1] top-50 z-39 my-3 rounded-md p-2 px-6">
        <div>
            <span v-for="path of paths" class="pr-2">
                <a v-if="path.link" :href="path.link" :title="$translate(path.key, path.label)"
                    v-text="$translate(path.key, path.label)" />
                <span v-text="path.label" v-else />
            </span>
        </div>
    </div>
</template>