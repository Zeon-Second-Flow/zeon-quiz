import { createApi } from '@reduxjs/toolkit/dist/query/react';

import { customFetchBase } from '@/store/auth/customFetchBase';

import { IPhotoData, IQuiz } from '@/models/models';

const token =
	localStorage.getItem('token') &&
	JSON.parse(localStorage.getItem('token') || '');

export const createTestSlice = createApi({
	reducerPath: 'createTest',
	baseQuery: customFetchBase,
	endpoints: (builder) => ({
		createTest: builder.mutation({
			query: ({ data, token }) => ({
				url: 'tests/create',
				method: 'POST',
				body: JSON.stringify(data),
				headers: {
					// eslint-disable-next-line @typescript-eslint/restrict-plus-operands
					Authorization: 'Bearer ' + token.token,
					'Content-Type': 'application/json',
					// "" : ""
				},
			}),
		}),
		sentImg: builder.mutation<IPhotoData, any>({
			query: ({ response, dataImg }) => ({
				url: `tests/${response}/`,
				method: 'PATCH',
				body: dataImg,
				headers: {
					// eslint-disable-next-line @typescript-eslint/restrict-plus-operands
					Authorization: 'Bearer ' + token.token,
					'Content-Type':
						'multipart/form-data; boundary=<calculated when request is sent>',
				},
			}),
		}),
	}),
});

export const { useCreateTestMutation, useSentImgMutation } = createTestSlice;
