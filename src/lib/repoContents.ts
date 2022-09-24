import { Octokit } from '@octokit/core';

const octokit = new Octokit({
  auth: process.env.AUTH_TOKEN,
});

export async function requestRepoContents() {
  // const contents = await octokit.request(
  //   'GET /repos/{owner}/{repo}/contents/{path}',
  //   {
  //     owner: 'imteekay',
  //     repo: 'web-performance-research',
  //     path: 'general/README.md',
  //   },
  // );
  // console.log('contents', decodeURIComponent(atob(contents.data.content)));
}

requestRepoContents();
