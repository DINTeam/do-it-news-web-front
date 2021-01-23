import withAuthentication from '../../components/withAuthentication';

import WysiwygEditor from '../../components/wysiwygEditor';

const WriteTestPage = () => {
  return (
    <div>
      <WysiwygEditor />
    </div>
  );
};

export default withAuthentication(WriteTestPage);
