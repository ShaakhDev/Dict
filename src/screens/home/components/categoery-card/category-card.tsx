import { Text } from '@/components';
import {
  Dimensions,
  Image,
  ImageStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import { Department, MainCategory } from '@/types';
import { getRandomColor } from '@/utils';
import { colors, sizing } from '@/theme';
import Svg, { Defs, LinearGradient, Rect, Stop } from 'react-native-svg';

const { width } = Dimensions.get('window');

export type CategoryCardProps = {
  category: Department;
  onPress: () => void;
};
export const CategoryCard = ({ category, onPress }: CategoryCardProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[$card, { backgroundColor: getRandomColor() }]}
      activeOpacity={0.8}>
      <View style={$imageWrapper}>
        <Image style={$image} resizeMode="cover" source={{ uri: category.image }} />
      </View>
      <Overlay />
      <Text weight="semiBold" style={{ color: colors.white }}>
        {category.name}
      </Text>
    </TouchableOpacity>
  );
};

const Overlay = () => {
  return (
    <View style={$overlay}>
      <Svg width="100%" height="100%">
        <Defs>
          <LinearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
            <Stop offset="0" stopColor="rgba(0,0,0,0.2)" stopOpacity="0" />
            <Stop offset="1" stopColor="rgba(0,0,0,0.8)" stopOpacity="0.5" />
          </LinearGradient>
        </Defs>
        <Rect x="0" y="0" width="100%" height="100%" fill="url(#grad)" />
      </Svg>
    </View>
  );
};
const $card: ViewStyle = {
  borderRadius: sizing.xs,
  marginHorizontal: 'auto',
  marginVertical: sizing.xs,
  padding: sizing.xs,
  justifyContent: 'flex-end',
  alignItems: 'center',
  minHeight: 160,
  height: 150,
  width: width / 2 - sizing.xs * 2,
  position: 'relative',
  overflow: 'hidden',
};
const $imageWrapper: ViewStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 0,
  backgroundColor: 'transparent',
};
const $image: ImageStyle = {
  width: '100%',
  height: '100%',
};

const $overlay: ViewStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
};
