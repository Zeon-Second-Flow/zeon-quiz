import { signupSlice } from './auth/signupSlice';
import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { testApi } from './test/testSlice';

export const store = configureStore({
  reducer: {
    [signupSlice.reducerPath]: signupSlice.reducer,
    [testApi.reducerPath]: testApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([signupSlice.middleware, testApi.middleware ])
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
