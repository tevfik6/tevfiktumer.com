import { useData } from 'vitepress'
import { watchEffect } from 'vue'
// import DefaultTheme from 'vitepress/theme';
import Layout from '../../src/theme/Layout.vue'
import DefaultTheme from 'vitepress/theme-without-fonts';
import './tailwind.postcss'
import './style.css'

export default {
    ...DefaultTheme,
    Layout,
    async setup() {
        const { site, page } = useData()
        // Language Filteration
        watchEffect(() => {
            // Parsing the path to extract language
            let [pathLang, pathLang2] = page.value.relativePath.split('/');
            if (pathLang.length !== 2) {
                pathLang = pathLang2;
            }
            pathLang = pathLang?.replace(".md", "");
            const languages = {
                tr: {
                    label: "Türkçe"
                },
                en: {
                    label: "English"
                }
            }
            // Check if the language exists then use otherwise 
            site.value.lang = pathLang in languages ? pathLang : "en";
        })
    }
}