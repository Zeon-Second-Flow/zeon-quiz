import {createApi} from "@reduxjs/toolkit/dist/query/react";
import {customFetchBase} from "@/store/auth/customFetchBase";
import {IQuiz} from "@/models/models";


export const createTestSlice = createApi({
    reducerPath: "createTest",
    baseQuery: customFetchBase,
    endpoints: (builder) => ({
        createTest: builder.mutation<IQuiz, object>({
            query: (data) => ({
                url: "tests/create",
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
                    // Authorization: "Bearer " + token.token,
                    "Content-Type": "application/json",
                },
            }),
        }),
    }),
});

export const {useCreateTestMutation} = createTestSlice;
