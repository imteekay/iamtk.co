import { css } from '@emotion/css';

const toolbar = css`
  .remirror-toolbar.remirror-toolbar {
    display: none;
  }
`;

const editorWrapper = css`
  .ProseMirror.remirror-editor.remirror-a11y-dark,
  .ProseMirror.remirror-editor.remirror-a11y-dark:active,
  .ProseMirror.remirror-editor.remirror-a11y-dark:focus,
  .ProseMirror.remirror-editor.remirror-a11y-dark:hover {
    box-shadow: none;
  }
`;

const textColor = css`
  .remirror-theme .remirror-editor-wrapper .ProseMirror h1,
  .remirror-theme .remirror-editor-wrapper .ProseMirror h2,
  .remirror-theme .remirror-editor-wrapper .ProseMirror h3,
  .remirror-theme .remirror-editor-wrapper .ProseMirror h4,
  .remirror-theme .remirror-editor-wrapper .ProseMirror p {
    font-family: 'Menlo', monospace;
    color: white;
  }
`;

const h1 = css`
  .remirror-theme .remirror-editor-wrapper .ProseMirror h1 {
    letter-spacing: 0.01em;
    font-size: 2em;
    font-style: normal;
    font-weight: 700;
    display: block;
    margin-top: 0;
    margin-bottom: 0;
    text-transform: none;
    line-height: 1.25;
  }
`;

const h2 = css`
  .remirror-theme .remirror-editor-wrapper .ProseMirror h2 {
    position: relative;
    font-size: 1.7rem;
    font-weight: bold;
    text-transform: none;
    letter-spacing: normal;
    margin-top: 2rem;
    margin-bottom: 0.5rem;
    display: block;
    line-height: 40px;
  }
`;

const h3 = css`
  .remirror-theme .remirror-editor-wrapper .ProseMirror h3 {
    margin-top: 0.9rem;
    margin-bottom: 0.5rem;
    font-size: 1.2rem;
    font-weight: bold;
    color: #eee;
    line-height: 30px;
  }
`;

const p = css`
  .remirror-theme .remirror-editor-wrapper .ProseMirror p {
    font-size: 15px;
    line-height: 1.725;
    margin-top: 15px;
    margin-bottom: 15px;
  }

  code {
    border-radius: 2px;
    padding: 1px 5px;
    background-color: #303e80;
  }
`;

const list = css`
  .remirror-theme .remirror-editor-wrapper .ProseMirror ul li p {
    margin: 0;
  }
`;

const code = css`
  .remirror-theme .remirror-editor-wrapper .ProseMirror pre {
    font-family: 'Menlo', 'Meslo LG', monospace;
    font-size: 13px;
    padding: 10px 15px;
    padding-bottom: 0;
    line-height: 22px;
    border-radius: 4px;
    border: 1px dotted #666;
    overflow-x: auto;

    padding: 0;
    background-color: #292929e8;
    border: 0;
    margin: 30px 0 40px;
    -webkit-box-shadow: 3px 3px 10px 1px rgb(0 0 0 / 75%);
    box-shadow: 3px 3px 10px 1px rgb(0 0 0 / 75%);

    -ms-hyphens: manual;
    -webkit-hyphens: manual;
    hyphens: manual;
  }

  pre code {
    padding: 1.5em;
    display: block;
    overflow-x: auto;
    background: #011627;
    color: #d6deeb;
  }
`;

export const editorStyle = css`
  ${toolbar}
  ${editorWrapper}

  ${textColor}

  ${h1}
  ${h2}
  ${h3}
  ${p}

  ${list}
  ${code}
`;
