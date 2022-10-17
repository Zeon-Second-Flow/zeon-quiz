import {signupSlice} from "./auth/signupSlice";
import {configureStore, ThunkAction, Action} from "@reduxjs/toolkit";
import {reducer as websocket} from "./websocket/websocket";
import {getTests} from "@/store/search/search.api";
<<<<<<< HEAD
import { testApi } from './test/testSlice';

=======
import {createTestSlice} from "@/store/slice/CreateTestSlice";
>>>>>>> 3111167d97bd608042201be78ba567ccac9205ad

export const store = configureStore({
    reducer: {
        [signupSlice.reducerPath]: signupSlice.reducer,
        [getTests.reducerPath]: getTests.reducer,
<<<<<<< HEAD
        [testApi.reducerPath]: testApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat([signupSlice.middleware, testApi.middleware ]),
=======
        [createTestSlice.reducerPath]: createTestSlice.reducer,
        websocket: websocket,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(signupSlice.middleware),
>>>>>>> 3111167d97bd608042201be78ba567ccac9205ad
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,
    RootState,
    unknown,
    Action<string>>;
