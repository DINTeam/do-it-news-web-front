import PropTypes from 'prop-types';
import Link from 'next/link';

import styles from './logo.module.css';

const getSizeStyle = size => {
  if (size === 'small') return styles.small;
  if (size === 'medium') return styles.medium;
  if (size === 'large') return styles.large;

  return false;
};

const Logo = props => {
  const { size, active } = props;

  const sizeStyle = getSizeStyle(size);

  return (
    <div>
      {active ? (
        <Link href="/main">
          <a href="./">
            <div className={`${styles.logo}`}>
              <h1 className={`${sizeStyle}  ${styles.primaryColorFontBlack}`}>
                Do
              </h1>
              <h1 className={`${sizeStyle} ${styles.primaryColor}`}> it N</h1>
              <h1 className={`${sizeStyle} ${styles.secondaryColor}`}>ews</h1>
            </div>
          </a>
        </Link>
      ) : (
        <div className={`${styles.logo}`}>
          <h1 className={`${sizeStyle}  ${styles.primaryColorFontBlack}`}>Do</h1>
          <h1 className={`${sizeStyle} ${styles.primaryColor}`}> it N</h1>
          <h1 className={`${sizeStyle} ${styles.secondaryColor}`}>ews</h1>
        </div>
      )}
    </div>
  );
};

Logo.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  active: PropTypes.bool,
};

Logo.defaultProps = {
  size: 'medium',
  active: true,
};

export default Logo;
