import PropTypes from 'prop-types';
import Link from 'next/link';
import styles from './header.module.css';
import Logo from '../logo';

const Header = props => {
  const { logoSize, logoActive, stateSignIn } = props;
  return (
    <div className={`${styles.header}`}>
      <div className={`${styles.headerArea}`}>
        <Logo size={`${logoSize}`} active={logoActive} />
        <div className={`${styles.category}`}>
          <Link href="/" prefetch={false}>
            <a href="./" className={`${styles.categoryFont}`}>
              <h>정치</h>
            </a>
          </Link>
          <Link href="/" prefetch={false}>
            <a href="./" className={`${styles.categoryFont}`}>
              <h>경제</h>
            </a>
          </Link>
          <Link href="/" prefetch={false}>
            <a href="./" className={`${styles.categoryFont}`}>
              <h>사회</h>
            </a>
          </Link>
          <Link href="/" prefetch={false}>
            <a href="./" className={`${styles.categoryFont}`}>
              <h>국제</h>
            </a>
          </Link>
          <Link href="/" prefetch={false}>
            <a href="./" className={`${styles.categoryFont}`}>
              <h>문화</h>
            </a>
          </Link>
          <Link href="/" prefetch={false}>
            <a href="./" className={`${styles.categoryFont}`}>
              <h>스포츠</h>
            </a>
          </Link>
        </div>
        <div className={`${styles.headerIcon}`}>
          {stateSignIn ? (
            <Link href="/" prefetch={false}>
              <a href="./">
                <div className={`${styles.addNews}`} />
              </a>
            </Link>
          ) : null}
          {stateSignIn ? (
            <Link href="/" prefetch={false}>
              <a href="./">
                <div className={`${styles.viewArticles}`} />
              </a>
            </Link>
          ) : null}
          <Link href="/" prefetch={false}>
            <a href="./">
              <div className={`${styles.viewUserInfo}`} />
            </a>
          </Link>
          <Link href="/" prefetch={false}>
            <a href="./">
              <div className={`${styles.search}`} />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {
  logoSize: PropTypes.oneOf(['small', 'medium', 'large']),
  logoActive: PropTypes.bool,
  stateSignIn: PropTypes.bool,
};

Header.defaultProps = {
  logoSize: 'medium',
  logoActive: false,
  stateSignIn: false,
};

export default Header;
