import {colors, sizing} from '@/theme';
import {ActivityIndicator, FlatList, View, ViewStyle} from 'react-native';
import {SearchHeader, SearchItem} from './components';
import {useAppSelector} from '@/store';
import {Text} from '@/components';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AppParamsList} from '@/navigators';

export const SearchScreen = ({
  navigation,
}: NativeStackScreenProps<AppParamsList>) => {
  const {theme} = useAppSelector(state => state.themeState);
  const {searchResults, isFetching} = useAppSelector(state => state.search);

  const handleNavigate = (id: string, title: string) => () => {
    navigation.navigate('WordDetail', {
      id,
      title,
    });
  };
  return (
    <>
      <SearchHeader />
      {isFetching ? (
        <View style={[$container, {flex: 1}]}>
          <ActivityIndicator
            size="large"
            color={colors[theme].primary}
            style={{flex: 1}}
          />
        </View>
      ) : (
        <FlatList
          ListEmptyComponent={
            <Text style={{textAlign: 'center', flex: 1}}>So'z topilmadi</Text>
          }
          contentContainerStyle={$container}
          data={searchResults}
          keyExtractor={item => item?._id}
          ItemSeparatorComponent={() => (
            <View
              style={[$separator, {backgroundColor: colors[theme].separator}]}
            />
          )}
          renderItem={({item}) => (
            <SearchItem
              name={item.name}
              onPress={handleNavigate(item._id, item.name)}
            />
          )}
        />
      )}
    </>
  );
};
const $container: ViewStyle = {
  paddingVertical: sizing.md,
  paddingHorizontal: sizing.xl,
};

const $separator: ViewStyle = {
  height: 1,
};
