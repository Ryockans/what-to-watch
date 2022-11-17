export default class TokenService {
  token: string | null;

  constructor() {
    this.token = null;
  }

  saveToken(token: string): void {
    document.cookie = `token=${token}; max-age=2592000`;
  }

  loadToken(): string | null {
    const token = document.cookie
      .split(';')
      .find((item) => item.includes('token'))
      ?.slice(6);

    if (!token) return null;

    this.token = token;
  }

  removeToken(): void {
    if (!this.token) return;

    document.cookie = `token=${this.token}; max-age=0`;

    this.token = null;
  }
}
