import PropTypes from 'prop-types';

import styles from './comment.module.css';

import ObjectComment from '../../../../objects/Comment';

const Comment = props => {
  const { comment } = props;

  return (
    <div className={`${styles.commentArea}`}>
      <div className={`${styles.commentUser}`}>
        <div className={`${styles.userName}`}>{comment.userName}</div>
        <div className={`${styles.userId}`}>{comment.userId}</div>
      </div>
      <div className={`${styles.comment}`}>{comment.comment}</div>
      <div className={`${styles.date}`}>{comment.date}</div>
    </div>
  );
};

Comment.propTypes = {
  comment: PropTypes.instanceOf(ObjectComment).isRequired,
};

export default Comment;
