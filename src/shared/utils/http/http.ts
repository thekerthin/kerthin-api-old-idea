import axios from 'axios';
import { HttpAdapter } from './adapter';
import {
  HttpGetParams,
  HttpPostParams,
  HttpPutParams,
  HttpPatchParams,
  HttpDeleteParams,
} from './interfaces';
import { getError, getData } from './utils';
import { HttpException } from './exceptions/http.exception';

export class Http implements HttpAdapter {
  get<T = any>(options: HttpGetParams): Promise<T | void> {
    return axios
      .get<T>(options.url, options)
      .then<T>(getData)
      .catch(this.throwException);
  }

  post<T = any>(options: HttpPostParams): Promise<T | void> {
    return axios
      .post<T>(options.url, options.body, options)
      .then<T>(getData)
      .catch(this.throwException);
  }

  put<T = any>(options: HttpPutParams): Promise<T | void> {
    return axios
      .put<T>(options.url, options.body, options)
      .then<T>(getData)
      .catch(this.throwException);
  }

  patch<T = any>(options: HttpPatchParams): Promise<T | void> {
    return axios
      .patch<T>(options.url, options.body, options)
      .then<T>(getData)
      .catch(this.throwException);
  }

  delete<T = any>(options: HttpDeleteParams): Promise<T | void> {
    return axios
      .delete<T>(options.url, options)
      .then<T>(getData)
      .catch(this.throwException);
  }

  private throwException(error: any) {
    throw new HttpException(getError(error));
  }
}
