import {STORAGE_KEYS} from '@/constants';
import {Theme} from '@/types';
import {useStorage} from '@/utils';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

type ThemeState = {
  theme: Theme;
};

const initialState: ThemeState = {
  theme: (useStorage.getItem(STORAGE_KEYS.THEME) as Theme) || 'light',
};

export const themeSlice = createSlice({
  name: 'themeState',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<Theme>) => {
      state.theme = action.payload;
    },
  },
});

export const {setTheme} = themeSlice.actions;
