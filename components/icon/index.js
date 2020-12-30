import PropTypes from 'prop-types';
import Image from 'next/image';
import styles from './icon.module.css';

const getImageWidthHeight = size => {
  if (size === 'small') return { width: 25, height: 25 };
  if (size === 'medium') return { width: 50, height: 50 };
  if (size === 'large') return { width: 75, height: 75 };
  return false;
};

const Icon = props => {
  const { imageUrl, alt, size } = props;

  const imageWidthHeight = getImageWidthHeight(size);

  return (
    <>
      <Image
        src={imageUrl}
        alt={alt}
        width={imageWidthHeight.width}
        height={imageWidthHeight.height}
        className={styles.icon}
      />
    </>
  );
};

Icon.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

Icon.defaultProps = {
  size: 'large',
};

export default Icon;
