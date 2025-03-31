import { Text } from '@/components';
import { useAppSelector } from '@/store';
import { colors, sizing } from '@/theme';
import { Image, ImageStyle, TextStyle } from 'react-native';
import { TouchableOpacity, View, ViewStyle } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

type WordItemProps = {
  onPress: () => void;
  name: string;
  image: string;
};

export const WordItem = ({ image, name, onPress }: WordItemProps) => {
  const { theme } = useAppSelector((state) => state.themeState);
  return (
    <TouchableOpacity style={[$item, { backgroundColor: colors[theme].primary }]} onPress={onPress} activeOpacity={0.7}>
      <View style={{ width: 50, height: 50 }}>
        <Image source={{ uri: image }} style={$image} />
      </View>
      <Text weight="semiBold" style={$name}>
        {name}
      </Text>
      <Icon name="chevron-forward" size={20} color={colors.white} />
    </TouchableOpacity>
  );
};

const $item: ViewStyle = {
  padding: sizing.xxs + 2,
  // backgroundColor: colors.primary,
  gap: sizing.xs,
  marginBottom: sizing.xs,
  borderRadius: sizing.xs,
  flexDirection: 'row',
  alignItems: 'center',
  paddingRight: sizing.md,
};
const $image: ImageStyle = {
  width: '100%',
  height: '100%',
  borderRadius: sizing.xxs,
  marginRight: sizing.md,
};
const $name: TextStyle = {
  color: colors.white,
  textAlign: 'center',
  flex: 1,
};
