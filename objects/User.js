class User {
  constructor(aUser) {
    if (!aUser) return;
    this._userId = aUser.userId || '';
    this._userPw = aUser.userPw || '';
  }

  get userId() {
    return this._userId;
  }

  get userPw() {
    return this._userPw;
  }
}

export default User;
