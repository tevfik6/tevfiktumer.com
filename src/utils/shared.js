import fs from 'fs'
import { resolve } from 'path'
import { slugify } from './slugify.js';
export const postsPerPage = 6;
const pagesPath = resolve('./pages');


export function formatTags(tags) {
    if (tags && typeof tags === 'string') {
        tags = tags.split(',').map(tag => [slugify(tag.trim()), tag.trim()]);
        tags = Object.fromEntries(tags);
    }
    console.debug({ tags });
    return tags;
}

export function readingTime(content) {
    const wordsPerMinute = 200; // Average reading speed

    // Remove HTML tags and extra whitespace
    const plainText = content
        .replace(/<[^>]*>/g, "") // Remove HTML tags
        .replace(/\s+/g, " ") // Normalize spaces
        .trim();

    const words = plainText.split(" ").length; // Count words
    const minutes = words / wordsPerMinute;

    return {
        minutes: Math.ceil(minutes), // Rounded up to the nearest minute
        seconds: Math.ceil(minutes * 60), // Rounded seconds
        words,
    };
}


export function formatDate(frontmatter) {
    const raw = frontmatter.published_at || frontmatter.created_at || frontmatter.date;
    const date = new Date(raw)
    date.setUTCHours(12)
    const ret = {
        time: +date,
        string: date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        })
    }
    console.debug({ raw, ret });
    return ret;
}

export async function generatePagination(blogs) {
    console.debug({ pagesPath });
    const postCountPerLang = blogs.reduce((c, a) => {
        const lang = a["lang"];
        // console.debug({ lang, a, c });
        if (lang) {
            if (!c[lang]) {
                c[lang] = 0
            };
            c[lang]++;
        }
        return c;
    }, {});

    // remove all the pages under /blog/.*/page/ folder as blob
    const blogPath = `${pagesPath}/blog`;
    for (const lang in postCountPerLang) {
        if (Object.prototype.hasOwnProperty.call(postCountPerLang, lang)) {
            const blogPagePath = `${blogPath}/${lang}/page`;
            if (fs.existsSync(blogPagePath)) {
                fs.rmSync(blogPagePath, { recursive: true, force: true });
            }
            const totalPostForCurLang = postCountPerLang[lang];
            const totalPagesForCurLang = totalPostForCurLang % postsPerPage === 0 ? totalPostForCurLang / postsPerPage : Math.floor(totalPostForCurLang / postsPerPage) + 1;
            if (totalPagesForCurLang > 1) {
                for (let i = 1; i <= totalPagesForCurLang; i++) {
                    const pageContent = `---\npagination: ${i}\n---`.trim()
                    const blogPagePath = `${blogPath}/${lang}/page/${i}`
                    const blogPageIndex = `${blogPagePath}/index.md`
                    if (!fs.existsSync(blogPagePath)) {
                        fs.mkdirSync(blogPagePath, { recursive: true });
                    }
                    if (!fs.existsSync(blogPageIndex)) {
                        // console.debug({ blogPageIndex, pageContent })
                        fs.writeFileSync(blogPageIndex, pageContent)
                    }
                }
            }
        }
    }
    const blogData = { postCountPerLang, postsPerPage };
    return blogData;
}

export async function generateTagPages(blogs) {
    let blog;
    const tags = {};

    for (blog of blogs) {
        // console.debug({ tags: blog.tags })
        if (blog.tags) {
            const lang = blog.lang || 'en';
            let tagSlug;
            for (tagSlug of Object.keys(blog.tags)) {
                const tagPath = `${lang}/${tagSlug}`;
                if (!tags[tagPath]) {
                    tags[tagPath] = 0;
                }
                tags[tagPath]++;
            }
        }
    }
    console.debug({ tags });
    const tagPagesPath = `${pagesPath}/tag`;

    if (fs.existsSync(tagPagesPath)) {
        fs.rmSync(tagPagesPath, { recursive: true, force: true });
    }
    fs.mkdirSync(tagPagesPath, { recursive: true });

    const writeTagPage = (path, content) => {
        const indexPath = `${path}/index.md`
        fs.mkdirSync(path, { recursive: true });
        console.debug('writeTagPage', { path, indexPath, content });
        fs.writeFileSync(indexPath, content)
    }
    for (const langTagPath in tags) {
        if (Object.prototype.hasOwnProperty.call(tags, langTagPath)) {
            const tagPath = `${tagPagesPath}/${langTagPath}`;
            const totalPostForCurLang = tags[langTagPath];
            const totalPagesForCurLang = totalPostForCurLang % postsPerPage === 0
                ? totalPostForCurLang / postsPerPage
                : Math.floor(totalPostForCurLang / postsPerPage) + 1;
            console.debug({ tagPath, totalPostForCurLang, totalPagesForCurLang });
            const [lang, tag] = langTagPath.split('/');
            if (totalPagesForCurLang > 0) {
                for (let i = 1; i <= totalPagesForCurLang; i++) {
                    const tagContent = `---\npagination: ${i}\ntag: ${tag}\nlang: ${lang}\n---`.trim()
                    const tagPathPage = `${tagPath}/page`
                    const tagPathNumber = `${tagPathPage}/${i}`
                    if (i == 1) {
                        writeTagPage(tagPath, tagContent)
                    }
                    if (totalPagesForCurLang > 1) {
                        writeTagPage(tagPathNumber, tagContent)
                    }
                }
            }
        }
    }
}
