class News {
  constructor(aNews = {}) {
    this._newsId = aNews.newsId || '';
    this._newsName = aNews.newsName || '';
    this._author = aNews.author || '';
    this._date = aNews.date || '';
    this._views = aNews.views || 0;
    this._company = aNews.company || '';
    this._profileImg = aNews.profileImg || '';
    this._likes = aNews.likes || 0;
    this._newsContent = aNews.newsContent || '';
  }

  get newsId() {
    return this._newsId;
  }

  get newsName() {
    return this._newsName;
  }

  set newsName(newNewsName) {
    this._newsName = newNewsName;
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

  get newsContent() {
    return this._newsContent;
  }

  set newsContent(newNewsContent) {
    this._newsContent = newNewsContent;
  }
}

export default News;
