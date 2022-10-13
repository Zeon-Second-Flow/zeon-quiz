import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {IITem, IQuestions, ServerResponse} from "@/models/models";


const token = localStorage.getItem("token") && JSON.parse(localStorage.getItem("token") || "");
// Define a service using a base URL and expected endpoints

export const getTests = createApi({
    reducerPath: "tests",
    // initialState;
    baseQuery: fetchBaseQuery({baseUrl: "https://safe-atoll-40972.herokuapp.com/"}),
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
                    Authorization: `Bearer  + ${token.token}`,
                    "Content-Type": "application/json"
                }
            }),
            // transformResponse: (response: ServerResponse<Test>) => response.results
        }),
        getQuestions: builder.query<IQuestions[], string>({
            query: (name) => ({
                url: `tests/${name}`,
                headers: {
                    Authorization: `Bearer  + ${token.token}`,
                    "Content-Type": "application/json"
                }
            }),
            // transformResponse: (response: ServerResponse<IQuestions>) => {
            //     console.log(response);
            //     return response.results;
            // }
        })
    }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {useGetTestsByNameQuery, useLazyGetTestsByNameQuery, useGetQuestionsQuery} = getTests;