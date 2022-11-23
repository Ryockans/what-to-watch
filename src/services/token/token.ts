export default class TokenService {
  token: string | null;

  constructor() {
    this.token = null;
  }

  saveToken(token: string): void {
    localStorage.setItem('token', token);
  }

  loadToken(): string | null {
    const token = localStorage.getItem('token');

    if (!token) return null;

    this.token = token;
  }

  removeToken(): void {
    localStorage.removeItem('token');

    this.token = null;
  }
}
