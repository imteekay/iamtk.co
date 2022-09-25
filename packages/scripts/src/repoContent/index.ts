import path from 'path';
import { writeFile } from 'fs/promises';
import { Octokit } from '@octokit/core';
import { Buffer } from 'buffer';
import { marked } from 'marked';
import * as dotenv from 'dotenv';

dotenv.config();

const octokit = new Octokit({
  auth: process.env.AUTH_TOKEN,
});

const dataDir = path.join(__dirname, '../../../..', 'data');

const topics = [
  'general',
  'performance-budget',
  'measuring-performance',
  'core-web-vitals',
  'browser',
  'case-studies',
  'cache-and-memoization',
  'prefetching',
  'images',
  'ux',
  'build-tools',
  'react',
  'javascript',
  'web-apis',
  'css',
  'images',
  'fonts',
  'sustainability',
  'backend',
  'architecture',
  'infrastructure',
  'build-tools',
  'books',
  'tweets',
];

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

export async function requestRepoContents() {
  setupHighlight();

  const topicToContent = {} as Record<string, string>;

  for (let topic of topics) {
    const contents = await octokit.request(
      'GET /repos/{owner}/{repo}/contents/{path}',
      {
        owner: 'imteekay',
        repo: 'web-performance-research',
        path: `${topic}/README.md`,
      },
    );

    const decodedContent = Buffer.from(
      contents.data.content,
      'base64',
    ).toString('utf8');

    topicToContent[topic] = marked.parse(decodedContent);
  }

  return topicToContent;
}

async function createWebPerformanceTopicsFile() {
  const content = await requestRepoContents();

  writeFile(
    path.join(dataDir, 'web-performance-topics-content.js'),
    'export const topics = ' + JSON.stringify(content),
  );
}

createWebPerformanceTopicsFile();
