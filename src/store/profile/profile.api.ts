import {createApi} from "@reduxjs/toolkit/dist/query/react";
import {customFetchBase} from "../auth/customFetchBase";


export interface IUser {
    map(arg0: (user: IUser) => JSX.Element): import("react").ReactNode;
    login:          string;
    name:           string;
    second_name:    string;
    phone_number:   string;
    overall_score:  number;
    overall_rating: number;
    group_rating:   number;
    group:          string;
    passed_tests:   number;
    tests:          ITest[];
}

export interface ITest {
    title:  string;
    group:  string;
    score:  number;
    rating: number;
}


const token =
    localStorage.getItem("token") &&
    JSON.parse(localStorage.getItem("token") || "");



export const profileSlice = createApi({
    reducerPath: "userProfile",
    baseQuery: customFetchBase,
    endpoints: (builder) => ({
        getUser: builder.query<IUser, string>({
            query: (login) => ({
                url: `/account/users/${login}`,
                headers: {
                    // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
                    Authorization: "Bearer " + token.token,
                    "Content-Type": "application/json"
                },
            }),
        }),
    })
});

export const {useLazyGetUserQuery} =  profileSlice;