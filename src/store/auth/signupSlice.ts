import { IValues } from './../../components/Auth/SignUp';
import { BASE_URL } from './../../api/api';
import { createApi } from '@reduxjs/toolkit/query/react';
import { fetchBaseQuery } from '@reduxjs/toolkit/dist/query';

export const signupSlice = createApi({
  reducerPath: 'signupSlice',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    addUser: builder.mutation<IValues, object>({
      query: (data) => ({
        url: 'account/registration/',
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      }),
    }),
  }),
});

export const { useAddUserMutation } = signupSlice;
