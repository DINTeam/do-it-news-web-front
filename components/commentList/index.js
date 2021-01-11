import PropTypes from 'prop-types';
import Comment from './comment';

import styles from './commentList.module.css';

const CommentList = props => {
  const { userName, userId, comment, date } = props;

  return (
    <div className={`${styles.commentList}`}>
      <Comment
        userName={`${userName}`}
        userId={`${userId}`}
        comment={`${comment}`}
        date={`${date}`}
      />
      <Comment
        userName={`${userName}`}
        userId={`${userId}`}
        comment={`${comment}`}
        date={`${date}`}
      />
      <Comment
        userName={`${userName}`}
        userId={`${userId}`}
        comment={`${comment}`}
        date={`${date}`}
      />
      <Comment
        userName={`${userName}`}
        userId={`${userId}`}
        comment={`${comment}`}
        date={`${date}`}
      />
    </div>
  );
};

CommentList.propTypes = {
  userName: PropTypes.string.isRequired,
  userId: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default CommentList;
