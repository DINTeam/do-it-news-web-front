import styles from './loadingSpinner.module.css';

const LoadingSpinner = () => {
  return (
    <div className={`${styles.loading}`}>
      <div className={`${styles.loadingSpinner}`}>
        <svg className={`${styles.svg}`}>
          <circle cx="50" cy="12" r="10" className={`${styles.circle}`} />
          <circle cx="88" cy="50" r="10" className={`${styles.circle}`} />
          <circle cx="50" cy="88" r="10" className={`${styles.circle}`} />
          <circle cx="12" cy="50" r="10" className={`${styles.circle}`} />
        </svg>
      </div>
    </div>
  );
};

export default LoadingSpinner;
