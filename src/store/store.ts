import {signupSlice} from "./auth/signupSlice";
import {configureStore, ThunkAction, Action} from "@reduxjs/toolkit";
import {reducer as websocket} from "./websocket/websocket";
import {getTests} from "@/store/search/search.api";


export const store = configureStore({
    reducer: {
        [signupSlice.reducerPath]: signupSlice.reducer,
        [getTests.reducerPath]: getTests.reducer,
        websocket: websocket,
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
