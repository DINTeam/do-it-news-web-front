import PropTypes from 'prop-types';

import styles from './card.module.css';
import Header from './header';
import NewsImage from './newsImage';
import Contents from './contents';
import Like from './like';

const Card = props => {
  const {
    newsId,
    onClickIncrease,
    onClickDecrease,
    defaultLike,
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
        <Like
          defaultLike={defaultLike}
          onClickIncrease={onClickIncrease}
          onClickDecrease={onClickDecrease}
          newsId={`${newsId}`}
        />
      </div>
    </div>
  );
};

Card.propTypes = {
  newsId: PropTypes.string.isRequired,
  defaultLike: PropTypes.number.isRequired,
  author: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  profileImg: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  views: PropTypes.number.isRequired,
  newsImg: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  onClickIncrease: PropTypes.func.isRequired,
  onClickDecrease: PropTypes.func.isRequired,
};

export default Card;
