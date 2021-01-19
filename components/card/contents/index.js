import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../../button';

import styles from './contents.module.css';

const textLengthOverCut = (txt, img) => {
  let text = txt;
  if (img === 'undefined' && text.length > 1000) {
    text = `${text.substr(0, 1000)}...`;
    return text;
  }
  if (img === 'undefined' && text.length <= 1000) {
    return text;
  }
  if (!(img === 'undefined') && text.length > 414) {
    text = `${text.substr(0, 414)}...`;
    return text;
  }
  if (!(img === 'undefined') && text.length <= 414) {
    return text;
  }

  return false;
};

const Contents = props => {
  const { content, newsImg, showHideComment, stateShowComment } = props;
  const shortText = textLengthOverCut(`${content}`, `${newsImg}`);
  const [text, setText] = useState(`${shortText}`);
  const [moreValue, setMoreValue] = useState('더보기');

  const moreBtn = () => {
    if (text === content) {
      setText(textLengthOverCut(text, `${newsImg}`));
      setMoreValue('더보기');
    }
    if (!(text === content)) {
      setText(content);
      setMoreValue('접기');
    }
  };

  return (
    <div className={`${styles.contentsArea}`}>
      <div className={`${styles.content}`}>{`${text}`}</div>
      <div className={`${styles.moreBtn}`}>
        <Button
          size="small"
          value={moreValue}
          color="secondary"
          onClick={() => {
            moreBtn();
          }}
        />
        <Button
          size="small"
          value={stateShowComment ? '댓글 닫기' : '댓글 보기'}
          color="secondary"
          onClick={showHideComment}
        />
      </div>
    </div>
  );
};

Contents.propTypes = {
  content: PropTypes.string.isRequired,
  newsImg: PropTypes.string.isRequired,
  stateShowComment: PropTypes.bool.isRequired,
  showHideComment: PropTypes.func.isRequired,
};

export default Contents;
