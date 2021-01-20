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
  const {
    content,
    newsImg,
    showHideComment,
    stateShowComment,
    NoComment,
  } = props;
  const shortText = textLengthOverCut(`${content}`, `${newsImg}`);
  const [text, setText] = useState(`${shortText}`);
  const [moreValue, setMoreValue] = useState('더보기');

  const showMore = () => {
    if (text === content) {
      setText(textLengthOverCut(text, `${newsImg}`));
      setMoreValue('더보기');
    }
    if (!(text === content)) {
      setText(content);
      setMoreValue('접기');
    }
  };

  const showCommentState = () => {
    if (NoComment) return '댓글 없음';
    if (stateShowComment) return '댓글 닫기';
    return '댓글 보기';
  };

  return (
    <div className={`${styles.contentsArea}`}>
      <div className={`${styles.content}`}>{`${text}`}</div>
      <div className={`${styles.moreBtn}`}>
        <Button
          size="small"
          value={moreValue}
          color="secondary"
          onClick={showMore}
        />
        <Button
          size="small"
          value={showCommentState()}
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
  NoComment: PropTypes.bool.isRequired,
};

export default Contents;
