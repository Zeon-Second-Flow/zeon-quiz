import {createApi} from "@reduxjs/toolkit/query/react";
import {IITem, IQuestions, ServerResponse} from "@/models/models";
import {customFetchBase} from "@/store/auth/customFetchBase";


const token =
    localStorage.getItem("token") &&
    JSON.parse(localStorage.getItem("token") || "");

export const getTests = createApi({
    reducerPath: "tests",
    baseQuery: customFetchBase,
    // prepareHeaders: (headers) => {
    //     const {token} = JSON.parse(localStorage.getItem("token"))
    //         ? JSON.parse(localStorage.getItem("token"))
    //         : null;
    //     if (token) headers.set("Authorization", Bearer ${token});
    //     return headers;
    // },
    endpoints: (builder) => ({
        getTestsByName: builder.query<ServerResponse<IITem>, string>({
            query: (name) => ({
                url: `tests?search=${name}`,
                headers: {
                    Authorization: `Bearer ${token?.token}`
                }
            }),
        }),
        getQuestions: builder.query<IQuestions[], string>({
            query: (name) => ({
                url: `tests/${name}`,
                headers: {
                    Authorization: `Bearer ${token?.token}`
                }
            }),
        }),
    }),
});

export const {useGetTestsByNameQuery, useLazyGetTestsByNameQuery, useGetQuestionsQuery,} = getTests;