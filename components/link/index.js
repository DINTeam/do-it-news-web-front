import PropTypes from 'prop-types';
import NextLink from 'next/link';

const Link = props => {
  const { href, children } = props;

  return (
    <NextLink href={href}>
      <a>{children}</a>
    </NextLink>
  );
};

Link.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
    .isRequired,
};

export default Link;
