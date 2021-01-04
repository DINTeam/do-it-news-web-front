import PropTypes from 'prop-types';

import styles from './textfield.module.css';

const getWidthStyle = size => {
  if (size === 'short') return styles.short;
  if (size === 'medium') return styles.medium;
  if (size === 'long') return styles.long;

  return false;
};

const getSizeStyle = size => {
  if (size === 'small') return styles.small;
  if (size === 'large') return styles.large;

  return false;
};

const Textfield = props => {
  const {
    value,
    onChange,
    label,
    active,
    placeholder,
    multiLine,
    width,
    size,
    fullWidth,
  } = props;

  const widthStyle = getWidthStyle(width);
  const sizeStyle = getSizeStyle(size);

  if (multiLine === true) {
    return (
      <div>
        {active ? (
          <textarea
            onChange={onChange}
            className={`${styles.active} ${styles.textarea} ${sizeStyle} ${fullWidth}`}
          />
        ) : (
          <textarea
            onChange={onChange}
            className={`${styles.non_active} ${styles.textarea} ${sizeStyle} ${fullWidth}`}
            readOnly
          />
        )}
      </div>
    );
  }
  return (
    <div>
      {!(label === '') ? (
        <label htmlFor="text" className={` ${styles.label}`}>
          {`${label}`}
        </label>
      ) : null}
      {active ? (
        <input
          type="text"
          onChange={onChange}
          placeholder={`${placeholder}`}
          className={`${styles.active} ${widthStyle} ${fullWidth}`}
        />
      ) : (
        <input
          type="text"
          onChange={onChange}
          placeholder={`${placeholder}`}
          className={`${styles.non_active} ${widthStyle} ${fullWidth}`}
          readOnly
        />
      )}
    </div>
  );
};

Textfield.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  active: PropTypes.bool,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  width: PropTypes.oneOf(['short', 'medium', 'long']),
  size: PropTypes.oneOf(['small', 'large']),
  multiLine: PropTypes.bool,
  fullWidth: PropTypes.bool,
};

Textfield.defaultProps = {
  onChange: () => {},
  active: true,
  width: 'medium',
  size: 'small',
  fullWidth: false,
  multiLine: false,
  placeholder: '',
  label: '',
};

export default Textfield;
