import PropTypes from 'prop-types';
import Link from 'next/link';
import styles from './header.module.css';
import Logo from '../logo';

const Header = props => {
  const { stateSignIn } = props;
  return (
    <div className={`${styles.header}`}>
      <div className={`${styles.headerArea}`}>
        <Logo />
        <div className={`${styles.category}`}>
          <Link href="/">
            <a href="./" className={`${styles.categoryFont}`}>
              <h1>정치</h1>
            </a>
          </Link>
          <Link href="/">
            <a href="./" className={`${styles.categoryFont}`}>
              <h1>경제</h1>
            </a>
          </Link>
          <Link href="/">
            <a href="./" className={`${styles.categoryFont}`}>
              <h1>사회</h1>
            </a>
          </Link>
          <Link href="/">
            <a href="./" className={`${styles.categoryFont}`}>
              <h1>국제</h1>
            </a>
          </Link>
          <Link href="/">
            <a href="./" className={`${styles.categoryFont}`}>
              <h1>문화</h1>
            </a>
          </Link>
          <Link href="/">
            <a href="./" className={`${styles.categoryFont}`}>
              <h1>스포츠</h1>
            </a>
          </Link>
        </div>
        <div className={`${styles.headerIcon}`}>
          {stateSignIn ? (
            <Link href="/">
              <a href="./">
                <div className={`${styles.addNews}`} />
              </a>
            </Link>
          ) : null}
          {stateSignIn ? (
            <Link href="/">
              <a href="./">
                <div className={`${styles.viewArticles}`} />
              </a>
            </Link>
          ) : null}
          <Link href="/">
            <a href="./">
              <div className={`${styles.viewUserInfo}`} />
            </a>
          </Link>
          <Link href="/">
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
  stateSignIn: PropTypes.bool,
};

Header.defaultProps = {
  stateSignIn: false,
};

export default Header;
