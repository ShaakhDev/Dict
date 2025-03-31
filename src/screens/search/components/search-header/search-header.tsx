import {Input} from '@/components';
import {AppParamsList} from '@/navigators';
import {
  setSearchResults,
  setSearchTerm,
  useAppDispatch,
  useAppSelector,
} from '@/store';
import {colors, sizing} from '@/theme';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {Pressable, View, ViewStyle} from 'react-native';
import {useDebounce} from 'use-debounce';

import Icon from 'react-native-vector-icons/Ionicons';
import {useSearchWordQuery} from '@/features';

export const SearchHeader = () => {
  const {theme} = useAppSelector(state => state.themeState);
  const navigation = useNavigation<NavigationProp<AppParamsList>>();
  const dispatch = useAppDispatch();
  const {searchTerm} = useAppSelector(state => state.search);
  const [debouncedSearchTerm] = useDebounce(searchTerm, 600);
  useSearchWordQuery(
    {search: debouncedSearchTerm},
    {refetchOnMountOrArgChange: true},
  );

  const handleInputChange = (text: string) => {
    dispatch(setSearchTerm(text));
  };
  const handleClear = () => {
    dispatch(setSearchTerm(''));
    dispatch(setSearchResults([]));
  };
  return (
    <View style={[$headerContainer, {backgroundColor: colors[theme].primary}]}>
      <Pressable hitSlop={15} onPress={() => navigation.goBack()}>
        <Icon name="chevron-back" color={colors.white} size={sizing.lg} />
      </Pressable>
      <Input
        value={searchTerm}
        onChangeText={handleInputChange}
        LeftAccessory={() => (
          <Icon
            name="search-outline"
            color={colors.placeholder}
            size={sizing.lg}
            style={{marginLeft: sizing.xs}}
          />
        )}
        RightAccessory={() => (
          <Pressable onPress={handleClear}>
            <Icon
              name="close-circle-sharp"
              color={colors.placeholder}
              size={sizing.md}
              style={{marginRight: sizing.xs}}
            />
          </Pressable>
        )}
        inputWrapperStyle={{alignItems: 'center'}}
        containerStyle={{flex: 1}}
        placeholder="Search"
      />
    </View>
  );
};

const $headerContainer: ViewStyle = {
  padding: sizing.sm,
  // backgroundColor: colors.primary,
  flexDirection: 'row',
  alignItems: 'center',
  gap: sizing.sm,
};
