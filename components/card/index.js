import PropTypes from 'prop-types';

import styles from './card.module.css';
import Header from './header';
import NewsImage from './newsImage';
import Contents from './contents';
import Like from './like';

const Card = props => {
  const {
    value,
    onChange,
    profileImg,
    author,
    title,
    company,
    date,
    views,
    newsImg,
    content,
  } = props;

  return (
    <div className={`${styles.card}`}>
      <Header
        profileImg={profileImg}
        author={author}
        company={company}
        date={date}
        views={views}
      />
      <div className={`${styles.title}`}>{title}</div>
      {newsImg ? <NewsImage newsImg={`${newsImg}`} /> : null}
      <div className={`${styles.bottomArea}`}>
        <Contents content={`${content}`} newsImg={`${newsImg}`} />
        <Like value={`${value}`} onChange={onChange} />
      </div>
    </div>
  );
};

Card.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  author: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  profileImg: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  views: PropTypes.number.isRequired,
  newsImg: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

Card.defaultProps = {
  onChange: () => {},
};

export default Card;
