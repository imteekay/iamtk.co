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
  const postsDir = path.join(__dirname, '../../../..', 'content');
  const postPath = path.join(postsDir, slug, locale, 'index.md');
  const postContent = fs.readFileSync(postPath, 'utf8');

  setupHighlight();

  return marked.parse(postContent);
}

export function getMarkdownPostContent(slug: string, locale: string = 'en') {
  const postsDir = path.join(__dirname, '../../../..', 'content');
  const postPath = path.join(postsDir, slug, locale, 'index.md');

  return fs.readFileSync(postPath, 'utf8');
}

export function getSeriesPostContent(
  series: string,
  seriesItem: string,
  locale: string = 'en',
) {
  const postsDir = path.join(__dirname, '../../../..', 'content', 'series');
  const postPath = path.join(postsDir, series, seriesItem, locale, 'index.md');
  const postContent = fs.readFileSync(postPath, 'utf8');

  setupHighlight();

  return marked.parse(postContent);
}

export function getNestedPostContent(
  folder: string,
  post: string,
  locale: string = 'en',
) {
  const postsDir = path.join(__dirname, '../../../..', 'content', folder);
  const postPath = path.join(postsDir, post, locale, 'index.md');

  return fs.readFileSync(postPath, 'utf8');
}

export function getMarkdownSeriesPostContent(
  series: string,
  seriesItem: string,
  locale: string = 'en',
) {
  const postsDir = path.join(__dirname, '../../../..', 'content', 'series');
  const postPath = path.join(postsDir, series, seriesItem, locale, 'index.md');

  return fs.readFileSync(postPath, 'utf8');
}
