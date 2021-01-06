import PropTypes from 'prop-types';
import Button from '../../button';

import styles from './contents.module.css';

const Contents = props => {
  const { content } = props;

  return (
    <div className={`${styles.contentsArea}`}>
      <div className={`${styles.content}`}>{content}</div>
      <div className={`${styles.moreBtn}`}>
        <Button value="더보기" color="secondary" />
      </div>
    </div>
  );
};

Contents.propTypes = {
  content: PropTypes.string.isRequired,
};

export default Contents;
