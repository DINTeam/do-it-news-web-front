import React, { useState } from 'react';

import styles from './like.module.css';

const Like = () => {
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
        onClick={increaseNumber}
        className={`${styles.button}`}
      >
        <div className={`${styles.increaseBtn}`} />
      </button>
      <h className={`${styles.likeNumber}`}>{number}</h>
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

export default Like;
