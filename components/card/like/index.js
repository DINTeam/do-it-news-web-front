import React, { useState } from 'react';
import PropTypes from 'prop-types';

import styles from './like.module.css';

const Like = props => {
  const { defaultLike, onClickIncrease, onClickDecrease, newsId } = props;

  const [numberOfLikes, setNumberOfLikes] = useState(defaultLike);

  const increaseNumber = () => {
    setNumberOfLikes(numberOfLikes + 1);
    onClickIncrease(`${newsId}`);
  };

  const decreaseNumber = () => {
    setNumberOfLikes(numberOfLikes - 1);
    onClickDecrease(`${newsId}`);
  };

  return (
    <div className={`${styles.like}`}>
      <button
        type="button"
        value={`${defaultLike}`}
        onClick={increaseNumber}
        className={`${styles.button}`}
      >
        <div className={`${styles.increaseBtn}`} />
      </button>
      <h className={`${styles.likeNumber}`}>{numberOfLikes}</h>
      <button
        type="button"
        onClick={decreaseNumber}
        className={`${styles.button}`}
      >
        <div className={`${styles.decreaseBtn}`} />
      </button>
    </div>
  );
};

Like.propTypes = {
  newsId: PropTypes.string.isRequired,
  defaultLike: PropTypes.number.isRequired,
  onClickIncrease: PropTypes.func.isRequired,
  onClickDecrease: PropTypes.func.isRequired,
};

export default Like;
