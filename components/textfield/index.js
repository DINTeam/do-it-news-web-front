import PropTypes from 'prop-types';

import styles from './textfield.module.css';

const getWidthStyle = size => {
  if (size === 'short') return styles.short;
  if (size === 'medium') return styles.medium;
  if (size === 'long') return styles.long;

  return false;
};

const Textfield = props => {
  const { label, active, placeholder, multiLine, width, fullWidth } = props;

  const widthStyle = getWidthStyle(width);

  if (multiLine === true) {
    return (
      <div>
        {active ? (
          <textarea className={`${styles.textarea}`} />
        ) : (
          <textarea className={`${styles.textarea}`} readOnly />
        )}
      </div>
    );
  }
  return (
    <div>
      <label htmlFor="text" className={`${styles.label}`}>{`${label}`}</label>
      {active ? (
        <input
          type="text"
          placeholder={`${placeholder}`}
          className={`${active} ${widthStyle} ${fullWidth}`}
        />
      ) : (
        <input
          type="text"
          placeholder={`${placeholder}`}
          className={`${active} ${widthStyle} ${fullWidth}`}
          readOnly
        />
      )}
    </div>
  );
};

Textfield.propTypes = {
  active: PropTypes.bool,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  width: PropTypes.oneOf(['short', 'medium', 'long']),
  multiLine: PropTypes.bool,
  fullWidth: PropTypes.bool,
};

Textfield.defaultProps = {
  active: false,
  width: 'medium',
  fullWidth: false,
  multiLine: false,
  placeholder: '',
  label: '',
};

export default Textfield;
