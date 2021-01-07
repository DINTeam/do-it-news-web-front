import PropTypes from 'prop-types';
import Link from 'next/link';

import styles from './header.module.css';

const Header = props => {
  const { profileImg, author, company, date, views } = props;

  return (
    <div className={`${styles.header}`}>
      <Link href="/">
        <div className={`${styles.leftSide}`}>
          <div className={`${styles.profileImg}`}>{profileImg}</div>
          <div>
            <div className={`${styles.large}`}>{author}</div>
            <div className={`${styles.medium}`}>{company}</div>
          </div>
        </div>
      </Link>
      <div className={`${styles.rightSide}`}>
        <div className={`${styles.shareLogo}`}>
          <Link href="/">
            <div className={`${styles.share}`} />
          </Link>
          <Link href="/">
            <div className={`${styles.facebook}`} />
          </Link>
          <Link href="/">
            <div className={`${styles.instagram}`} />
          </Link>
        </div>
        <div className={`${styles.small}`}>{views}</div>
        <div className={`${styles.small}`}>{date}</div>
      </div>
    </div>
  );
};

Header.propTypes = {
  author: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  profileImg: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  views: PropTypes.number.isRequired,
};

export default Header;
