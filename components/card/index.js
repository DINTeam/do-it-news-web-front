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

import useScroll from '../../customHooks/useScroll';
import useLoading from '../../customHooks/useLoading';

import Comment from '../../objects/Comment';

const LOADING_SPINNER_HEIGHT = 60;

const Card = props => {
  const { onClickIncrease, onClickDecrease, news } = props;
  const [stateShowComment, setStateShowComment] = useState(false);

  const [success, setSuccess] = useState(true);
  const [commentList, setCommentList] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(2);

  const [isEnd] = useScroll(LOADING_SPINNER_HEIGHT);
  const [commentListFetch] = useLoading(getCommentList);

  const fetchCommentListAndSetState = async () => {
    const res = await commentListFetch(page + 1, 5);
    if (res.success) {
      const commentObject = res.commentList.map(
        comment => new Comment(comment),
      );
      setCommentList([...commentList, ...commentObject]);
      setPage(res.page);
      setTotalPage(res.totalPage);
    } else {
      setSuccess(res.success);
    }
  };

  useEffect(() => {
    if (isEnd && page < totalPage) fetchCommentListAndSetState();
  }, [isEnd]);

  useEffect(fetchCommentListAndSetState, []);

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
