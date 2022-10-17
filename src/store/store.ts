import {signupSlice} from "./auth/signupSlice";
import {configureStore, ThunkAction, Action} from "@reduxjs/toolkit";
import {getTests} from "@/store/search/search.api";
import {createTestSlice} from "@/store/slice/CreateTestSlice";


export const store = configureStore({
    reducer: {
        [signupSlice.reducerPath]: signupSlice.reducer,
        [getTests.reducerPath]: getTests.reducer,
        [createTestSlice.reducerPath]: createTestSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(signupSlice.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,
    RootState,
    unknown,
    Action<string>>;
