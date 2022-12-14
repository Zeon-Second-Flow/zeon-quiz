import {IValues} from "./../../components/Auth/SignUp";
import {createApi} from "@reduxjs/toolkit/query/react";
import {IValue} from "@/components/Login/Login";
import {IPassword} from "@/components/ChangePassword/ChangePassword";
import {IRestorePassword} from "@/components/RestorePassword/RestorePassword";
import {IRestoreComplete} from "@/components/RestoreComplete/RestoreComplete";
import {customFetchBase} from "./customFetchBase";


const token =
    localStorage.getItem("token") &&
    JSON.parse(localStorage.getItem("token") || "");

export const signupSlice = createApi({
    reducerPath: "signupSlice",
    baseQuery: customFetchBase,
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
                    // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
                    Authorization: "Bearer " + token.token,
                    "Content-Type": "application/json"
                },
            }),
        }),
        restorePassword: builder.mutation<IRestorePassword, object>({
            query: (data) => ({
                url: "/account/restore_password/",
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json",
                },
            }),
        }),
        restoreComplete: builder.mutation<IRestoreComplete, object>({
            query: (data) => ({
                url: "/account/restore_complete/",
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json",
                },
            }),
        }),
        getGroup: builder.query<any, string>({
            query: () => ({
                url: "/group/",
            }),
        }),
        logoutUser: builder.mutation<any, object>({
            query: (data) => ({
                url: "/account/logout/",
                method: "POST",
                body: {refresh_token: data},
                headers: {
                    // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
                    Authorization: "Bearer " + token.token,
                    "Content-Type": "application/json"
                },
            })
        }),
    }),
});


export const {
    useAddUserMutation,
    useLoginUserMutation,
    useChangePasswordMutation,
    useRestorePasswordMutation,
    useRestoreCompleteMutation,
    useLazyGetGroupQuery,
    useLogoutUserMutation
} = signupSlice;

