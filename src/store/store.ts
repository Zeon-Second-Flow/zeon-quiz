import {signupSlice} from "./auth/signupSlice";
import {configureStore, ThunkAction, Action} from "@reduxjs/toolkit";
import {getTests} from "@/store/search/search.api";
import { testApi } from './test/testSlice';


export const store = configureStore({
    reducer: {
        [signupSlice.reducerPath]: signupSlice.reducer,
        [getTests.reducerPath]: getTests.reducer,
        [testApi.reducerPath]: testApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat([signupSlice.middleware, testApi.middleware ]),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,
    RootState,
    unknown,
    Action<string>>;
