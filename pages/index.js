import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getNewsList } from '../api/news';
import LoadingSpinner from '../components/loadingSpinner';

import useScroll from '../customHooks/useScroll';
import useLoading from '../customHooks/useLoading';

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
  const { ssSuccess, ssNewsList, ssPage, ssTotalPage } = props;

  const [success, setSuccess] = useState(ssSuccess);
  const [newsList, setNewsList] = useState(ssNewsList);
  const [page, setPage] = useState(ssPage);
  const [totalPage, setTotalPage] = useState(ssTotalPage);

  const [isEnd] = useScroll();
  const [newsListFetch, stateNewsListLoading] = useLoading(getNewsList);

  useEffect(async () => {
    if (isEnd && page < totalPage) {
      const res = await newsListFetch(page + 1, 10);
      if (res.success) {
        setNewsList([...newsList, ...res.newsList]);
        setPage(res.page);
        setTotalPage(res.totalPage);
      } else {
        setSuccess(res.success);
      }
    }
  }, [isEnd]);

  if (!success) return <div>Error</div>;
  return (
    <>
      {newsList.map(news => (
        // Key는 나중에 newsId로 변경
        <CardNews key={Math.floor(Math.random() * 1000000)} news={news} />
      ))}
      {stateNewsListLoading && <LoadingSpinner />}
    </>
  );
};

export const getServerSideProps = async () => {
  const newsListRes = await getNewsList(1, 10).then(res => res);

  return {
    props: {
      ssSuccess: newsListRes.success,
      ssNewsList: newsListRes.newsList,
      ssPage: newsListRes.page,
      ssTotalPage: newsListRes.totalPage,
    },
  };
};

Home.propTypes = {
  ssSuccess: PropTypes.bool.isRequired,
  ssNewsList: PropTypes.arrayOf(
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
  ssPage: PropTypes.number.isRequired,
  ssTotalPage: PropTypes.number.isRequired,
};

export default Home;
