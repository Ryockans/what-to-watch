export default class WtwapiService {
  apiBase = 'https://8.react.pages.academy/wtw';

  getResource = async (url) => {
    const res = await fetch(`${this.apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, received ${res.status}`);
    }

    return res.json();
  };

  getProtectedResource = async (url: string, token: string) => {
    const res = await fetch(`${this.apiBase}${url}`, {
      headers: {
        'X-Token': token,
      },
    });

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, received ${res.status}`);
    }

    return res.json();
  };

  postOnResource = async (url, body = undefined, token = undefined) => {
    const res = await fetch(`${this.apiBase}${url}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        'X-Token': token,
      },
      body,
    });

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, received ${res.status}`);
    }

    return res.json();
  };

  signIn = async (email, password) => {
    const body = JSON.stringify({
      email,
      password,
    });
    return this.postOnResource('/login/', body);
  };

  isSignedIn = async (token) => {
    return this.getProtectedResource('/login/', token);
  };

  signOut = async (token) => {
    const res = await fetch(`${this.apiBase}/logout/`, {
      method: 'DELETE',
      headers: {
        'X-Token': token,
      },
    });

    if (!res.ok) {
      throw new Error(`Could not fetch /logout/, received ${res.status}`);
    }
  };

  getAllMovies = async () => {
    return this.getResource('/films/');
  };

  getMovie = async (id) => {
    return this.getResource(`/films/${id}`);
  };

  getSimilarMovies = async (id) => {
    return this.getResource(`/films/${id}/similar`);
  };

  getPromo = async () => {
    return this.getResource('/promo/');
  };

  getComments = async (id) => {
    return this.getResource(`/comments/${id}`);
  };

  postComment = async (id, token, { rating, comment }) => {
    const body = JSON.stringify({ rating, comment });
    return this.postOnResource(`/comments/${id}`, body, token);
  };

  getFavorite = async (token) => {
    return this.getProtectedResource('/favorite/', token);
  };
}
