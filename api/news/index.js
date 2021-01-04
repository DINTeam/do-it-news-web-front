import fetch from '../../helpers/fakeFetch';

const getNewsListResponseData = {
  success: true,
  newsList: [
    {
      newsId: '1',
      newsName: 'Breaking news From A',
      author: 'User_A',
      date: '2020.01.04.12:30',
      views: 20357,
      company: 'Seoultech',
      profileImg: 'fakeFetch.com',
      likes: -16432,
      newsContent:
        'Pellentesque consectetur, lorem nec lacinia tincidunt, mauris tortor suscipit tortor, quis molestie felis ipsum in ante. Fusce viverra tortor vitae ante tincidunt, eu scelerisque elit laoreet. Proin eu ligula sed neque porta dictum. Duis nec cursus leo. In sit amet lacus suscipit purus malesuada molestie sit amet nec urna. Quisque non accumsan odio. Mauris ut velit nec dui pulvinar sollicitudin. Nulla facilisi. Phasellus ac neque magna. Sed leo diam, rutrum nec aliquet at, aliquet non nisl. Integer tristique urna eget suscipit sollicitudin.',
    },
    {
      newsId: '2',
      newsName: 'Breaking news From B',
      author: 'User_B',
      date: '2020.01.04.12:30',
      views: 0,
      company: 'Seoultech',
      profileImg: 'fakeFetch.com',
      likes: 0,
      newsContent:
        'Pellentesque consectetur, lorem nec lacinia tincidunt, mauris tortor suscipit tortor, quis molestie felis ipsum in ante. Fusce viverra tortor vitae ante tincidunt, eu scelerisque elit laoreet. Proin eu ligula sed neque porta dictum. Duis nec cursus leo. In sit amet lacus suscipit purus malesuada molestie sit amet nec urna. Quisque non accumsan odio. Mauris ut velit nec dui pulvinar sollicitudin. Nulla facilisi. Phasellus ac neque magna. Sed leo diam, rutrum nec aliquet at, aliquet non nisl. Integer tristique urna eget suscipit sollicitudin.',
    },
    {
      newsId: '3',
      newsName: 'Breaking news From C',
      author: 'User_C',
      date: '2020.01.04.12:30',
      views: 20,
      company: 'Seoultech',
      profileImg: 'fakeFetch.com',
      likes: 10,
      newsContent:
        'Pellentesque consectetur, lorem nec lacinia tincidunt, mauris tortor suscipit tortor, quis molestie felis ipsum in ante. Fusce viverra tortor vitae ante tincidunt, eu scelerisque elit laoreet. Proin eu ligula sed neque porta dictum. Duis nec cursus leo. In sit amet lacus suscipit purus malesuada molestie sit amet nec urna. Quisque non accumsan odio. Mauris ut velit nec dui pulvinar sollicitudin. Nulla facilisi. Phasellus ac neque magna. Sed leo diam, rutrum nec aliquet at, aliquet non nisl. Integer tristique urna eget suscipit sollicitudin.',
    },
    {
      newsId: '4',
      newsName: 'Breaking news From D',
      author: 'User_D',
      date: '2020.01.04.12:30',
      views: 2200,
      company: 'Seoultech',
      profileImg: 'fakeFetch.com',
      likes: -2000,
      newsContent:
        'Pellentesque consectetur, lorem nec lacinia tincidunt, mauris tortor suscipit tortor, quis molestie felis ipsum in ante. Fusce viverra tortor vitae ante tincidunt, eu scelerisque elit laoreet. Proin eu ligula sed neque porta dictum. Duis nec cursus leo. In sit amet lacus suscipit purus malesuada molestie sit amet nec urna. Quisque non accumsan odio. Mauris ut velit nec dui pulvinar sollicitudin. Nulla facilisi. Phasellus ac neque magna. Sed leo diam, rutrum nec aliquet at, aliquet non nisl. Integer tristique urna eget suscipit sollicitudin.',
    },
    {
      newsId: '5',
      newsName: 'Breaking news From E',
      author: 'User_E',
      date: '2020.01.04.12:30',
      views: 200,
      company: 'Seoultech',
      profileImg: 'fakeFetch.com',
      likes: 10,
      newsContent:
        'Pellentesque consectetur, lorem nec lacinia tincidunt, mauris tortor suscipit tortor, quis molestie felis ipsum in ante. Fusce viverra tortor vitae ante tincidunt, eu scelerisque elit laoreet. Proin eu ligula sed neque porta dictum. Duis nec cursus leo. In sit amet lacus suscipit purus malesuada molestie sit amet nec urna. Quisque non accumsan odio. Mauris ut velit nec dui pulvinar sollicitudin. Nulla facilisi. Phasellus ac neque magna. Sed leo diam, rutrum nec aliquet at, aliquet non nisl. Integer tristique urna eget suscipit sollicitudin.',
    },
    {
      newsId: '6',
      newsName: 'Breaking news From F',
      author: 'User_F',
      date: '2020.01.04.12:30',
      views: 39521,
      company: 'Seoultech',
      profileImg: 'fakeFetch.com',
      likes: 14236,
      newsContent:
        'Pellentesque consectetur, lorem nec lacinia tincidunt, mauris tortor suscipit tortor, quis molestie felis ipsum in ante. Fusce viverra tortor vitae ante tincidunt, eu scelerisque elit laoreet. Proin eu ligula sed neque porta dictum. Duis nec cursus leo. In sit amet lacus suscipit purus malesuada molestie sit amet nec urna. Quisque non accumsan odio. Mauris ut velit nec dui pulvinar sollicitudin. Nulla facilisi. Phasellus ac neque magna. Sed leo diam, rutrum nec aliquet at, aliquet non nisl. Integer tristique urna eget suscipit sollicitudin.',
    },
    {
      newsId: '7',
      newsName: 'Breaking news From G',
      author: 'User_G',
      date: '2020.01.04.12:30',
      views: 2,
      company: 'Seoultech',
      profileImg: 'fakeFetch.com',
      likes: 1,
      newsContent:
        'Pellentesque consectetur, lorem nec lacinia tincidunt, mauris tortor suscipit tortor, quis molestie felis ipsum in ante. Fusce viverra tortor vitae ante tincidunt, eu scelerisque elit laoreet. Proin eu ligula sed neque porta dictum. Duis nec cursus leo. In sit amet lacus suscipit purus malesuada molestie sit amet nec urna. Quisque non accumsan odio. Mauris ut velit nec dui pulvinar sollicitudin. Nulla facilisi. Phasellus ac neque magna. Sed leo diam, rutrum nec aliquet at, aliquet non nisl. Integer tristique urna eget suscipit sollicitudin.',
    },
    {
      newsId: '8',
      newsName: 'Breaking news From H',
      author: 'User_H',
      date: '2020.01.04.12:30',
      views: 70,
      company: 'Seoultech',
      profileImg: 'fakeFetch.com',
      likes: 62,
      newsContent:
        'Pellentesque consectetur, lorem nec lacinia tincidunt, mauris tortor suscipit tortor, quis molestie felis ipsum in ante. Fusce viverra tortor vitae ante tincidunt, eu scelerisque elit laoreet. Proin eu ligula sed neque porta dictum. Duis nec cursus leo. In sit amet lacus suscipit purus malesuada molestie sit amet nec urna. Quisque non accumsan odio. Mauris ut velit nec dui pulvinar sollicitudin. Nulla facilisi. Phasellus ac neque magna. Sed leo diam, rutrum nec aliquet at, aliquet non nisl. Integer tristique urna eget suscipit sollicitudin.',
    },
    {
      newsId: '9',
      newsName: 'Breaking news From I',
      author: 'User_I',
      date: '2020.01.04.12:30',
      views: 200,
      company: 'Seoultech',
      profileImg: 'fakeFetch.com',
      likes: 10,
      newsContent:
        'Pellentesque consectetur, lorem nec lacinia tincidunt, mauris tortor suscipit tortor, Proin eu ligula sed neque porta dictum. Duis nec cursus leo. In sit amet lacus suscipit purus malesuada molestie sit amet nec urna. Quisque non accumsan odio. Mauris ut velit nec dui pulvinar sollicitudin. Nulla facilisi. Phasellus ac neque magna. Sed leo diam, rutrum nec aliquet at, aliquet non nisl. Integer tristique urna eget suscipit sollicitudin.',
    },
    {
      newsId: '10',
      newsName: 'Breaking news from J',
      author: 'User_J',
      date: '2020.01.04.12:30',
      views: 2000,
      company: 'Seoultech',
      profileImg: 'fakeFetch.com',
      likes: 20,
      newsContent:
        'Pellentesque consectetur, lorem nec lacinia tincidunt, mauris tortor suscipit tortor, quis molestie felis ipsum in ante. Fusce viverra tortor vitae ante tincidunt, eu scelerisque elit laoreet. Proin eu ligula sed neque porta dictum. Duis nec cursus leo. In sit amet lacus suscipit purus malesuada molestie sit amet nec urna.',
    },
  ],
  page: 1,
  amount: 10,
  totalPage: 10,
};

export const getNewsList = (page, amount) => {
  return fetch.get(
    'fakeFetch.com/news/list',
    `page=${page}&amount=${amount}`,
    getNewsListResponseData,
  );
};

const getNewsResponseData = {
  success: true,
  news: {
    newsId: '1',
    newsName: 'Breaking news From A',
    author: 'User_A',
    date: '2020.01.04.12:30',
    views: 20357,
    company: 'Seoultech',
    profileImg: 'fakeFetch.com',
    likes: -16432,
    newsContent:
      'Pellentesque consectetur, lorem nec lacinia tincidunt, mauris tortor suscipit tortor, quis molestie felis ipsum in ante. Fusce viverra tortor vitae ante tincidunt, eu scelerisque elit laoreet. Proin eu ligula sed neque porta dictum. Duis nec cursus leo. In sit amet lacus suscipit purus malesuada molestie sit amet nec urna. Quisque non accumsan odio. Mauris ut velit nec dui pulvinar sollicitudin. Nulla facilisi. Phasellus ac neque magna. Sed leo diam, rutrum nec aliquet at, aliquet non nisl. Integer tristique urna eget suscipit sollicitudin.',
  },
};

export const getNews = newsId => {
  return fetch.get(`fakeFetch.com/news/${newsId}`, 'get', getNewsResponseData);
};
