import { useState, useEffect } from 'react';

import { getNewsList } from '../api/news';

import Header from '../components/header';
import LoadingSpinner from '../components/loadingSpinner';
import Card from '../components/card';

import useScroll from '../customHooks/useScroll';
import useLoading from '../customHooks/useLoading';

import News from '../objects/News';

const LOADING_SPINNER_HEIGHT = 100;

const Home = () => {
  const [success, setSuccess] = useState(true);
  const [newsList, setNewsList] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(2);

  const [isEnd] = useScroll(LOADING_SPINNER_HEIGHT);
  const [newsListFetch] = useLoading(getNewsList);

  const fetchNewsListAndSetState = async () => {
    const res = await newsListFetch(page + 1, 10);
    if (res.success) {
      const newsObjList = res.newsList.map(news => new News(news));
      setNewsList([...newsList, ...newsObjList]);
      setPage(res.page);
      setTotalPage(res.totalPage);
    } else {
      setSuccess(res.success);
    }
  };

  useEffect(() => {
    if (isEnd && page < totalPage) fetchNewsListAndSetState();
  }, [isEnd]);

  useEffect(fetchNewsListAndSetState, []);

  const increaseNewsLike = newsId => console.log(`${newsId} Up`);

  const decreaseNewsLike = newsId => console.log(`${newsId} down`);

  if (!success) return <div>Error</div>;

  return (
    <>
      <Header />
      {newsList.map(aNews => {
        return (
          <Card
            key={Math.floor(Math.random() * 1000000)}
            onClickIncrease={increaseNewsLike}
            onClickDecrease={decreaseNewsLike}
            news={aNews}
          />
        );
      })}
      {!(page === totalPage) && <LoadingSpinner />}
    </>
  );
};

export default Home;
