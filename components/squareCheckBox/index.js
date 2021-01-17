import PropTypes from 'prop-types';

import styles from './squareCheckBox.module.css';

const SquareCheckBox = props => {
  const { label, checked, onChange } = props;

  return (
    <>
      <input
        type="checkbox"
        checked={checked}
        className={`${styles.checkbox}`}
        onChange={onChange}
      />
      {label}
    </>
  );
};
SquareCheckBox.propTypes = {
  label: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
};

SquareCheckBox.defaultProps = {
  checked: false,
};

export default SquareCheckBox;
