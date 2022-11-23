import TokenService from '../token/token';

interface RequestParams {
  body?: RequestBody;
  headers?: HeadersInit;
}

interface RequestBody {
  [key: string]: any;
}

export default abstract class BaseApi {
  protected baseUrl: string;

  protected tokenService: TokenService;

  protected constructor(url: string) {
    this.baseUrl = url;
    this.tokenService = new TokenService();
    this.tokenService.loadToken();
  }

  hasToken() {
    return this.tokenService.token !== null;
  }

  protected async get<T>(url: string, params?: RequestParams) {
    return this.request<T>('GET', url, params);
  }

  protected async post<T>(url: string, params?: RequestParams) {
    return this.request<T>('POST', url, {
      ...params,
      headers: {
        ...params.headers,
        'Content-Type': 'application/json',
      },
    });
  }

  protected async delete<T>(url: string, params?: RequestParams) {
    return this.request<T>('DELETE', url, params);
  }

  protected request<T>(
    method: 'GET' | 'POST' | 'DELETE',
    url: string,
    params?: RequestParams,
  ) {
    const body = method === 'POST' ? JSON.stringify(params.body) : null;

    const reqHeaders = params ? params.headers : {};

    const headers = { ...reqHeaders, 'X-Token': this.tokenService.token };

    return fetch(`${this.baseUrl}${url}`, {
      method,
      headers,
      body,
    }).then((res) => {
      if (!res.ok)
        throw new Error(`Could not fetch ${url}, received ${res.status}`);
      return method === 'DELETE' ? (res as T) : (res.json() as T);
    });
  }
}
