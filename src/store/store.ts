import {signupSlice} from "./auth/signupSlice";
import {configureStore, ThunkAction, Action} from "@reduxjs/toolkit";
import {reducer as websocket} from "./websocket/websocket";
import {getTests} from "@/store/search/search.api";
import {testApi} from "./test/testSlice";
import {profileSlice} from "./profile/profile.api";
import {createTestSlice} from "@/store/slice/CreateTestSlice";


export const store = configureStore({
    reducer: {
        [signupSlice.reducerPath]: signupSlice.reducer,
        [getTests.reducerPath]: getTests.reducer,
        [testApi.reducerPath]: testApi.reducer,
        [profileSlice.reducerPath]: profileSlice.reducer,
        [createTestSlice.reducerPath]: createTestSlice.reducer,
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
