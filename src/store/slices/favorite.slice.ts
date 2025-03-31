import {STORAGE_KEYS} from '@/constants';
import {Word} from '@/types';
import {useStorage} from '@/utils';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

type FavoriteState = {
  favorites: Word[];
};

const initialState: FavoriteState = {
  favorites: useStorage.getItem(STORAGE_KEYS.FAVORITES)
    ? JSON.parse(useStorage.getItem(STORAGE_KEYS.FAVORITES) as string)
    : [],
};

export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<Word>) => {
      const newFavorites = [...state.favorites, action.payload];
      console.log('newFavorites', newFavorites);
      state.favorites = newFavorites;
      useStorage.setItem(STORAGE_KEYS.FAVORITES, JSON.stringify(newFavorites));
    },
    removeFavorite: (state, action: PayloadAction<string>) => {
      const newFavorites = state.favorites?.filter(
        item => item._id !== action.payload,
      );
      state.favorites = newFavorites;
      useStorage.setItem(STORAGE_KEYS.FAVORITES, JSON.stringify(newFavorites));
    },
  },
});

export const {addFavorite, removeFavorite} = favoriteSlice.actions;
