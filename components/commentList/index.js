import PropTypes from 'prop-types';
import Comment from './comment';

import styles from './commentList.module.css';

const CommentList = props => {
  const { commentList } = props;

  return (
    <div className={`${styles.commentList} ${commentList}`}>
      {commentList.map(comment => (
        <Comment
          userName={comment.userName}
          userId={comment.userId}
          comment={comment.comment}
          date={comment.date}
        />
      ))}
    </div>
  );
};

CommentList.propTypes = {
  commentList: PropTypes.arrayOf(
    PropTypes.shape({
      userName: PropTypes.string.isRequired,
      userId: PropTypes.string.isRequired,
      comment: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default CommentList;
