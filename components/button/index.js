import PropTypes from 'prop-types';

import styles from './button.module.css';

const getSizeStyle = size => {
  if (size === 'small') return styles.small;
  if (size === 'medium') return styles.medium;
  if (size === 'large') return styles.large;

  return false;
};

const getColorStyle = color => {
  if (color === 'primary') return styles.primaryColor;
  if (color === 'secondary') return styles.secondaryColor;
  if (color === 'signUp') return styles.signUpColor;

  return false;
};

const Button = props => {
  const { value, onClick, size, color, fullWidth } = props;

  const sizeStyle = getSizeStyle(size);
  const colorStyle = getColorStyle(color);

  return (
    <input
      type="button"
      value={`${value}`}
      onClick={onClick}
      className={`${styles.button} ${sizeStyle} ${colorStyle} ${fullWidth}`}
    />
  );
};

Button.propTypes = {
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  color: PropTypes.oneOf(['primary', 'secondary']),
  fullWidth: PropTypes.bool,
};

Button.defaultProps = {
  onClick: () => {},
  size: 'medium',
  color: 'primary',
  fullWidth: false,
};

export default Button;
