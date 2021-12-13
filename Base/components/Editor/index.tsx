import 'prosemirror-view/style/prosemirror.css';

import React from 'react';
import { schema } from 'prosemirror-schema-basic';
import { keymap } from 'prosemirror-keymap';
import { baseKeymap, Command, toggleMark } from 'prosemirror-commands';
import { MarkType } from 'prosemirror-model';
import { history, redo, undo } from 'prosemirror-history';
import { useProseMirror, ProseMirror } from 'use-prosemirror';
import { EditorState, Transaction } from 'prosemirror-state';

const toggleBold = toggleMarkCommand(schema.marks.strong);
const toggleItalic = toggleMarkCommand(schema.marks.em);

const opts: Parameters<typeof useProseMirror>[0] = {
  schema,
  plugins: [
    history(),
    keymap({
      ...baseKeymap,
      // "Mod-z": undo,
      // "Mod-y": redo,
      // "Mod-Shift-z": redo,
      // "Mod-b": toggleBold,
      // "Mod-i": toggleItalic
    }),
  ],
};

export function Editor() {
  const [state, setState] = useProseMirror(opts);
  return <ProseMirror state={state} onChange={setState} />;
}

function toggleMarkCommand(mark: MarkType): Command {
  return (
    state: EditorState,
    dispatch: ((tr: Transaction) => void) | undefined,
  ) => toggleMark(mark)(state, dispatch);
}
