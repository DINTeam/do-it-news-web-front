import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getNewsList } from '../api/news';
import LoadingSpinner from '../components/loadingSpinner';
import Card from '../components/card';

import useScroll from '../customHooks/useScroll';
import useLoading from '../customHooks/useLoading';

import News from '../objects/News';

const LOADING_SPINNER_HEIGHT = 100;

const Home = props => {
  const { ssSuccess, ssNewsList, ssPage, ssTotalPage } = props;

  const [success, setSuccess] = useState(ssSuccess);
  const [newsList, setNewsList] = useState(ssNewsList);
  const [page, setPage] = useState(ssPage);
  const [totalPage, setTotalPage] = useState(ssTotalPage);

  const [isEnd] = useScroll(LOADING_SPINNER_HEIGHT);
  const [newsListFetch] = useLoading(getNewsList);

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

  const increaseNewsLike = newsId => console.log(`${newsId} Up`);

  const decreaseNewsLike = newsId => console.log(`${newsId} down`);

  if (!success) return <div>Error</div>;
  const commentList = [
    { userName: 'User_A', userId: 'A_Id', comment: 'commentA', date: '2020' },
    { userName: 'User_B', userId: 'B_Id', comment: 'commentB', date: '2020' },
    { userName: 'User_C', userId: 'C_Id', comment: 'commentC', date: '2020' },
  ];
  return (
    <>
      {newsList.map(aNews => {
        const news = new News(aNews);

        return (
          <Card
            key={Math.floor(Math.random() * 1000000)}
            onClickIncrease={increaseNewsLike}
            onClickDecrease={decreaseNewsLike}
            news={news}
            commentList={commentList}
          />
        );
      })}
      {!(page === totalPage) && <LoadingSpinner />}
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
