import PropTypes from 'prop-types';

import styles from './squarecheckbox.module.css';

const SquareCheckBox = props => {
  const { value, checked } = props;

  return (
    <input
      type="checkbox"
      value={`${value}`}
      checked={`${checked}`}
      className={`${styles.checkbox}`}
    />
  );
};
SquareCheckBox.propTypes = {
  value: PropTypes.string.isRequired,
  checked: PropTypes.bool,
};

SquareCheckBox.defaultProps = {
  checked: false,
};

export default SquareCheckBox;
