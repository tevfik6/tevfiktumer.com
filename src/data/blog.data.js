import { createContentLoader } from "vitepress";
import readingTime from 'reading-time'
import {
    postsPerPage,
    formatDate,
    formatTags,
} from "../utils/shared";


export default createContentLoader("blog/*/*/*.md", {
    includeSrc: true,
    excerpt: true,
    async transform(raw) {
        const blogs = raw
            .map(({ url, frontmatter, excerpt, src }) => ({
                title: frontmatter.title,
                url,
                excerpt,
                lang: frontmatter.lang,
                short: frontmatter.short,
                index: frontmatter.index,
                tags: formatTags(frontmatter.tags),
                pagination: frontmatter.pagination,
                sort_date: formatDate(frontmatter),
                created_at: frontmatter.created_at,
                published_at: frontmatter.published_at,
                readingTime: readingTime(src.replace(/^---[\s\S]*?---\n?/, '')),
            }))
            .filter(i => i.index !== true && !i.url.match(/\/blog\/.+?\/page\//))
            .sort((a, b) => b.sort_date.time - a.sort_date.time)
        // const blogsData =
        // await generatePagination(blogs);
        // const blogTags = 
        // await generateTagPages(blogs);
        // console.debug("postsPerPage", postsPerPage);
        // console.debug("blogsData", blogsData);
        // console.debug("blogsData", blogsData);
        return { blogs, postsPerPage };
    }
})