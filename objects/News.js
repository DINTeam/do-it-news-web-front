class News {
  constructor(aNews = {}) {
    this._newsId = aNews.newsId || '';
    this._newsTitle = aNews.newsTitle || '';
    this._author = aNews.author || '';
    this._date = aNews.date || '';
    this._views = aNews.views || 0;
    this._company = aNews.company || '';
    this._profileImg = aNews.profileImg || '';
    this._likes = aNews.likes || 0;
    this._newsContents = aNews.newsContents || '';
  }

  get newsId() {
    return this._newsId;
  }

  get newsTitle() {
    return this._newsTitle;
  }

  set newsTitle(newNewsTitle) {
    this._newsTitle = newNewsTitle;
  }

  get author() {
    return this._author;
  }

  get date() {
    return this._date;
  }

  get views() {
    return this._views;
  }

  get company() {
    return this._company;
  }

  get profileImg() {
    return this._profileImg;
  }

  get likes() {
    return this._likes;
  }

  get newsContents() {
    return this._newsContents;
  }

  set newsContents(newNewsContents) {
    this._newsContents = newNewsContents;
  }
}

export default News;
