import { WysiwygEditor } from '@remirror/react-editors/wysiwyg';
import { editorStyle } from './styles';

const Editor = () => {
  return (
    <div className={editorStyle}>
      <WysiwygEditor placeholder="Let's write" />
    </div>
  );
};

export default Editor;
