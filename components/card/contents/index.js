import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../../button';

import styles from './contents.module.css';
import CommentList from '../../commentList';

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
  const { content, newsImg } = props;
  const shortText = textLengthOverCut(`${content}`, `${newsImg}`);
  const [text, setText] = useState(`${shortText}`);
  const [moreValue, setMoreValue] = useState('더보기');
  const [showComment, setShowComment] = useState(false);
  const [commentValue, setCommentValue] = useState('댓글보기');

  const commentList = [
    { userName: 'User_A', userId: 'A_Id', comment: 'commentA', date: '2020' },
    { userName: 'User_B', userId: 'B_Id', comment: 'commentB', date: '2020' },
    { userName: 'User_C', userId: 'C_Id', comment: 'commentC', date: '2020' },
    { userName: 'User_A', userId: 'A_Id', comment: 'commentA', date: '2020' },
    { userName: 'User_B', userId: 'B_Id', comment: 'commentB', date: '2020' },
    { userName: 'User_C', userId: 'C_Id', comment: 'commentC', date: '2020' },
  ];

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

  const commentBtn = () => {
    if (commentList.length === 0) setCommentValue('댓글 없음');
    else if (showComment === true) {
      setShowComment(false);
      setCommentValue('댓글 보기');
    } else {
      setShowComment(true);
      setCommentValue('댓글 닫기');
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
          value={commentValue}
          color="secondary"
          onClick={() => {
            commentBtn();
          }}
        />
      </div>
      {showComment === true ? (
        <div className={`${styles.commentList}`}>
          <CommentList commentList={commentList} />
        </div>
      ) : null}
    </div>
  );
};

Contents.propTypes = {
  content: PropTypes.string.isRequired,
  newsImg: PropTypes.string.isRequired,
};

export default Contents;
