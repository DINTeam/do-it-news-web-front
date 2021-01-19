import PropTypes from 'prop-types';

import { useState } from 'react';
import styles from './card.module.css';
import Header from './header';
import NewsImage from './newsImage';
import Contents from './contents';
import Like from './like';

import News from '../../objects/News';
import CommentList from './commentList';

const Card = props => {
  const { onClickIncrease, onClickDecrease, news, commentList } = props;
  const [stateShowComment, setStateShowComment] = useState(false);

  const showHideComment = () => {
    setStateShowComment(!stateShowComment);
  };

  return (
    <div className={styles.card}>
      <Header
        profileImg={news.profileImg}
        author={news.author}
        company={news.company}
        date={news.date}
        views={news.views}
      />
      <div className={styles.title}>{news.title}</div>
      {news.newsImg && <NewsImage newsImg={news.newsImg} />}
      <div className={styles.bottomArea}>
        <Contents
          content={news.newsContent}
          newsImg={news.newsImg || ''}
          showHideComment={showHideComment}
          stateShowComment={stateShowComment}
        />
        <Like
          defaultLike={news.likes}
          onClickIncrease={onClickIncrease}
          onClickDecrease={onClickDecrease}
          newsId={news.newsId}
        />
      </div>
      {stateShowComment && <CommentList commentList={commentList} />}
    </div>
  );
};

Card.propTypes = {
  onClickIncrease: PropTypes.func.isRequired,
  onClickDecrease: PropTypes.func.isRequired,
  news: PropTypes.instanceOf(News).isRequired,
  commentList: PropTypes.arrayOf(
    PropTypes.shape({
      userName: PropTypes.string.isRequired,
      userId: PropTypes.string.isRequired,
      comment: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Card;
