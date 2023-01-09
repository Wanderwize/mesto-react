export class Api {
  constructor(setting) {
    this._url = setting.baseUrl;
    this._headers = setting.headers;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Что-то пошло не так: ${res.status}`);
  }

  getUserInfo() {
    return fetch(`${this._url}/users/me`, {
      method: "GET",
      headers: this._headers,
    }).then(this._checkResponse);
  }

  getCards() {
    return fetch(`${this._url}/cards`, {
      method: "GET",
      headers: this._headers,
    }).then(this._checkResponse);
  }

  pushUserInfo(data) {
    return fetch(`${this._url}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({ name: data.name, about: data.about }),
    }).then(this._checkResponse);
  }

  pushNewCard(data) {
    return fetch(`${this._url}/cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        link: data.link,
      }),
    }).then(this._checkResponse);
  }

  deleteCard(data) {
    return fetch(`${this._url}/cards/${data._id}`, {
      method: "DELETE",
      headers: this._headers,
    }).then(this._checkResponse);
  }

  setLike(data) {
    return fetch(`${this._url}/cards/${data._id}/likes`, {
      method: "PUT",
      headers: this._headers,
    }).then(this._checkResponse);
  }

  deleteLike(data) {
    return fetch(`${this._url}/cards/likes/${data._id}`, {
      method: "DELETE",
      headers: this._headers,
    }).then(this._checkResponse);
  }

  setUserAvatar(data) {
    return fetch(`${this._url}/users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        avatar: data.avatar,
      }),
    }).then(this._checkResponse);
  }

  getInitialData() {
    return Promise.all([this.getUserInfo(), this.getCards()]);
  }
}

const api = new Api({
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-54",
  headers: {
    authorization: "3c1df54f-ccd1-445f-a430-a8f888e610a5",
    "Content-Type": "application/json",
  },
});

export default api;
