import { createApi } from '@reduxjs/toolkit/query/react';

import { customFetchBase } from '@/store/auth/customFetchBase';

import { IITem, IQuestions, ServerResponse } from '@/models/models';

const token =
	localStorage.getItem('token') &&
	JSON.parse(localStorage.getItem('token') || '');

export const getTests = createApi({
	reducerPath: 'tests',
	baseQuery: customFetchBase,

	endpoints: (builder) => ({
		getTestsByName: builder.query<ServerResponse<IITem>, string>({
			query: (name) => ({
				url: `tests/?search=${name}`,
				headers: {
					Authorization: `Bearer ${token?.token}`,
				},
			}),
		}),
		getAllTests: builder.query<ServerResponse<IITem>, never>({
			query: () => ({
				url: 'tests',
				headers: {
					Authorization: `Bearer ${token?.token}`,
				},
			}),
		}),
		getQuestions: builder.query<IQuestions, string>({
			query: (name) => ({
				url: `tests/${name}`,
				headers: {
					Authorization: `Bearer ${token?.token}`,
				},
			}),
		}),
	}),
});

export const {
	useGetTestsByNameQuery,
	useGetAllTestsQuery,
	useLazyGetTestsByNameQuery,
	useGetQuestionsQuery,
} = getTests;
