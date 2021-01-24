import { useState } from 'react';

import withAuthentication from '../../components/withAuthentication';

import WysiwygEditor from '../../components/wysiwygEditor';

const WriteTestPage = () => {
  const [contents, setContents] = useState('');

  const handleContents = value => setContents(value);

  return (
    <div>
      <WysiwygEditor
        theme="bubble"
        value={contents}
        onChange={handleContents}
        placeholder="내용을 입력해 주세요."
      />
    </div>
  );
};

export default withAuthentication(WriteTestPage);
