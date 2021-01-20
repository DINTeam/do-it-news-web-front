import PropTypes from 'prop-types';

import styles from './roundCheckBox.module.css';

const getSizeStyle = size => {
  if (size === 'small') return styles.small;
  if (size === 'large') return styles.large;

  return false;
};

const RoundCheckBox = props => {
  const { size, checked, onChange, contents, subContents } = props;

  const sizeStyle = getSizeStyle(size);

  return (
    <label htmlFor="checkbox" className={`${sizeStyle}`}>
      <div className={`${styles.contents}`}>
        {contents ? (
          <h className={`${styles.content}`}>{`${contents}`}</h>
        ) : null}
        {subContents ? (
          <h className={`${styles.subContent}`}>{`${subContents}`}</h>
        ) : null}
      </div>
      <input
        type="checkbox"
        checked={`${checked}`}
        className={`${styles.checkbox}`}
        id="checkbox"
        onChange={onChange}
      />
      <label htmlFor="checkbox" className={`${styles.label}`}>
        {' '}
      </label>
    </label>
  );
};

RoundCheckBox.propTypes = {
  size: PropTypes.oneOf(['small', 'large']),
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  contents: PropTypes.string.isRequired,
  subContents: PropTypes.string,
};

RoundCheckBox.defaultProps = {
  onChange: () => {},
  size: 'small',
  checked: false,
  subContents: '',
};

export default RoundCheckBox;
