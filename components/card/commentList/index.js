import PropTypes from 'prop-types';
import Comment from './comment';

import styles from './commentList.module.css';
import Button from '../../button';

import ObjectComment from '../../../objects/Comment';

const CommentList = props => {
  const { commentList, commentSuccess, showMoreComment } = props;

  if (!commentSuccess) return <div>Error</div>;

  return (
    <div className={`${styles.commentList} ${commentList}`}>
      {commentList.map(aComment => (
        <Comment
          // key는 commentId로 바꿀 예정
          key={Math.floor(Math.random() * 1000000)}
          comment={aComment}
        />
      ))}
      <div className={`${styles.moreBtn}`}>
        <Button
          size="small"
          value="댓글 더보기"
          color="secondary"
          onClick={showMoreComment}
        />
      </div>
    </div>
  );
};

CommentList.propTypes = {
  commentList: PropTypes.arrayOf(PropTypes.instanceOf(ObjectComment).isRequired)
    .isRequired,
  commentSuccess: PropTypes.bool.isRequired,
  showMoreComment: PropTypes.func.isRequired,
};

export default CommentList;
