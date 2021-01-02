import PropTypes from 'prop-types';

import styles from './logo.module.css';


const getSizeStyle = size => {
  if (size === 'small') return styles.small;
  if (size === 'medium') return styles.medium;
  if (size === 'large') return styles.large;

  return false;
};

const Logo = props => {
  const { size } = props;

  const sizeStyle = getSizeStyle(size);

  return (
    <div className={`${styles.select}`}>
      <h className={`${sizeStyle}  ${styles.primaryColorFontBlack}`}>Do</h>
      <h className={`${sizeStyle} ${styles.primaryColor}`}> it N</h>
      <h className={`${sizeStyle} ${styles.secondaryColor}`}>ews</h>
    </div>
  );
};

Logo.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

Logo.defaultProps = {
  size: 'medium',
};

export default Logo;
