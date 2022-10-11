import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {ServerResponse, Test} from "@/models/models";

// Define a service using a base URL and expected endpoints
export const getTests = createApi({
    reducerPath: "tests",
    // initialState;
    baseQuery: fetchBaseQuery({baseUrl: "https://safe-atoll-40972.herokuapp.com/"}),
    endpoints: (builder) => ({
        getTestsByName: builder.query<ServerResponse<Test>, string>({
            query: (name) => ({
                url: `tests?search=${name}`,
                headers: {
                    "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9." +
                        "eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjY2ODY3OTY2LCJpYXQiOjE2NjUxMzk5NjYsImp0aSI6IjFmMDNkZDg" +
                        "xOWM4MTQ5ZTA4NThlMDRjODdiOWY4YjMwIiwidXNlcl9pZCI6ImJla2FAZ21haWwuY29tIn0." +
                        "xLMYI9NNodjsk9gEyGGTLhxlXxtTu0ywdYGphoSFxYw"
                }
            }),
            // transformResponse: (response: ServerResponse<Test>) => response.results
        }),

    }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {useGetTestsByNameQuery, useLazyGetTestsByNameQuery} = getTests;