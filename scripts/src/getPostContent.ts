import path from 'path';
import fs from 'fs';
import { marked } from 'marked';

function highlight(code: string, lang: string) {
  const hljs = require('highlight.js');
  const language = hljs.getLanguage(lang) ? lang : 'plaintext';
  return hljs.highlight(code, { language }).value;
}

function setupHighlight() {
  marked.setOptions({
    renderer: new marked.Renderer(),
    highlight,
    langPrefix: 'hljs language-',
    pedantic: false,
    gfm: true,
    breaks: false,
    sanitize: false,
    smartLists: true,
    smartypants: false,
    xhtml: false,
  });
}

export function getPostContent(slug: string, locale: string = 'en') {
  const postsDir = path.join(process.cwd(), '..', 'content');
  const postPath = path.join(postsDir, slug, locale, 'index.md');
  const postContent = fs.readFileSync(postPath, 'utf8');

  setupHighlight();

  return marked.parse(postContent);
}
