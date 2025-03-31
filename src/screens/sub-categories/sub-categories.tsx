import {AppParamsList} from '@/navigators';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {FlatList, View} from 'react-native';
import {CategoryItem} from './components';
import {sizing} from '@/theme';
import {useGetCategoryListQuery} from '@/features';
import {Category} from '@/types';
import {Text} from '@/components';

export const SubCategoriesScreen = ({
  route,
  navigation,
}: NativeStackScreenProps<AppParamsList, 'SubCategories'>) => {
  const params = route.params;
  const {data: {data = [] as Category[]} = {}, isLoading} =
    useGetCategoryListQuery({department: params?.id});

  const handlePress = (wordName: string, id: string) => () => {
    navigation.navigate('WordList', {title: wordName, id});
  };

  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{flex: 1, textAlign: 'center'}}>Yuklanmoqda...</Text>
      </View>
    );
  }
  return (
    <View style={{flex: 1}}>
      <FlatList
        contentContainerStyle={{padding: sizing.md}}
        keyExtractor={item => item._id}
        data={data}
        renderItem={({item}) => (
          <CategoryItem
            name={item.name}
            onPress={handlePress(item.name, item._id)}
          />
        )}
      />
    </View>
  );
};
