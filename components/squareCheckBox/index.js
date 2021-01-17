import PropTypes from 'prop-types';

import styles from './squareCheckBox.module.css';

const SquareCheckBox = props => {
  const { label, checked } = props;

  return (
    <>
      <input
        type="checkbox"
        checked={checked}
        className={`${styles.checkbox}`}
      />
      {label}
    </>
  );
};
SquareCheckBox.propTypes = {
  label: PropTypes.string.isRequired,
  checked: PropTypes.bool,
};

SquareCheckBox.defaultProps = {
  checked: false,
};

export default SquareCheckBox;
