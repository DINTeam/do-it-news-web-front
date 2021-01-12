import PropTypes from 'prop-types';

import styles from './card.module.css';
import Header from './header';
import NewsImage from './newsImage';
import Contents from './contents';
import Like from './like';

import News from '../../objects/News';

const Card = props => {
  const { onClickIncrease, onClickDecrease, news } = props;

  return (
    <div className={styles.card}>
      <Header
        profileImg={news.profileImg}
        author={news.author}
        company={news.company}
        date={news.date}
        views={news.views}
      />
      <div className={styles.title}>{news.title}</div>
      {news.newsImg ? <NewsImage newsImg={news.newsImg} /> : null}
      <div className={styles.bottomArea}>
        <Contents content={news.newsContent} newsImg={news.newsImg || ''} />
        <Like
          defaultLike={news.likes}
          onClickIncrease={onClickIncrease}
          onClickDecrease={onClickDecrease}
          newsId={news.newsId}
        />
      </div>
    </div>
  );
};

Card.propTypes = {
  onClickIncrease: PropTypes.func.isRequired,
  onClickDecrease: PropTypes.func.isRequired,
  news: PropTypes.instanceOf(News).isRequired,
};

export default Card;
