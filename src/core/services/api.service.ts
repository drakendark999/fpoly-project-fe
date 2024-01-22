import axios, { AxiosRequestConfig, Method } from 'axios';
import { API_URL, SERVER_ADDRESS } from '../../../config';

interface RequestHeader {
  [key: string]: string | undefined;
  Accept: string;
  'Content-Type': string;
  Authorization?: string;
}

export default class ApiService {
  protected apiGet<T>(
    url: string,
    params: object = {},
    hasToken = false,
  ): Promise<T> {
    return this.apiRun<T>('get', url, null, params, hasToken);
  }

  protected apiPost<T>(
    url: string,
    body: any = null,
    params: object = {},
    hasToken = false,
  ): Promise<T> {
    console.log('isFormData');

    return this.apiRun<T>('post', url, body, params, hasToken);
  }

  protected apiPut<T>(
    url: string,
    body: any = null,
    params: object = {},
    hasToken = false,
  ): Promise<T> {
    return this.apiRun<T>('put', url, body, params, hasToken);
  }

  protected apiDelete<T>(
    url: string,
    params: object = {},
    hasToken = false,
  ): Promise<T> {
    return this.apiRun<T>('delete', url, null, params, hasToken);
  }

  private apiRun<T>(
    method: Method,
    url: string,
    body: any = null,
    params: object = {},
    hasToken = false,
  ): Promise<T> {
    ApiService;
    const SERVER_ADDRESS_API = SERVER_ADDRESS;
    const API_URL_API = API_URL;
    // console.log(`${SERVER_ADDRESS_API}${API_URL_API}${url}`);
    const config: AxiosRequestConfig = {
      url,
      method,
      baseURL: `${SERVER_ADDRESS_API}${API_URL_API}`,
      params,
      data: body,
      headers: this.appendHeaders(hasToken),
      timeout: 60000,
    };

    if (body) {
      config.data = body;
    }

    return new Promise<T>((resolve, reject) => {
      axios(config)
        .then(({ data }) => resolve(data))
        .catch((error) => reject(error));
    });
  }

  private appendHeaders(hasToken = false): Partial<RequestHeader> {
    const headers: Partial<RequestHeader> = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };

    if (hasToken) {
      headers.Authorization = 'Bearer ok';
    }

    return headers;
  }
}
