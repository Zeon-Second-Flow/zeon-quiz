import { BASE_URL } from '@/api/api';
import {
  BaseQueryFn,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/query';
import { Mutex } from 'async-mutex';

const baseUrl = BASE_URL;
const mutex = new Mutex();
const baseQuery = fetchBaseQuery({
  baseUrl,
});

const customFetchBase: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  await mutex.waitForUnlock();
  let result = await baseQuery(args, api, extraOptions);

  if (result.error?.status === 401) {
    if (!mutex.isLocked()) {
      const release = await mutex.acquire();
      try {
        const token =
          localStorage.getItem('token') &&
          JSON.parse(localStorage.getItem('token') || '');
        const refreshResult = await baseQuery(
          {
            url: 'account/refresh/',
            method: 'POST',
            body: JSON.stringify({ refresh: token.refresh }),
            headers: {
              'Content-Type': 'application/json',
              Authorization: 'Bearer ' + token.token,
            },
          },
          api,
          extraOptions
        );
        if (refreshResult.data) {
          const trash = JSON.stringify(refreshResult.data);
          const { access } = JSON.parse(trash);
          token.token = access;
          localStorage.setItem('token', JSON.stringify(token));
        }
        result = refreshResult;
      } finally {
        release();
      }
    } else {
      await mutex.waitForUnlock();
      result = await baseQuery(args, api, extraOptions);
    }
  }

  return result;
};

export default customFetchBase;
