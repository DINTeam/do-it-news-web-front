import PropTypes from 'prop-types';
import Comment from './comment';

import styles from './commentList.module.css';
import Button from '../../button';

const CommentList = props => {
  const { commentList } = props;

  return (
    <div className={`${styles.commentList} ${commentList}`}>
      {commentList.map(comment => (
        <Comment
          // key는 commentId로 바꿀 예정
          key={Math.floor(Math.random() * 1000000)}
          userName={comment.userName}
          userId={comment.userId}
          comment={comment.comment}
          date={comment.date}
        />
      ))}
      <div className={`${styles.moreBtn}`}>
        <Button
          size="small"
          value="댓글 더보기"
          color="secondary"
        />
      </div>
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
