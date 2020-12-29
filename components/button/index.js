import PropTypes from 'prop-types';

const Button = props => {
  const { value, onClick } = props;

  return <input type="button" value={`${value}`} onClick={onClick} />;
};

Button.propTypes = {
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  onClick: () => {},
};

export default Button;
