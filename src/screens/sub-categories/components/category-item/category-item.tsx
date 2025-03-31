import { Text } from '@/components';
import { useAppSelector } from '@/store';
import { colors, sizing } from '@/theme';
import { TextStyle, TouchableOpacity, View, ViewStyle } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

type CategoryItemProps = {
  onPress: () => void;
  name: string;
};

export const CategoryItem = ({ name, onPress }: CategoryItemProps) => {
  const { theme } = useAppSelector((state) => state.themeState);
  return (
    <TouchableOpacity style={[$item, { backgroundColor: colors[theme].primary }]} onPress={onPress} activeOpacity={0.7}>
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

const $name: TextStyle = {
  color: colors.white,
  textAlign: 'center',
  flex: 1,
};
