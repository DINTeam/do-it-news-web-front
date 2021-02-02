import PropTypes from 'prop-types';

import styles from './comment.module.css';
import Button from '../../button';

import ObjectComment from '../../../objects/Comment';
import LoadingSpinner from '../../loadingSpinner';

const CommentList = props => {
  const {
    commentList,
    commentSuccess,
    showMoreComment,
    isEndComment,
    stateCommentLoading,
  } = props;

  if (!commentSuccess) return <div>Error</div>;

  return (
    <div className={`${styles.commentList} ${commentList}`}>
      {commentList.map(aComment => (
        <div
          key={Math.floor(Math.random() * 1000000)}
          className={`${styles.commentArea}`}
        >
          <div className={`${styles.commentUser}`}>
            <div className={`${styles.userName}`}>{aComment.userName}</div>
            <div className={`${styles.userId}`}>{aComment.userId}</div>
          </div>
          <div className={`${styles.comment}`}>{aComment.comment}</div>
          <div className={`${styles.date}`}>{aComment.date}</div>
        </div>
      ))}
      {stateCommentLoading && <LoadingSpinner />}
      {isEndComment || (
        <div className={`${styles.moreBtn}`}>
          <Button
            size="small"
            value="댓글 더보기"
            color="secondary"
            onClick={showMoreComment}
          />
        </div>
      )}
    </div>
  );
};

CommentList.propTypes = {
  commentList: PropTypes.arrayOf(PropTypes.instanceOf(ObjectComment).isRequired)
    .isRequired,
  commentSuccess: PropTypes.bool.isRequired,
  showMoreComment: PropTypes.func.isRequired,
  isEndComment: PropTypes.bool.isRequired,
  stateCommentLoading: PropTypes.bool.isRequired,
};

export default CommentList;
