import React, { useState } from 'react';
import PropTypes from 'prop-types';

import styles from './like.module.css';

const Like = props => {
  const { value, onChange } = props;

  const [number, setNumber] = useState(0);

  const increaseNumber = () => {
    setNumber(number + 1);
  };

  const decreaseNumber = () => {
    setNumber(number - 1);
  };

  return (
    <div className={`${styles.like}`}>
      <button
        type="button"
        value={`${value}`}
        onClick={increaseNumber}
        onChange={onChange}
        className={`${styles.button}`}
      >
        <div className={`${styles.increaseBtn}`} />
      </button>
      <h
        value={`${value}`}
        onChange={onChange}
        className={`${styles.likeNumber}`}
      >
        {number}
      </h>
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
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};

Like.defaultProps = {
  onChange: () => {},
};

export default Like;
