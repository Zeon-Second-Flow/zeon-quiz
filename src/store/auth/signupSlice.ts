import {IValues} from "./../../components/Auth/SignUp";
import {BASE_URL} from "./../../api/api";
import {createApi} from "@reduxjs/toolkit/query/react";
import {fetchBaseQuery} from "@reduxjs/toolkit/dist/query";
import {IValue} from "@/components/Login/Login";
import {IPassword} from "@/components/ChangePassword/ChangePassword";


const token =
  localStorage.getItem("token") &&
  JSON.parse(localStorage.getItem("token") || "");

console.log(token);

export const signupSlice = createApi({
    reducerPath: "signupSlice",
    baseQuery: fetchBaseQuery({baseUrl: BASE_URL}),
    endpoints: (builder) => ({
        addUser: builder.mutation<IValues, object>({
            query: (data) => ({
                url: "account/registration/",
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json",
                },
            }),
        }),
        loginUser: builder.mutation<IValue, object>({
            query: (data) => ({
                url: "account/login/",
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json",
                },
            }),
        }),
        changePassword: builder.mutation<IPassword, object>({
            query: (data) => ({
                url: "account/change_password/",
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    Authorization: `Bearer ${token.token}`,
                    "Content-Type": "application/json",
                },
            }),
        }),
    }),
});

export const {
    useAddUserMutation,
    useLoginUserMutation,
    useChangePasswordMutation,
} = signupSlice;
