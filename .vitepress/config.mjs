import { defineConfig } from 'vitepress'
const args = process.argv.slice(2);
const withBlogs = args.includes("--with-blogs")
const isDev = args.includes('dev'); // Check if "dev" is in the command-line args

const configs = {
    srcDir: "./pages/",
    title: "Personal Portfolio Website",
    description: "Tevfik Tümer - Personal Portfolio Website",
    head: [
        ['link', { rel: 'icon', href: '/favicon.png' }],
    ],
    themeConfig: {
        perPage: 2,
        nav: [
            { text: 'About Me', key: "about-me", link: '/about/' },
            { text: 'Works', key: "works", link: '/works/' },
            // { text: 'Blog', key: "blog", link: '/blog/' },
        ],
        sidebar: [],
        socialLinks: [
            { icon: 'github', link: 'https://github.com/tevfik6' }
        ]
    },
    lang: 'en',
    rewrites: {
        'works/tr.md': 'works/tr/index.md',
        'works/en.md': 'works/en/index.md',
    },
    srcExclude: ['blog/**/*', 'blog.md'],
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    api: 'modern' // or "modern"
                }
            }
        },
        plugins: [
            {
                name: 'generate-pagination-and-tags',
                async options() {
                    console.log('Starting Markdown file generation...');
                    console.debug(process.cwd());
                    const loader = require('../src/data/blog.data.js').default;
                    console.debug("Calling temproray blog loader")
                    const blogData = await loader.load();
                    console.debug({ blogData });
                }
            }
        ]
    },
};

console.debug({ configs });

if (withBlogs) {
    delete configs.srcExclude
    configs.themeConfig.nav.push({ text: 'Blog', key: "blog", link: '/blog/' })
}

// https://vitepress.dev/reference/site-config
export default defineConfig(configs)
