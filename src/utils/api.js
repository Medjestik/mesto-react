import {config} from './utils.js'

class Api {
    constructor(options) {
        this.url = options.baseUrl;
        this.headers = options.headers;
    }

    _handleResponse(response) {
        if (response.ok) {
          return response.json();
        } else {
          return Promise.reject(response.statusText)
        }
    }

    _handleError (error) {
        console.error(error)
        return Promise.reject(error.message)
      }

    getUserInfo() {
        return fetch(`${this.url}/users/me`, {
            method: 'GET',
            headers: this.headers
        })
        .then(this._handleResponse)
        .catch(this._handleError);
    }

    getInitialCards() {
        return fetch(`${this.url}/cards`, {
            method: 'GET',
            headers: this.headers
        })
        .then(this._handleResponse)
        .catch(this._handleError);
    }

    editUserInfo(name, about) {
        return fetch(`${this.url}/users/me`, {
            method: 'PATCH',
            headers: this.headers,
            body: JSON.stringify({
                name: name,
                about: about
            })
        })
        .then(this._handleResponse)
        .catch(this._handleError);
    }

    changeAvatar(url) {
        return fetch(`${this.url}/users/me/avatar`, {
            method: 'PATCH',
            headers: this.headers,
            body: JSON.stringify({
                avatar: url
                })
        })
        .then(this._handleResponse)
        .catch(this._handleError); 
    }

    addCard(name, link) {
        return fetch(`${this.url}/cards`, {
            method: 'POST',
            headers: this.headers,
            body: JSON.stringify({
                name: name,
                link: link
              })
        })
        .then(this._handleResponse)
        .catch(this._handleError);
    }

    deleteCard(id) {
        return fetch(`${this.url}/cards/${id}`, {
            method: 'DELETE',
            headers: this.headers,
        })
        .then(this._handleResponse)
        .catch(this._handleError);
    }

    putLike(id) {
        return fetch(`${this.url}/cards/likes/${id}`, {
            method: 'PUT',
            headers: this.headers,
        })
        .then(this._handleResponse)
        .catch(this._handleError);
    }

    removeLike(id) {
        return fetch(`${this.url}/cards/likes/${id}`, {
            method: 'DELETE',
            headers: this.headers,
        })
        .then(this._handleResponse)
        .catch(this._handleError);
    }
}

export const api = new Api(config);
