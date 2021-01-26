import { useState } from 'react';

import withAuthentication from '../../components/withAuthentication';

import Textfield from '../../components/textfield';
import WysiwygEditor from '../../components/wysiwygEditor';

const WriteTestPage = () => {
  const [title, setTitle] = useState('');
  const [contents, setContents] = useState('');

  const handleTitle = event => setTitle(event.target.value);
  const handleContents = value => setContents(value);

  return (
    <div>
      <Textfield
        value={title}
        onChange={handleTitle}
        placeholder="제목을 입력해 주세요"
        fullWidth
      />
      <WysiwygEditor
        value={contents}
        onChange={handleContents}
        placeholder="내용을 입력해 주세요."
      />
    </div>
  );
};

export default withAuthentication(WriteTestPage);
