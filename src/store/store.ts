import {configureStore} from '@reduxjs/toolkit';
import {favoriteSlice, searchSlice, themeSlice} from './slices';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {authApi, baseApi} from '@/features';

export const store = configureStore({
  reducer: {
    [themeSlice.reducerPath]: themeSlice.reducer,
    [baseApi.reducerPath]: baseApi.reducer,
    [searchSlice.reducerPath]: searchSlice.reducer,
    [favoriteSlice.reducerPath]: favoriteSlice.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    })
      .concat(baseApi.middleware)
      .concat(authApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
