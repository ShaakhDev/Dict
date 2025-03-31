import {FlatList, View, ViewStyle} from 'react-native';
import {CategoryCard, HomeHeader} from './components';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {TabParamsList} from 'src/navigators/tab-navigator';
import {AppParamsList} from '@/navigators';
import {useGetDepartmentListQuery} from '@/features';
import {Text} from '@/components';

export const HomeScreen = ({
  navigation,
}: BottomTabScreenProps<TabParamsList & AppParamsList>) => {
  const {data: {data = []} = {}, isLoading} = useGetDepartmentListQuery();

  const handlePressCard = (title: string, id: string) => {
    navigation.navigate('SubCategories', {title, id});
  };

  return (
    <View style={$container}>
      <FlatList
        data={data}
        numColumns={2}
        ListEmptyComponent={
          <Text style={{textAlign: 'center'}}>
            {isLoading ? 'Loading...' : 'No Items'}
          </Text>
        }
        ListHeaderComponent={<HomeHeader />}
        keyExtractor={item => item._id}
        renderItem={({item}) => (
          <CategoryCard
            category={item}
            onPress={() => handlePressCard(item.name, item._id)}
          />
        )}
      />
    </View>
  );
};

const $container: ViewStyle = {
  flex: 1,
};
