import { View, ViewStyle, FlatList } from 'react-native';
import { WordItem } from './components';
import { sizing } from '@/theme';
import { Text } from '@/components';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { TabParamsList } from 'src/navigators/tab-navigator';
import { AppParamsList } from '@/navigators';
import { useGetWordListQuery } from '@/features';
import { Word } from '@/types';

export const WordListScreen = ({
  route,
  navigation,
}: BottomTabScreenProps<TabParamsList & AppParamsList>) => {
  const params = route.params;
  const { data: { data = [] as Word[] } = {}, isLoading } = useGetWordListQuery({ category: params?.id })

  const handlePress = (id: string, title: string) => () => {
    navigation.navigate('WordDetail', { id, title });
  };
  return (
    <View style={$container}>
      <FlatList
        ListEmptyComponent={
          <Text style={{ textAlign: 'center' }}>{isLoading ? "Loading..." : "No Items"}</Text>
        }
        data={data}
        keyExtractor={item => item._id}
        renderItem={({ item }) => (
          <WordItem
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
