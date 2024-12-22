import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { formatTags, postsPerPage, generatePagination, generateTagPages } from '../utils/shared.js';
// Configuration
const sourceDir = "pages"
const sourcePath = './' + sourceDir; // Directory containing source pages
const tagsPath = sourceDir + '/tag'; // Directory containing tag pages
const tagsRegexp = new RegExp(`^${tagsPath}/`);

function readPosts() {
    const posts = [];
    function traverseDir(dir) {
        const files = fs.readdirSync(dir);
        for (const file of files) {
            const filePath = path.join(dir, file);
            const stat = fs.statSync(filePath);
            let isDir = stat.isDirectory();
            let isSkip = !filePath.match(/page\/\d+\/index.md$/) || !filePath.match(tagsRegexp);
            console.debug({ filePath, isDir, isSkip });
            if (isDir) {
                traverseDir(filePath);
            } else if (
                isSkip
            ) {
                const content = fs.readFileSync(filePath, 'utf-8');
                const { data } = matter(content);
                if (data.lang && data.tags) {
                    posts.push({
                        filePath,
                        lang: data.lang,
                        tags: formatTags(data.tags),
                    });
                }
            }
        }
    }

    traverseDir(sourcePath);
    return posts;
}

async function preprocess() {
    const posts = readPosts();
    console.debug({ posts });
    console.debug({ postsPerPage });
    await generatePagination(posts);
    await generateTagPages(posts);
}

await preprocess();
