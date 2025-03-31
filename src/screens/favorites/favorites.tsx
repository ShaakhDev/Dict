import {View, ViewStyle, FlatList} from 'react-native';
import {FavoriteItem} from './components';
import {sizing} from '@/theme';
import {Text} from '@/components';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {TabParamsList} from 'src/navigators/tab-navigator';
import {AppParamsList} from '@/navigators';
import {useAppSelector} from '@/store';

export const FavoritesScreen = ({
  navigation,
}: BottomTabScreenProps<TabParamsList & AppParamsList>) => {
  const {favorites} = useAppSelector(state => state.favorite);
  const handlePress = (id: string, title: string) => () => {
    navigation.navigate('WordDetail', {id, title});
  };

  return (
    <View style={$container}>
      <FlatList
        ListEmptyComponent={
          <Text style={{textAlign: 'center'}}>No favorites</Text>
        }
        data={favorites}
        keyExtractor={item => item._id}
        renderItem={({item}) => (
          <FavoriteItem
            onPress={handlePress(item._id, item.name)}
            image={item.image}
            name={item.name}
          />
        )}
      />
    </View>
  );
};

const $container: ViewStyle = {
  padding: sizing.md,
  flex: 1,
};
