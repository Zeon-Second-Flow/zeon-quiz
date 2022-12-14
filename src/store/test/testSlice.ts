import {IResponse} from "@/models/models";
import {createApi} from "@reduxjs/toolkit/query/react";
import {customFetchBase} from "../auth/customFetchBase";


const token =
  localStorage.getItem("token") &&
  JSON.parse(localStorage.getItem("token") || "");

export const testApi = createApi({
    reducerPath: "testApi",
    baseQuery: customFetchBase,
    endpoints: (builder) => ({
        getTests: builder.query<IResponse, string>({
            query: (test: string) => ({
                url: `tests/${test}`,
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token.token}`,
                    "Content-Type": "application/json",
                },
            }),
        }),
        postScores: builder.mutation<any, object>({
            query: (data) => ({
                url: "/tests/",
                method: "POST",
                body: data,
                headers: {
                    Authorization: `Bearer ${token.token}`,
                    "Content-Type": "application/json",
                },
            }),
        }),
    }),
});

export const {useGetTestsQuery, usePostScoresMutation} = testApi;
