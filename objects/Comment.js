class Comment {
  constructor(aComment = {}) {
    this._commentId = aComment.commentId || '';
    this._userName = aComment.userName || '';
    this._userId = aComment.userId || '';
    this._comment = aComment.comment || '';
    this._date = aComment.date || '';
  }

  get commentId() {
    return this._commentId;
  }

  get userName() {
    return this._userName;
  }

  get userId() {
    return this._userId;
  }

  get comment() {
    return this._comment;
  }

  set comment(newComment) {
    this._comment = newComment;
  }

  get date() {
    return this._date;
  }
}

export default Comment;
