import {Word} from '@/types';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

type SearchState = {
  searchTerm: string;
  searchResults: Word[];
  isFetching: boolean;
};

const initialState: SearchState = {
  searchTerm: '',
  searchResults: [],
  isFetching: false,
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
    },
    setSearchResults: (state, action: PayloadAction<Word[]>) => {
      state.searchResults = action.payload;
      state.isFetching = false;
    },
    setIsFetching: (state, action: PayloadAction<boolean>) => {
      state.isFetching = action.payload;
    },
  },
});

export const {setSearchTerm, setSearchResults, setIsFetching} =
  searchSlice.actions;
