import path from 'path';
import fs from 'fs';
import { marked } from 'marked';
import readingTime from 'reading-time';
import { Locale } from 'src/types/Locale';

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
  const postsDir = path.join(process.cwd(), 'content');
  const postPath = path.join(postsDir, slug, locale, 'index.md');
  const postContent = fs.readFileSync(postPath, 'utf8');
  const { minutes } = readingTime(postContent);

  setupHighlight();

  return {
    postContent: marked.parse(postContent),
    minutes: Math.round(minutes),
  };
}

export function getNestedPostContent(
  folder: string,
  post: string,
  locale: Locale = 'en',
) {
  const postsDir = path.join(process.cwd(), 'content', folder);
  const postPath = path.join(postsDir, post, locale, 'index.md');
  const postContent = fs.readFileSync(postPath, 'utf8');
  const { minutes } = readingTime(postContent);

  setupHighlight();

  return {
    postContent: marked.parse(postContent),
    minutes: Math.round(minutes),
  };
}

export function getSeriesPostContent(
  series: string,
  seriesItem: string,
  locale: Locale = 'en',
) {
  const postsDir = path.join(process.cwd(), 'content', 'series');
  const postPath = path.join(postsDir, series, seriesItem, locale, 'index.md');
  const postContent = fs.readFileSync(postPath, 'utf8');
  const { minutes } = readingTime(postContent);

  setupHighlight();

  return {
    postContent: marked.parse(postContent),
    minutes: Math.round(minutes),
  };
}
