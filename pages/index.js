import PropTypes from 'prop-types';
import { getNewsList } from '../api/news';

const CardNews = props => {
  const { news } = props;

  return (
    <div>
      <div>{`Title: ${news.newsName}`}</div>
      <div>{`Author: ${news.author}`}</div>
      <div>{`Image: ${news.profileImg}`}</div>
      <div>{`Date && View: ${news.date}, ${news.views}`}</div>
      <div>{`Company: ${news.company}`}</div>
      <div>{`Likes: ${news.likes}`}</div>
      <div>{`News id: ${news.newsId}`}</div>
      <div>{`Content: ${news.newsContent}`}</div>
      <hr />
    </div>
  );
};

CardNews.propTypes = {
  news: PropTypes.shape({
    newsId: PropTypes.string.isRequired,
    newsName: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    views: PropTypes.number.isRequired,
    company: PropTypes.string.isRequired,
    profileImg: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    newsContent: PropTypes.string.isRequired,
  }).isRequired,
};

const Home = props => {
  const { success, newsList, page, amount, totalPage } = props;

  if (!success) return <div>Error</div>;
  return (
    <>
      {newsList.map(news => (
        <CardNews key={news.newsId} news={news} />
      ))}
    </>
  );
};

export const getServerSideProps = async () => {
  const newsListRes = await getNewsList(1, 10).then(res => res);

  return {
    props: {
      ...newsListRes,
    },
  };
};

Home.propTypes = {
  success: PropTypes.bool.isRequired,
  newsList: PropTypes.arrayOf(
    PropTypes.shape({
      author: PropTypes.string.isRequired,
      company: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      newsContent: PropTypes.string.isRequired,
      newsId: PropTypes.string.isRequired,
      newsName: PropTypes.string.isRequired,
      views: PropTypes.number.isRequired,
      profileImg: PropTypes.string.isRequired,
      likes: PropTypes.number.isRequired,
    }),
  ).isRequired,
  page: PropTypes.number.isRequired,
  amount: PropTypes.number.isRequired,
  totalPage: PropTypes.number.isRequired,
};

export default Home;
