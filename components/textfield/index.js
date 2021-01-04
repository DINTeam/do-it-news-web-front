import PropTypes from 'prop-types';

import styles from './textfield.module.css';

const getWidthStyle = size => {
  if (size === 'short') return styles.short;
  if (size === 'medium') return styles.medium;
  if (size === 'long') return styles.long;

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
    fullWidth,
  } = props;

  const widthStyle = getWidthStyle(width);

  if (multiLine === true) {
    return (
      <div>
        {active ? (
          <textarea
            value={`${value}`}
            onChange={onChange}
            className={`${styles.textarea}`}
          />
        ) : (
          <textarea
            value={`${value}`}
            onChange={onChange}
            className={`${styles.textarea}`}
            readOnly
          />
        )}
      </div>
    );
  }
  return (
    <div>
      {!(label === '') ? (
        <label htmlFor="text" className={`${styles.label}`}>{`${label}`}</label>
      ) : null}
      {active ? (
        <input
          type="text"
          value={`${value}`}
          onChange={onChange}
          placeholder={`${placeholder}`}
          className={`${active} ${widthStyle} ${fullWidth}`}
        />
      ) : (
        <input
          type="text"
          value={`${value}`}
          onChange={onChange}
          placeholder={`${placeholder}`}
          className={`${active} ${widthStyle} ${fullWidth}`}
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
  multiLine: PropTypes.bool,
  fullWidth: PropTypes.bool,
};

Textfield.defaultProps = {
  onChange: () => {},
  active: true,
  width: 'medium',
  fullWidth: false,
  multiLine: false,
  placeholder: '',
  label: '',
};

export default Textfield;
