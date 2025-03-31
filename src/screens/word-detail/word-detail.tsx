import {Text} from '@/components';
import {useGetWordQuery} from '@/features';
import {AppParamsList} from '@/navigators';
import {
  addFavorite,
  removeFavorite,
  useAppDispatch,
  useAppSelector,
} from '@/store';
import {colors, sizing} from '@/theme';
import {Word} from '@/types';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {
  Image,
  ImageStyle,
  ScrollView,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

export const WordDetailScreen = ({
  route,
}: NativeStackScreenProps<AppParamsList, 'WordDetail'>) => {
  const dispatch = useAppDispatch();
  const params = route.params;
  const {data: {data: word = {} as Word} = {}} = useGetWordQuery(params?.id!, {
    refetchOnMountOrArgChange: true,
  });

  const {favorites} = useAppSelector(state => state.favorite);
  const isliked = favorites.find((item: Word) => item._id === word._id);
  const handleSave = () => {
    if (isliked) {
      dispatch(removeFavorite(word?._id));
    } else {
      dispatch(addFavorite(word));
    }
  };
  if (!word) return null;

  return (
    <ScrollView contentContainerStyle={$container}>
      <View style={{height: 300}}>
        <Image resizeMode="contain" source={{uri: word.image}} style={$image} />
        <TouchableOpacity style={$heart} onPress={handleSave}>
          <Icon
            name={isliked ? 'heart' : 'heart-outline'}
            size={32}
            color={isliked ? colors.heart : colors.white}
          />
        </TouchableOpacity>
      </View>
      <Text weight="semiBold" size="xl" style={{marginTop: sizing.md}}>
        {word.name}
      </Text>
      <Text>{word.desc}</Text>
    </ScrollView>
  );
};

const $container: ViewStyle = {
  paddingHorizontal: sizing.md,
  paddingTop: sizing.md,
  paddingBottom: sizing.xxl,
};

const $image: ImageStyle = {
  width: '100%',
  height: 300,
};
const $heart: ViewStyle = {
  position: 'absolute',
  top: sizing.xs,
  right: sizing.xs,
};
