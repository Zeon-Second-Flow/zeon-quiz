import { createApi } from '@reduxjs/toolkit/query/react';

import { customFetchBase } from '../auth/customFetchBase';

import { IQuestions, IResponse } from '@/models/models';

const token =
	localStorage.getItem('token') &&
	JSON.parse(localStorage.getItem('token') || '');

export const testApi = createApi({
	reducerPath: 'testApi',
	baseQuery: customFetchBase,
	tagTypes: ['test'],
	endpoints: (builder) => ({
		getTests: builder.query<IResponse, string>({
			query: (test: string) => ({
				url: `tests/${test}/`,
				method: 'GET',
				headers: {
					Authorization: `Bearer ${token.token}`,
					'Content-Type': 'application/json',
				},
			}),
		}),
		getUsersTests: builder.query<IResponse, string>({
			query: (test: string) => ({
				url: `tests/${test}/users/`,
				method: 'GET',
			}),
		}),
		postScores: builder.mutation<any, object>({
			query: (data) => ({
				url: '/tests/',
				method: 'POST',
				body: data,
				headers: {
					Authorization: `Bearer ${token.token}`,
					'Content-Type': 'application/json',
				},
			}),
		}),
		getQuestions: builder.query<IQuestions, string>({
			query: (name) => ({
				url: `tests/${name}/`,
				headers: {
					Authorization: `Bearer ${token?.token}`,
				},
			}),
			providesTags: ['test'],
		}),
		updateQuestion: builder.mutation<IQuestions, string>({
			query: ({ name, questions }: any) => ({
				url: `tests/create/${name}/`,
				method: 'PATCH',
				body: JSON.stringify({
					description: 'asdf',
					questions: questions,
				}),
				headers: {
					Authorization: `Bearer ${token?.token}`,
					'Content-Type': 'application/json; charset=UTF-8',
				},
			}),
			invalidatesTags: ['test'],
		}),
	}),
});

export const {
	useGetTestsQuery,
	usePostScoresMutation,
	useLazyGetQuestionsQuery,
	useUpdateQuestionMutation,
	useLazyGetUsersTestsQuery,
} = testApi;
