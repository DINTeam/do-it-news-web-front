import PropTypes from 'prop-types';

import styles from './comment.module.css';

const textLengthOverCut = id => {
  let userId = id;
  userId = `${userId.substr(0, userId.length - 3)}***`;
  return userId;
};

const Comment = props => {
  const { userName, userId, comment, date } = props;

  return (
    <div className={`${styles.commentArea}`}>
      <div className={`${styles.commentUser}`}>
        <div className={`${styles.userName}`}>{`${userName}`}</div>
        <div className={`${styles.userId}`}>{textLengthOverCut(userId)}</div>
      </div>
      <div className={`${styles.comment}`}>{`${comment}`}</div>
      <div className={`${styles.date}`}>{`${date}`}</div>
    </div>
  );
};

Comment.propTypes = {
  userName: PropTypes.string.isRequired,
  userId: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default Comment;
