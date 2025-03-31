import {STORAGE_KEYS} from '@/constants';
import {setTheme, useAppDispatch, useAppSelector} from '@/store';
import {useStorage} from '@/utils';

export const useAppTheme = () => {
  const dispatch = useAppDispatch();
  const {theme} = useAppSelector(state => state.themeState);
  const isDarkmode = theme === 'dark';

  const toggleTheme = () => {
    if (isDarkmode) {
      dispatch(setTheme('light'));
      useStorage.setItem(STORAGE_KEYS.THEME, 'light');
    } else {
      dispatch(setTheme('dark'));
      useStorage.setItem(STORAGE_KEYS.THEME, 'dark');
    }
  };

  return {isDarkmode, toggleTheme};
};
