import PropTypes from 'prop-types';

import { useEffect, useState } from 'react';
import styles from './card.module.css';
import Header from './header';
import NewsImage from './newsImage';
import Contents from './contents';
import Like from './like';

import { getCommentList } from '../../api/comment';

import News from '../../objects/News';
import CommentList from './commentList';

import Comment from '../../objects/Comment';
import useLoading from '../../customHooks/useLoading';

const Card = props => {
  const { onClickIncrease, onClickDecrease, news } = props;
  const [stateShowComment, setStateShowComment] = useState(false);

  const [success, setSuccess] = useState(true);
  const [commentList, setCommentList] = useState([]);
  const [commentPage, setCommentPage] = useState(1);
  const [totalCommentPage, setTotalCommentPage] = useState(2);

  const [isEndComment, setIsEndComment] = useState(false);
  const [commentListFetch, stateCommentLoading] = useLoading(
    getCommentList.bind(news.newsId),
  );

  const fetchCommentListAndSetState = async () => {
    const res = await commentListFetch(news.newsId, commentPage + 5, 5);
    if (res.success) {
      const commentObject = res.commentList.map(
        comment => new Comment(comment),
      );
      setCommentList([...commentObject]);
      setCommentPage(res.page);
      setTotalCommentPage(res.totalPage);
      if (commentPage < totalCommentPage) {
        setIsEndComment(true);
      }
    } else {
      setSuccess(res.success);
    }
  };

  useEffect(() => {
    if (stateShowComment && !isEndComment) {
      fetchCommentListAndSetState();
    }
  });

  const showHideComment = () => {
    setStateShowComment(!stateShowComment);
  };

  if (!success) return <div>Error</div>;

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
          NoComment={commentList === null}
        />
        <Like
          defaultLike={news.likes}
          onClickIncrease={onClickIncrease}
          onClickDecrease={onClickDecrease}
          newsId={news.newsId}
        />
      </div>
      {stateCommentLoading && <span>Loading...</span>}
      {commentList && stateShowComment && (
        <CommentList commentList={commentList} />
      )}
    </div>
  );
};

Card.propTypes = {
  onClickIncrease: PropTypes.func.isRequired,
  onClickDecrease: PropTypes.func.isRequired,
  news: PropTypes.instanceOf(News).isRequired,
};

export default Card;
