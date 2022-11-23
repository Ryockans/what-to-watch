import BaseApi from './base-api';
import { MovieInfo, UserInfo, CommentInfo } from '../../types/models';

export default class WtwapiService extends BaseApi {
  constructor() {
    super('https://8.react.pages.academy/wtw');
  }

  getAllMovies() {
    return this.get<MovieInfo[]>('/films/');
  }

  getMovie(id: number) {
    return this.get<MovieInfo>(`/films/${id}`);
  }

  getSimilarMovies(id: number) {
    return this.get<MovieInfo[]>(`/films/${id}/similar`);
  }

  getPromo() {
    return this.get<MovieInfo>('/promo');
  }

  getComments(id: number) {
    return this.get<CommentInfo[]>(`/comments/${id}`);
  }

  postComment(id: number, rating: number, comment: string) {
    return this.post<CommentInfo>(`/comments/${id}`, {
      body: { rating, comment },
    });
  }

  getFavorite() {
    return this.get<MovieInfo[]>('/favorite/');
  }

  toggleFavorite(id: number, status: 0 | 1) {
    return this.post(`/favorite/${id}/${status}`, { body: {} });
  }

  signIn(email: string, password: string) {
    return this.post<UserInfo>('/login/', { body: { email, password } }).then(
      (data) => {
        this.tokenService.saveToken(data.token);
        return data;
      },
    );
  }

  getUser() {
    return this.get<UserInfo>('/login/');
  }

  signOut() {
    return this.delete<Response>('/logout/').then(() => {
      this.tokenService.removeToken();
    });
  }
}
