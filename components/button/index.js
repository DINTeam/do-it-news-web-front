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
  if (color === 'tertiary') return styles.tertiaryColor;

  return false;
};

const Button = props => {
  const { value, onClick, size, color, fullWidth, type, active } = props;

  const sizeStyle = getSizeStyle(size);
  const colorStyle = getColorStyle(color);

  return (
    <input
      type={type}
      value={value}
      onClick={onClick}
      className={`${styles.button} ${sizeStyle} ${colorStyle} ${fullWidth}`}
    />
  );
};

Button.propTypes = {
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  color: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
  fullWidth: PropTypes.bool,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  active: PropTypes.bool,
};

Button.defaultProps = {
  onClick: () => {},
  size: 'medium',
  color: 'primary',
  fullWidth: false,
  type: 'button',
  active: true,
};

export default Button;
