import { ITest } from '@/pages/LocalBoard/LocalBoard';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BASE_URL } from './../../api/api';
const token =
  localStorage.getItem('token') &&
    JSON.parse(localStorage.getItem('token') || '');
  console.log(token)

export const testApi = createApi({
  reducerPath: 'testApi',
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    endpoints: (builder) => ({
    getTests: builder.query<ITest, string>({
        query: (test: string) => ({
            url: `tests/${test}`, 
            method: "GET",
            headers: {
            Authorization: 'Bearer ' + token.token,
            'content-type': 'text/plain',
            },
            body: test
        }),
    }),
       getWater: builder.query<any[], string>({
        query: (test: string) => ({
            url: `tests/water`, 
            method: "GET",
            headers: {
            Authorization: 'Bearer ' + token.token
            },
            body: test
        }),
    }),
  }),
})

export const {
  useGetTestsQuery,
  useGetWaterQuery,
} = testApi