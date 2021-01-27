import fetch from '../../helpers/fakeFetch';

const commentList = [
  {
    commentId: '1',
    userName: 'user_A',
    userId: 'id_A',
    comment: 'A 사용자의 댓글입니다.',
    date: '2021-01-20',
  },
  {
    commentId: '2',
    userName: 'user_B',
    userId: 'id_B',
    comment: 'B 사용자의 댓글입니다.',
    date: '2021-01-20',
  },
  {
    commentId: '3',
    userName: 'user_C',
    userId: 'id_C',
    comment: 'C 사용자의 댓글입니다.',
    date: '2021-01-20',
  },
  {
    commentId: '4',
    userName: 'user_D',
    userId: 'id_D',
    comment: 'D 사용자의 댓글입니다.',
    date: '2021-01-20',
  },
  {
    commentId: '5',
    userName: 'user_E',
    userId: 'id_E',
    comment: 'E 사용자의 댓글입니다.',
    date: '2021-01-20',
  },
  {
    commentId: '6',
    userName: 'user_F',
    userId: 'id_F',
    comment: 'F 사용자의 댓글입니다.',
    date: '2021-01-20',
  },
  {
    commentId: '7',
    userName: 'user_G',
    userId: 'id_G',
    comment: 'G 사용자의 댓글입니다.',
    date: '2021-01-20',
  },
  {
    commentId: '8',
    userName: 'user_H',
    userId: 'id_H',
    comment: 'H 사용자의 댓글입니다.',
    date: '2021-01-20',
  },
  {
    commentId: '9',
    userName: 'user_I',
    userId: 'id_I',
    comment: 'I 사용자의 댓글입니다.',
    date: '2021-01-20',
  },
  {
    commentId: '10',
    userName: 'user_J',
    userId: 'id_J',
    comment: 'J 사용자의 댓글입니다.',
    date: '2021-01-20',
  },
];

const limitComment = [];

function getLimitComment(page, amount) {
  if (page === 1) {
    for (let i = 0; i < amount; i += 1) {
      limitComment.push(commentList[i]);
    }
  } else {
    for (
      let i = page + (page * 4 - amount);
      i < page + (page * 4 - amount) + amount;
      i += 1
    ) {
      limitComment.push(commentList[i]);
    }
  }
  return limitComment;
}

const getCommentListResponseData = {
  success: true,
  newsId: 1,
  page: 1,
  amount: 5,
  totalPage: 2,
  commentList: [],
};
getCommentListResponseData.commentList = getLimitComment(
  getCommentListResponseData.page,
  getCommentListResponseData.amount,
);

export const getCommentList = (newsId, page, amount) => {
  return fetch.get(
    'fakeFetch.com/comment/list',
    `newsId=${newsId}&page=${page}&amount=${amount}`,
    getCommentListResponseData,
  );
};

export default getCommentList;
